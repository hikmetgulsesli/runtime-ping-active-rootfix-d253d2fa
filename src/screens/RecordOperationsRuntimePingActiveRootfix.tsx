// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Runtime Ping Active Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, BadgeHelp, BarChart3, Bell, ChevronLeft, ChevronRight, CircleAlert, CircleHelp, Database, EllipsisVertical, GitBranch, Headphones, HeartPulse, ListFilter, Menu, Plus, RefreshCw, Search, Server, Settings, Terminal, X } from "lucide-react";


export type RecordOperationsRuntimePingActiveRootfixActionId = "new-operation-1" | "menu-2" | "notifications-3" | "settings-4" | "help-5" | "all-6" | "failed-7" | "running-8" | "retry-load-9" | "create-record-10" | "more-vert-11" | "more-vert-12" | "more-vert-13" | "more-vert-14" | "more-vert-15" | "chevron-left-16" | "chevron-right-17" | "close-18" | "view-logs-19" | "terminate-20" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "system-logs-4" | "support-5";

export interface RecordOperationsRuntimePingActiveRootfixProps {
  actions?: Partial<Record<RecordOperationsRuntimePingActiveRootfixActionId, () => void>>;

}

export function RecordOperationsRuntimePingActiveRootfix({ actions }: RecordOperationsRuntimePingActiveRootfixProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 sticky bg-surface-container-low border-r border-outline-variant py-md gap-xs shrink-0 z-20">
      {/* Header */}
      <div className="px-md pb-md flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center shrink-0">
      <Server  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-lg" aria-hidden={true} focusable="false" />
      </div>
      <div className="min-w-0">
      <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">System Health</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Healthy - Last Sync: 2m ago</p>
      </div>
      </div>
      {/* CTA Action */}
      <div className="px-md pb-md">
      <button className="w-full bg-surface text-on-surface border border-outline hover:bg-surface-container-high transition-colors py-sm px-md rounded flex items-center justify-center gap-xs font-label-caps text-label-caps" type="button" data-action-id="new-operation-1" onClick={actions?.["new-operation-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Operation
                  </button>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-xs px-sm overflow-y-auto">
      <a className="flex items-center gap-sm px-md py-sm rounded bg-secondary-container text-on-secondary-container font-semibold transition-colors duration-150 ease-in-out group" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <Terminal aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Record Operations</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 ease-in-out group" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <GitBranch className="group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-on-surface transition-colors">Pipeline Board</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 ease-in-out group" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-on-surface transition-colors">Insights</span>
      </a>
      </div>
      {/* Footer Links */}
      <div className="flex flex-col gap-xs px-sm pt-md border-t border-outline-variant mt-auto">
      <a className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 ease-in-out group" href="#" data-action-id="system-logs-4" onClick={(event) => { event.preventDefault(); actions?.["system-logs-4"]?.(); }}>
      <BadgeHelp className="group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-on-surface transition-colors">System Logs</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 ease-in-out group" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <Headphones className="group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-on-surface transition-colors">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-background">
      {/* Shared Component: TopAppBar */}
      <header className="flex justify-between items-center h-16 px-md w-full bg-surface top-0 sticky border-b border-outline-variant z-10 shrink-0">
      <div className="flex items-center gap-md">
      <button className="md:hidden text-on-surface-variant hover:text-on-surface" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Runtime Ping</div>
      </div>
      <div className="flex items-center gap-sm">
      {/* Search on left (per JSON, though visually it usually sits centrally, we'll place it before icons) */}
      <div className="hidden lg:flex relative mr-md">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-surface-container-low border border-outline-variant rounded py-sm pl-xl pr-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-64 text-on-surface placeholder-on-surface-variant transition-colors" placeholder="Global search..." type="text" />
      </div>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer active:opacity-80" type="button" aria-label="Help" data-action-id="help-5" onClick={actions?.["help-5"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden ml-sm cursor-pointer border-transparent hover:border-primary transition-colors">
      <img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqD1xCASrhuPMIq11uMSRfexosCXi0RGyi-cIk_thVx-XrwcXrr0Az-DlAPpTNmD0Jywwc8tkXKkLRE7e9EIuSF1KlfGVXh6uhUaKzAlsMyh4AxQ_8ucvAiGWtIMHE9yuGutP6lipbfijCMA2qLLCiqIOSR0GwungaS5vECSXdngoixcIDax4wNb_I2bun7DdRNaACMznKvHzVRtefIggAS7hToZAnAyZGsKvvYad4MgwgzELsgrHl1Me9zM9J9EfEiq57pwEcFU" />
      </div>
      </div>
      </header>
      {/* Dashboard Canvas */}
      <div className="flex-1 overflow-auto p-md lg:p-lg flex flex-col xl:flex-row gap-lg bg-background">
      {/* Primary Content Column */}
      <div className="flex-1 flex flex-col gap-lg min-w-0">
      {/* Summary Metrics (Bento Style slightly) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Metric 1 */}
      <div className="bg-surface border border-outline-variant rounded p-md flex flex-col justify-between hover:border-outline transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">Total Records</span>
      <Database className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-metrics text-display-metrics text-on-surface">14,289</span>
      <span className="font-code-sm text-code-sm text-primary flex items-center"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 2.4%</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface border border-outline-variant rounded p-md flex flex-col justify-between hover:border-outline transition-colors group relative overflow-hidden">
      <div className="absolute inset-0 bg-error/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start mb-sm relative z-10">
      <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">Active Fixes</span>
      <BadgeHelp className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm relative z-10">
      <span className="font-display-metrics text-display-metrics text-on-surface">24</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Requires attention</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface border border-outline-variant rounded p-md flex flex-col justify-between hover:border-outline transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">System Uptime</span>
      <HeartPulse className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-metrics text-display-metrics text-on-surface">99.98%</span>
      <span className="font-code-sm text-code-sm text-on-surface-variant">Last 30d</span>
      </div>
      </div>
      </div>
      {/* Operations Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface p-sm border border-outline-variant rounded">
      {/* Search & Filter */}
      <div className="flex flex-wrap items-center gap-sm w-full sm:w-auto">
      <div className="relative flex-1 sm:w-64">
      <ListFilter className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded py-[6px] pl-xl pr-md font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-on-surface placeholder-on-surface-variant transition-colors" placeholder="Filter by ID, Owner..." type="text" />
      </div>
      <div className="flex items-center gap-xs border border-outline-variant rounded p-[2px] bg-surface-container-low">
      <button className="px-sm py-[4px] rounded bg-secondary-container text-on-secondary-container font-label-caps text-label-caps transition-colors" type="button" data-action-id="all-6" onClick={actions?.["all-6"]}>All</button>
      <button className="px-sm py-[4px] rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-caps text-label-caps transition-colors" type="button" data-action-id="failed-7" onClick={actions?.["failed-7"]}>Failed</button>
      <button className="px-sm py-[4px] rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-caps text-label-caps transition-colors" type="button" data-action-id="running-8" onClick={actions?.["running-8"]}>Running</button>
      </div>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-sm w-full sm:w-auto justify-end">
      <button className="border border-outline text-on-surface px-md py-[6px] rounded hover:bg-surface-container-high font-label-caps text-label-caps transition-colors flex items-center gap-xs whitespace-nowrap" type="button" data-action-id="retry-load-9" onClick={actions?.["retry-load-9"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Retry Load
                              </button>
      <button className="bg-primary text-on-primary border border-transparent px-md py-[6px] rounded hover:bg-primary-fixed-dim font-label-caps text-label-caps transition-colors flex items-center gap-xs whitespace-nowrap shadow-sm" type="button" data-action-id="create-record-10" onClick={actions?.["create-record-10"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Create Record
                              </button>
      </div>
      </div>
      {/* Primary Data Table (Fluid Grid application) */}
      <div className="bg-surface border border-outline-variant rounded flex-1 flex flex-col min-h-[400px]">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="bg-surface-container border-b border-outline-variant">
      <tr>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10 w-12 text-center">
      <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10 cursor-pointer hover:text-on-surface group">
      <div className="flex items-center gap-xs">ID <ArrowDown className="text-[14px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" /></div>
      </th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10">Status</th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10">Operation Type</th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10">Last Modified</th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10">Owner</th>
      <th className="py-sm px-gutter font-label-caps text-label-caps text-on-surface-variant font-semibold sticky top-0 bg-surface-container z-10 text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md divide-y divide-outline-variant/50">
      {/* Row 1: Selected State Example */}
      <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group bg-surface-container-high border-l-2 border-l-primary">
      <td className="py-sm px-gutter text-center">
      <input defaultChecked={true} className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-primary">OPR-8829-A</td>
      <td className="py-sm px-gutter">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-error-container bg-error-container/10 text-error font-code-sm text-[11px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Failed
                                              </span>
      </td>
      <td className="py-sm px-gutter text-on-surface-variant">Batch Ingestion</td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface-variant">2023-10-27 14:32:01</td>
      <td className="py-sm px-gutter text-on-surface">system_svc</td>
      <td className="py-sm px-gutter text-right">
      <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="More Vert" data-action-id="more-vert-11" onClick={actions?.["more-vert-11"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group border-l-2 border-l-transparent">
      <td className="py-sm px-gutter text-center">
      <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface">OPR-8828-X</td>
      <td className="py-sm px-gutter">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-primary-container bg-primary-container/10 text-primary-container font-code-sm text-[11px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span> Running
                                              </span>
      </td>
      <td className="py-sm px-gutter text-on-surface-variant">Data Sync</td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface-variant">2023-10-27 14:30:15</td>
      <td className="py-sm px-gutter text-on-surface">j.doe</td>
      <td className="py-sm px-gutter text-right">
      <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="More Vert" data-action-id="more-vert-12" onClick={actions?.["more-vert-12"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group border-l-2 border-l-transparent">
      <td className="py-sm px-gutter text-center">
      <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface">OPR-8827-C</td>
      <td className="py-sm px-gutter">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-outline-variant bg-surface-container-high text-on-surface-variant font-code-sm text-[11px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Complete
                                              </span>
      </td>
      <td className="py-sm px-gutter text-on-surface-variant">Index Build</td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface-variant">2023-10-27 13:45:00</td>
      <td className="py-sm px-gutter text-on-surface">system_svc</td>
      <td className="py-sm px-gutter text-right">
      <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="More Vert" data-action-id="more-vert-13" onClick={actions?.["more-vert-13"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group border-l-2 border-l-transparent">
      <td className="py-sm px-gutter text-center">
      <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface">OPR-8826-B</td>
      <td className="py-sm px-gutter">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-outline-variant bg-surface-container-high text-on-surface-variant font-code-sm text-[11px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Complete
                                              </span>
      </td>
      <td className="py-sm px-gutter text-on-surface-variant">Metrics Aggregation</td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface-variant">2023-10-27 13:00:05</td>
      <td className="py-sm px-gutter text-on-surface">analytics_engine</td>
      <td className="py-sm px-gutter text-right">
      <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="More Vert" data-action-id="more-vert-14" onClick={actions?.["more-vert-14"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group border-l-2 border-l-transparent">
      <td className="py-sm px-gutter text-center">
      <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface">OPR-8825-A</td>
      <td className="py-sm px-gutter">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-error-container bg-error-container/10 text-error font-code-sm text-[11px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Failed
                                              </span>
      </td>
      <td className="py-sm px-gutter text-on-surface-variant">Batch Ingestion</td>
      <td className="py-sm px-gutter font-code-sm text-code-sm text-on-surface-variant">2023-10-27 12:15:22</td>
      <td className="py-sm px-gutter text-on-surface">system_svc</td>
      <td className="py-sm px-gutter text-right">
      <button className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" aria-label="More Vert" data-action-id="more-vert-15" onClick={actions?.["more-vert-15"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Table Footer / Pagination */}
      <div className="mt-auto border-t border-outline-variant p-sm flex justify-between items-center bg-surface-container-low text-on-surface-variant">
      <span className="font-body-sm text-body-sm">Showing 1-5 of 14,289</span>
      <div className="flex items-center gap-xs">
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled={true} type="button" aria-label="Chevron Left" data-action-id="chevron-left-16" onClick={actions?.["chevron-left-16"]}>
      <ChevronLeft className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container-high transition-colors" type="button" aria-label="Chevron Right" data-action-id="chevron-right-17" onClick={actions?.["chevron-right-17"]}>
      <ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Contextual Side Panel: Selected Item Preview */}
      {/* Tonal Level 2 container indicating it sits "above" the main canvas logically */}
      <aside className="w-full xl:w-80 shrink-0 bg-surface-container border border-outline-variant rounded flex flex-col h-[600px] xl:h-auto overflow-hidden shadow-lg shadow-black/20 xl:shadow-none">
      {/* Panel Header */}
      <div className="p-md border-b border-outline-variant flex justify-between items-start bg-surface-container-high">
      <div>
      <div className="flex items-center gap-xs mb-xs">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded border border-error-container bg-error-container/10 text-error font-code-sm text-[11px] uppercase tracking-wider">
                                      Failed
                                  </span>
      <span className="font-code-sm text-code-sm text-on-surface-variant">Batch Ingestion</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold font-code-sm tracking-tight">OPR-8829-A</h2>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors p-[2px] rounded hover:bg-surface-container-highest" type="button" aria-label="Close" data-action-id="close-18" onClick={actions?.["close-18"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Panel Body */}
      <div className="flex-1 overflow-y-auto p-md flex flex-col gap-lg">
      {/* Quick Actions */}
      <div className="flex gap-sm">
      <button className="flex-1 border border-outline-variant text-on-surface py-[6px] rounded hover:bg-surface-container-high font-label-caps text-label-caps transition-colors flex justify-center items-center gap-xs" type="button" data-action-id="view-logs-19" onClick={actions?.["view-logs-19"]}>
      <Terminal className="text-[14px]" aria-hidden={true} focusable="false" /> View Logs
                              </button>
      <button className="flex-1 bg-surface text-error border border-error/30 py-[6px] rounded hover:bg-error/10 font-label-caps text-label-caps transition-colors flex justify-center items-center gap-xs" type="button" data-action-id="terminate-20" onClick={actions?.["terminate-20"]}>
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Terminate
                              </button>
      </div>
      {/* Details Property List */}
      <div className="flex flex-col gap-sm">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs">Execution Details</h3>
      <dl className="grid grid-cols-2 gap-y-sm text-body-sm font-body-sm">
      <dt className="text-on-surface-variant">Started At</dt>
      <dd className="text-on-surface font-code-sm text-right">14:30:00 UTC</dd>
      <dt className="text-on-surface-variant">Failed At</dt>
      <dd className="text-on-surface font-code-sm text-right">14:32:01 UTC</dd>
      <dt className="text-on-surface-variant">Duration</dt>
      <dd className="text-on-surface font-code-sm text-right">02m 01s</dd>
      <dt className="text-on-surface-variant">Node</dt>
      <dd className="text-on-surface font-code-sm text-right text-primary hover:underline cursor-pointer">wrk-pr-04</dd>
      </dl>
      </div>
      {/* Error Callout */}
      <div className="bg-error-container/10 border border-error-container/30 rounded p-sm flex items-start gap-sm">
      <CircleAlert className="text-error text-[18px] mt-[2px]" aria-hidden={true} focusable="false" />
      <div className="min-w-0">
      <h4 className="font-label-caps text-label-caps text-error mb-[2px]">Connection Timeout</h4>
      <p className="font-code-sm text-code-sm text-on-error-container truncate opacity-80">ERR_DB_CON_099: Unable to establish handshake with primary db cluster within 30000ms.</p>
      </div>
      </div>
      {/* Activity Timeline (Minimalist) */}
      <div className="flex flex-col gap-sm">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs">Activity Trace</h3>
      <div className="relative pl-md border-l border-outline-variant ml-xs mt-sm flex flex-col gap-md">
      {/* Timeline Item 1 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-[9px] h-[9px] rounded-full bg-error border-2 border-surface-container"></div>
      <div className="font-code-sm text-code-sm text-on-surface-variant mb-[2px]">14:32:01</div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">Process Terminated</div>
      <div className="font-code-sm text-code-sm text-error mt-[2px]">Exit code 1</div>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-[9px] h-[9px] rounded-full bg-outline-variant border-2 border-surface-container"></div>
      <div className="font-code-sm text-code-sm text-on-surface-variant mb-[2px]">14:31:30</div>
      <div className="font-body-sm text-body-sm text-on-surface">Retry attempt 3/3 failed</div>
      </div>
      {/* Timeline Item 3 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-[9px] h-[9px] rounded-full bg-outline-variant border-2 border-surface-container"></div>
      <div className="font-code-sm text-code-sm text-on-surface-variant mb-[2px]">14:30:45</div>
      <div className="font-body-sm text-body-sm text-on-surface">Connection threshold reached</div>
      </div>
      {/* Timeline Item 4 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-[9px] h-[9px] rounded-full bg-primary-container border-2 border-surface-container"></div>
      <div className="font-code-sm text-code-sm text-on-surface-variant mb-[2px]">14:30:00</div>
      <div className="font-body-sm text-body-sm text-on-surface">Operation Initiated</div>
      <div className="font-code-sm text-code-sm text-on-surface-variant mt-[2px]">Payload: 2.4MB</div>
      </div>
      </div>
      </div>
      </div>
      </aside>
      </div>
      </main>
    </>
  );
}
