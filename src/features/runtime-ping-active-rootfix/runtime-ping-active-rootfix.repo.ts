import type { RuntimePreferences, RuntimeRecord } from './runtime-ping-active-rootfix.types';

const STORAGE_KEY = 'runtime-ping-active-rootfix:v1';

interface PersistedRuntimeState {
  records: RuntimeRecord[];
  preferences: RuntimePreferences;
}

function isRecord(value: unknown): value is RuntimeRecord {
  if (typeof value !== 'object' || value === null) return false;
  const r = value as Partial<RuntimeRecord>;
  return (
    typeof r.id === 'string' &&
    r.id.length > 0 &&
    typeof r.name === 'string' &&
    typeof r.description === 'string' &&
    typeof r.status === 'string' &&
    ['draft', 'verification', 'deployed', 'failed', 'running'].includes(r.status) &&
    typeof r.owner === 'string' &&
    typeof r.createdAt === 'string' &&
    typeof r.updatedAt === 'string'
  );
}

function isValidState(parsed: unknown): parsed is PersistedRuntimeState {
  if (typeof parsed !== 'object' || parsed === null) return false;
  const candidate = parsed as Partial<PersistedRuntimeState>;
  if (!Array.isArray(candidate.records)) return false;
  if (typeof candidate.preferences !== 'object' || candidate.preferences === null) return false;
  return candidate.records.every(isRecord);
}

export function loadRuntimeState(): PersistedRuntimeState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isValidState(parsed)) {
      throw new Error('Persisted runtime state is corrupted or has an incompatible schema.');
    }
    return parsed;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load persisted runtime state.';
    throw new Error(message);
  }
}

export function saveRuntimeState(records: RuntimeRecord[], preferences: RuntimePreferences): void {
  try {
    const payload: PersistedRuntimeState = { records, preferences };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to save runtime state.';
    throw new Error(message);
  }
}

export function clearRuntimeState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to clear runtime state.';
    throw new Error(message);
  }
}
