# Malvin — Portfolio & Digital Services

Vite + React 19 + TypeScript. Komponen animasi memakai React Bits (varian JavaScript + CSS) persis dari `prompt_website.txt`.

## Jalankan
```bash
npm install
npm run dev      # pengembangan
npm run build    # produksi
```

## Struktur
- `src/components/reactbits/` — 23 komponen React Bits (tanpa diubah) + `index.ts`
- `src/components/` — Header (PillNav), MobileDock (Dock), Section, ThemeSwitcher
- `src/sections/` — Hero, Band, Profile, About, Skills, Projects, Gallery, Music, Contact
- `src/data/` — **isi konten ada di sini** (profile, tracks, gallery, projects)
- `src/theme/` + `src/styles/themes.css` — sistem tema (Minimal, Neo, Glass, Ink)
- `public/music/` — taruh 5 lagu: `track-1.mp3` … `track-5.mp3`
- `public/gallery/` — ganti `g1.svg`…`g6.svg` dengan fotomu (ubah `src/data/gallery.ts` bila ekstensi beda)
- `public/cards/` — kartu lanyard (`front/back.png`) dan kartu holo (`holo-front/back.png`)
- `public/profile/avatar.svg` — ganti dengan fotomu (atur `avatarUrl` di `src/sections/Profile.tsx`)

## Tambah tema
1. Tambah blok `[data-theme='nama']` di `src/styles/themes.css`.
2. Tambah entri di `src/theme/themes.ts`.

## Tambahan
- **Loading screen** (`components/Loader.tsx`): kunjungan pertama ada tombol "Masuk"; berikutnya otomatis.
- **Efek suara** (`lib/sfx.ts`): disintesis WebAudio, tanpa file. Tombol speaker di header untuk mute (tersimpan).
- **404** (`pages/NotFound.tsx`): tampil untuk path selain `/`. Hosting butuh rewrite ke `index.html` (sudah ada `vercel.json` dan `public/_redirects`).
- **Error boundary**, **bar progres scroll**, dan **toast online/offline** (`components/Extras.tsx`).
