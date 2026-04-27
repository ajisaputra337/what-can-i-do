import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Tahapan Ujian & Seleksi — LPK SO Hangguk Nippon";
const DESC =
  "6 tahapan proses seleksi dan ujian untuk program magang Jepang di LPK SO Hangguk Nippon — dari pra-seleksi hingga pemberangkatan.";

export const Route = createFileRoute("/ujian")({
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
  component: UjianPage,
});

const STEPS = [
  {
    no: "01",
    title: "Tes Pra Seleksi",
    points: [
      "Interview oleh PT. Hangguk Nippon Indonesia",
      "Tes Matematika",
      "Tes Psikotes",
      "Tes Fisik",
      "Medical Check Up",
    ],
  },
  {
    no: "02",
    title: "Mengikuti Ujian",
    points: ["Kemampuan Bahasa Jepang Dasar (huruf, kosakata, percakapan)"],
  },
  {
    no: "03",
    title: "Interview",
    points: ["Wawancara langsung oleh pihak User dari Jepang"],
  },
  {
    no: "04",
    title: "Mengikuti Pelatihan",
    points: [
      "Bahasa Jepang lanjutan",
      "Budaya Jepang",
      "Di Training Center PT. Hangguk Nippon Indonesia selama 3 – 4 bulan",
    ],
  },
  {
    no: "05",
    title: "Pra Keberangkatan",
    points: [
      "Pelatihan Persiapan Sebelum Berangkat ke Jepang",
      "Pengurusan Dokumen ke Jepang",
    ],
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

function UjianPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="6 Tahapan Resmi"
        title={
          <>
            Ujian & <span className="text-gradient-red">Tahapan Seleksi</span>
          </>
        }
        subtitle="Proses seleksi terstruktur untuk memastikan setiap peserta siap menghadapi tantangan kerja di Jepang."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Ujian" }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <SectionReveal key={s.no}>
                <div
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-2 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_0_6px_oklch(1_0_0)] ring-1 ring-primary/30">
                      {s.no}
                    </div>
                  </div>

                  <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <h3 className="text-2xl font-bold md:text-3xl">{s.title}</h3>
                  </div>

                  <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="hover-lift rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                      <ul className="space-y-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
