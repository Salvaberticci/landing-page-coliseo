---
name: Colosseum Combat System
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#e6bdb8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#ac8884'
  outline-variant: '#5c403c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690005'
  primary-container: '#dc2626'
  on-primary-container: '#fff6f5'
  inverse-primary: '#bf0715'
  secondary: '#c6c5cf'
  on-secondary: '#2f3038'
  secondary-container: '#4a4b53'
  on-secondary-container: '#bcbbc5'
  tertiary: '#f7be1d'
  on-tertiary: '#3f2e00'
  tertiary-container: '#906d00'
  on-tertiary-container: '#fff8f0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#e3e1ec'
  secondary-fixed-dim: '#c6c5cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#46464e'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f7be1d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display:
    fontFamily: Oswald
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Oswald
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Oswald
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Oswald
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0.02em
  title:
    fontFamily: Oswald
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Oswald
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Oswald
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Oswald
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the discipline, lethal precision, and timeless grandeur of the ancient arena fused with ultra-modern athletic performance. It speaks to elite martial artists, fighters, and high-performance athletes who demand uncompromising rigor and refinement.

The aesthetic fuses **Tactile Brutalism** with **Atmospheric Minimalist High-Contrast**. It rejects ornamental softness, embracing unyielding geometry, strict planar discipline, monolithic obsidian stone surfaces, and focused crimson energy flares.

Key emotional pillars:
- **Disciplined Might:** Monolithic structures, rigid grid discipline, and zero-radius corners project unshakeable stability.
- **Lethal Precision:** Architectural cutaways, high-density data typography, and sharp line dividers reflect technical mastery.
- **Victory & Legacy:** Muted volcanic stone contrasts with the heat of kinetic crimson and restrained champion gold highlights, honoring glory earned in combat.

## Colors

The color palette is built for extreme low-light environments, emphasizing depth, focus, and explosive visual impact.

### Surface Architecture
- **Obsidian Deep (`#0D0D0F`):** Canvas bedrock. Absolute absorption of light.
- **Basalt Base (`#16161A`):** Primary card, panel, and modal backdrop.
- **Stone Surface (`#27272A`):** Elevated structural elements, dividers, segmented controls, and inactive states.

### Chromatic Signals
- **Combat Crimson (`#DC2626` / `#EF4444`):** The primary kinetic signal. Reserved for decisive user calls-to-action, active sparring timers, critical warnings, and victory metrics.
- **Steel & Travertine (`#71717A` / `#E4E4E7`):** Secondary tones providing legible, structural contrast for body typography, metadata, and structural outlines.
- **Arena Gold (`#EAB308`):** The tertiary accent. Strictly applied to championship designations, honor badges, rank promotions, and elite tier memberships.

## Typography

The typographic hierarchy pairs the aggressive, condensed verticality of `Oswald` with the functional neutrality of `Inter`.

- **Headlines & Display:** `Oswald` is uppercase by convention in hero sections, category flags, and tactical banners. Its condensed stature permits heavy impact and efficient data packing without visual bloat.
- **Body & Longform:** `Inter` handles operational copy, training logs, match analysis, and contractual conditions with clarity against dark obsidian backdrops.
- **Labels & Micro-data:** Uppercase `Oswald` with extended letter-spacing (`0.08em` to `0.12em`) establishes military precision across timers, weight divisions, and system states.

## Layout & Spacing

The layout operates on a strict **12-column architectural fluid grid** on desktop (`1280px+`) and an adaptive **4-column grid** on mobile devices.

### Grid Rules
- **Desktop:** Outer margin is fixed to `3rem` (`48px`) with `1.5rem` (`24px`) gutters. Heavy structural containers span 3, 4, 6, or 12 columns.
- **Tablet (`768px - 1023px`):** 8-column layout with `2rem` margins and `1.25rem` gutters.
- **Mobile (`<767px`):** 4-column compact layout with `1.25rem` outer canvas boundaries and `1rem` gutters.

