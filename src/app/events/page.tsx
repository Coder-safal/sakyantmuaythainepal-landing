import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { assetUrl, fetchSectionData, fetchSiteConfig } from "@/lib/api";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Seminars, training camps, workshops, and fight nights from Sak Yant Muay Thai Nepal.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events — Sak Yant Muay Thai Nepal",
    description: "Seminars, camps, fight nights.",
    url: "/events",
  },
};

interface EventItem {
  type: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  ctaLabel?: string;
}

interface EventsContent {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: EventItem[];
}

export default async function EventsPage() {
  const [events, site] = await Promise.all([
    fetchSectionData<EventsContent>("events", {}),
    fetchSiteConfig(SITE),
  ]);
  const items = events.items ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="events"
        fallback={{
          eyebrow: events.eyebrow,
          title: events.title ?? "",
          subtitle: events.subtitle,
          image: "/images/cage-event.jpg",
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {items.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden border border-border bg-card"
            >
              {e.image && (
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={assetUrl(e.image)}
                    alt={e.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
              )}
              <div className="p-7">
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent">{e.type}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-2">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-accent" /> {e.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent" /> {e.location}
                  </span>
                </div>
                {e.ctaLabel && (
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-accent hover:text-foreground"
                  >
                    {e.ctaLabel} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
