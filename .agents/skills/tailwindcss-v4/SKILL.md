---
name: tailwindcss-v4
description: >-
  Panduan menulis dan meng-upgrade kode ke standar Tailwind CSS v4 (CSS-first
  config, bukan lagi tailwind.config.js). WAJIB dipakai setiap kali menulis
  class Tailwind baru, membuat project frontend baru dengan Tailwind,
  mengedit file CSS/HTML/JSX yang memakai Tailwind, atau saat user minta
  upgrade/migrasi project dari Tailwind v3 ke v4. Mencakup: cara import CSS
  (pakai @import tailwindcss, bukan @tailwind base/components/utilities),
  nama utility yang berubah (shadow-sm jadi shadow-xs, ring jadi ring-3,
  outline-none jadi outline-hidden, dll), @theme, @utility, @custom-variant,
  prefix, default border/ring color jadi currentColor, dan breaking changes
  lain dari upgrade guide resmi. Gunakan skill ini bahkan jika user tidak
  menyebut v4 secara eksplisit -- cukup menyebut Tailwind CSS di project baru
  sudah cukup jadi pemicu, karena default saat ini adalah v4.
---

# Tailwind CSS v4 — Panduan Standar & Upgrade

Skill ini merangkum seluruh perubahan breaking dari Tailwind CSS v3 ke v4, berdasarkan upgrade guide resmi (tailwindcss.com/docs/upgrade-guide). Gunakan sebagai referensi wajib setiap menulis atau mengedit kode yang memakai Tailwind, supaya class yang dihasilkan tidak memakai sintaks v3 yang sudah usang.

## Kapan pakai skill ini

- Menulis class Tailwind baru di HTML/JSX/Vue/Svelte
- Setup project baru dengan Tailwind CSS (Vite, PostCSS, atau CLI)
- Meng-upgrade / migrasi project lama dari v3 ke v4
- Mengecek apakah kode existing masih pakai sintaks v3 yang deprecated

## Alur kerja upgrade project existing

1. **Cek versi browser target.** Tailwind v4 butuh Safari 16.4+, Chrome 111+, Firefox 128+ (karena pakai `@property` dan `color-mix()`). Kalau project masih harus support browser lama, tetap di v3.4.
2. **Jalankan upgrade tool otomatis** di branch baru:
   ```
   npx @tailwindcss/upgrade
   ```
   Tool ini butuh Node.js 20+, dan akan otomatis migrasi dependency, config, serta file template. Review diff-nya dengan teliti sebelum merge.
3. Kalau upgrade manual (tanpa tool), ikuti bagian "Setup project" dan "Daftar breaking changes" di bawah.

## Setup project (instalasi manual)

**PostCSS** — plugin PostCSS sekarang paket terpisah, dan import/vendor-prefixing sudah otomatis (hapus `postcss-import` & `autoprefixer`):
```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Vite** — disarankan pakai plugin Vite dedicated (lebih cepat):
```ts
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

**CLI** — sekarang di paket `@tailwindcss/cli`:
```
npx @tailwindcss/cli -i input.css -o output.css
```

**Import CSS** — v4 tidak lagi pakai `@tailwind` directives:
```css
/* v3 (jangan pakai lagi) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4 */
@import "tailwindcss";
```

## Daftar breaking changes (checklist)

