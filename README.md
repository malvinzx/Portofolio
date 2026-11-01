<<<<<<< HEAD
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
=======

<div align="center">

# ✦ MALVIN — DIGITAL PORTFOLIO

### Creative Developer • UI/UX Designer • Digital Creator

A personal portfolio showcasing creativity, technology, and digital experiences.

<br/>

<img src="https://img.shields.io/badge/STATUS-ACTIVE-00C896?style=for-the-badge&labelColor=0D1117" />
<img src="https://img.shields.io/badge/BUILD-PRODUCTION-8B5CF6?style=for-the-badge&labelColor=0D1117" />
<img src="https://img.shields.io/badge/MADE_WITH-PASSION-FF6B9D?style=for-the-badge&labelColor=0D1117" />

<br/><br/>

**[🌐 Live Demo](#)** · **[📂 Repository](https://github.com/malvinzx/Portofolio)** · **[📩 Contact](mailto:tzxhanzo@gmail.com)**

</div>

---

## ✦ About

Welcome to my personal portfolio!

I'm **Malvin Prasetya Bintang Supratman**, a developer and digital creator passionate about building modern websites, creative digital experiences, and interactive interfaces.

This portfolio represents my journey, creativity, projects, skills, and passion for technology.

## ✦ Features

- Modern and cinematic user interface.
- Fully responsive design.
- Smooth scrolling and page transitions.
- Interactive animations and micro-interactions.
- Personal profile and introduction.
- Skills and technology showcase.
- Project showcase and gallery.
- Integrated music player.
- Contact and social media section.
- Optimized experience for mobile and desktop.

## ✦ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vite,git,github,figma,vscode&theme=dark" />

</div>

## ✦ Music Experience

Enjoy the music integrated into this portfolio.

| Track | Artist |
|:---|:---|
| Love in the Dark | Adele |
| Boys Don't Cry | The Cure |
| What If I Call | Alex Crichton |
| Please Don't Call | Bleachers |
| Fix You | Coldplay |

## ✦ Project Structure

```text
portfolio11/
├── public/
│   └── music/
│       ├── track-1.mp3
│       ├── track-2.mp3
│       ├── track-3.mp3
│       ├── track-4.mp3
│       └── track-5.mp3
│
├── src/
│   ├── components/
│   ├── data/
│   ├── assets/
│   ├── styles/
│   └── ...
│
├── index.html
├── package.json
└── README.md
```

## ✦ Getting Started

Clone this repository:

```bash
git clone https://github.com/malvinzx/Portofolio.git
```

Enter the project directory:

```bash
cd Portofolio
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## ✦ Connect With Me

<div align="center">

[![Instagram](https://img.shields.io/badge/Instagram-malvinzx8-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/malvinzx8)

[![TikTok](https://img.shields.io/badge/TikTok-kaisar.hirohito55-black?style=for-the-badge&logo=tiktok&logoColor=white)](https://tiktok.com/@kaisar.hirohito55)

[![GitHub](https://img.shields.io/badge/GitHub-malvinzx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/malvinzx)

[![Email](https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tzxhanzo@gmail.com)

</div>

---

<div align="center">

### ✦ Crafted with passion by Malvin

*Turning ideas into digital experiences.*

**© 2026 MALVIN. All Rights Reserved.**

</div>
>>>>>>> 52e6c963b23e9bf4be2d5b0fd92cf866013618ab
