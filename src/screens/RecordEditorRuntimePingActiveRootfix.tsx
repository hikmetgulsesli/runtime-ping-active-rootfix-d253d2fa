// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Runtime Ping Active Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, BadgeHelp, Braces, ChevronDown, CircleAlert, Info, Save } from "lucide-react";


export type RecordEditorRuntimePingActiveRootfixActionId = "arrow-back-1" | "cancel-edit-2" | "save-record-3";

export interface RecordEditorRuntimePingActiveRootfixProps {
  actions?: Partial<Record<RecordEditorRuntimePingActiveRootfixActionId, () => void>>;

}

export function RecordEditorRuntimePingActiveRootfix({ actions }: RecordEditorRuntimePingActiveRootfixProps) {
  return (
    <>
      {/* Canvas (Main Content) - Full width since Navigation Shell is suppressed for task-focused view */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header for Editor */}
      <header className="flex justify-between items-center h-16 px-lg w-full bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant shrink-0">
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer active:opacity-80 flex items-center justify-center rounded p-xs" type="button" aria-label="Arrow Back" data-action-id="arrow-back-1" onClick={actions?.["arrow-back-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">EDITING</span>
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Record Configuration #892-A</h1>
      </div>
      </div>
      <div className="flex items-center gap-md">
      {/* Unsaved Changes Banner */}
      <div className="flex items-center gap-xs bg-tertiary-container/10 border border-tertiary-container/30 px-sm py-[2px] rounded">
      <Info className="text-[14px] text-tertiary-container" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-tertiary-container">You have unsaved changes</span>
      </div>
      </div>
      </header>
      {/* Editor Content */}
      <div className="flex-1 overflow-y-auto p-md md:p-lg lg:p-xl flex justify-center">
      <div className="w-full max-w-3xl bg-surface-container-low border border-outline-variant rounded-lg flex flex-col">
      <form className="flex-1 p-md md:p-lg flex flex-col gap-xl">
      {/* Basic Info Section */}
      <section className="flex flex-col gap-md">
      <div className="flex items-center gap-xs border-b border-outline-variant pb-xs mb-sm">
      <Braces className="text-primary text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Metadata</h2>
      </div>
      {/* Record Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs" htmlFor="record-name">
                                      Record Name <span className="text-error">*</span>
      </label>
      <input className="bg-[#020617] border border-error rounded px-sm py-xs font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" id="record-name" placeholder="e.g. auth-pipeline-v2" type="text" defaultValue="" />
      <span className="font-body-sm text-body-sm text-error flex items-center gap-[2px]">
      <CircleAlert className="text-[12px]" aria-hidden={true} focusable="false" /> Record Name is required
                                  </span>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="record-desc">Description <span className="text-on-surface-variant/50">(Optional)</span></label>
      <textarea className="bg-[#020617] border border-outline-variant rounded px-sm py-xs font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full resize-y" id="record-desc" placeholder="Describe the purpose of this record..." rows={2}></textarea>
      </div>
      {/* Priority Dropdown */}
      <div className="flex flex-col gap-xs w-full sm:w-1/2">
      <label className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs" htmlFor="record-priority">
                                      Priority <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="appearance-none bg-[#020617] border border-outline-variant rounded px-sm py-xs pr-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" id="record-priority">
      <option value="critical">Critical</option>
      <option selected={true} value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-on-surface-variant">
      <ChevronDown aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* JSON Editor Section */}
      <section className="flex flex-col gap-md flex-1">
      <div className="flex items-center gap-xs border-b border-outline-variant pb-xs mb-sm">
      <BadgeHelp className="text-primary text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Configuration JSON</h2>
      </div>
      <div className="flex flex-col gap-xs flex-1 min-h-[300px]">
      <label className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between" htmlFor="record-json">
      <span>Payload <span className="text-error">*</span></span>
      <span className="font-code-sm text-code-sm text-on-surface-variant/70">Format: JSON</span>
      </label>
      <div className="relative flex-1 flex flex-col bg-[#020617] border border-outline-variant rounded group focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
      <textarea className="flex-1 bg-transparent border-none p-sm font-code-sm text-code-sm text-secondary-fixed focus:ring-0 resize-none w-full" id="record-json" spellcheck="false">&#123;
        "pipeline_id": "auth_flow",
        "version": "1.4.2",
        "enabled": true,
        "thresholds": &#123;
          "latency_ms": 150,
          "error_rate": 0.01
        &#125;,
        "endpoints": [
          "/api/v1/login",
          "/api/v1/verify"
        ]
      &#125;</textarea>
      {/* Line numbers simulation (visual only) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#0F172A] border-r border-outline-variant/30 flex flex-col items-end py-sm pr-xs font-code-sm text-code-sm text-on-surface-variant/40 pointer-events-none">
      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
      </div>
      <style>{`
                                          #record-json { padding-left: 2.5rem; }
                                      `}</style>
      </div>
      </div>
      </section>
      </form>
      {/* Bottom Action Bar */}
      <div className="bg-surface-variant/30 border-t border-outline-variant p-md flex items-center justify-end gap-sm rounded-b-lg">
      <button className="px-md py-[6px] border border-outline-variant text-on-surface font-body-md rounded hover:bg-surface-container-high transition-colors active:opacity-80" type="button" data-action-id="cancel-edit-2" onClick={actions?.["cancel-edit-2"]}>
                              Cancel Edit
                          </button>
      <button className="px-md py-[6px] bg-primary text-[#000000] font-headline-sm rounded hover:bg-primary-fixed-dim transition-colors active:opacity-80 flex items-center gap-xs" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
