import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { RUNTIME_FIXTURE_RECORDS } from '../../__fixtures__/runtime-ping-active-rootfix.fixture';
import {
  clearRuntimeState,
  loadRuntimeState,
  saveRuntimeState,
} from './runtime-ping-active-rootfix.repo';
import type {
  ActivePanel,
  RecordStatus,
  RuntimeAction,
  RuntimeAppApi,
  RuntimeCounts,
  RuntimeRecord,
  RuntimeState,
  RuntimeSurface,
} from './runtime-ping-active-rootfix.types';

const DEFAULT_SURFACE: RuntimeSurface = 'SURF_RECORD_OPERATIONS';

function createDraftRecord(): RuntimeRecord {
  const now = new Date().toISOString();
  return {
    id: `rec-${Date.now()}`,
    name: '',
    description: '',
    status: 'draft',
    owner: 'current-user',
    createdAt: now,
    updatedAt: now,
  };
}

function getInitialState(): RuntimeState {
  return {
    activeSurface: DEFAULT_SURFACE,
    selectedRecordId: null,
    draftRecord: null,
    records: RUNTIME_FIXTURE_RECORDS,
    searchQuery: '',
    filterStatus: 'all',
    storageStatus: 'loading',
    lastError: null,
    activePanel: 'none',
  };
}

function runtimeReducer(state: RuntimeState, action: RuntimeAction): RuntimeState {
  switch (action.type) {
    case 'BOOTSTRAP': {
      return {
        ...state,
        ...action.payload,
        storageStatus: action.payload.lastError ? 'error' : 'ready',
      };
    }
    case 'NAVIGATE':
      return {
        ...state,
        activeSurface: action.surface,
        activePanel: 'none',
      };
    case 'SELECT_RECORD':
      return {
        ...state,
        selectedRecordId: action.id,
        activePanel: action.id ? 'preview' : 'none',
      };
    case 'CREATE_RECORD':
      return {
        ...state,
        activeSurface: 'SURF_RECORD_EDITOR',
        draftRecord: action.draft ?? createDraftRecord(),
        selectedRecordId: null,
        activePanel: 'none',
      };
    case 'SAVE_RECORD': {
      const saved = { ...action.record, updatedAt: new Date().toISOString() };
      const existingIndex = state.records.findIndex((r) => r.id === saved.id);
      const nextRecords =
        existingIndex >= 0
          ? [
              ...state.records.slice(0, existingIndex),
              saved,
              ...state.records.slice(existingIndex + 1),
            ]
          : [saved, ...state.records];
      return {
        ...state,
        records: nextRecords,
        selectedRecordId: saved.id,
        draftRecord: null,
        activeSurface: 'SURF_RECORD_OPERATIONS',
        activePanel: 'preview',
        lastError: null,
      };
    }
    case 'CANCEL_EDIT':
      return {
        ...state,
        activeSurface: 'SURF_RECORD_OPERATIONS',
        draftRecord: null,
        activePanel: 'none',
      };
    case 'UPDATE_RECORD_STATUS': {
      const nextRecords = state.records.map((r) =>
        r.id === action.id ? { ...r, status: action.status, updatedAt: new Date().toISOString() } : r,
      );
      return {
        ...state,
        records: nextRecords,
        lastError: null,
      };
    }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.query };
    case 'SET_FILTER_STATUS':
      return { ...state, filterStatus: action.filter };
    case 'SET_ACTIVE_PANEL':
      return { ...state, activePanel: action.panel };
    case 'RETRY_LOAD':
      return { ...state, storageStatus: 'loading', lastError: null };
    case 'STORAGE_ERROR':
      return { ...state, storageStatus: 'error', lastError: action.error };
    case 'CLEAR_ERROR':
      return { ...state, lastError: null, storageStatus: 'ready' };
    default:
      return state;
  }
}

function computeCounts(records: RuntimeRecord[]): RuntimeCounts {
  const initial: RuntimeCounts = {
    total: 0,
    draft: 0,
    verification: 0,
    deployed: 0,
    failed: 0,
    running: 0,
  };
  return records.reduce((acc, record) => {
    acc.total += 1;
    if (record.status === 'draft') acc.draft += 1;
    if (record.status === 'verification') acc.verification += 1;
    if (record.status === 'deployed') acc.deployed += 1;
    if (record.status === 'failed') acc.failed += 1;
    if (record.status === 'running') acc.running += 1;
    return acc;
  }, initial);
}

interface RuntimeStoreContextValue {
  state: RuntimeState;
  dispatch: React.Dispatch<RuntimeAction>;
  counts: RuntimeCounts;
  selectedRecord: RuntimeRecord | null;
  appApi: RuntimeAppApi;
}