### 1. Utility yang dihapus (sudah deprecated lama di v3)
| Jangan pakai | Ganti dengan |
|---|---|
| `bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `divide-opacity-*`, `ring-opacity-*`, `placeholder-opacity-*` | modifier opacity langsung, mis. `bg-black/50` |
| `flex-shrink-*` | `shrink-*` |
| `flex-grow-*` | `grow-*` |
| `overflow-ellipsis` | `text-ellipsis` |
| `decoration-slice` | `box-decoration-slice` |
| `decoration-clone` | `box-decoration-clone` |

### 2. Utility yang di-rename (skala shadow/blur/radius geser satu tingkat)
| v3 | v4 |
|---|---|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `drop-shadow-sm` | `drop-shadow-xs` |
| `drop-shadow` | `drop-shadow-sm` |
| `blur-sm` | `blur-xs` |
| `blur` | `blur-sm` |
| `backdrop-blur-sm` | `backdrop-blur-xs` |
| `backdrop-blur` | `backdrop-blur-sm` |
| `rounded-sm` | `rounded-xs` |
| `rounded` | `rounded-sm` |
| `outline-none` | `outline-hidden` (lihat poin 3) |
| `ring` | `ring-3` (lihat poin 4) |

Versi "bare" (tanpa suffix) masih jalan untuk backward compatibility, tapi hasilnya beda dari v3 — jadi selalu pakai versi eksplisit di atas.

### 3. `outline-hidden` vs `outline-none`
- `outline` sekarang default `outline-width: 1px` (bukan otomatis dari `outline-*` angka saja — semua `outline-<angka>` sekarang otomatis `outline-style: solid`).
- Yang dulu namanya `outline-none` (sebenarnya bukan `outline-style: none`, tapi outline transparan untuk accessibility/forced-colors mode) sekarang bernama **`outline-hidden`**.
- `outline-none` sekarang benar-benar berarti `outline-style: none`.
- Ganti semua `focus:outline-none` → `focus:outline-hidden`.

### 4. Default `ring` width berubah 3px → 1px
- `ring` polos dulu = 3px. Sekarang `ring` = 1px (konsisten dengan border/outline).
- Ganti `ring` → `ring-3` untuk mempertahankan tampilan lama, dan tambahkan warna eksplisit (`ring-blue-500`) karena default warna ring juga berubah jadi `currentColor` (dulu `blue-500`).

### 5. Selector `space-x-*` / `space-y-*` dan `divide-*` berubah
Dulu pakai sibling selector (`:not([hidden]) ~ :not([hidden])`), sekarang pakai `:not(:last-child)`. Bisa mempengaruhi elemen inline atau margin custom di child. Kalau masalah, migrasi ke flex/grid + `gap-*`.

### 6. Gradient dengan variant tidak lagi "reset" penuh
Di v3, override sebagian gradient (mis. `dark:from-blue-500`) me-reset stop lain jadi transparan. Di v4, stop lain dipertahankan. Kalau butuh "unset" stop tengah, pakai `via-none` secara eksplisit.

### 7. Konfigurasi `container` lewat `@utility`, bukan config object
```css
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
```

### 8. Default border & ring color → `currentColor`
Dulu `border-*`/`divide-*` default `gray-200`. Sekarang default `currentColor`. **Selalu tulis warna eksplisit** tiap pakai `border` atau `divide`, mis. `border border-gray-200`.

### 9. Preflight (base styles) berubah
- Placeholder text sekarang pakai current text color 50% opacity (dulu `gray-400` fix).
- `<button>` sekarang `cursor: default` (dulu `cursor: pointer`).
- Margin `<dialog>` di-reset ke 0 (dulu ada margin browser default).
- Atribut `hidden` sekarang selalu menang di atas class display (`block`, `flex`, dst) — kecuali `hidden="until-found"`.

### 10. Prefix sekarang di depan seperti variant
```html
<!-- v4 -->
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">
```
Setup di CSS: `@import "tailwindcss" prefix(tw);`

### 11. Important modifier `!` pindah ke akhir class
```html
<!-- v3 -->
<div class="!flex !bg-red-500">
<!-- v4 -->
<div class="flex! bg-red-500!">
```

### 12. Custom utility pakai `@utility`, bukan `@layer utilities`
```css
@utility tab-4 {
  tab-size: 4;
}
```
(`@layer utilities { .tab-4 {...} }` gaya v3 sudah tidak direkomendasikan — v4 pakai native CSS cascade layers.)

### 13. Urutan stacking variant dibalik: kiri-ke-kanan
```html
<!-- v3 -->
<ul class="first:*:pt-0">
<!-- v4 -->
<ul class="*:first:pt-0">
```

### 14. Arbitrary value pakai CSS variable: `()` bukan `[]`
```html
<!-- v3 -->
<div class="bg-[--brand-color]">
<!-- v4 -->
<div class="bg-(--brand-color)">
```

### 15. Koma di arbitrary value grid/object-position → underscore
```html
<!-- v3 -->
<div class="grid-cols-[max-content,auto]">
<!-- v4 -->
<div class="grid-cols-[max-content_auto]">
```

### 16. `hover` variant butuh device yang benar-benar support hover
v4 membungkus `hover:` dengan `@media (hover: hover)`. Kalau butuh hover tetap trigger di touch device, override manual:
```css
@custom-variant hover (&:hover);
```

### 17. `transition`/`transition-colors` sekarang termasuk `outline-color`
Kalau set outline color hanya saat `hover:`/`focus:`, akan terlihat transisi warna dari default. Set warna outline secara unconditional supaya tidak "loncat".

### 18. Transform utilities (`rotate-*`, `scale-*`, `translate-*`) sekarang property CSS individual
- `transform-none` tidak lagi reset rotate/scale/translate → pakai `scale-none`, dsb. per-property.
- Kalau custom `transition-[...]` menyertakan `transform`, ganti ke property individual: `transition-[opacity,scale]`, bukan `transition-[opacity,transform]`.

### 19. `corePlugins` config sudah tidak didukung
Tidak bisa lagi disable utility tertentu lewat `corePlugins` di v4.

### 20. `theme()` function → pakai CSS variable
```css
/* v3 gaya lama */
background-color: theme(colors.red.500);
/* v4 */
background-color: var(--color-red-500);
```
Untuk konteks yang butuh `theme()` (mis. media query), pakai nama variable, bukan dot notation:
```css
@media (width >= theme(--breakpoint-xl)) { ... }
```

### 21. `tailwind.config.js` tidak auto-detect lagi
Kalau masih perlu JS config, load eksplisit:
```css
@config "../../tailwind.config.js";
```
`corePlugins`, `safelist`, `separator` di JS config tidak didukung lagi di v4 — pakai `@source inline()` untuk safelist.

### 22. `resolveConfig` dari JS dihapus
Kalau butuh nilai theme di JS runtime, pakai `getComputedStyle` untuk baca CSS variable dari `:root`.

### 23. `@apply` di Vue/Svelte/CSS Modules butuh `@reference`
Stylesheet terpisah (CSS modules, `<style>` block Vue/Svelte/Astro) tidak otomatis punya akses ke theme variable/custom utility. Import eksplisit tanpa duplikasi CSS:
```vue
<style>
@reference "../../app.css";
h1 { @apply text-2xl font-bold text-red-500; }
</style>
```
Atau langsung pakai CSS variable tanpa `@apply` (lebih cepat):
```vue
<style>
h1 { color: var(--text-red-500); }
</style>
```

### 24. Sass/Less/Stylus tidak didukung
Tailwind v4 dirancang jadi preprocessor-nya sendiri — tidak bisa dipakai bareng Sass/Less/Stylus.

## Konfigurasi theme di v4 (CSS-first, bukan JS)

Ganti `tailwind.config.js` `theme.extend` dengan block `@theme` di CSS:
```css
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
}
```

## Checklist cepat sebelum submit kode

- [ ] Pakai `@import "tailwindcss"`, bukan `@tailwind base/components/utilities`
- [ ] Tidak ada `shadow-sm`/`shadow`/`blur-sm`/`blur`/`rounded-sm`/`rounded` tanpa cek apakah maksudnya versi v3 atau v4
- [ ] `ring` → `ring-3` + warna eksplisit kalau butuh tampilan v3
- [ ] `outline-none` untuk fokus → ganti `outline-hidden`
- [ ] `border`/`divide` selalu disertai warna eksplisit
- [ ] Tidak ada `!` di depan class (`!flex`) — pindah ke belakang (`flex!`)
- [ ] Custom utility pakai `@utility`, bukan `@layer utilities`
- [ ] Arbitrary value dengan CSS variable pakai `(--var)`, bukan `[--var]`
