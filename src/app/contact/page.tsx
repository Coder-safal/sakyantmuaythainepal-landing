import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";
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

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Step Inside. Say Hello."
        subtitle="Drop in for a class, book a tour, or message us before you fly in."
        image={images.handWraps}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Send A Message</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            {[
              { Icon: MapPin, t: "Location", v: SITE.location },
              { Icon: Phone, t: "Phone", v: SITE.phone },
              { Icon: Mail, t: "Email", v: SITE.email },
              { Icon: Clock, t: "Hours", v: "Mon–Sat · 7AM – 8:30PM" },
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
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent bg-accent/10 p-6 flex items-center gap-4 hover:bg-accent/20 transition-colors"
            >
              <MessageCircle className="text-accent" />
              <div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-secondary">
                  Fastest Reply
                </div>
                <div className="mt-1 font-display text-lg">Chat on WhatsApp</div>
              </div>
            </a>
            <div className="aspect-video border border-border overflow-hidden">
              <iframe
                src={SITE.mapsEmbed}
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
