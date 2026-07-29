---
name: frutiger-aero
description: Design language skill implementing the Frutiger Aero / Windows Vista aesthetic. Use when building or editing UI components that need glossy, translucent, nature-inspired visuals characteristic of the Windows Vista/7 era. Provides color palette, typography, component patterns (buttons, cards, navbar, inputs), and an anti-AI-slop checklist.
---

# Frutiger Aero Design Language

This skill defines the "Frutiger Aero" visual language — the design aesthetic of the Windows Vista/7 era characterized by glossy surfaces, transparency, nature imagery, and clean humanist typography. Use it whenever building or restyling UI to match this specific design direction.

## When to Use This Skill

- Building new UI components for a project with a Frutiger Aero / Windows Vista theme
- Reviewing or restyling existing components to match the Aero aesthetic
- Evaluating whether a design choice is "on brand" for the Aero language
- Creating CSS/Tailwind utilities for glossy, translucent, skeuomorphic effects

## Core Design Principles

### 1. Glossy, Not Flat
Every interactive surface should suggest physical depth. The key technique is a **two-zone gradient**: a lighter upper half (the "gloss") sharply transitioning to a slightly darker lower half. This creates the illusion of a convex surface catching overhead light.

### 2. Translucent, Not Opaque
Backgrounds should feel like frosted glass — you can sense the content or color behind them, but can't read it clearly. Use `backdrop-filter: blur()` and semi-transparent backgrounds (`rgba` with 60–85% opacity).

### 3. Nature-Grounded Palette
Colors come from sky, water, and foliage — not from neon nightclub aesthetics. The palette is optimistic, clean, and slightly cool.

### 4. Skeuomorphic Details, Used Sparingly
Bevels, inner glows, reflections, and highlights reference physical materials (glass, metal, water). But apply them **selectively** — only on interactive elements and key visual surfaces. Body text areas and content zones stay clean.

### 5. Humanist Typography
Use clean, geometric-humanist sans-serifs. Segoe UI is the canonical choice. Text should be readable against translucent backgrounds — use text-shadow for legibility when placing text on glass.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--aero-sky` | `#78B9F0` | Primary blue — taskbar, title bars, interactive accents |
| `--aero-sky-deep` | `#3282D2` | Darker blue — active states, pressed buttons |
| `--aero-teal` | `#3CDCDC` | Secondary accent — aqua tints, links, highlights |
| `--aero-leaf` | `#60C840` | Success states, "available" indicators, green buttons |
| `--aero-silver` | `#E8ECF0` | Neutral surface — inactive buttons, borders, dividers |
| `--aero-glass` | `rgba(255,255,255,0.65)` | Glass panel background |
| `--aero-glass-border` | `rgba(255,255,255,0.6)` | Glass panel edge highlight |
| `--aero-surface` | `#F0F8FF` | Content area background (alice blue) |
| `--aero-text` | `#1A3050` | Primary text color — dark desaturated blue |
| `--aero-text-muted` | `#5A7A9A` | Secondary text, captions |

### Forbidden Colors
- ❌ Purple/violet gradients (`#7C3AED`, `#A855F7`, etc.) — not in the Aero palette
- ❌ Hot pink / magenta — modern accent, breaks era authenticity
- ❌ Pure black backgrounds — Aero is always light or translucent
- ❌ Neon / acid green — too aggressive for the optimistic Aero feel

---

## CSS Custom Properties

```css
:root {
  /* Frutiger Aero tokens */
  --aero-sky: #78B9F0;
  --aero-sky-deep: #3282D2;
  --aero-teal: #3CDCDC;
  --aero-leaf: #60C840;
  --aero-silver: #E8ECF0;
  --aero-glass: rgba(255, 255, 255, 0.65);
  --aero-glass-border: rgba(255, 255, 255, 0.6);
  --aero-surface: #F0F8FF;
  --aero-text: #1A3050;
  --aero-text-muted: #5A7A9A;

  /* Shared gradients */
  --aero-gloss: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.15) 48%,
    transparent 49%
  );
  --aero-surface-gradient: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.70) 0%,
    rgba(220, 240, 255, 0.55) 100%
  );
  --aero-card-shadow: 0 2px 6px rgba(0, 80, 200, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  /* Typography */
  --aero-font: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --aero-font-display: "Trebuchet MS", "Segoe UI", sans-serif;

  /* Radius — Vista uses small radii, never pills */
  --aero-radius-sm: 3px;
  --aero-radius-md: 5px;
  --aero-radius-lg: 8px;
}
```

