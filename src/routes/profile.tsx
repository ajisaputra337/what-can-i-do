import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Target, Heart, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import welcomeImg from "@/assets/welcome-class.jpg";
import ogImg from "@/assets/og-image.jpg";

const TITLE = "Profile — LPK SO Hangguk Nippon | Tentang Lembaga Kami";
const DESC =
  "Mengenal lebih dekat LPK SO Hangguk Nippon — Lembaga Pelatihan Kerja resmi yang mempersiapkan calon pemagang & pekerja Jepang dengan kurikulum terstandar.";

export const Route = createFileRoute("/profile")({
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
  component: ProfilePage,
});

const PILLARS = [
  {
    icon: Target,
    title: "Visi",
    desc: "Menjadi Lembaga Pelatihan Kerja terpercaya yang melahirkan pekerja Indonesia berkualitas internasional dengan kompetensi global.",
  },
  {
    icon: Heart,
    title: "Misi",
    desc: "Memberikan pelatihan Bahasa Jepang & budaya kerja terbaik, mendampingi peserta hingga keberangkatan, serta menjaga kepercayaan mitra Jepang.",
  },
  {
    icon: Globe2,
    title: "Nilai",
    desc: "Profesionalisme, integritas, kepedulian, dan komitmen jangka panjang terhadap kesuksesan setiap peserta didik kami.",
  },
];

function ProfilePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tentang Kami"
        title={
          <>
            Profile <span className="text-gradient-red">LPK SO Hangguk Nippon</span>
          </>
        }
        subtitle="Lembaga Pendidikan dan Pelatihan Kerja resmi untuk program magang Jepang dengan tim berpengalaman & profesional."
        breadcrumb={[{ label: "Beranda", to: "/" }, { label: "Profile" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionReveal>
            <img
              src={welcomeImg}
              alt="Suasana kelas Bahasa Jepang LPK Hangguk Nippon"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </SectionReveal>

          <SectionReveal delay={1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sejarah Singkat
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Membangun Jembatan Karier ke Jepang
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dalam upaya meningkatkan kualitas profesional Sumber Daya Manusia
                di Jawa Tengah khususnya, dan Indonesia pada umumnya, terutama
                dalam kemampuan berkomunikasi global dan diakui secara
                internasional — <strong>LPK Hangguk Nippon</strong> hadir sebagai
                Lembaga Pendidikan dan Keterampilan Nonformal.
              </p>
              <p>
                Kami menyelenggarakan proses belajar Bahasa Jepang bagi
                masyarakat yang memerlukan bekal pengetahuan, keterampilan,
                pengembangan profesi bidang keahlian kerja, atau internship dan
                proses untuk melanjutkan pendidikan ke jenjang yang lebih
                tinggi.
              </p>
              <p>
                Kami mempersiapkan kandidat dengan informasi wawasan, etos
                kerja, budaya, sampai belajar bahasa sebagai bekal berkomunikasi
                agar calon pekerja memiliki wawasan dan keterampilan yang
                kompeten. Kami juga membantu memfasilitasi peserta didik untuk
                berangkat ke Jepang dan bekerja di perusahaan-perusahaan yang
                membutuhkan tenaga kerja dari luar negaranya.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[oklch(0.99_0.005_60)] bg-wave py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Visi, Misi & Nilai</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <SectionReveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.62_0.24_25)] text-white">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <SectionReveal>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-background to-[oklch(0.97_0.02_25)] p-10 text-center md:p-14">
            <GraduationCap className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl font-bold md:text-3xl">
              Dipercaya 1500+ Lulusan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Selama lebih dari satu dekade, kami telah memberangkatkan ribuan
              pemagang ke berbagai perusahaan Jepang dengan reputasi terbaik.
            </p>
          </div>
        </SectionReveal>
      </section>
    </SiteLayout>
  );
}
