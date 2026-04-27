import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Globe2,
  HandshakeIcon,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { SectionReveal } from "@/components/section-reveal";
import { CountUp } from "@/components/count-up";
import { SakuraPetals } from "@/components/sakura-petals";
import { SITE, mailLink, telLink, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-japan.jpg";
import welcomeImg from "@/assets/welcome-class.jpg";
import magangImg from "@/assets/magang-jepang.jpg";
import ogImg from "@/assets/og-image.jpg";

const TITLE =
  "LPK SO Hangguk Nippon — Pelatihan Magang & Kerja ke Jepang Resmi";
const DESC =
  "LPK SO Hangguk Nippon: Lembaga Pelatihan Kerja resmi untuk program magang Jepang & SSW (Specified Skilled Worker). Kursus Bahasa Jepang, pendampingan visa, dan keberangkatan terpercaya di Brebes, Slawi & Pemalang.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "LPK Jepang, magang Jepang, kerja ke Jepang, SSW Jepang, kursus bahasa Jepang Brebes, LPK Hangguk Nippon, sending organization Jepang, pelatihan kerja Jepang Jawa Tengah",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: ogImg },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: ogImg },
      { rel: "canonical", href: SITE.url },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: 1500, suffix: "+", label: "Lulusan & Pemagang" },
  { value: 12, suffix: " th", label: "Pengalaman" },
  { value: 80, suffix: "+", label: "Mitra Perusahaan Jepang" },
  { value: 14, suffix: "", label: "Sektor SSW Tersedia" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Resmi & Terpercaya",
    desc: "Lembaga berlisensi resmi dengan rekam jejak terbukti memberangkatkan ribuan pemagang ke Jepang.",
  },
  {
    icon: GraduationCap,
    title: "Kurikulum Terstandar",
    desc: "Bahasa Jepang JLPT, etos kerja, dan budaya Jepang diajarkan oleh instruktur berpengalaman.",
  },
  {
    icon: HandshakeIcon,
    title: "Pendampingan Penuh",
    desc: "Dari konsultasi gratis, persiapan dokumen, visa, hingga keberangkatan ke Jepang.",
  },
];

const REQUIREMENTS = [
  "Lulusan SMA/SMK sederajat",
  "Pria / Wanita, usia 18 – 30 tahun",
  "Sehat jasmani dan rohani",
  "Kelengkapan administrasi: KTP, KK, Akta, Ijazah SD–SMK, Foto 4×6 (2 lembar)",
];

const BENEFITS = [
  "Mahir Berbahasa Jepang & memahami budaya kerja",
  "Bekerja sebagai pemagang profesional di Jepang",
  "Jenjang karier dan penghasilan yang lebih menjanjikan",
  "Sertifikasi yang diakui secara internasional",
];

const ROLES = [
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    desc: "Tanya jawab langsung tentang program, biaya, dan jalur karier ke Jepang.",
  },
  {
    icon: GraduationCap,
    title: "Kursus Bahasa Jepang Terpercaya",
    desc: "Lembaga kursus dengan kurikulum komprehensif & instruktur kompeten.",
  },
  {
    icon: Globe2,
    title: "Bantuan Permohonan Visa",
    desc: "Pendampingan penuh pengurusan dokumen dan visa magang ke Jepang.",
  },
];

const STEPS = [
  {
    no: "01",
    title: "Tes Pra Seleksi",
    points: [
      "Interview oleh PT. Hangguk Nippon Indonesia",
      "Tes Matematika & Psikotes",
      "Tes Fisik & Medical Check Up",
    ],
  },
  {
    no: "02",
    title: "Mengikuti Ujian",
    points: ["Ujian kemampuan Bahasa Jepang Dasar"],
  },
  {
    no: "03",
    title: "Interview User",
    points: ["Wawancara langsung oleh pihak User dari Jepang"],
  },
  {
    no: "04",
    title: "Pelatihan",
    points: [
      "Bahasa Jepang & Budaya Jepang",
      "Di Training Center selama 3–4 bulan",
    ],
  },
  {
    no: "05",
    title: "Persiapan Keberangkatan",
    points: ["Pelatihan Pre-Departure", "Pengurusan Dokumen ke Jepang"],
  },
  {
    no: "06",
    title: "Pemberangkatan",
    points: [
      "Medical Check Up final",
      "Pembayaran Administrasi",
      "Pengurusan Visa",
    ],
  },
];

const COSTS = [
  {
    title: "Pendaftaran",
    price: "Rp 500.000",
    note: "Biaya pendaftaran awal",
    highlight: false,
  },
  {
    title: "Pendidikan",
    price: "Rp 8.000.000",
    note: "Bisa diangsur — fleksibel sesuai kemampuan",
    highlight: true,
  },
  {
    title: "Pemberangkatan",
    price: "Menyesuaikan",
    note: "Sesuai perusahaan tujuan • Tersedia dana talangan",
    highlight: false,
  },
];

