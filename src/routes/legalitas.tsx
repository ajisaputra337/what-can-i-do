import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileBadge, Award, Stamp } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { waLink } from "@/lib/site";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Legalitas — LPK SO Hangguk Nippon Resmi & Berlisensi";
const DESC =
  "Dokumen legalitas resmi LPK SO Hangguk Nippon: izin operasional, akreditasi, dan sertifikasi sebagai Sending Organization magang Jepang yang terdaftar.";

export const Route = createFileRoute("/legalitas")({
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
  component: LegalitasPage,
});

const DOCS = [
  {
    icon: FileBadge,
    title: "Izin Operasional LPK",
    desc: "Surat izin pendirian dan operasional Lembaga Pelatihan Kerja dari dinas terkait.",
  },
  {
    icon: Stamp,
    title: "Surat Penetapan Sending Organization",
    desc: "Pengakuan resmi sebagai SO (Sending Organization) magang Jepang.",
  },
  {
    icon: Award,
    title: "Sertifikat Akreditasi",
    desc: "Akreditasi program pelatihan Bahasa Jepang dan keterampilan kerja.",
  },
  {
    icon: ShieldCheck,
    title: "MOU Mitra Jepang",
    desc: "Perjanjian kerja sama dengan perusahaan & lembaga penerima di Jepang.",
  },
];

function LegalitasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resmi & Berlisensi"
        title={
          <>
            Legalitas <span className="text-gradient-red">Lengkap</span>
          </>
        }
        subtitle="Kami beroperasi dengan dokumen legal lengkap dan diakui sebagai Sending Organization resmi untuk program magang ke Jepang."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Legalitas" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {DOCS.map((d, i) => (
            <SectionReveal key={d.title} delay={((i % 2) + 1) as 1 | 2}>
              <div className="hover-lift flex gap-5 rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[oklch(0.95_0.05_140)] px-3 py-1 text-xs font-semibold text-[oklch(0.45_0.15_140)]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Terverifikasi
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-[oklch(0.99_0.005_60)] p-6 text-center"
              >
                <Stamp className="h-10 w-10 text-primary/40" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scan Dokumen {i + 1}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Upload scan sertifikat di sini
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="bg-[oklch(0.99_0.005_60)] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <SectionReveal>
            <h2 className="text-2xl font-bold md:text-3xl">
              Ingin verifikasi legalitas?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hubungi kami untuk informasi & verifikasi dokumen resmi.
            </p>
            <a
              href={waLink("Halo, saya ingin verifikasi legalitas LPK SO Hangguk Nippon.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Verifikasi via WhatsApp
            </a>
          </SectionReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
