Landing page modern Japan minimalis untuk **LPK SO Hangguk Nippon** — lembaga pelatihan kerja ke Jepang. Fokus pada kepercayaan, kredibilitas, dan konversi calon siswa via WhatsApp/telepon. Ringan, full SEO, dengan animasi scroll yang halus dan interaktif.

## Gaya Visual

- **Palette**: Putih bersih (#FFFFFF), merah Jepang (#BC002D) sebagai aksen, abu-abu lembut (#F5F5F5) untuk background section, hitam pekat (#1A1A1A) untuk teks
- **Tipografi**: Sans-serif modern (Inter / Plus Jakarta Sans) + sentuhan font Jepang (Noto Sans JP) untuk aksen heading
- **Mood**: Minimalis ala desain Jepang modern — banyak ruang kosong, garis tipis, motif lingkaran merah halus, elemen 円/桜 sebagai detail dekoratif

## Struktur Halaman (Multi-route untuk SEO)

Setiap halaman punya `head()` sendiri (title, description, og:title, og:description) untuk SEO penuh dan social sharing.

```
/              → Beranda (landing utama)
/profile       → Tentang LPK
/legalitas     → Dokumen & sertifikasi resmi
/program       → Detail program magang & SSW
/ujian         → Tahapan tes & ujian
/berita        → Daftar berita & event
/galeri        → Galeri foto kegiatan
/pendaftaran   → Info pendaftaran + CTA WA/telepon
```

## Halaman Beranda (/)

1. **Sticky Navbar** — Logo + 8 menu, tombol "Daftar Sekarang" merah di kanan, mobile hamburger menu
2. **Hero Section** — Heading besar "Wujudkan Mimpi Magang & Kerja di Jepang", subheading, 2 CTA (WhatsApp & Telepon), badge trust ("Resmi & Terpercaya"), background AI image suasana Jepang/sakura dengan overlay halus
3. **Stats Bar** — 4 angka kunci (siswa lulus, tahun pengalaman, mitra Jepang, program aktif) dengan count-up animation
4. **Welcome Section** — Sambutan singkat "Selamat Datang di LPK Hangguk Nippon" dengan foto AI suasana kelas
5. **Tentang Kami** — Penjelasan ringkas + 3 nilai utama (kartu dengan icon)
6. **Program Magang** — Persyaratan peserta + manfaat program dalam grid kartu interaktif
7. **Peranan LPK** — 3 poin (Konsultasi gratis, Kursus terpercaya, Bantuan visa) dengan icon
8. **Tahapan Proses** — Timeline vertikal/horizontal 6 langkah dengan animasi reveal saat scroll
9. **Biaya** — 3 kartu (Pendaftaran, Pendidikan, Pemberangkatan) dengan harga jelas
10. **Specified Skilled Worker (SSW)** — Grid 14 sektor bidang kerja dengan icon masing-masing
11. **Galeri Preview** — Grid 6 foto + tombol "Lihat Galeri Lainnya"
12. **Berita Terbaru** — 3 kartu berita preview
13. **Lokasi** — 3 kartu lokasi (Brebes, Slawi, Pemalang) + embed Google Maps
14. **CTA Akhir** — Banner besar "Siap Memulai Perjalanan ke Jepang?" + tombol WA & telepon
15. **Footer** — Kontak, alamat, copyright 2026

## Animasi Interaktif (Ringan)

- **Fade-in + slide-up** saat section masuk viewport (Intersection Observer, no library)
- **Count-up** untuk angka statistik
- **Hover scale** halus pada kartu (transform CSS)
- **Smooth scroll** untuk anchor internal
- **Sticky navbar** dengan transisi background saat scroll
- **Timeline reveal** untuk tahapan proses (langkah muncul satu per satu)
- **Parallax halus** pada hero image
- **Sakura petals** falling animation di hero (CSS-only, ringan)

Semua animasi pakai CSS transforms + opacity (GPU-accelerated), no heavy library seperti Framer Motion untuk menjaga bundle ringan.

## Pendaftaran (Tanpa Database)

- Setiap CTA "Daftar" / "Hubungi Kami" mengarah ke:
  - **WhatsApp**: `https://wa.me/6287730146552?text=Halo,%20saya%20tertarik%20mendaftar%20di%20LPK%20SO%20Hangguk%20Nippon`
  - **Telepon**: `tel:+6287730146552`
  - **Email**: `mailto:lpkhangguknippon.01@gmail.com`
- Floating WhatsApp button di pojok kanan bawah (selalu terlihat)

## Gambar (AI + Placeholder)

**AI generated** (Nano Banana, disimpan di `src/assets/`):
- Hero: suasana Jepang modern dengan sakura & bangunan tradisional
- Welcome: ilustrasi kelas bahasa Jepang
- Section magang: pemagang Indonesia di Jepang (suasana kerja profesional)
- Background pattern: motif gelombang Jepang halus
- Icon-icon untuk 14 sektor SSW

**Placeholder** (Anda upload nanti):
- Galeri foto kegiatan (6-12 slot dengan label jelas "Upload foto kegiatan di sini")
- Foto tim/instruktur
- Logo legalitas/sertifikat

## SEO Lengkap

- **Per-route metadata**: title, description, og:title, og:description, og:image unik tiap halaman
- **Structured data JSON-LD**: 
  - `EducationalOrganization` schema di root
  - `LocalBusiness` schema dengan 3 alamat
  - `BreadcrumbList` di tiap halaman
  - `FAQPage` di halaman program
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` dengan heading hierarchy benar (h1 → h2 → h3)
- **Alt text** deskriptif untuk semua gambar (bahasa Indonesia)
- **Sitemap.xml** dinamis via server route
- **robots.txt**
- **Lang attribute** `<html lang="id">`
- **Meta keywords** & **canonical URL**
- **Open Graph + Twitter Card** lengkap dengan og:image bertema Jepang

## Performa (Tetap Ringan)

- Tanpa Framer Motion / GSAP — animasi CSS native + Intersection Observer
- Lazy load gambar dengan `loading="lazy"`
- Image format optimized (AI images disimpan sebagai WebP/PNG terkompresi)
- Tanpa database, tanpa auth, tanpa backend — pure static SSR
- Komponen shadcn/ui yang sudah tersedia (button, card, accordion, dll)
- Font dimuat via `font-display: swap`

## Detail Teknis

- **Framework**: TanStack Start (sudah ada) dengan SSR penuh
- **Styling**: Tailwind v4 + custom design tokens di `src/styles.css`
- **Routing**: File-based di `src/routes/` (8 route file)
- **Komponen reusable**: `Navbar`, `Footer`, `FloatingWhatsApp`, `SectionReveal` (animation wrapper), `CountUp`
- **Bahasa**: Konten 100% Bahasa Indonesia
- **Mobile-first responsive**: breakpoint sm/md/lg/xl

Setelah disetujui, saya akan generate gambar AI bertema Jepang, membangun semua route, komponen animasi ringan, dan struktur SEO lengkap.