### Spatial Rhythm
Internal component layouts honor multiples of `4px` and `8px`. Dense UI clusters (e.g., fight cards, telemetry monitors) employ `space-xs` and `space-sm`, while sectional dividers and hero blocks leverage `space-xl` to establish monumental scale.

## Elevation & Depth

Depth is established strictly through **material value shifting**, **hairline stone borders**, and **localized crimson back-glows**. Traditional blurred ambient dropshadows are forbidden; the arena operates in light and shadow carved from stone.

### Elevation Levels
- **Floor 0 (Canvas):** Pure `#0D0D0F`.
- **Level 1 (Panels & Mat Surfaces):** `#16161A` encased in a crisp `1px solid #27272A` border.
- **Level 2 (Active Cards & Overlays):** `#1F1F24` with a `1px solid #3F3F46` border.
- **Level 3 (Combat Focus & Selected State):** Level 2 surface complemented by a razor-sharp crimson under-edge or directional bloom: `box-shadow: 0 0 24px -4px rgba(220, 38, 38, 0.35)`.
- **Level 4 (Modals & BattleHUD):** Deep Obsidian `#121215` with an outer border `1px solid #DC2626` and intense perimeter ambient flare: `0 0 40px -8px rgba(220, 38, 38, 0.45)`.

## Shapes

The shape system strictly enforces **absolute zero curvature (`0px`)**. 

Curved corners dilute aggressive discipline. All containers, buttons, tags, badges, modals, and input fields feature razor-sharp rectangular perimeters. Where visual distinction is necessary, 45-degree corner bevels (architectural chamfers of `6px` to `12px` implemented via CSS `clip-path`) are used for primary action triggers and ranking insignias.

## Components

### Buttons
- **Primary (Combat Strike):** Solid `#DC2626` background, `#FFFFFF` Oswald SemiBold uppercase text. Zero border radius. Sharp chamfered right-bottom corner (`8px`). Hover transforms background to `#EF4444` with a crimson aura: `box-shadow: 0 0 16px rgba(220, 38, 38, 0.6)`. Active state compresses slightly with an internal `#000000` 10% overlay.
- **Secondary (Roman Steel):** Transparent background, `1px solid #3F3F46`, `#E4E4E7` Oswald Medium text. Hover shifts border color to `#E4E4E7` and surface to `#27272A`.
- **Tertiary (Ghost/Data):** Transparent background with uppercase text in `#71717A`. Hover turns text to `#FFFFFF` with an instantaneous `1px solid #DC2626` bottom border transition.

### Cards & Arenas
- Built on `#16161A` base with a hairline `1px solid #27272A` outline.
- Padding adheres strictly to `space-md` (`16px`) for compact stats and `space-lg` (`24px`) for program listings.
- Hover states initiate a smooth 150ms border shift to `#71717A` with an ambient bottom-line flare of `#DC2626`.

### Input Fields
- Deep obsidian fill `#0D0D0F`, surrounded by `1px solid #27272A`.
- Typography is `Inter` Regular in `#E4E4E7` with placeholder values in `#52525B`.
- Focus state instantly replaces border with `1px solid #DC2626` and adds an inner left accent stroke of `3px solid #DC2626`.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes:** Pure square `16px x 16px` with a `1px solid #3F3F46` border. Checked state renders `#DC2626` fill with an angular white vector tick mark.
- **Radios:** Diamond-oriented squares (rotated 45 degrees, `12px x 12px`). Active state features a centered `#DC2626` micro-diamond core.

### Chips & Tactical Badges
- Strict rectangular tags with `4px 8px` padding.
- Standard metadata: `#27272A` background, `#A1A1AA` text, uppercase Oswald `10px`.
- Championship / Elite rank: `#16161A` background, `1px solid #EAB308`, `#EAB308` text with subtle gold underglow.
- Combat Active: `#DC2626` background, `#FFFFFF` text.

### Domain-Specific Components
- **Round & Bout Timers:** Oversized tabular numeric displays in `Oswald`, framed in stone grids with pulsing crimson status markers.
- **Weight & Belt Ladder:** Linear bracket visualization employing high-contrast monochrome bars tipped with Roman gold or combat crimson.