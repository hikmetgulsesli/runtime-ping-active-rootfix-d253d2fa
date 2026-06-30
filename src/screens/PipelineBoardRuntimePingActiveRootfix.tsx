// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - Runtime Ping Active Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, BadgeHelp, BarChart3, Bell, CheckCircle2, CircleHelp, Clock, GitBranch, Headphones, Plus, Search, Settings, Terminal, TriangleAlert } from "lucide-react";


export type PipelineBoardRuntimePingActiveRootfixActionId = "new-operation-1" | "notifications-2" | "settings-3" | "help-4" | "promote-to-verification-5" | "reject-6" | "deploy-7" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "system-logs-4" | "support-5";

export interface PipelineBoardRuntimePingActiveRootfixProps {
  actions?: Partial<Record<PipelineBoardRuntimePingActiveRootfixActionId, () => void>>;

}

export function PipelineBoardRuntimePingActiveRootfix({ actions }: PipelineBoardRuntimePingActiveRootfixProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-body-md text-body-md h-screen w-64 flex flex-col left-0 top-0 sticky border-r border-outline-variant dark:border-outline-variant transition-colors duration-150 ease-in-out flex flex-col h-full py-md gap-xs z-20 shrink-0">
      {/* Header */}
      <div className="px-md pb-md border-b border-outline-variant mb-sm">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant">
      <img alt="System Status Indicator" className="w-full h-full object-cover" data-alt="A highly detailed, ultra-minimalist glowing green status indicator circle set against a dark, brushed metal textured background. The lighting is subtle, creating a sense of deep technical stability and operational health within a secure server environment. 8k resolution, macro photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ua7255yLulTJr1zb__j9gDCvNigLLBEMLMHBtG5iVc7aJLdE11rxjlteJ4QJ9JeBOe-2v4A-wPcKLokkB1TEe_P_6wcan8L3K23r4WUa74jNzORI2JNHXDMNlsn6fpxPn3-Q50SBdg4bq5m0pXamFEyYz6pnW75zzapKC2sW9BJjtbBtZ_ytNELRVvvPYwLVq0PYRkSC74MCCblmG0GSMVVLyjLkZQkw2--sIcWPyx3v6rxsfiGxhhQXxh4ZE8zppG_DEBMz3zo" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-on-surface">System Health</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Healthy - Last Sync: 2m ago</p>
      </div>
      </div>
      </div>
      {/* Primary Tabs */}
      <nav className="flex-1 px-sm flex flex-col gap-xs">
      {/* Inactive */}
      <a className="flex items-center gap-sm px-sm py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <Terminal className="text-[20px]" aria-hidden={true} focusable="false" />
                      Record Operations
                  </a>
      {/* Active */}
      <a className="flex items-center gap-sm px-sm py-sm rounded bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-semibold transition-colors" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <GitBranch  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
                      Pipeline Board
                  </a>
      {/* Inactive */}
      <a className="flex items-center gap-sm px-sm py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </nav>
      {/* Footer Actions */}
      <div className="px-sm pt-sm border-t border-outline-variant flex flex-col gap-xs mt-auto">
      <button className="w-full flex items-center justify-center gap-xs px-sm py-sm bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors mb-sm" type="button" data-action-id="new-operation-1" onClick={actions?.["new-operation-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      New Operation
                  </button>
      <a className="flex items-center gap-sm px-sm py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="system-logs-4" onClick={(event) => { event.preventDefault(); actions?.["system-logs-4"]?.(); }}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
                      System Logs
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <Headphones className="text-[20px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative bg-background">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary font-headline-md text-headline-md w-full top-0 sticky border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-16 px-md w-full z-10 shrink-0">
      {/* Brand / Search Left */}
      <div className="flex items-center gap-lg w-1/2">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary whitespace-nowrap">
                          Runtime Ping
                      </div>
      {/* Embedded Search (ACT_SEARCH_RECORDS) */}
      <div className="relative w-full max-w-md group">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded pl-10 pr-sm py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-on-surface-variant/50" placeholder="Search records, IDs, or owners..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80" type="button" aria-label="Help" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full ml-sm bg-surface-container overflow-hidden border border-outline-variant">
      <img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A striking minimalist portrait of a system administrator in profile, rendered in deep navy and cool cyan tones. The lighting is low-key, highlighting focused intensity. The overall style is highly technical, polished, and suitable for a secure corporate dashboard avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAMwhh3T2qnDCrXNPvOIbprc4e7lGVN-iBW4h0Qf8uqZqhykgwBupn9uLXYwzGca52ywhCmS2AVAJidCLLax9gfa3xITl0PRxcPfWDlJNqELMG1HGtSHe0Ka0nK2NIrOZgtKhUnnu5QHqZ_z_z338agjrsdN5HVZws10gBaVa3-6okhGFVx63s8gdlg6HkNWRkAbtbUk4QL2MUf6elL-0AkQ-l5NmYsLz5eyKEeXxMxK30rzXtiogv5inae4_OMeELzUV26sNMHZk" />
      </div>
      </div>
      </header>
      {/* Pipeline Board Canvas */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar p-md bg-surface-container-lowest relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: "linear-gradient(#3e484f 1px, transparent 1px), linear-gradient(90deg, #3e484f 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
      <div className="flex gap-md h-full min-w-max relative z-10 pb-md">
      {/* LANE 1: Backlog */}
      <div className="w-[320px] h-full flex flex-col bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden shrink-0">
      <div className="px-sm py-xs border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface">Backlog</h3>
      </div>
      <span className="font-code-sm text-code-sm text-on-surface-variant">12</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm gap-sm flex flex-col hide-scrollbar">
      {/* Card (ACT_SELECT_RECORD) */}
      <div className="bg-surface border border-outline-variant rounded p-sm flex flex-col gap-sm hover:border-primary-fixed-dim hover:shadow-[0_0_8px_rgba(142,213,255,0.1)] transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start">
      <span className="font-code-sm text-code-sm text-primary">REC-8924</span>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant border border-outline-variant">Low</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface leading-tight">Update SSL Certificates across staging nodes</h4>
      <div className="flex items-center gap-md mt-auto pt-sm border-t border-outline-variant">
      <div className="flex items-center gap-1 text-on-surface-variant" title="Aging">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-code-sm text-code-sm">14d</span>
      </div>
      <div className="flex-1 flex justify-end">
      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A tiny, high-contrast abstract geometric icon resembling a network node in blue and grey. Minimalist flat design suitable for a micro-avatar in a dense data table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxTVf0V70H8dJjaRAlJa4kEzf-VmFS3hnuMrWdljXW48JdKxgezPHx6q1SaX1O5VuGro90LwEEbhOi07E7hgUSUYOhvbtmyrP1TlvbWb9OY3836lgP4j3zk3xScPIKH_GJ4Dp8CAWNn9MNZT-8r0jfY38dm9QYH_jCBz29HieidXIztdOylSRvW7516-vjBL6yMXzm6nd0_1Kn8wKtxG9W1p1uqV6bnQGzMQmzsvRdGFidHg7Rr12XAcyzRirpsYAvGGrlUO5yD1I" />
      </div>
      </div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded p-sm flex flex-col gap-sm hover:border-primary-fixed-dim hover:shadow-[0_0_8px_rgba(142,213,255,0.1)] transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start">
      <span className="font-code-sm text-code-sm text-primary">REC-8927</span>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-secondary border border-outline-variant">Med</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface leading-tight">Refactor legacy authentication middleware</h4>
      <div className="flex items-center gap-md mt-auto pt-sm border-t border-outline-variant">
      <div className="flex items-center gap-1 text-on-surface-variant" title="Aging">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-code-sm text-code-sm">5d</span>
      </div>
      <div className="flex-1 flex justify-end">
      <div className="w-6 h-6 rounded-full border border-dashed border-outline-variant text-outline-variant flex items-center justify-center text-[10px] font-bold">UN</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* LANE 2: In Progress */}
      <div className="w-[320px] h-full flex flex-col bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden shrink-0">
      <div className="px-sm py-xs border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface">In Progress</h3>
      </div>
      <span className="font-code-sm text-code-sm text-on-surface-variant">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm gap-sm flex flex-col hide-scrollbar">
      {/* Card - BLOCKED */}
      <div className="bg-surface border border-error/50 rounded p-sm flex flex-col gap-sm hover:border-error hover:shadow-[0_0_8px_rgba(255,180,171,0.1)] transition-colors cursor-grab relative overflow-hidden">
      <div className="absolute top-0 right-0 w-8 h-8 bg-error/10 flex items-start justify-end p-1 rounded-bl-lg">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex justify-between items-start pr-6">
      <span className="font-code-sm text-code-sm text-primary">REC-9011</span>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error/10 text-error border border-error/30">High</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface leading-tight">Migrate primary database to v14 cluster</h4>
      <p className="font-body-sm text-body-sm text-error/80 mt-[-4px]">Blocker: Waiting on network provisioning.</p>
      <div className="flex items-center gap-md mt-auto pt-sm border-t border-outline-variant">
      <div className="flex items-center gap-1 text-error" title="Aging">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-code-sm text-code-sm">21d</span>
      </div>
      <div className="flex-1 flex justify-end">
      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A small avatar image showing a stylized server rack glowing with orange warning lights, rendered in a flat corporate vector style, dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBopC2ND77eDZsP9RXzjBaQtHOR6suNq3_BR41eH7juZ4QTHdpNTX0e4VyvEt858Kz9AdW2MieWSzZkOVa1geft65B98X8gJUGsXfkiGaVpBIShvZ7xgpA3P3eFQhKf5h_6VxqYutfdhLp_b4GGkeNUL8ND2dIRhU0SzXZxvH8nTN6EwJcS8byDkDYWpGybSWgBZEeTaDFYcwJBlbfoUNG550KP3ec9rvQPUbM6plFBuAuet4e7LaE5fiBSSZ7dmVpX2OQslio2otg" />
      </div>
      </div>
      </div>
      </div>
      {/* Card (ACT_UPDATE_RECORD_STATUS) */}
      <div className="bg-surface border border-outline-variant rounded p-sm flex flex-col gap-sm hover:border-primary-fixed-dim transition-colors cursor-grab">
      <div className="flex justify-between items-start">
      <span className="font-code-sm text-code-sm text-primary">REC-9105</span>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-secondary border border-outline-variant">Med</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface leading-tight">Implement real-time metric streaming</h4>
      <div className="flex flex-col gap-sm mt-auto pt-sm border-t border-outline-variant">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-primary-fixed-dim" title="Aging">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-code-sm text-code-sm">2d</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Profile icon of a female engineer, cyber-punk aesthetic, neon blue lighting against a pitch black background, minimalist vector graphic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkbd8Hs30xkb_2297x6cWcwXzFps9XmqJBXm_K1j-wrfXInjXrLZTLvar9zqfn34TqILYY1iuE7cHsBxCeMU0xDUJzNoNLgzsFMzhlwCzPRxtovvrS0PBigSAq-4oqfaQuq1d4rQtcC4z6G5Jf2HDBbaQzqMolkkQfpchawctxo7LwWCn1MAuAD2IqnsFBI-lgTPWTCfRxeLbQITfQHtV-Rr1bTObg1LEyPVV86Z0AYAVega9C453jJJLvU-szgy306g0jE3plgPc" />
      </div>
      </div>
      <button className="w-full py-1 px-2 border border-primary-fixed/30 text-primary-fixed font-code-sm text-[11px] rounded hover:bg-primary-fixed/10 transition-colors flex items-center justify-center gap-1" type="button" data-action-id="promote-to-verification-5" onClick={actions?.["promote-to-verification-5"]}>
                                          Promote to Verification <ArrowRight className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* LANE 3: Verification */}
      <div className="w-[320px] h-full flex flex-col bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden shrink-0">
      <div className="px-sm py-xs border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface">Verification</h3>
      </div>
      <span className="font-code-sm text-code-sm text-on-surface-variant">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm gap-sm flex flex-col hide-scrollbar">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded p-sm flex flex-col gap-sm hover:border-primary-fixed-dim transition-colors cursor-grab">
      <div className="flex justify-between items-start">
      <span className="font-code-sm text-code-sm text-primary">REC-9122</span>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error/10 text-error border border-error/30">Crit</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface leading-tight">Patch zero-day vulnerability in gateway</h4>
      <div className="flex flex-col gap-sm mt-auto pt-sm border-t border-outline-variant">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-on-surface-variant" title="Aging">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-code-sm text-code-sm">1d</span>
      </div>
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-surface overflow-hidden relative z-10">
      <img className="w-full h-full object-cover" data-alt="Avatar icon, male silhouette with futuristic headset, dark grey and silver tones, clean corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_cizkuHR1ty71bftKAz3iJahkw7CKM0mP3-FyLFtrDBDWSLNPRmp-Cc2zsneUq7K-f8BSkfiWp6e9YR9l_2KRPmEdLbLmvoXd0SOrNv6utbKcjsecew6vFT-OHuDgrQ-PYtS9HcIfC82l20wGGWyHgyrW1F-nOm2BxVWl1Q2EYs4plg0zmswh87Rk6LK2DvPxoVYZ2x9XzpThQepxMA8oPo93qMCllZHg5ZKBpk_JYs4PH6ynuGeu5UW9XupXx_Rzh_9zqg9SSBY" />
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container border border-surface overflow-hidden relative z-0 flex items-center justify-center text-[10px] text-on-surface-variant">
                                                  +2
                                              </div>
      </div>
      </div>
      <div className="flex gap-2">
      <button className="flex-1 py-1 px-2 border border-outline-variant text-on-surface-variant font-code-sm text-[11px] rounded hover:bg-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="reject-6" onClick={actions?.["reject-6"]}>
                                              Reject
                                          </button>
      <button className="flex-1 py-1 px-2 bg-primary-fixed text-on-primary-fixed font-code-sm text-[11px] rounded hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="deploy-7" onClick={actions?.["deploy-7"]}>
                                              Deploy
                                          </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* LANE 4: Deployed */}
      <div className="w-[320px] h-full flex flex-col bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden shrink-0 opacity-80">
      <div className="px-sm py-xs border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full border border-outline"></span>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant">Deployed (Last 7d)</h3>
      </div>
      <span className="font-code-sm text-code-sm text-on-surface-variant">24</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm gap-sm flex flex-col hide-scrollbar">
      {/* Compact Card for Deployed */}
      <div className="bg-surface border border-outline-variant/50 rounded p-sm flex flex-col gap-xs hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant line-through">REC-9088</span>
      <CheckCircle2 className="text-outline text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-body-sm text-body-sm text-on-surface-variant truncate">Update caching rules for EU nodes</h4>
      </div>
      {/* Compact Card */}
      <div className="bg-surface border border-outline-variant/50 rounded p-sm flex flex-col gap-xs hover:border-outline-variant transition-colors">
      <div className="flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant line-through">REC-9092</span>
      <CheckCircle2 className="text-outline text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-body-sm text-body-sm text-on-surface-variant truncate">Rotate access keys for third-party API</h4>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
