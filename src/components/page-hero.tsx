import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SectionReveal } from "./section-reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumb?: { label: string; to?: string }[];
  className?: string;
}

/** Reusable hero/banner for inner pages */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[oklch(0.98_0.005_60)] bg-wave",
        className
      )}
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[oklch(0.9_0.06_15/0.25)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {breadcrumb && breadcrumb.length > 0 && (
          <SectionReveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              {breadcrumb.map((b, i) => (
                <React.Fragment key={i}>
                  {b.to ? (
                    <Link to={b.to} className="hover:text-primary">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <ChevronRight className="h-3 w-3" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </SectionReveal>
        )}

        {eyebrow && (
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="hinomaru-dot !mr-0" /> {eyebrow}
            </span>
          </SectionReveal>
        )}

        <SectionReveal delay={1}>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </SectionReveal>

        {subtitle && (
          <SectionReveal delay={2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
