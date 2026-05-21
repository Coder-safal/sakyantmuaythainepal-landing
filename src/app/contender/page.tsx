import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { assetUrl, fetchSectionData, fetchSiteConfig } from "@/lib/api";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Contender Fight Series",
  description:
    "Nepal's home-grown fight promotion. The Contender Fight Series — fighters, events and tickets.",
  alternates: { canonical: "/contender" },
  openGraph: {
    title: "The Contender Fight Series",
    description: "Nepal's home-grown combat sport promotion.",
    url: "/contender",
  },
};

interface ContenderContent {
  pageHero?: { eyebrow?: string; title?: string; subtitle?: string; image?: string };
  nextEvent?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    date?: string;
    location?: string;
    image?: string;
    ctaLabel?: string;
  };
  fightCardSection?: { eyebrow?: string; title?: string };
  fightCard?: { red: string; blue: string; weight: string; title?: boolean }[];
  outro?: { title?: string; description?: string; image?: string };
}

export default async function ContenderPage() {
  const [contender, site] = await Promise.all([
    fetchSectionData<ContenderContent>("contender", {}),
    fetchSiteConfig(SITE),
  ]);
  const matches = contender.fightCard ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="contender"
        fallback={{
          eyebrow: contender.pageHero?.eyebrow,
          title: contender.pageHero?.title ?? "",
          subtitle: contender.pageHero?.subtitle,
          image: assetUrl(contender.pageHero?.image) || "/images/cage-event.jpg",
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow={contender.nextEvent?.eyebrow}
              title={contender.nextEvent?.title ?? ""}
              description={contender.nextEvent?.description}
            />
            <div className="mt-8 space-y-3 text-sm">
              {contender.nextEvent?.date && (
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent" size={18} /> {contender.nextEvent.date}
                </div>
              )}
              {contender.nextEvent?.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={18} /> {contender.nextEvent.location}
                </div>
              )}
            </div>
            {contender.nextEvent?.ctaLabel && (
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold"
              >
                {contender.nextEvent.ctaLabel} <ArrowRight size={16} />
              </a>
            )}
          </div>
          {contender.nextEvent?.image && (
            <div className="relative aspect-[4/5] border border-accent/30 overflow-hidden">
              <Image
                src={assetUrl(contender.nextEvent.image)}
                alt="Contender main event"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-x">
          <SectionHeader
            eyebrow={contender.fightCardSection?.eyebrow}
            title={contender.fightCardSection?.title ?? ""}
          />
          <div className="mt-12 space-y-4">
            {matches.map((m, i) => (
              <div
                key={i}
                className="border border-border bg-background grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-6 md:p-8"
              >
                <div className="text-right">
                  <div className="text-[10px] tracking-[0.3em] text-accent">RED</div>
                  <div className="font-display text-xl md:text-2xl mt-1">{m.red}</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-accent">VS</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                    {m.weight}
                  </div>
                  {m.title && (
                    <div className="mt-1 text-[10px] tracking-[0.25em] text-secondary">
                      ★ Title Bout
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-foreground/70">BLUE</div>
                  <div className="font-display text-xl md:text-2xl mt-1">{m.blue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {contender.outro && (
        <section className="relative py-24 overflow-hidden">
          {contender.outro.image && (
            <>
              <Image
                src={assetUrl(contender.outro.image)}
                alt=""
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-background/85" />
            </>
          )}
          <div className="relative container-x text-center">
            <h3 className="font-display text-4xl md:text-6xl">{contender.outro.title}</h3>
            {contender.outro.description && (
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                {contender.outro.description}
              </p>
            )}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
