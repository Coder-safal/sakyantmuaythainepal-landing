import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";

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

const EVENTS = [
  {
    type: "Camp",
    title: "Himalayan Fight Camp",
    date: "Mar 2026",
    loc: "Pokhara",
    img: images.trainingKick,
    desc: "Two-week residential training intensive for international athletes.",
  },
  {
    type: "Fight Night",
    title: "The Contender VII",
    date: "TBA 2026",
    loc: "Pokhara",
    img: images.cageEvent,
    desc: "Our flagship fight promotion returns with a stacked card.",
  },
  {
    type: "Seminar",
    title: "Clinch & Knees Masterclass",
    date: "Q2 2026",
    loc: "Pokhara",
    img: images.handWraps,
    desc: "Advanced clinch workshop with visiting Thai champions.",
  },
  {
    type: "Workshop",
    title: "Kids Champion Day",
    date: "Apr 2026",
    loc: "Pokhara",
    img: images.gymInterior,
    desc: "A free open day for kids to try Muay Thai with our coaches.",
  },
];

export default function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title="Camps, Seminars & Fight Nights."
        subtitle="Train hard. Fight smart. Show up."
        image={images.cageEvent}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent">{e.type}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-2">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-accent" /> {e.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent" /> {e.loc}
                  </span>
                </div>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-accent hover:text-foreground"
                >
                  Register Interest <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
