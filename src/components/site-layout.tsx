import * as React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingWhatsApp } from "./floating-whatsapp";

/** Standard page shell — Navbar + main + Footer + floating WA */
export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
