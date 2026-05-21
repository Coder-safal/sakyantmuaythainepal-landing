import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";

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

const MATCHES = [
  { red: "Bibek Tamang", blue: "Kiran Rai", weight: "Lightweight · 70kg", title: false },
  {
    red: "Asha Gurung",
    blue: "Mei Tanaka",
    weight: "Women's Bantamweight · 55kg",
    title: true,
  },
  { red: "Sujan KC", blue: "Aarav Pandey", weight: "Welterweight · 77kg", title: false },
];

export default function ContenderPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Home Promotion"
        title="The Contender Fight Series."
        subtitle="Nepal's most electric night of combat sport."
        image={images.cageEvent}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Next Event"
              title="Contender VII."
              description="A full card of Muay Thai and MMA bouts. Title shots. Debutants. The future of Nepali combat sport — live."
            />
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Calendar className="text-accent" size={18} /> Date · TBA 2026
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={18} /> Pokhara, Nepal
              </div>
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold"
            >
              Inquire Tickets <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative aspect-[4/5] border border-accent/30 overflow-hidden">
            <Image
              src={images.cageFighter}
              alt="Contender main event"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-x">
          <SectionHeader eyebrow="Fight Card" title="The Matchups." />
          <div className="mt-12 space-y-4">
            {MATCHES.map((m, i) => (
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

      <section className="relative py-24 overflow-hidden">
        <Image
          src={images.champion}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative container-x text-center">
          <h3 className="font-display text-4xl md:text-6xl">Walk Out As A Champion.</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Want to fight on the next Contender card? Apply through our fighter program.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