---

## Component Patterns

### Button (Glossy)

Vista-era buttons are **never pill-shaped** (`rounded-full`). They use small border-radius (3–5px), a top-to-bottom gradient with a clear gloss highlight in the upper half, and subtle inner shadow.

```css
.aero-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 16px;
  border: 1px solid rgba(0, 80, 160, 0.3);
  border-radius: var(--aero-radius-sm);
  font-family: var(--aero-font);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;

  /* Blue variant */
  background: linear-gradient(
    180deg,
    #6CC5F8 0%,    /* lighter top */
    #3A9FE0 48%,   /* mid transition */
    #2580C8 49%,   /* darker bottom start */
    #4098D8 100%   /* slight lift at very bottom */
  );
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  box-shadow:
    0 2px 6px rgba(0, 100, 200, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

/* Gloss overlay — upper half highlight */
.aero-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.1) 48%,
    transparent 49%
  );
  pointer-events: none;
}

.aero-button:hover {
  box-shadow:
    0 4px 12px rgba(0, 100, 200, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.aero-button:active {
  transform: translateY(1px);
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);
}
```

**Tailwind equivalent** (using arbitrary values sparingly):
```html
<button class="
  relative inline-flex items-center gap-1.5
  rounded-[4px] border border-blue-400/30
  bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600
  px-4 py-1.5 text-[11px] font-semibold text-white
  shadow-[0_2px_6px_rgba(0,100,200,0.3),inset_0_1px_0_rgba(255,255,255,0.45)]
  hover:shadow-[0_4px_12px_rgba(0,100,200,0.4)]
  active:translate-y-px
  overflow-hidden cursor-pointer
">
  <!-- Gloss pseudo-element via a span -->
  <span class="pointer-events-none absolute inset-0 rounded-[4px]"
    style="background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 48%, transparent 49%)">
  </span>
  <span class="relative z-10">Button Text</span>
</button>
```

### Button Variants

| Variant | Top color | Bottom color | Border |
|---------|-----------|-------------|--------|
| Blue | `#6CC5F8` | `#2580C8` | `rgba(0,80,160,0.3)` |
| Green | `#7CD860` | `#38A020` | `rgba(0,100,0,0.3)` |
| Silver | `#F0F2F5` | `#C8CDD5` | `rgba(100,120,140,0.3)` |
| Aqua | `#60E8E8` | `#208080` | `rgba(0,100,100,0.3)` |

---

### Card

```css
.aero-card {
  border: 1px solid rgba(100, 160, 220, 0.3);
  border-radius: var(--aero-radius-lg);
  background: var(--aero-surface-gradient);
  box-shadow: var(--aero-card-shadow);
  overflow: hidden;
}

/* Optional gloss header for cards */
.aero-card-header {
  position: relative;
  padding: 10px 14px;
  background: linear-gradient(
    180deg,
    rgba(200, 230, 255, 0.6) 0%,
    rgba(170, 210, 250, 0.4) 100%
  );
  border-bottom: 1px solid rgba(100, 160, 220, 0.2);
}

.aero-card-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 60%
  );
  pointer-events: none;
}
```

---

### Navbar / Title Bar

The Aero navbar uses the **glass effect**: a semi-transparent background with backdrop blur, a bright highlight line at the top edge, and a subtle dark border.

```css
.aero-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 42px;
  display: flex;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(120, 185, 240, 0.75) 0%,
    rgba(80, 155, 220, 0.85) 48%,
    rgba(50, 130, 210, 0.90) 49%,
    rgba(70, 150, 230, 0.82) 100%
  );
  backdrop-filter: blur(24px) saturate(2);
  border-top: 1px solid rgba(200, 235, 255, 0.6);
  box-shadow:
    0 -1px 0 rgba(80, 160, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Top-edge gloss strip */
.aero-navbar::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.2),
    rgba(255,255,255,0.8) 30%,
    rgba(255,255,255,0.9) 50%,
    rgba(255,255,255,0.8) 70%,
    rgba(255,255,255,0.2)
  );
}
```

