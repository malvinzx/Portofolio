# Malvin — Portfolio & Digital Services

Vite + React 19 + TypeScript. Komponen animasi memakai React Bits (varian JavaScript + CSS) persis dari `prompt_website.txt`.

## Jalankan
```bash
npm install
npm run dev      # pengembangan
npm run build    # produksi
```

## Struktur
- `src/components/reactbits/` — 19 komponen React Bits (tanpa diubah) + `index.ts`
- `src/components/` — Header, Section, ThemeSwitcher
- `src/sections/` — Hero, Band, Profile, About, Skills, Projects, Gallery, Music, Contact
- `src/data/` — **isi konten ada di sini** (profile, tracks, gallery, projects)
- `src/theme/` + `src/styles/themes.css` — sistem tema (Minimal, Neo, Glass, Ink)
- `public/music/` — taruh 5 lagu: `track-1.mp3` … `track-5.mp3`
- `public/gallery/` — ganti `g1.svg`…`g6.svg` dengan fotomu (ubah `src/data/gallery.ts` bila ekstensi beda)
- `public/cards/` — gambar kartu lanyard (`front.png`, `back.png`); foto profil bisa dipasang di sini

## Tambah tema
1. Tambah blok `[data-theme='nama']` di `src/styles/themes.css`.
2. Tambah entri di `src/theme/themes.ts`.
