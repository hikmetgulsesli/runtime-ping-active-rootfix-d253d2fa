import type { RuntimeRecord } from '../features/runtime-ping-active-rootfix/runtime-ping-active-rootfix.types';

export const RUNTIME_FIXTURE_RECORDS: RuntimeRecord[] = [
  {
    id: 'rec-001',
    name: 'auth-pipeline-v2',
    description: 'Authentication pipeline rootfix verification record.',
    status: 'running',
    owner: 'sre-alpha',
    createdAt: '2026-06-28T08:00:00.000Z',
    updatedAt: '2026-06-29T14:32:00.000Z',
  },
  {
    id: 'rec-002',
    name: 'payment-gateway-canary',
    description: 'Canary release health check for payment gateway.',
    status: 'verification',
    owner: 'sre-beta',
    createdAt: '2026-06-27T10:15:00.000Z',
    updatedAt: '2026-06-29T12:10:00.000Z',
  },
  {
    id: 'rec-003',
    name: 'cdn-edge-cache-purge',
    description: 'Edge cache purge automation record.',
    status: 'deployed',
    owner: 'sre-alpha',
    createdAt: '2026-06-26T16:45:00.000Z',
    updatedAt: '2026-06-28T09:20:00.000Z',
  },
  {
    id: 'rec-004',
    name: 'db-replica-lag-rootfix',
    description: 'Database replica lag mitigation run.',
    status: 'failed',
    owner: 'sre-gamma',
    createdAt: '2026-06-25T11:30:00.000Z',
    updatedAt: '2026-06-29T15:00:00.000Z',
  },
  {
    id: 'rec-005',
    name: 'queue-consumer-scaling',
    description: 'Queue consumer auto-scaling validation.',
    status: 'draft',
    owner: 'sre-beta',
    createdAt: '2026-06-29T09:00:00.000Z',
    updatedAt: '2026-06-29T09:00:00.000Z',
  },
];
