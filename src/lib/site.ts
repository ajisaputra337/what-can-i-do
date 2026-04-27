// Centralized site config — used across SEO and components
export const SITE = {
  name: "LPK SO Hangguk Nippon",
  shortName: "LPK Hangguk Nippon",
  tagline: "SO (Sending Organization) Magang Jepang Terpercaya",
  description:
    "LPK SO Hangguk Nippon — Lembaga Pelatihan Kerja resmi untuk program magang & SSW (Specified Skilled Worker) ke Jepang. Pelatihan Bahasa Jepang, budaya, dan pendampingan visa hingga keberangkatan.",
  url: "https://lpkhanggurnippon.com",
  email: "lpkhangguknippon.01@gmail.com",
  phone: "+62-877-3014-6552",
  phoneRaw: "+6287730146552",
  whatsapp: "6287730146552",
  whatsappMessage:
    "Halo LPK SO Hangguk Nippon, saya tertarik untuk mendaftar program magang Jepang. Mohon informasinya 🙏",
  address: {
    main: "Jl. Raya Kubangjati, Kel. Kubangjati, Kab. Brebes, Jawa Tengah 52263, Indonesia",
    locality: "Brebes",
    region: "Jawa Tengah",
    postalCode: "52263",
    country: "ID",
  },
  branches: [
    {
      name: "Kantor Pusat — Brebes",
      address:
        "Jl. Raya Kubangjati, Kel. Kubangjati, Kab. Brebes, Jawa Tengah 52263",
    },
    {
      name: "Cabang Slawi",
      address:
        "Jl. Raya Slawi - Jatibarang, Ds. Gumayun 01, Jl. Abimanyu RT 03 RW 01 No. 17 (Masjid JAMI'UL ANWAR ke selatan 100 m)",
    },
    {
      name: "Cabang Pemalang",
      address:
        "Dukuh Tambakyuda RT 02 RW 01, Desa Bojongnangka, Kec. Pemalang, Kab. Pemalang",
    },
  ],
} as const;

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;
export const mailLink = `mailto:${SITE.email}`;

export const NAV_ITEMS = [
  { to: "/", label: "Beranda" },
  { to: "/profile", label: "Profile" },
  { to: "/legalitas", label: "Legalitas" },
  { to: "/program", label: "Program" },
  { to: "/ujian", label: "Ujian" },
  { to: "/berita", label: "Berita" },
  { to: "/galeri", label: "Galeri" },
  { to: "/pendaftaran", label: "Pendaftaran" },
] as const;