const SSW_SECTORS = [
  "Care Worker",
  "Building Cleaning Management",
  "Machine Parts & Tooling",
  "Industrial Machinery Industry",
  "Electric, Electronics & Information",
  "Construction Industry",
  "Shipbuilding & Ship Machinery",
  "Automobile Repair & Maintenance",
  "Aviation Industry",
  "Accommodation Industry",
  "Agriculture",
  "Fishery & Aquaculture",
  "Manufacture of Food & Beverages",
  "Food Service Industry",
];

const NEWS = [
  { date: "05 Feb", title: "Ujian Bahasa Jepang JLPT N5 Berlangsung Sukses" },
  { date: "04 Feb", title: "Program LPK SO Hangguk Periode Baru Dibuka" },
  { date: "03 Feb", title: "Legalitas Resmi LPK SO Hangguk Nippon" },
  { date: "02 Feb", title: "Profile Lengkap LPK SO Hangguk Nippon" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pemandangan Gunung Fuji dengan sakura — simbol Jepang"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <SakuraPetals count={16} />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:px-8 md:py-36 lg:py-44">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <span className="hinomaru-dot !mr-0" />
              Sending Organization Magang Jepang
            </span>
          </SectionReveal>

          <SectionReveal delay={1}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Wujudkan Mimpi <br />
              <span className="text-gradient-red">Magang & Kerja</span> di
              Jepang
            </h1>
          </SectionReveal>

          <SectionReveal delay={2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
              <strong className="text-foreground">LPK SO Hangguk Nippon</strong>{" "}
              — Lembaga Pendidikan & Pelatihan Kerja ke Jepang dengan tim
              berpengalaman & profesional. Kami siapkan Anda dari nol hingga
              berangkat ke Jepang.
            </p>
          </SectionReveal>

          <SectionReveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.52_0.21_23/0.55)] transition-all hover:scale-[1.03] hover:bg-[oklch(0.46_0.21_23)]"
              >
                <MessageCircle className="h-4 w-4" />
                Daftar via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={4}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Resmi & Berlisensi
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> 1500+ Lulusan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Pendampingan Penuh
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 md:px-8">
        <SectionReveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-soft)] md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-background px-6 py-7 text-center md:py-8"
              >
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* WELCOME / ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              ようこそ • Selamat Datang
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Pelatihan & Kursus Bahasa Jepang Profesional
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Dalam upaya meningkatkan kualitas profesional Sumber Daya Manusia
              di Jawa Tengah dan Indonesia, <strong>LPK Hangguk Nippon</strong>{" "}
              merupakan Lembaga Pendidikan dan Keterampilan Nonformal yang
              menyelenggarakan proses belajar Bahasa bagi masyarakat yang
              memerlukan bekal pengetahuan, keterampilan, dan pengembangan
              karier ke Jepang.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Kami mempersiapkan kandidat dengan informasi wawasan, etos kerja,
              budaya Jepang, hingga belajar bahasa sebagai bekal berkomunikasi
              agar calon pekerja memiliki wawasan dan keterampilan yang
              kompeten.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="text-center md:text-left">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:mx-0">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-foreground md:text-sm">
                    {v.title}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img
                src={welcomeImg}
                alt="Suasana kelas Bahasa Jepang LPK Hangguk Nippon"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute -bottom-6 -left-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
                <span className="hinomaru-dot !mr-0 !h-5 !w-5" />
                <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  日本
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* PROGRAM MAGANG */}
      <section className="bg-[oklch(0.99_0.005_60)] bg-wave py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Program Unggulan
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Program Magang ke Jepang
            </h2>
            <p className="mt-4 text-muted-foreground">
              Persiapan komprehensif untuk Anda yang ingin magang & berkarier di
              Jepang.
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <SectionReveal>
              <div className="hover-lift h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)] md:p-9">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Persyaratan Peserta
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {REQUIREMENTS.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={1}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)] md:p-9">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Manfaat Program
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          {/* Peranan LPK */}
          <SectionReveal className="mt-16 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">
              Peranan LPK Hangguk Nippon
            </h3>
          </SectionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ROLES.map((r, i) => (
              <SectionReveal key={r.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.62_0.24_25)] text-primary-foreground shadow-[0_8px_20px_-6px_oklch(0.52_0.21_23/0.4)]">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold">{r.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TAHAPAN PROSES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            6 Tahapan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Proses Menuju Jepang
          </h2>
          <p className="mt-4 text-muted-foreground">
            Setiap langkah didampingi tim profesional kami.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <SectionReveal
              key={s.no}
              delay={((i % 3) + 1) as 1 | 2 | 3}
            >
              <div className="hover-lift relative h-full overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
                <div className="absolute -right-3 -top-3 select-none text-7xl font-black text-primary/5">
                  {s.no}
                </div>
                <div className="relative">
                  <div className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-3 text-xs font-bold text-primary-foreground">
                    Langkah {s.no}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* BIAYA */}
      <section className="bg-[oklch(0.18_0.01_270)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.13_80)]">
              Investasi Masa Depan
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Biaya Program
            </h2>
            <p className="mt-4 text-white/70">
              Transparan & terjangkau — bisa diangsur dengan fleksibel.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COSTS.map((c, i) => (
              <SectionReveal key={c.title} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`hover-lift relative h-full rounded-2xl border p-7 transition-all ${
                    c.highlight
                      ? "border-primary bg-gradient-to-br from-primary to-[oklch(0.46_0.21_23)] shadow-[0_20px_50px_-12px_oklch(0.52_0.21_23/0.6)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {c.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[oklch(0.78_0.13_80)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                      Populer
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    {c.title}
                  </div>
                  <div className="mt-3 text-3xl font-bold md:text-4xl">
                    {c.price}
                  </div>
                  <p className="mt-3 text-sm text-white/70">{c.note}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSW */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Specified Skilled Worker
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              14 Sektor SSW Jepang
            </h2>
            <p className="mt-5 text-muted-foreground">
              Parlemen Jepang mengesahkan amandemen{" "}
              <em>Immigration Control and Refugee Recognition Act</em> pada
              Desember 2018 dengan menambah 2 kategori baru status visa kerja
              yaitu <strong>SSW Tipe 1</strong> dan <strong>Tipe 2</strong>.
            </p>
            <p className="mt-3 text-muted-foreground">
              Kami siap mendampingi Anda untuk masuk ke salah satu dari 14
              sektor bidang kerja SSW.
            </p>
          </SectionReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {SSW_SECTORS.map((s, i) => (
              <SectionReveal
                key={s}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              >
                <div className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm transition-all hover:border-primary hover:bg-primary/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Briefcase className="h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{s}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI PREVIEW */}
      <section className="bg-[oklch(0.99_0.005_60)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Galeri
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Momen & Kegiatan
              </h2>
            </SectionReveal>
            <SectionReveal delay={1}>
              <a
                href="/galeri"
                className="story-link text-sm font-semibold text-primary"
              >
                Lihat Galeri Lengkap →
              </a>
            </SectionReveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SectionReveal
                key={i}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              >
                <div className="hover-lift group relative aspect-square overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-[oklch(0.97_0.02_25)] to-[oklch(0.95_0.04_15)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="hinomaru-dot !mr-0 !h-3 !w-3" />
                    <span className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                      Foto Kegiatan {i + 1}
                    </span>
                    <span className="mt-1 text-[10px] text-muted-foreground">
                      Upload foto di sini
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BERITA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Berita & Events
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Kabar Terbaru
            </h2>
          </SectionReveal>
          <SectionReveal delay={1}>
            <a
              href="/berita"
              className="story-link text-sm font-semibold text-primary"
            >
              Semua Berita →
            </a>
          </SectionReveal>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((n, i) => (
            <SectionReveal
              key={n.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <article className="hover-lift group h-full overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[oklch(0.95_0.04_15)] to-[oklch(0.97_0.02_25)]">
                  <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
                    <span className="text-base font-bold leading-none">
                      {n.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider">
                      {n.date.split(" ")[1]}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug group-hover:text-primary">
                    {n.title}
                  </h3>
                  <a
                    href="/berita"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary"
                  >
                    Baca selengkapnya
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* LOKASI */}
      <section className="bg-[oklch(0.99_0.005_60)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Kunjungi Kami
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Lokasi Kantor
            </h2>
            <p className="mt-4 text-muted-foreground">
              3 lokasi tersebar di Jawa Tengah untuk memudahkan Anda.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SITE.branches.map((b, i) => (
              <SectionReveal key={b.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.address}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={magangImg}
            alt=""
            width={1280}
            height={896}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-[oklch(0.46_0.21_23/0.85)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-28">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Siap Memulai Perjalanan ke Jepang?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              Konsultasi GRATIS dengan tim kami. Kami bantu wujudkan mimpi karier
              Anda di Jepang.
            </p>
          </SectionReveal>
          <SectionReveal delay={1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-2xl transition-all hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Chat WhatsApp
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <a
                href={mailLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Email Kami
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
