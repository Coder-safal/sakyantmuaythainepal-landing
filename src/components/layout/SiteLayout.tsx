import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { fetchSiteConfig } from "@/lib/api";
import { SITE } from "@/lib/site";

export async function SiteLayout({ children }: { children: ReactNode }) {
  const site = await fetchSiteConfig(SITE);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar site={site} />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer site={site} />
      <WhatsAppFab whatsapp={site.whatsapp} />
    </div>
  );
}
