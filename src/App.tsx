import { useEffect, useMemo } from 'react';
import {
  InsightsRuntimePingActiveRootfix,
  PipelineBoardRuntimePingActiveRootfix,
  RecordEditorRuntimePingActiveRootfix,
  RecordOperationsRuntimePingActiveRootfix,
} from './screens';
import {
  RuntimeStoreProvider,
  useRuntimeActions,
  useRuntimeAppApi,
  useRuntimeState,
} from './features/runtime-ping-active-rootfix/runtime-ping-active-rootfix.store';
import type {
  InsightsRuntimePingActiveRootfixActionId,
  PipelineBoardRuntimePingActiveRootfixActionId,
  RecordEditorRuntimePingActiveRootfixActionId,
  RecordOperationsRuntimePingActiveRootfixActionId,
} from './screens';
import type { RuntimeSurface } from './features/runtime-ping-active-rootfix/runtime-ping-active-rootfix.types';
import './test/bridge';

function AppShell() {
  const state = useRuntimeState();
  const actions = useRuntimeActions();
  const appApi = useRuntimeAppApi();

  useEffect(() => {
    window.app = appApi;
  }, [appApi]);

  const navigate = (surface: RuntimeSurface) => () => actions.navigate(surface);

  const recordOperationsActions: Partial<
    Record<RecordOperationsRuntimePingActiveRootfixActionId, () => void>
  > = useMemo(
    () => ({
      'record-operations-1': navigate('SURF_RECORD_OPERATIONS'),
      'pipeline-board-2': navigate('SURF_PIPELINE_BOARD'),
      'insights-3': navigate('SURF_INSIGHTS'),
      'system-logs-4': () => actions.setActivePanel('none'),
      'support-5': () => actions.setActivePanel('none'),
      'new-operation-1': () => actions.createRecord(),
      'menu-2': () => actions.setActivePanel(state.activePanel === 'filters' ? 'none' : 'filters'),
      'notifications-3': () => {},
      'settings-4': () => {},
      'help-5': () => {},
      'all-6': () => actions.setFilterStatus('all'),
      'failed-7': () => actions.setFilterStatus('failed'),
      'running-8': () => actions.setFilterStatus('running'),
      'retry-load-9': () => actions.retryLoad(),
      'create-record-10': () => actions.createRecord(),
      'more-vert-11': () => {},
      'more-vert-12': () => {},
      'more-vert-13': () => {},
      'more-vert-14': () => {},
      'more-vert-15': () => {},
      'chevron-left-16': () => {},
      'chevron-right-17': () => {},
      'close-18': () => actions.selectRecord(null),
      'view-logs-19': () => {},
      'terminate-20': () => {
        if (state.selectedRecordId) actions.updateRecordStatus(state.selectedRecordId, 'failed');
      },
    }),
    [actions, state.activePanel, state.selectedRecordId],
  );

  const pipelineBoardActions: Partial<
    Record<PipelineBoardRuntimePingActiveRootfixActionId, () => void>
  > = useMemo(
    () => ({
      'new-operation-1': () => actions.createRecord(),
      'notifications-2': () => {},
      'settings-3': () => {},
      'help-4': () => {},
      'promote-to-verification-5': () => {
        if (state.selectedRecordId) actions.updateRecordStatus(state.selectedRecordId, 'verification');
      },
      'reject-6': () => {
        if (state.selectedRecordId) actions.updateRecordStatus(state.selectedRecordId, 'failed');
      },
      'deploy-7': () => {
        if (state.selectedRecordId) actions.updateRecordStatus(state.selectedRecordId, 'deployed');
      },
      'record-operations-1': navigate('SURF_RECORD_OPERATIONS'),
      'pipeline-board-2': navigate('SURF_PIPELINE_BOARD'),
      'insights-3': navigate('SURF_INSIGHTS'),
      'system-logs-4': () => {},
      'support-5': () => {},
    }),
    [actions, state.selectedRecordId],
  );

  const recordEditorActions: Partial<
    Record<RecordEditorRuntimePingActiveRootfixActionId, () => void>
  > = useMemo(
    () => ({
      'arrow-back-1': () => actions.cancelEdit(),
      'cancel-edit-2': () => actions.cancelEdit(),
      'save-record-3': () => {
        const record = state.draftRecord ?? state.records.find((r) => r.id === state.selectedRecordId);
        if (record) actions.saveRecord(record);
      },
    }),
    [actions, state.draftRecord, state.records, state.selectedRecordId],
  );

  const insightsActions: Partial<Record<InsightsRuntimePingActiveRootfixActionId, () => void>> = useMemo(
    () => ({
      'record-operations-1': navigate('SURF_RECORD_OPERATIONS'),
      'pipeline-board-2': navigate('SURF_PIPELINE_BOARD'),
      'insights-3': navigate('SURF_INSIGHTS'),
      'system-logs-4': () => {},
      'support-5': () => {},
      'new-operation-6': () => actions.createRecord(),
      'notifications-7': () => {},
      'settings-8': () => {},
      'help-9': () => {},
      'filter-10': () => actions.setActivePanel(state.activePanel === 'filters' ? 'none' : 'filters'),
      'export-summary-11': () => {},
      'view-all-logs-12': () => {},
    }),
    [actions, state.activePanel],
  );

  let activeScreen: React.ReactNode;
  switch (state.activeSurface) {
    case 'SURF_RECORD_OPERATIONS':
      activeScreen = <RecordOperationsRuntimePingActiveRootfix actions={recordOperationsActions} />;
      break;
    case 'SURF_PIPELINE_BOARD':
      activeScreen = <PipelineBoardRuntimePingActiveRootfix actions={pipelineBoardActions} />;
      break;
    case 'SURF_RECORD_EDITOR':
      activeScreen = <RecordEditorRuntimePingActiveRootfix actions={recordEditorActions} />;
      break;
    case 'SURF_INSIGHTS':
      activeScreen = <InsightsRuntimePingActiveRootfix actions={insightsActions} />;
      break;
  }

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-background"
    >
      {activeScreen}
    </div>
  );
}

export default function App() {
  return (
    <RuntimeStoreProvider>
      <AppShell />
    </RuntimeStoreProvider>
  );
}
