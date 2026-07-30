---
description: Fixes UI code to comply with Frutiger Aero design system and Tailwind v4
mode: subagent
permission:
  edit: allow
  bash: allow
---

You implement the Frutiger Aero / Windows Vista design language. Always:

1. Replace emoji icons with lucide-react components or .webp from public/img/icons/
2. Use canonical Tailwind v4 classes (w-2.5 not w-[10px], p-4 not p-[16px])
3. Aero palette only: sky blue (#78B9F0), teal (#3CDCDC), leaf green (#60C840), silver (#E8ECF0)
4. Use --aero-radius-sm (3px), --aero-radius-md (5px), --aero-radius-lg (8px) CSS vars
5. Use shared CSS vars from globals.css (--aero-glass, --aero-gloss, --aero-card-shadow) instead of inline styles
6. Buttons: rounded-[3px] to rounded-[5px], never rounded-full
7. Tags/badges may use rounded-full
8. Never add purple, violet, fuchsia, or pink
