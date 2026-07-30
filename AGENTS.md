<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Overview

- **Next.js 16** (app router), **React 19**, **TypeScript 5**, **Tailwind CSS v4**
- **Package manager**: `bun` (see `bun.lock`)
- **No testing framework** — no Jest, Vitest, Playwright, or any test runner
- **No pre-commit hooks, no CI/CD** — no `.github/workflows/`, no husky, no lint-staged
- **Deployed on Vercel** at `https://ramarfx.my.id`

# Developer Commands

```sh
bun dev            # next dev (HMR on http://localhost:3000)
bun run build      # next build (compiles + skips type check — see caveat below)
bun run start      # next start (prod server)
bun run lint       # eslint
bun run format     # prettier --write .
bun run format:check  # prettier --check .
bun run typecheck  # next build (runs full build for validation)
bun run prepare    # husky install (runs automatically on bun install)
```

No testing framework — no test script.

## Type-checking caveat

Next.js 16.2.2 ships a broken `package.json` (empty `exports` field, missing `index.d.ts`), so `tsc --noEmit` and `next build`'s internal type checker both fail on generated validator files. Fix: `next.config.ts` has `typescript.ignoreBuildErrors: true`. Type checking is enforced through ESLint (`bun run lint`) and `next build` still validates the full compilation — it just skips the broken type pass.

# Architecture

**Single-page app** — one route (`/`) with client-side tab switching between Home, Projects, Skills, Contact.

```
src/
├── app/
│   ├── layout.tsx        ← Root layout (server component): WindowProvider, background, CRT overlay, Taskbar
│   ├── page.tsx          ← "use client": 3 DesktopShortcuts + 3 AeroWindows
│   ├── globals.css       ← Tailwind v4 import + Aero design tokens (--aero-* CSS vars)
│   ├── aero.css          ← Windows 7 glass styles (commented out in layout — may reinstate)
│   ├── sitemap.ts        ← Dynamic sitemap
│   ├── robots.ts         ← robots.txt
│   └── api/
│       ├── repos/route.ts    ← GET /api/repos — fetches ramarfx repos (no auth, public GitHub)
│       └── activity/route.ts ← GET /api/activity — fetches ramarfx events (uses GITHUB_TOKEN)
├── components/
│   ├── startup-loader.tsx    ← Splash screen → click to open Portfolio window
│   ├── taskbar.tsx           ← Vista-style taskbar
│   ├── sidebar.tsx           ← Left nav (avatar, tabs, social links, CV download)
│   ├── browser.tsx           ← IE toolbar + address bar + tab bar
│   ├── project-card.tsx      ← Project card
│   ├── skillbar.tsx          ← Animated skill bar
│   ├── tabs/                 ← Tab content panels (home-tab, project-tab, skills-tab, contact-tab)
│   ├── windows/              ← Three AeroWindows: PortfolioWindow, RepoWindow, ActivityWindow (Notepad)
│   │   └── ui/               ← Aero primitives: AeroWindow, GlossyButton, Tag, SectionTitle, etc.
│   └── repo/                 ← File Explorer subcomponents (RepoToolbar, RepoFileList, RepoSidebar, etc.)
├── context/
│   └── window-manager.tsx    ← WindowProvider + useWindow() hook — manages 3 window states (open/close/maximize)
├── data/
│   ├── data.tsx              ← Static arrays: PROJECTS, SKILLS, TOOLS, NAV_ITEMS, TABS, COMPETITION
│   └── repos.ts              ← Repo sidebar data (SIDEBAR_FAVORITES, SIDEBAR_FOLDERS)
├── types/types.ts            ← TabId, Project, Skill, NavItem, StatItem, Tools
└── libs/utils.ts             ← cn() — clsx + tailwind-merge
```

**Path alias**: `@/*` maps to `./src/*` (configured in tsconfig.json).

**State management**: Single React context (`WindowProvider`). Window IDs: `"portofolio"`, `"repository"`, `"activity"`.

**Data flow**: Static data arrays in `src/data/data.tsx`. Two API routes fetch GitHub data with `next: { revalidate: 60 }`.

**API routes**: `/api/repos` (no auth, public rate limit), `/api/activity` (requires `GITHUB_TOKEN` env var for higher rate limit).

