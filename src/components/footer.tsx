import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV_ITEMS, SITE, mailLink, telLink, waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.99_0.005_60)]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
              <div>
                <div className="text-base font-bold">LPK SO Hangguk Nippon</div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary">
                  Sending Organization Magang Jepang
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Lembaga Pendidikan dan Pelatihan Kerja resmi untuk program magang &
              SSW ke Jepang. Pelatihan Bahasa Jepang, budaya, dan pendampingan
              visa hingga keberangkatan.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={mailLink} className="hover:text-primary break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={telLink} className="hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address.main}</span>
              </li>
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 LPK SO Hangguk Nippon. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <span className="hinomaru-dot" /> Magang Jepang Resmi & Terpercaya
          </div>
        </div>
      </div>
    </footer>
  );
}
