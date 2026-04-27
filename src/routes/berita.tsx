import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Berita & Events — LPK SO Hangguk Nippon";
const DESC =
  "Kabar terbaru, kegiatan, ujian, dan event LPK SO Hangguk Nippon. Ikuti perkembangan program magang Jepang kami.";

export const Route = createFileRoute("/berita")({
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
  component: BeritaPage,
});

const NEWS = [
  {
    date: { day: "05", month: "Feb" },
    title: "Ujian Bahasa Jepang JLPT N5 Berlangsung Sukses",
    excerpt:
      "Sebanyak puluhan peserta mengikuti ujian Bahasa Jepang dengan hasil memuaskan, siap melanjutkan ke tahap interview user.",
    category: "Ujian",
  },
  {
    date: { day: "04", month: "Feb" },
    title: "Program LPK SO Hangguk Periode Baru Dibuka",
    excerpt:
      "Pendaftaran untuk angkatan baru program magang Jepang dibuka. Konsultasi gratis tersedia di seluruh cabang.",
    category: "Program",
  },
  {
    date: { day: "03", month: "Feb" },
    title: "Legalitas LPK SO Hangguk Diperbarui",
    excerpt:
      "Sertifikasi dan dokumen legalitas resmi telah diperbarui — memperkuat posisi kami sebagai SO terpercaya.",
    category: "Legalitas",
  },
  {
    date: { day: "02", month: "Feb" },
    title: "Profile LPK SO Hangguk Nippon Resmi",
    excerpt:
      "Mengenal lebih dekat lembaga pelatihan kerja yang telah membantu ribuan pemagang Indonesia ke Jepang.",
    category: "Profile",
  },
  {
    date: { day: "01", month: "Feb" },
    title: "Kunjungan Mitra Jepang ke Training Center",
    excerpt:
      "Perwakilan mitra perusahaan Jepang melakukan kunjungan dan interview langsung dengan calon peserta magang.",
    category: "Event",
  },
  {
    date: { day: "28", month: "Jan" },
    title: "Pelatihan Budaya Jepang Angkatan XII",
    excerpt:
      "Sesi pelatihan budaya Jepang yang mencakup etika kerja, komunikasi, dan kebiasaan sehari-hari di Jepang.",
    category: "Pelatihan",
  },
];

function BeritaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kabar Terbaru"
        title={
          <>
            Berita & <span className="text-gradient-red">Events</span>
          </>
        }
        subtitle="Ikuti perkembangan kegiatan, ujian, dan event terbaru LPK SO Hangguk Nippon."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Berita" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <SectionReveal key={n.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="hover-lift group h-full overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.04_15)] to-[oklch(0.97_0.02_25)]">
                  <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
                    <span className="text-xl font-bold leading-none">
                      {n.date.day}
                    </span>
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider">
                      {n.date.month}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur">
                    {n.category}
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <Calendar className="h-16 w-16 text-primary/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold leading-snug group-hover:text-primary">
                    {n.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                    {n.excerpt}
                  </p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary"
                  >
                    Baca selengkapnya
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