# Environment Variables

| Variable                          | Used In                         | Required                                           |
| --------------------------------- | ------------------------------- | -------------------------------------------------- |
| `GITHUB_TOKEN`                    | `src/app/api/activity/route.ts` | Yes (for activity endpoint to avoid rate limiting) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | `src/app/layout.tsx`            | Yes (for Google Search Console)                    |

Both are committed in `.env` (dev convenience — do not expose in production).

# Code Quality Tooling

- **ESLint** — `eslint.config.mjs` uses `eslint-config-next/core-web-vitals` + `typescript`, plus project rules: `no-console` (warn), `@typescript-eslint/no-unused-vars` (warn, `^_` prefix allowed), `prefer-const` (warn).
- **Prettier** — `.prettierrc` (semi, trailingComma all, printWidth 100, lf). `prettier-plugin-tailwindcss` for class sorting.
- **Husky + lint-staged** — pre-commit hook runs `eslint --fix` and `prettier --write` on staged `*.{ts,tsx,mjs,json,md,css}`.
- **GitHub Actions** — `.github/workflows/ci.yml`: `lint` → `format:check` → `build` on push/PR to `main`.

# OpenCode Agent Config

- `opencode.json` — project config with `instructions: ["AGENTS.md"]`. Loads the design system rules automatically.
- `.opencode/agents/ui-reviewer.md` — subagent for checking Frutiger Aero / Tailwind v4 compliance (read-only).
- `.opencode/agents/ui-fixer.md` — subagent for automatically fixing design system violations.

# Known Gotchas

- **`src/components-old/`** — 4 empty subdirectories, no imports anywhere. Dead code.
- **`src/app/aero.css`** — Contains Windows 7 glass window styles. Import is **commented out** in `layout.tsx`. If the glass effect is missing, uncomment `import "./aero.css"` in layout.
- **`RepoTitleBar`** — Exists at `src/components/repo/RepoTitleBar.tsx` but **unused**. `AeroWindow` provides its own title bar via 7.css.
- **`repos.ts` sidebar data** — Uses emoji characters (`"⭐"`, `"📁"`) violating the "no emoji as icons" rule. Should use `lucide-react` or `.webp` icons.
- **Spelling inconsistency**: Desktop shortcut says "My Portfolio" but window `id` is `"portofolio"` (misspelled) and the shortcut says "Log activity" (inconsistent capitalization).
- **Dark mode**: CSS vars switch for dark mode in `globals.css` (lines 42-47) — but the app is designed for a Vista light aesthetic with a fixed background image, so dark mode may look broken.
- **Cursor SVGs**: Referenced in commented-out CSS (`cursor-normal.svg`, `cursor-pointer.svg`) — check if these files exist in `public/img/` before uncommenting.

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
  - ❌ `w-[10px]` → ✅ `w-2.5`
  - ❌ `p-[16px]` → ✅ `p-4`
  - ❌ `m-[8px]` → ✅ `m-2`
  - ❌ `gap-[12px]` → ✅ `gap-3`
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
- [ ] **No emoji as icons** — Use `lucide-react` icons or custom Vista `.webp` icons from `public/img/icons/`.
- [ ] **No purple/violet gradients** — Stay within the Aero palette: sky blue, teal, green, silver.
- [ ] **No `rounded-full` on buttons** — Buttons use `rounded-[3px]` to `rounded-[5px]`. Only tags/badges may use `rounded-full`.
- [ ] **No generic AI microcopy** — Avoid "passionate", "seamless experience", "unlock the power of", etc.
- [ ] **No inline style duplication** — Shared gradients/shadows must use CSS custom properties in `globals.css`.
- [ ] **Contrast preserved (WCAG AA)** — Text on translucent backgrounds must have ≥4.5:1 contrast.
- [ ] **`prefers-reduced-motion` respected** — Animations/motion must degrade gracefully.
- [ ] **No stock/AI illustrations** — Use Vista-era icons or custom iconography.
- [ ] **Border-radius consistency** — Use `--aero-radius-sm` (3px), `--aero-radius-md` (5px), or `--aero-radius-lg` (8px).
- [ ] **Correct spelling** — "Portfolio" (English) or "Portofolio" (Indonesian) — pick one, be consistent.

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
