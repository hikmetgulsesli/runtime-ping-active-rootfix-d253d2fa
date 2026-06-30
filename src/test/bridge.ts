import type { RuntimeAppApi } from '../features/runtime-ping-active-rootfix/runtime-ping-active-rootfix.types';

declare global {
  interface Window {
    app?: RuntimeAppApi;
  }
}

export type { RuntimeAppApi };
