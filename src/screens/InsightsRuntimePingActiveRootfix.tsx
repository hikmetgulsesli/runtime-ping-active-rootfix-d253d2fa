// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Runtime Ping Active Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CheckCircle2, CircleHelp, Cpu, Download, GitBranch, Headphones, Info, Lightbulb, ListFilter, Search, Settings, Terminal, Timer, TriangleAlert } from "lucide-react";


export type InsightsRuntimePingActiveRootfixActionId = "record-operations-1" | "pipeline-board-2" | "insights-3" | "system-logs-4" | "support-5" | "new-operation-6" | "notifications-7" | "settings-8" | "help-9" | "filter-10" | "export-summary-11" | "view-all-logs-12";

export interface InsightsRuntimePingActiveRootfixProps {
  actions?: Partial<Record<InsightsRuntimePingActiveRootfixActionId, () => void>>;

}

export function InsightsRuntimePingActiveRootfix({ actions }: InsightsRuntimePingActiveRootfixProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="h-screen w-64 flex flex-col left-0 top-0 sticky border-r border-outline-variant bg-surface-container-low">
      <div className="flex flex-col h-full py-md gap-xs">
      <div className="px-md pb-md mb-sm border-b border-outline-variant">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
      <Cpu className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface">System Health</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Healthy - Last Sync: 2m ago</span>
      </div>
      <div className="px-sm flex-1 flex flex-col gap-xs">
      <button className="w-full text-left px-md py-sm rounded transition-colors duration-150 ease-in-out hover:bg-surface-container-highest text-on-surface-variant flex items-center gap-sm group" type="button" data-action-id="record-operations-1" onClick={actions?.["record-operations-1"]}>
      <Terminal className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span>Record Operations</span>
      </button>
      <button className="w-full text-left px-md py-sm rounded transition-colors duration-150 ease-in-out hover:bg-surface-container-highest text-on-surface-variant flex items-center gap-sm group" type="button" data-action-id="pipeline-board-2" onClick={actions?.["pipeline-board-2"]}>
      <GitBranch className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span>Pipeline Board</span>
      </button>
      <button className="w-full text-left px-md py-sm rounded transition-colors duration-150 ease-in-out bg-secondary-container text-on-secondary-container font-semibold flex items-center gap-sm" type="button" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BarChart3  data-weight="fill" className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </button>
      </div>
      <div className="px-sm pb-sm mt-auto flex flex-col gap-xs">
      <button className="w-full text-left px-md py-sm rounded transition-colors duration-150 ease-in-out hover:bg-surface-container-highest text-on-surface-variant flex items-center gap-sm" type="button" data-action-id="system-logs-4" onClick={actions?.["system-logs-4"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>System Logs</span>
      </button>
      <button className="w-full text-left px-md py-sm rounded transition-colors duration-150 ease-in-out hover:bg-surface-container-highest text-on-surface-variant flex items-center gap-sm" type="button" data-action-id="support-5" onClick={actions?.["support-5"]}>
      <Headphones className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Support</span>
      </button>
      </div>
      <div className="px-md mt-xs">
      <button className="w-full bg-primary text-on-primary py-sm rounded font-body-md text-body-md font-medium hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="new-operation-6" onClick={actions?.["new-operation-6"]}>
                          New Operation
                      </button>
      </div>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky border-b border-outline-variant flat no shadows bg-surface flex justify-between items-center h-16 px-md z-10">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary">Runtime Ping</span>
      <div className="relative ml-lg hidden md:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-surface-container-highest border border-outline-variant rounded pl-[32px] pr-sm py-xs text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder-on-surface-variant" placeholder="Search resources..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 text-on-surface-variant flex items-center justify-center" type="button" aria-label="Notifications" data-action-id="notifications-7" onClick={actions?.["notifications-7"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 text-on-surface-variant flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-8" onClick={actions?.["settings-8"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 text-on-surface-variant flex items-center justify-center" type="button" aria-label="Help" data-action-id="help-9" onClick={actions?.["help-9"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant ml-sm overflow-hidden flex items-center justify-center">
      <img className="w-full h-full object-cover" data-alt="A macro photograph of a dark, brushed metal server rack component with a small, glowing blue indicator light, conveying a sense of secure, high-tech administration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9TfCiIKrccmHsqy8ffwO4AfygqOCdicCUS-LG6GScpsBlqwsvpz-uVy3z4Q5oId49g3h1VggEHkAWidvfnZA8U3-ZhrK-N6EjphqjHYdQtcnNvdMXJlzppoV4j-0rRcOgk43pSp8k6QzEMurX34coMuOpyy6ChwXNUchGQk952MyDsCXJOxv4iMvcprGOIGIY1xenFhQcpAGqyYqCGtn48jmcYUAlWODhGeGaVX7J-d2j5lNWDxs41CFRsP9KCFzUWOoQlQ2Unb8" />
      </div>
      </div>
      </header>
      {/* Canvas */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Telemetry Insights</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Analysis derived from 1.4M operational records over the last 24h.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button className="border border-outline-variant bg-surface hover:bg-surface-container-highest text-on-surface px-md py-xs rounded flex items-center gap-xs transition-colors font-body-sm text-body-sm" type="button" data-action-id="filter-10" onClick={actions?.["filter-10"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="border border-outline-variant bg-surface hover:bg-surface-container-highest text-on-surface px-md py-xs rounded flex items-center gap-xs transition-colors font-body-sm text-body-sm" type="button" data-action-id="export-summary-11" onClick={actions?.["export-summary-11"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                              Export Summary
                          </button>
      </div>
      </div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between text-on-surface-variant">
      <span className="font-label-caps text-label-caps uppercase">Success Rate</span>
      <CheckCircle2 className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-metrics text-display-metrics text-primary">99.98%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">+0.01%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full mt-auto overflow-hidden">
      <div className="bg-primary h-full w-[99.98%]"></div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between text-on-surface-variant">
      <span className="font-label-caps text-label-caps uppercase">Mean Time To Resolve</span>
      <Timer className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-metrics text-display-metrics text-on-surface">45ms</span>
      <span className="font-body-sm text-body-sm text-error">-12ms</span>
      </div>
      <div className="w-full mt-auto h-8 relative">
      {/* Simple CSS visualization replacing complex chart */}
      <div className="absolute bottom-0 w-full flex items-end justify-between h-full px-xs gap-[2px]">
      <div className="w-full bg-outline-variant h-[40%] rounded-t-sm"></div>
      <div className="w-full bg-outline-variant h-[45%] rounded-t-sm"></div>
      <div className="w-full bg-outline-variant h-[30%] rounded-t-sm"></div>
      <div className="w-full bg-outline-variant h-[60%] rounded-t-sm"></div>
      <div className="w-full bg-primary h-[80%] rounded-t-sm"></div>
      <div className="w-full bg-outline-variant h-[50%] rounded-t-sm"></div>
      <div className="w-full bg-outline-variant h-[35%] rounded-t-sm"></div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between text-on-surface-variant">
      <span className="font-label-caps text-label-caps uppercase">Compute Utilization</span>
      <Cpu className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-metrics text-display-metrics text-on-surface">78%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Avg Cluster Load</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full mt-auto overflow-hidden flex">
      <div className="bg-primary h-full w-[45%]"></div>
      <div className="bg-tertiary-container h-full w-[33%]"></div>
      </div>
      </div>
      </div>
      {/* Bento Layout: Distributions & Hints */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
      {/* State Distribution */}
      <div className="lg:col-span-8 bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Record State Distribution</h3>
      <div className="flex-1 flex flex-col justify-center">
      <div className="w-full h-8 flex rounded overflow-hidden border border-outline-variant mb-md">
      <div className="h-full bg-primary" style={{width: "82%"}} title="Completed: 82%"></div>
      <div className="h-full bg-tertiary-container border-l border-surface" style={{width: "15%"}} title="Processing: 15%"></div>
      <div className="h-full bg-error border-l border-surface" style={{width: "3%"}} title="Failed: 3%"></div>
      </div>
      <div className="flex gap-lg">
      <div className="flex items-center gap-xs">
      <div className="w-3 h-3 rounded-sm bg-primary"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Completed (82%)</span>
      </div>
      <div className="flex items-center gap-xs">
      <div className="w-3 h-3 rounded-sm bg-tertiary-container"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Processing (15%)</span>
      </div>
      <div className="flex items-center gap-xs">
      <div className="w-3 h-3 rounded-sm bg-error"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Failed (3%)</span>
      </div>
      </div>
      </div>
      </div>
      {/* Actionable Hints */}
      <div className="lg:col-span-4 bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md flex items-center gap-sm">
      <Lightbulb className="text-[18px] text-tertiary-container" aria-hidden={true} focusable="false" />
                              System Advisories
                          </h3>
      <div className="flex flex-col gap-sm flex-1 overflow-y-auto pr-sm">
      <div className="p-sm bg-error-container/10 border border-error/30 rounded flex gap-sm items-start">
      <TriangleAlert className="text-[16px] text-error mt-[2px]" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium mb-[2px]">3 verification failures detected</p>
      <p className="font-code-sm text-code-sm text-on-surface-variant">Review node cluster eu-west-2a logs.</p>
      </div>
      </div>
      <div className="p-sm bg-surface-container-highest border border-outline-variant rounded flex gap-sm items-start">
      <Info className="text-[16px] text-primary mt-[2px]" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium mb-[2px]">Throughput anomaly resolved</p>
      <p className="font-code-sm text-code-sm text-on-surface-variant">Queue depth normalized at 14:02 UTC.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="bg-surface-container border border-outline-variant rounded-lg flex flex-col overflow-hidden">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Transaction Log</h3>
      <button className="text-primary font-body-sm text-body-sm hover:underline" type="button" data-action-id="view-all-logs-12" onClick={actions?.["view-all-logs-12"]}>View All Logs</button>
      </div>
      <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
      <tr className="bg-surface-container-highest border-b border-outline-variant">
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant w-48">Timestamp</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant w-24">Level</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant">Event Signature</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant w-32 text-right">Duration</th>
      </tr>
      </thead>
      <tbody className="font-code-sm text-code-sm text-on-surface">
      <tr className="border-b border-surface-bright hover:bg-surface-container-highest transition-colors">
      <td className="py-sm px-md text-on-surface-variant">2023-10-27 14:22:01.452</td>
      <td className="py-sm px-md"><span className="px-xs py-[2px] border border-outline rounded text-on-surface-variant bg-surface">INFO</span></td>
      <td className="py-sm px-md">op_sync_complete pipeline_id=req_9982a</td>
      <td className="py-sm px-md text-right text-on-surface-variant">12ms</td>
      </tr>
      <tr className="border-b border-surface-bright hover:bg-surface-container-highest transition-colors">
      <td className="py-sm px-md text-on-surface-variant">2023-10-27 14:21:58.110</td>
      <td className="py-sm px-md"><span className="px-xs py-[2px] border border-error/50 rounded text-error bg-error/10">ERR</span></td>
      <td className="py-sm px-md text-error">timeout_conn_pool host=db-replica-04</td>
      <td className="py-sm px-md text-right text-on-surface-variant">5000ms</td>
      </tr>
      <tr className="border-b border-surface-bright hover:bg-surface-container-highest transition-colors">
      <td className="py-sm px-md text-on-surface-variant">2023-10-27 14:21:55.890</td>
      <td className="py-sm px-md"><span className="px-xs py-[2px] border border-outline rounded text-on-surface-variant bg-surface">INFO</span></td>
      <td className="py-sm px-md">auth_token_refresh user_uuid=8f7e2c</td>
      <td className="py-sm px-md text-right text-on-surface-variant">45ms</td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="py-sm px-md text-on-surface-variant">2023-10-27 14:21:40.002</td>
      <td className="py-sm px-md"><span className="px-xs py-[2px] border border-tertiary-container rounded text-tertiary-container bg-tertiary-container/10">WARN</span></td>
      <td className="py-sm px-md">mem_usage_spike container=parser_v2 vol=85%</td>
      <td className="py-sm px-md text-right text-on-surface-variant">-</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
