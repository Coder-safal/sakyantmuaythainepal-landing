import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { assetUrl, fetchSectionData, fetchSiteConfig } from "@/lib/api";
import { SITE } from "@/lib/site";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit, call or message Sak Yant Muay Thai Nepal in Pokhara. Open Mon–Sat 7AM–8:30PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Sak Yant Muay Thai Nepal",
    description: "Get in touch with our team.",
    url: "/contact",
  },
};

interface ContactContent {
  pageHero?: { eyebrow?: string; title?: string; subtitle?: string; image?: string };
  sendMessageTitle?: string;
  hours?: string;
  whatsappLabel?: string;
  whatsappEyebrow?: string;
}

export default async function ContactPage() {
  const [contact, site] = await Promise.all([
    fetchSectionData<ContactContent>("contact", {}),
    fetchSiteConfig(SITE),
  ]);

  return (
    <SiteLayout>
      <DynamicHero
        section="contact"
        fallback={{
          eyebrow: contact.pageHero?.eyebrow,
          title: contact.pageHero?.title ?? "",
          subtitle: contact.pageHero?.subtitle,
          image: assetUrl(contact.pageHero?.image) || "/images/hand-wraps.jpg",
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{contact.sendMessageTitle}</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Location", v: site.location },
              { Icon: Phone, t: "Phone", v: site.phone },
              { Icon: Mail, t: "Email", v: site.email },
              { Icon: Clock, t: "Hours", v: contact.hours ?? "" },
            ].map(({ Icon, t, v }) => (
              <div key={t} className="border border-border bg-card p-6 flex gap-4">
                <Icon className="text-accent shrink-0" />
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-secondary">{t}</div>
                  <div className="mt-1">{v}</div>
                </div>
              </div>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent bg-accent/10 p-6 flex items-center gap-4 hover:bg-accent/20 transition-colors"
            >
              <MessageCircle className="text-accent" />
              <div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-secondary">
                  {contact.whatsappEyebrow}
                </div>
                <div className="mt-1 font-display text-lg">{contact.whatsappLabel}</div>
              </div>
            </a>
            <div className="aspect-video border border-border overflow-hidden">
              <iframe
                src={site.mapsEmbed}
                className="w-full h-full grayscale contrast-125"
                title="Map"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
