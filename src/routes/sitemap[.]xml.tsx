import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const ROUTES = [
  "/",
  "/profile",
  "/legalitas",
  "/program",
  "/ujian",
  "/berita",
  "/galeri",
  "/pendaftaran",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const urls = ROUTES.map(
          (r) =>
            `  <url><loc>${SITE.url}${r}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${r === "/" ? "1.0" : "0.8"}</priority></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
