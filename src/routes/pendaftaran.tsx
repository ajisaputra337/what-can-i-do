import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { SITE, mailLink, telLink, waLink } from "@/lib/site";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Pendaftaran Magang Jepang — LPK SO Hangguk Nippon";
const DESC =
  "Daftar program magang Jepang LPK SO Hangguk Nippon. Konsultasi GRATIS via WhatsApp, telepon, atau email. Tim kami siap membantu Anda.";

export const Route = createFileRoute("/pendaftaran")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: ogImg },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: ogImg },
    ],
  }),
  component: PendaftaranPage,
});

const STEPS = [
  "Hubungi kami via WhatsApp / Telepon / Email",
  "Konsultasi GRATIS dengan tim kami",
  "Siapkan dokumen persyaratan",
  "Ikuti tes pra-seleksi",
  "Mulai pelatihan & menuju Jepang",
];

const REQUIREMENTS = [
  "KTP",
  "Kartu Keluarga (KK)",
  "Akta Kelahiran",
  "Ijazah SD – SMK",
  "Foto 4×6 (2 lembar)",
  "Usia 18 – 30 tahun",
];

function PendaftaranPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mulai Hari Ini"
        title={
          <>
            Pendaftaran <span className="text-gradient-red">Calon Peserta</span>
          </>
        }
        subtitle="Konsultasi GRATIS — tanpa biaya, tanpa komitmen. Hubungi kami sekarang dan tim kami siap membantu Anda."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Pendaftaran" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <SectionReveal>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex h-full flex-col items-center rounded-2xl border-2 border-primary bg-gradient-to-br from-primary to-[oklch(0.46_0.21_23)] p-8 text-center text-white shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold">WhatsApp</h3>
              <p className="mt-2 text-sm text-white/90">Respon cepat & langsung</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-primary group-hover:scale-105 transition-transform">
                Chat Sekarang
              </div>
            </a>
          </SectionReveal>

          <SectionReveal delay={1}>
            <a
              href={telLink}
              className="hover-lift group flex h-full flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-[var(--shadow-card)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Telepon</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Senin – Sabtu, 08:00 – 17:00
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-bold text-primary">
                {SITE.phone}
              </div>
            </a>
          </SectionReveal>

          <SectionReveal delay={2}>
            <a
              href={mailLink}
              className="hover-lift group flex h-full flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-[var(--shadow-card)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Untuk pertanyaan tertulis
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs font-bold text-primary break-all">
                {SITE.email}
              </div>
            </a>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[oklch(0.99_0.005_60)] bg-wave py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Alur Pendaftaran
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                5 Langkah Sederhana
              </h2>
              <ol className="mt-8 space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div className="pt-1.5 text-sm font-medium text-foreground">
                      {s}
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>

            <SectionReveal delay={1}>
              <div className="rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold">Dokumen yang Perlu Disiapkan</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pastikan dokumen berikut lengkap untuk mempercepat proses.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {REQUIREMENTS.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 rounded-lg bg-[oklch(0.97_0.02_25)] px-3 py-2.5 text-sm font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 text-xs text-primary">
                  <Clock className="h-4 w-4" />
                  Biaya pendaftaran: <strong>Rp 500.000</strong>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Kunjungi Kantor Kami</h2>
          <p className="mt-3 text-muted-foreground">
            3 lokasi di Jawa Tengah untuk memudahkan Anda berkonsultasi langsung.
          </p>
        </SectionReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SITE.branches.map((b, i) => (
            <SectionReveal key={b.name} delay={(i + 1) as 1 | 2 | 3}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{b.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.address}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