---

### Input Field

Vista inputs are subtly inset with a slight gradient from white to very light blue:

```css
.aero-input {
  width: 100%;
  padding: 5px 8px;
  border: 1px solid rgba(100, 160, 220, 0.4);
  border-radius: var(--aero-radius-sm);
  background: linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 100%);
  font-family: var(--aero-font);
  font-size: 11px;
  color: var(--aero-text);
  box-shadow: inset 0 1px 2px rgba(0, 0, 80, 0.1);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.aero-input:focus {
  border-color: rgba(80, 160, 255, 0.6);
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 80, 0.1),
    0 0 0 2px rgba(80, 160, 255, 0.2);
}
```

---

## Background & Texture Guidelines

### Acceptable background motifs:
- **Sky gradients** — blue to white, slightly overexposed like a bright day
- **Water / bubbles** — translucent spheres, ripple patterns
- **Foliage** — green leaves, grass, with gentle bokeh blur
- **Bokeh** — out-of-focus light circles in cool blue/teal/white
- **Aurora / northern lights** — subtle, cool-toned bands of light

### Avoid:
- Dark/moody backgrounds (cyberpunk, space, etc.)
- Geometric pattern fills (hexagons, triangles)
- Flat solid colors as primary backgrounds

---

## Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / headings | Trebuchet MS or Segoe UI | Bold (700) | 18–22px |
| Body text | Segoe UI | Regular (400) | 11–13px |
| Captions / metadata | Segoe UI | Regular (400) | 9–10px |
| Code / monospace | Consolas, Courier New | Regular (400) | 11px |

- Use **text-shadow** (`0 1px 0 rgba(255,255,255,0.7)`) on headings placed on gradient backgrounds for that embossed look.
- Never use ultra-thin weights (100–200) — they didn't exist in the Vista era and reduce readability on glass surfaces.

---

## What to Avoid (Anti-AI-Slop Checklist)

Before committing any UI change, verify:

- [ ] **No emoji as icons** — Use proper icon components (lucide-react, custom Vista .webp icons), never emoji (💡🔒🏆📨 etc.)
- [ ] **No purple/violet gradients** — Stay within the Aero palette (sky blue, teal, green, silver)
- [ ] **No `rounded-full` on buttons** — Use `rounded-[3px]` to `rounded-[5px]` maximum
- [ ] **No generic AI microcopy** — Avoid "passionate", "seamless experience", "unlock the power of", "elevate your"
- [ ] **No inline style duplication** — Use CSS custom properties for repeated gradients/shadows
- [ ] **No flat, solid-color backgrounds** — Aero surfaces always have gradient or transparency
- [ ] **No arbitrary `blur()` without transparency** — Blur only makes sense when the surface is semi-transparent
- [ ] **No `drop-shadow-lg` on everything** — Shadow creates hierarchy; use it only on elevated elements (windows, modals, popovers)
- [ ] **No modern pill shapes in Vista context** — Rounded rectangles, not capsules
- [ ] **WCAG AA contrast preserved** — Semi-transparent backgrounds must still provide 4.5:1 contrast ratio for text
- [ ] **`prefers-reduced-motion` respected** — All animations must be gated behind reduced-motion media query
- [ ] **No stock/AI illustrations** — Use actual Windows Vista icons, or custom iconography consistent with the era

---

## Reflection / Mirror Effect (Optional, Use Sparingly)

The classic Aero dock reflection: a faded, vertically flipped copy below an element.

```css
.aero-reflection {
  position: relative;
}

.aero-reflection::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: 0;
  right: 0;
  height: 30%;
  background: inherit;
  transform: scaleY(-1);
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    transparent 80%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    transparent 80%
  );
  pointer-events: none;
}
```

**When to use**: Desktop shortcut icons, taskbar elements. **Not** on body text or cards.

---

## File Organization Convention

```
src/
  app/
    globals.css          ← Tailwind imports + Aero design tokens
  components/
    windows/
      ui/                ← Shared Aero primitives (button, card, input, tag, etc.)
    tabs/                ← Page-level tab content
    repo/                ← File explorer components
  data/                  ← Static data (projects, skills, nav items)
  types/                 ← TypeScript type definitions
  libs/                  ← Utility functions (cn, etc.)
  context/               ← React context providers
```
