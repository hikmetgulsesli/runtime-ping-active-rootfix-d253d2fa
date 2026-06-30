export type RuntimeSurface =
  | 'SURF_RECORD_OPERATIONS'
  | 'SURF_RECORD_EDITOR'
  | 'SURF_PIPELINE_BOARD'
  | 'SURF_INSIGHTS';

export type RecordStatus = 'draft' | 'verification' | 'deployed' | 'failed' | 'running';

export interface RuntimeRecord {
  id: string;
  name: string;
  description: string;
  status: RecordStatus;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface RuntimeCounts {
  total: number;
  draft: number;
  verification: number;
  deployed: number;
  failed: number;
  running: number;
}

export type StorageStatus = 'ready' | 'loading' | 'error';

export type ActivePanel = 'none' | 'preview' | 'filters';

export interface RuntimePreferences {
  activeSurface?: RuntimeSurface;
  filterStatus?: 'all' | RecordStatus;
}

export interface RuntimeState {
  activeSurface: RuntimeSurface;
  selectedRecordId: string | null;
  draftRecord: RuntimeRecord | null;
  records: RuntimeRecord[];
  searchQuery: string;
  filterStatus: 'all' | RecordStatus;
  storageStatus: StorageStatus;
  lastError: string | null;
  activePanel: ActivePanel;
}

export interface RuntimeAppApi {
  activeSurface: RuntimeSurface;
  selectedRecord: RuntimeRecord | null;
  counts: RuntimeCounts;
  storageStatus: StorageStatus;
  lastError: string | null;
  activePanel: ActivePanel;
}

export type RuntimeAction =
  | { type: 'BOOTSTRAP'; payload: Partial<RuntimeState> }
  | { type: 'NAVIGATE'; surface: RuntimeSurface }
  | { type: 'SELECT_RECORD'; id: string | null }
  | { type: 'CREATE_RECORD'; draft?: RuntimeRecord }
  | { type: 'SAVE_RECORD'; record: RuntimeRecord }
  | { type: 'CANCEL_EDIT' }
  | { type: 'UPDATE_RECORD_STATUS'; id: string; status: RecordStatus }
  | { type: 'SET_SEARCH_QUERY'; query: string }
  | { type: 'SET_FILTER_STATUS'; filter: 'all' | RecordStatus }
  | { type: 'SET_ACTIVE_PANEL'; panel: ActivePanel }
  | { type: 'RETRY_LOAD' }
  | { type: 'STORAGE_ERROR'; error: string }
  | { type: 'CLEAR_ERROR' };
