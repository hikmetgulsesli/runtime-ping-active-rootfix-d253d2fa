---
name: Operational Precision
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#c5cce6'
  on-tertiary: '#283044'
  tertiary-container: '#a9b1ca'
  on-tertiary-container: '#3c4459'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-metrics:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 12px
---

## Brand & Style
The design system is engineered for high-stakes operational environments where data density and cognitive clarity are paramount. The brand personality is "The Quiet Expert"—it is precise, reliable, and invisible until needed. The target audience consists of systems engineers and network administrators who require immediate access to deep technical metrics without visual fatigue.

The design style is a hybrid of **Minimalism** and **Modern Corporate**, stripped of all decorative artifice. It prioritizes "information scent" through structured layout and tonal hierarchy. The emotional response should be one of calm control; even during system alerts, the UI remains grounded and utilitarian.

## Colors
This design system utilizes a "Deep Tech" palette. The default mode is **Dark**, reducing eye strain during long monitoring sessions.

- **Primary:** A precise Sky Blue used for active states, primary actions, and focus indicators.
- **Surface Layers:** Deep Navies (#0F172A) and Slate Grays (#1E293B) provide the structural foundation, creating a tiered hierarchy of containers.
- **Functional Accents:** Status colors (Emerald, Amber, Red) are used sparingly but with high saturation to ensure alerts are immediately recognizable against the muted background.
- **Neutral:** Slate tones are used for secondary text and borders to maintain a low-contrast environment that highlights critical data.

## Typography
The system uses **Geist** for its neutral, technical aesthetic and exceptional legibility at small sizes. **JetBrains Mono** is reserved for monospaced data, such as IP addresses, logs, and port numbers.

- **Scale:** Sizes are kept tight (12px - 14px for most UI) to support high-density layouts. 
- **Hierarchy:** Use `label-caps` for table headers and section titles to differentiate them from interactive data. 
- **Metrics:** `display-metrics` is used for high-level health scores or uptime percentages, providing a clear focal point on dashboards.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy within a max-width container for dashboard views, while utility tables utilize a **Fluid Grid** to maximize horizontal real estate.

- **Density:** We use a 4px baseline grid. Padding within components (like table cells and input fields) is minimized (8px vertical, 12px horizontal) to allow more data to be visible above the fold.
- **Responsiveness:**
  - **Desktop (1280px+):** 12-column grid, 16px margins.
  - **Tablet (768px-1279px):** 8-column grid, 12px margins, sidebar collapses to icons.
  - **Mobile (<767px):** 4-column grid, single-column stack for data tables with horizontal scroll.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** rather than shadows. This maintains a flat, technical feel and ensures clarity on varied display qualities.

- **Level 0 (Background):** Deepest navy (#020617). Used for the global canvas.
- **Level 1 (Cards/Sidebar):** Slightly lighter navy (#0F172A). Used for primary content containers.
- **Level 2 (Modals/Popovers):** Slate gray (#1E293B). These elements use a 1px solid border (#334155) to separate them from the background.
- **Interaction:** Hover states are indicated by a subtle increase in tonal value, never by a shadow.

## Shapes
The shape language is "Soft-Industrial." By using a consistent **0.25rem (4px)** radius, we maintain a crisp, professional look that feels slightly more modern than sharp 90-degree corners, without appearing "consumer-grade" or overly friendly. 

- **Small Components:** Checkboxes and small tags use a 2px radius.
- **Buttons/Inputs:** 4px radius for a standardized, modular appearance.
- **Large Containers:** 8px radius for main dashboard cards to softly group related data.

## Components
- **Data Tables:** The core of the system. Rows have a 1px bottom border (#1E293B). Alternate row striping is not used; instead, use high-contrast hover states to highlight the current row.
- **Buttons:** 
  - *Primary:* Solid Sky Blue with black text.
  - *Secondary:* Outline (1px Slate) with white text.
  - *Destructive:* Solid Red for critical "Rootfix" actions.
- **Input Fields:** Dark background (#020617) with a 1px border. Focus state uses a 2px Sky Blue outline.
- **Status Chips:** Small, condensed pills with a low-opacity background of the status color (e.g., 10% Emerald) and a 1px solid border of the same color.
- **Monitors/Graphs:** Use thin 1px lines for data viz. Avoid area fills unless necessary for readability, keeping the interface "airy" despite the density.
- **Navigation:** A slim left-hand rail for global app switching, with a secondary expanded tree-view for system-specific architecture.