const RuntimeStoreContext = createContext<RuntimeStoreContextValue | null>(null);

export function RuntimeStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(runtimeReducer, getInitialState());

  useEffect(() => {
    if (state.storageStatus !== 'loading') return;
    let mounted = true;
    try {
      const persisted = loadRuntimeState();
      if (mounted) {
        dispatch({
          type: 'BOOTSTRAP',
          payload: {
            records: persisted?.records ?? RUNTIME_FIXTURE_RECORDS,
            activeSurface: persisted?.preferences?.activeSurface ?? DEFAULT_SURFACE,
            filterStatus: persisted?.preferences?.filterStatus ?? 'all',
          },
        });
      }
    } catch (error) {
      if (mounted) {
        dispatch({
          type: 'BOOTSTRAP',
          payload: {
            records: RUNTIME_FIXTURE_RECORDS,
            lastError:
              error instanceof Error
                ? error.message
                : 'Corrupted persisted data could not be loaded.',
          },
        });
      }
    }
    return () => {
      mounted = false;
    };
  }, [state.storageStatus]);

  useEffect(() => {
    if (state.storageStatus === 'error' || state.storageStatus === 'loading') return;
    try {
      saveRuntimeState(state.records, {
        activeSurface: state.activeSurface,
        filterStatus: state.filterStatus,
      });
    } catch (error) {
      dispatch({
        type: 'STORAGE_ERROR',
        error:
          error instanceof Error
            ? error.message
            : 'Failed to persist runtime state.',
      });
    }
  }, [state.records, state.activeSurface, state.filterStatus, state.storageStatus]);

  const counts = useMemo(() => computeCounts(state.records), [state.records]);
  const selectedRecord = useMemo(
    () => state.records.find((r) => r.id === state.selectedRecordId) ?? state.draftRecord ?? null,
    [state.records, state.selectedRecordId, state.draftRecord],
  );

  const appApi = useMemo(
    () => ({
      activeSurface: state.activeSurface,
      selectedRecord,
      counts,
      storageStatus: state.storageStatus,
      lastError: state.lastError,
      activePanel: state.activePanel,
    }),
    [state.activeSurface, selectedRecord, counts, state.storageStatus, state.lastError, state.activePanel],
  );

  const value = useMemo(
    () => ({ state, dispatch, counts, selectedRecord, appApi }),
    [state, dispatch, counts, selectedRecord, appApi],
  );

  return <RuntimeStoreContext.Provider value={value}>{children}</RuntimeStoreContext.Provider>;
}

export function useRuntimeStore() {
  const ctx = useContext(RuntimeStoreContext);
  if (!ctx) throw new Error('useRuntimeStore must be used within RuntimeStoreProvider');
  return ctx;
}

export function useRuntimeState(): RuntimeState {
  return useRuntimeStore().state;
}

export function useRuntimeCounts(): RuntimeCounts {
  return useRuntimeStore().counts;
}

export function useRuntimeSelectedRecord(): RuntimeRecord | null {
  return useRuntimeStore().selectedRecord;
}

export function useRuntimeAppApi(): RuntimeAppApi {
  return useRuntimeStore().appApi;
}

export function useRuntimeActions() {
  const { dispatch } = useRuntimeStore();

  return useMemo(
    () => ({
      navigate: (surface: RuntimeSurface) => dispatch({ type: 'NAVIGATE', surface }),
      selectRecord: (id: string | null) => dispatch({ type: 'SELECT_RECORD', id }),
      createRecord: (draft?: RuntimeRecord) => dispatch({ type: 'CREATE_RECORD', draft }),
      saveRecord: (record: RuntimeRecord) => dispatch({ type: 'SAVE_RECORD', record }),
      cancelEdit: () => dispatch({ type: 'CANCEL_EDIT' }),
      updateRecordStatus: (id: string, status: RecordStatus) =>
        dispatch({ type: 'UPDATE_RECORD_STATUS', id, status }),
      setSearchQuery: (query: string) => dispatch({ type: 'SET_SEARCH_QUERY', query }),
      setFilterStatus: (filter: 'all' | RecordStatus) =>
        dispatch({ type: 'SET_FILTER_STATUS', filter }),
      setActivePanel: (panel: ActivePanel) => dispatch({ type: 'SET_ACTIVE_PANEL', panel }),
      retryLoad: () => dispatch({ type: 'RETRY_LOAD' }),
      clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
      resetStorage: () => {
        clearRuntimeState();
        dispatch({ type: 'BOOTSTRAP', payload: { records: RUNTIME_FIXTURE_RECORDS } });
      },
    }),
    [dispatch],
  );
}
