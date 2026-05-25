import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { SITE } from "@/lib/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer site={SITE} />
      <WhatsAppFab whatsapp={SITE.whatsapp} />
    </div>
  );
}
