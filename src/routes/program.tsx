import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Briefcase, Users, Award } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { waLink } from "@/lib/site";
import magangImg from "@/assets/magang-jepang.jpg";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Program Magang Jepang & SSW — LPK SO Hangguk Nippon";
const DESC =
  "Detail program magang Jepang dan 14 sektor SSW (Specified Skilled Worker). Persyaratan, manfaat, dan biaya program lengkap.";

export const Route = createFileRoute("/program")({
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
  component: ProgramPage,
});

const REQ = [
  "Lulusan SMA/SMK sederajat",
  "Pria / Wanita, usia 18 – 30 tahun",
  "Sehat jasmani dan rohani",
  "KTP, KK, Akta, Ijazah SD–SMK",
  "Foto 4×6 sebanyak 2 lembar",
];

const BENEFITS = [
  "Mahir Berbahasa Jepang & memahami budaya",
  "Bekerja sebagai pemagang profesional di Jepang",
  "Jenjang karier & penghasilan yang menjanjikan",
  "Sertifikasi yang diakui secara internasional",
];

const SSW = [
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

const COSTS = [
  { title: "Pendaftaran", price: "Rp 500.000", note: "Biaya awal pendaftaran" },
  { title: "Pendidikan", price: "Rp 8.000.000", note: "Bisa diangsur fleksibel" },
  { title: "Pemberangkatan", price: "Menyesuaikan", note: "Tersedia dana talangan" },
];

function ProgramPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Program Unggulan"
        title={
          <>
            Program <span className="text-gradient-red">Magang & SSW</span> Jepang
          </>
        }
        subtitle="Dua jalur karier ke Jepang yang kami tawarkan: Program Magang reguler dan Specified Skilled Worker (SSW) untuk 14 sektor industri."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Program" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionReveal>
            <img
              src={magangImg}
              alt="Pemagang Indonesia di perusahaan Jepang"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </SectionReveal>
          <SectionReveal delay={1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Program Magang
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Magang Profesional di Perusahaan Jepang
            </h2>
            <p className="mt-5 text-muted-foreground">
              Program magang dirancang untuk peserta yang ingin mendapatkan
              pengalaman kerja langsung di perusahaan Jepang sambil
              mengembangkan kompetensi bahasa dan budaya kerja.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold">
                  <Users className="h-4 w-4 text-primary" /> Persyaratan
                </div>
                <ul className="space-y-2">
                  {REQ.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold">
                  <Award className="h-4 w-4 text-primary" /> Manfaat
                </div>
                <ul className="space-y-2">
                  {BENEFITS.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[oklch(0.99_0.005_60)] bg-wave py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Specified Skilled Worker
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              14 Sektor SSW Jepang
            </h2>
            <p className="mt-4 text-muted-foreground">
              Visa kerja resmi Jepang yang dibuka sejak amandemen undang-undang
              Desember 2018, mencakup 14 sektor industri.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SSW.map((s, i) => (
              <SectionReveal key={s} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="hover-lift flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4 shadow-[var(--shadow-card)]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{s}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Biaya Program</h2>
          <p className="mt-3 text-muted-foreground">
            Transparan dan dapat dicicil sesuai kemampuan.
          </p>
        </SectionReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COSTS.map((c, i) => (
            <SectionReveal key={c.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-background p-7 text-center shadow-[var(--shadow-card)]">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.title}
                </div>
                <div className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                  {c.price}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal>
          <div className="mt-10 text-center">
            <a
              href={waLink("Halo, saya ingin tanya detail biaya program magang Jepang.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Tanya Biaya Lengkap
            </a>
          </div>
        </SectionReveal>
      </section>
    </SiteLayout>
  );
}
