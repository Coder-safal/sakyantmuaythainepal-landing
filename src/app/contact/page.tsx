import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SealBackdrop } from "@/components/ui/SealBackdrop";
import { assetUrl, fetchSectionData, fetchSiteConfig } from "@/lib/api";
import { SITE } from "@/lib/site";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit, call or message Sak Yant Muay Thai Nepal in Lakeside, Pokhara. WhatsApp · Facebook · Instagram · Viber.",
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

// Lucide doesn't ship Viber — small inline glyph
function ViberGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6 2 11c0 2.86 1.6 5.37 4.08 6.98L5 22l4.42-1.42c.83.16 1.7.25 2.58.25 5.52 0 10-4 10-9s-4.48-9-10-9Zm-1.6 4.4c.5-.07 1 .26 1.13.74l.6 2.2c.1.4-.04.8-.36 1.04l-.7.5c.5 1.1 1.36 2 2.46 2.5l.5-.7c.24-.3.66-.45 1.04-.36l2.2.6c.48.14.8.64.74 1.13-.34 2.5-2.96 4.05-5.7 3.34a8.1 8.1 0 0 1-5.78-5.78c-.7-2.74.85-5.35 3.36-5.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function ContactPage() {
  const [contact, site] = await Promise.all([
    fetchSectionData<ContactContent>("contact", {}),
    fetchSiteConfig(SITE),
  ]);

  const channels = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      hint: site.whatsappLabel ?? "Chat with us",
      href: site.whatsapp,
      Icon: MessageCircle,
      primary: true,
    },
    {
      key: "instagram",
      label: "Instagram",
      hint: "@sakyantmuaythai",
      href: site.socials.instagram,
      Icon: Instagram,
    },
    {
      key: "facebook",
      label: "Facebook",
      hint: "Sak Yant Muay Thai Nepal",
      href: site.socials.facebook,
      Icon: Facebook,
    },
    {
      key: "viber",
      label: "Viber",
      hint: site.whatsappLabel ?? "Message us",
      href: site.socials.viber,
      Icon: ViberGlyph,
    },
  ];

  return (
    <SiteLayout>
      <DynamicHero
        section="contact"
        fallback={{
          eyebrow: contact.pageHero?.eyebrow ?? "Get In Touch",
          title: contact.pageHero?.title ?? "Step into the studio.",
          subtitle:
            contact.pageHero?.subtitle ??
            "Walk in for a tour, drop us a message, or message us on any channel below.",
          image: assetUrl(contact.pageHero?.image) || "/photos/mma.png",
        }}
      />

      {/* Social channels strip */}
      <section className="relative py-16 md:py-20 border-y border-accent/10 bg-card/30 overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-20 opacity-[0.04]">
          <SealBackdrop spin="cw" className="h-100 w-100 opacity-25" />
        </div>
        <div className="relative container-x">
          <div className="text-center mb-12">
            <div className="ornament-line mb-5 justify-center inline-flex">
              Reach Us On Any Channel
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[0.95]">
              Pick your <span className="gold-gradient">line.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c, i) => (
              <Reveal key={c.key} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block p-7 glass gold-glow h-full transition-colors duration-500 ${
                    c.primary ? "border-accent/40" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-12 w-12 grid place-items-center border border-accent/30 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground`}
                    >
                      <c.Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-accent opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                    />
                  </div>
                  <div className="font-display text-2xl tracking-wide">{c.label}</div>
                  <div className="mt-2 text-sm text-muted-foreground truncate">{c.hint}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sanctuary details */}
      <section className="py-20 md:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Send A Message"
              title={
                <>
                  {contact.sendMessageTitle ?? (
                    <>
                      Drop us a line.
                      <br />
                      <span className="gold-gradient">We&apos;ll reply.</span>
                    </>
                  )}
                </>
              }
              description="For class bookings, group quotes, retreat enquiries, fight-store orders or anything else."
            />
            <Reveal delay={3}>
              <div className="glass p-7 md:p-10 mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The Sanctuary"
              title={
                <>
                  Find us in
                  <br />
                  <span className="gold-gradient">Lakeside.</span>
                </>
              }
              size="md"
            />
            <div className="mt-10 space-y-3">
              {[
                { Icon: MapPin, t: "Location", v: site.location },
                { Icon: Phone, t: "Phone", v: site.phone },
                { Icon: Mail, t: "Email", v: site.email },
                { Icon: Clock, t: "Hours", v: contact.hours ?? "Mon – Sat · 7 AM – 8:30 PM" },
              ].map(({ Icon, t, v }, i) => (
                <Reveal key={t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="glass p-5 flex gap-4 items-start gold-glow">
                    <Icon className="text-accent shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="text-[10px] tracking-[0.4em] uppercase text-accent/80">
                        {t}
                      </div>
                      <div className="mt-1.5 text-foreground/90">{v}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3} className="block mt-6">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 border border-accent bg-accent/10 hover:bg-accent/20 transition-colors duration-500"
              >
                <MessageCircle className="text-accent" size={20} />
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-accent/80">
                    {contact.whatsappEyebrow ?? "Quickest Way"}
                  </div>
                  <div className="mt-1 font-display text-lg">
                    {contact.whatsappLabel ?? "WhatsApp Us"}
                  </div>
                </div>
                <ArrowUpRight
                  className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </a>
            </Reveal>

            <div className="mt-8 aspect-video hairline overflow-hidden">
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
