<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:design-system-rules -->
# Design System — Frutiger Aero & Tailwind CSS v4

This project uses the **Frutiger Aero / Windows Vista** design language and **Tailwind CSS v4**. All UI work must conform to the skills defined at:
- `.agents/skills/frutiger-aero/SKILL.md`
- `.agents/skills/tailwindcss-v4/SKILL.md`

## Mandatory Skill Check

Before writing or editing **any** UI code (components, CSS, layouts, Tailwind classes), you MUST:

1. Read `.agents/skills/tailwindcss-v4/SKILL.md` for Tailwind CSS v4 standards, utility renames, and CSS-first configuration rules.
2. Read `.agents/skills/frutiger-aero/SKILL.md` to understand the design tokens, component patterns, and anti-slop checklist.
3. Read `.agents/skills/frontend-design/SKILL.md` for general design principles about avoiding templated defaults.
4. Verify your changes against the pre-commit checklist below.

## Tailwind CSS v4 & Canonical Class Rules

Always adhere to Tailwind CSS v4 conventions and canonical utility classes:

- **Use canonical utility classes over arbitrary values (`suggestCanonicalClasses`)**:
  - Do NOT use arbitrary bracket notation (e.g. `w-[10px]`, `p-[16px]`, `m-[8px]`, `gap-[12px]`) when a canonical Tailwind spacing/size class exists.
  - ❌ `w-[10px]` (SALAH) → ✅ `w-2.5` (BENAR)
  - ❌ `p-[16px]` (SALAH) → ✅ `p-4` (BENAR)
  - ❌ `m-[8px]` (SALAH) → ✅ `m-2` (BENAR)
  - ❌ `gap-[12px]` (SALAH) → ✅ `gap-3` (BENAR)
  - Only use arbitrary values `[...]` when a specific value has no canonical Tailwind unit equivalent (e.g. `min-h-[80svh]`) or for custom CSS property variables.
- **v4 Utility Names**:
  - `shrink-*` instead of `flex-shrink-*`
  - `grow-*` instead of `flex-grow-*`
  - `outline-hidden` instead of `outline-none` for focus indicators
  - `ring-3` for 3px ring width
  - `shadow-xs` / `shadow-sm` / `blur-xs` according to v4 scale
  - `flex!` instead of `!flex` (modifier at the end)
  - `bg-(--var)` for CSS variables instead of `bg-[--var]`
- **Explicit colors**: Always specify explicit border/ring colors (e.g. `border border-gray-200`) as default border color in v4 is `currentColor`.

## Pre-Commit Review Checklist

Before finalizing any UI change, verify ALL of the following:

- [ ] **Canonical Tailwind classes used** — No unnecessary arbitrary values (`w-[10px]` → `w-2.5`).
- [ ] **Tailwind CSS v4 syntax followed** — Correct utility names (`shrink-*`, `outline-hidden`, explicit border colors).
- [ ] **No emoji as icons** — Use `lucide-react` icons or custom Vista `.webp` icons from `public/img/icons/`. Never use emoji characters (💡🔒🏆📨🗂📄 etc.) as icons.
- [ ] **No purple/violet gradients** — Stay within the Aero palette: sky blue, teal, green, silver. No `purple`, `violet`, `fuchsia`, `pink` Tailwind colors.
- [ ] **No `rounded-full` on buttons** — Buttons use `rounded-[3px]` to `rounded-[5px]`. Only tags/badges may use `rounded-full`.
- [ ] **No generic AI microcopy** — Avoid "passionate", "seamless experience", "unlock the power of", "elevate your", "beautiful digital experiences". Write specific, concrete copy.
- [ ] **No inline style duplication** — Shared gradients/shadows must use CSS custom properties defined in `globals.css`, not copied inline across components.
- [ ] **Contrast preserved (WCAG AA)** — Text on translucent backgrounds must have ≥4.5:1 contrast ratio. Test with browser devtools.
- [ ] **`prefers-reduced-motion` respected** — All CSS animations and JS-driven motion must degrade gracefully with `prefers-reduced-motion: reduce`.
- [ ] **No stock/AI illustrations** — Use actual Windows Vista-era icons or consistent custom iconography. No rocket ships, lightbulbs, or generic SVG illustrations.
- [ ] **Border-radius consistency** — Use `--aero-radius-sm` (3px), `--aero-radius-md` (5px), or `--aero-radius-lg` (8px). Never `rounded-2xl` or `rounded-3xl` in this project.
- [ ] **Correct spelling** — "Portfolio" (English) or "Portofolio" (Indonesian) — pick one and be consistent project-wide. Check for "2st" → "2nd" and similar typos.

## Component & Folder Conventions

```
src/components/
  windows/ui/      ← Shared Aero primitives (GlossyButton, AeroWindow, Tag, SectionTitle, etc.)
  tabs/            ← Page-level tab content (home, projects, skills, contact)
  repo/            ← File Explorer window components
src/data/          ← Static data arrays (projects, skills, navigation)
src/types/         ← TypeScript type definitions
src/libs/          ← Utility functions (cn, etc.)
src/context/       ← React context providers
src/app/           ← Next.js app router pages and layouts
```

### Naming rules:
- Components: `PascalCase` exports, `kebab-case` filenames (e.g., `glossy-button.tsx` exports `GlossyButton`)
- Data files: `camelCase` filenames (e.g., `data.tsx`)
- CSS files: `kebab-case` (e.g., `globals.css`)

## Dependency & Styling Rules

### Allowed:
- **Tailwind CSS v4** — via `@tailwindcss/postcss`
- **7.css** — for authentic Windows 7 window chrome, title bars, and controls
- **lucide-react** — for all inline icons (NOT emoji)
- **@icons-pack/react-simple-icons** — for brand/tech logos only
- **framer-motion** — for component enter/exit animations
- **clsx** / **tailwind-merge** — for conditional class composition

### Not allowed:
- **Emoji as icons** in any UI component
- **Other icon libraries** (heroicons, font-awesome, etc.) — consolidate on lucide-react
- **CSS-in-JS libraries** (styled-components, emotion) — use Tailwind + CSS custom properties
- **UI component libraries** (shadcn/ui, radix, headless-ui) — this project has its own Aero primitives
<!-- END:design-system-rules -->
