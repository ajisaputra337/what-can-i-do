import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <span
            aria-hidden="true"
            className="h-20 w-20 rounded-full bg-primary"
            style={{ boxShadow: "0 12px 40px -10px oklch(0.52 0.21 23 / 0.5)" }}
          />
        </div>
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

const ldOrganization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Kubangjati",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: "Indonesia",
  sameAs: [],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#BC002D" },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index,follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "LPK Hangguk Nippon" },
      { property: "og:title", content: "LPK Hangguk Nippon" },
      { name: "twitter:title", content: "LPK Hangguk Nippon" },
      { name: "description", content: "An interactive, SEO-optimized landing page for a Japanese vocational training institute." },
      { property: "og:description", content: "An interactive, SEO-optimized landing page for a Japanese vocational training institute." },
      { name: "twitter:description", content: "An interactive, SEO-optimized landing page for a Japanese vocational training institute." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af9232f9-b2c4-4b06-9067-943321fa6309/id-preview-0d24f8df--c879609f-d840-401c-af88-b0e37ed69610.lovable.app-1777301361268.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af9232f9-b2c4-4b06-9067-943321fa6309/id-preview-0d24f8df--c879609f-d840-401c-af88-b0e37ed69610.lovable.app-1777301361268.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
