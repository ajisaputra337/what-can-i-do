import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, Camera } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Galeri Kegiatan — LPK SO Hangguk Nippon";
const DESC =
  "Galeri foto kegiatan pelatihan, ujian, pelepasan, dan momen-momen para peserta LPK SO Hangguk Nippon.";

export const Route = createFileRoute("/galeri")({
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
  component: GaleriPage,
});

const CATEGORIES = [
  { label: "Pelatihan Bahasa", count: 4 },
  { label: "Ujian & Seleksi", count: 3 },
  { label: "Pelepasan Pemagang", count: 4 },
  { label: "Kunjungan Mitra Jepang", count: 3 },
];

function GaleriPage() {
  let runningIndex = 0;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Dokumentasi"
        title={
          <>
            Galeri <span className="text-gradient-red">Kegiatan</span>
          </>
        }
        subtitle="Momen-momen berharga dari para peserta selama mengikuti pelatihan dan persiapan menuju Jepang."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Galeri" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="space-y-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <SectionReveal>
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Kategori
                    </span>
                    <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                      {cat.label}
                    </h2>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cat.count} foto
                  </div>
                </div>
              </SectionReveal>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: cat.count }).map((_, i) => {
                  runningIndex += 1;
                  return (
                    <SectionReveal
                      key={i}
                      delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                    >
                      <div className="hover-lift group relative aspect-square overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-[oklch(0.97_0.02_25)] via-background to-[oklch(0.95_0.04_15)]">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          {i % 2 === 0 ? (
                            <Camera className="h-7 w-7 text-primary/40" />
                          ) : (
                            <ImageIcon className="h-7 w-7 text-primary/40" />
                          )}
                          <span className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                            Foto #{runningIndex}
                          </span>
                          <span className="mt-1 text-[10px] text-muted-foreground">
                            {cat.label}
                          </span>
                        </div>
                      </div>
                    </SectionReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
