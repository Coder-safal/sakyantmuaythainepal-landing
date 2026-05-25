import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Mic,
  Trophy,
  Flame,
  Dumbbell,
  Users,
  Mountain,
  Plane,
  Bed,
  Sparkles,
  Mail,
  Clock,
  Ticket,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YantraMark } from "@/components/ui/YantraMark";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sak Yant Muay Thai Nepal — Elite Fight Academy in Pokhara",
  description:
    "Train Muay Thai and MMA in Pokhara, Nepal under championship coaches. Home of The Contender Fight Series. Memberships for foreign and Nepali athletes, kids, and pros.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sak Yant Muay Thai Nepal",
    description: "Elite Muay Thai & MMA academy in Pokhara, Nepal.",
    type: "website",
    url: "/",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Sak Yant Muay Thai Nepal",
  description: "Premier Muay Thai and MMA academy in Pokhara, Nepal.",
  address: { "@type": "PostalAddress", addressLocality: "Pokhara", addressCountry: "NP" },
  sport: ["Muay Thai", "Mixed Martial Arts"],
};

export default function HomePage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Hero />
      <Marquee />
      <PromoStrip />
      <TrainLikeFighter />
      <PhilosophyImage />
      <Programs />
      <UpcomingEvents />
      <ContenderHighlight />
      <SakYantTheme />
      <Retreats />
      <Lakeside />
      <Trainers />
      <Facilities />
      <Achievements />
      <Podcast />
      <GalleryPreview />
      <Testimonials />
      <Sponsors />
      <Visit />
      <Newsletter />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src={images.heroFighter}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/60" />

      <div className="relative h-full container-x flex items-center justify-center">
        <YantraMark className="h-64 w-64 md:h-96 md:w-96 text-accent/40 reveal" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
        Scroll
      </div>
    </section>
  );
}

const MARQUEE_ITEMS = [
  "MUAY THAI",
  "MMA",
  "THE CONTENDER FIGHT SERIES",
  "POKHARA · NEPAL",
  "WBC MUAYTHAI",
  "FIGHT · TRAIN · BELONG",
];

function Marquee() {
  return (
    <section className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-stroke">
              {t} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainLikeFighter() {
  const pillars = [
    {
      Icon: Flame,
      title: "Authentic Muay Thai",
      text: "Traditional eight-limb striking taught by championship coaches.",
    },
    {
      Icon: Dumbbell,
      title: "Conditioning",
      text: "Strength, agility, and combat-ready endurance — built daily.",
    },
    {
      Icon: Users,
      title: "Real Community",
      text: "Train alongside pros, beginners, and international athletes.",
    },
    {
      Icon: Trophy,
      title: "Fight-Ready",
      text: "From your first jab to your first belt — we build careers.",
    },
  ];

  return (
    <section className="py-20 md:py-32 grain">
      <div className="container-x">
        <SectionHeader
          eyebrow="Train Like A Fighter"
          title={
            <>
              This is not a gym.
              <br />
              It&apos;s a <span className="text-accent">fight school.</span>
            </>
          }
          description="Every session is structured around the science of combat. Whether you stepped in for fitness or to chase a title, you'll train next to people who do this for real."
        />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-background p-7 md:p-9 hover:bg-card transition-colors group"
            >
              <Icon
                className="text-accent mb-6 group-hover:scale-110 transition-transform"
                size={28}
              />
              <h3 className="font-display text-xl tracking-wider">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophyImage() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <Image
        src={images.handWraps}
        alt="Fighter wrapping hands"
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="relative container-x h-full flex items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-secondary font-semibold">
              Philosophy
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
            Discipline is the <span className="text-accent">only</span> shortcut.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            We don&apos;t sell quick fixes. We sell early mornings, bruised shins, and the quiet
            pride of becoming the strongest version of yourself.
          </p>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      title: "Muay Thai For All",
      price: "NPR 6,000/mo",
      desc: "Open group classes for every level — fitness to fight prep.",
      img: images.trainingKick,
    },
    {
      title: "Fighter Program",
      price: "Application Only",
      desc: "Career path for athletes competing at national & international level.",
      img: images.cageFighter,
    },
    {
      title: "Kids Muay Thai",
      price: "NPR 5,000/mo",
      desc: "Discipline, confidence, and movement for the next generation.",
      img: images.gymInterior,
    },
  ];
  return (
    <section className="py-20 md:py-32 bg-card border-y border-border">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Programs"
            title="Choose Your Path."
            description="From your first class to your tenth title fight — we have a program built for it."
          />
          <Link
            href="/membership"
            className="text-sm tracking-[0.2em] uppercase text-accent hover:text-foreground inline-flex items-center gap-2"
          >
            View All Plans <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden border border-border bg-background"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-[11px] tracking-[0.3em] uppercase text-secondary mb-2">
                  {p.price}
                </div>
                <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContenderHighlight() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <Image
        src={images.cageEvent}
        alt="The Contender fight night cage"
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative container-x grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-secondary font-semibold">
              Our Home Promotion
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            The <span className="text-accent">Contender</span>
            <br />
            Fight Series.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed">
            Nepal&apos;s most electric night of combat sport. Real fights, real stories, real
            careers — born in our gym, fought on our stage.
          </p>
          <Link
            href="/contender"
            className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent/90"
          >
            Enter The Cage <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative aspect-[4/5] border border-accent/30">
          <Image
            src={images.cageFighter}
            alt="Cage fighter celebrating"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute -bottom-4 -right-4 hidden md:block bg-accent text-accent-foreground px-5 py-3 font-display text-sm tracking-[0.2em]">
            NEXT EVENT · TBA
          </div>
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  const coaches = [images.champion, images.cageFighter, images.handWraps];
  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Coaching Team"
          title="Coached By Champions."
          description="Our team is led by national and international champions who have lived this sport at the highest level."
        />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {coaches.map((img, i) => (
            <div key={i} className="bg-background group relative aspect-[3/4] overflow-hidden">
              <Image
                src={img}
                alt="Coach"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-[11px] tracking-[0.3em] uppercase text-secondary">
                  Head Coach
                </div>
                <div className="font-display text-2xl mt-1">Coach {i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const stats = [
    { v: "12+", l: "National Titles" },
    { v: "8", l: "International Belts" },
    { v: "150+", l: "Active Fighters" },
    { v: "5", l: "Years Of Legacy" },
  ];
  const records = [
    { year: "2025", title: "WBC Muaythai Asia Bronze", weight: "Lightweight · 60kg" },
    { year: "2025", title: "National Muay Thai Champion", weight: "Welterweight · 67kg" },
    { year: "2024", title: "South Asian Games Silver", weight: "Featherweight · 57kg" },
    { year: "2024", title: "The Contender Title", weight: "Bantamweight · 53kg" },
    { year: "2024", title: "ONE Warrior Series Finalist", weight: "Lightweight · 70kg" },
    { year: "2023", title: "National MMA Champion", weight: "Middleweight · 84kg" },
    { year: "2023", title: "WBC Muaythai National Open", weight: "Flyweight · 50kg" },
    { year: "2022", title: "International Muay Thai Cup Bronze", weight: "Featherweight · 57kg" },
  ];
  return (
    <section className="relative border-y border-border overflow-hidden">
      <Image
        src={images.achievements}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative container-x py-16 md:py-20 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-5xl md:text-7xl text-accent leading-none">
                {s.v}
              </div>
              <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="The Record Book"
          title={
            <>
              Titles, Belts &amp; <span className="text-accent">Podiums.</span>
            </>
          }
          description="A living record of every podium our fighters have earned. The wall keeps growing."
        />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {records.map((r, i) => (
            <li
              key={i}
              className="py-5 grid grid-cols-[auto_1fr_auto] items-center gap-4 hover:bg-card/50 transition-colors px-2"
            >
              <Trophy size={20} className="text-accent" />
              <div>
                <div className="font-display tracking-wide text-base md:text-lg">{r.title}</div>
                <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                  {r.weight}
                </div>
              </div>
              <div className="font-display text-2xl md:text-3xl text-secondary">{r.year}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Podcast() {
  return (
    <section className="py-20 md:py-32 bg-card border-b border-border">
      <div className="container-x grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-md mx-auto md:mx-0 bg-background border border-border p-10 grid place-items-center">
          <Image
            src={images.podcastLogo}
            alt="Beyond The Battles Podcast"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-10"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Mic size={16} className="text-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-secondary font-semibold">
              A Podcast · Coming Soon
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
            Beyond The <span className="text-accent">Battles.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Unseen. Unheard. Unspoken. The stories of the fighters, coaches and dreamers building
            combat sport in Nepal.
          </p>
          <Link
            href="/podcast"
            className="mt-8 inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:border-foreground hover:bg-foreground/5"
          >
            Explore Episodes <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [
    images.gymInterior,
    images.cageEvent,
    images.trainingKick,
    images.cageFighter,
    images.handWraps,
    images.champion,
  ];
  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader eyebrow="Inside The Gym" title="The Atmosphere." />
          <Link
            href="/gallery"
            className="text-sm tracking-[0.2em] uppercase text-accent hover:text-foreground inline-flex items-center gap-2"
          >
            Full Gallery <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-1">
        {imgs.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden group ${
              i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Trained here for three months. Best Muay Thai experience I've had outside of Thailand.",
      a: "Jake M.",
      r: "Australian Athlete",
    },
    {
      q: "The discipline and culture here is real. They build fighters and people.",
      a: "Aarti S.",
      r: "Amateur Fighter",
    },
    {
      q: "World-class pads, world-class community. The mountains are just a bonus.",
      a: "Luca R.",
      r: "Visiting Pro",
    },
  ];
  return (
    <section className="py-20 md:py-32 bg-card border-y border-border">
      <div className="container-x">
        <SectionHeader
          eyebrow="Voices From The Mat"
          title="What Our Fighters Say."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.a} className="border border-border p-8 bg-background relative">
              <div className="absolute top-4 right-5 font-display text-6xl text-accent/30">
                &quot;
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">{q.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display tracking-wider">{q.a}</div>
                <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                  {q.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const names = ["FAIRTEX", "WBC MUAYTHAI", "XTREME", "ESCAPE", "CONTENDER"];
  return (
    <section className="py-16 border-b border-border">
      <div className="container-x">
        <div className="text-center text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
          Trusted Partners
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {names.map((n) => (
            <div key={n} className="font-display text-xl md:text-2xl text-stroke tracking-widest">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const site = SITE;
  return (
    <section className="py-20 md:py-32">
      <div className="container-x grid md:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-center">
          <SectionHeader
            eyebrow="Visit Us"
            title="Find Us In Pokhara."
            description="Drop in for a class, a tour, or a chai. We're open to anyone serious about the sport."
          />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-accent shrink-0 mt-0.5" size={18} /> {site.location}
            </li>
            <li className="flex gap-3">
              <Calendar className="text-accent shrink-0 mt-0.5" size={18} /> Mon–Sat · 7AM–8:30PM
            </li>
          </ul>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Get Directions
            </a>
            <Link
              href="/contact"
              className="border border-foreground/30 px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:border-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="aspect-video md:aspect-auto md:min-h-[420px] border border-border overflow-hidden">
          <iframe
            src={site.mapsEmbed}
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
            title="Sak Yant Muay Thai Nepal location"
          />
        </div>
      </div>
    </section>
  );
}

function SakYantTheme() {
  return (
    <section className="relative py-20 md:py-32 bg-card border-y border-border overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <YantraMark className="h-[420px] w-[420px] text-accent" />
      </div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <YantraMark className="h-[420px] w-[420px] text-bronze" />
      </div>

      <div className="relative container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <YantraMark className="h-72 w-72 md:h-96 md:w-96 text-accent" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="The Name"
            title={
              <>
                Sak Yant. <br />
                <span className="text-accent">Sacred Geometry.</span>
              </>
            }
            description="In the Muay Thai tradition, Sak Yant is the sacred geometric ink worn by warriors — symbols of protection, discipline, and the quiet strength a fighter carries beyond the ring. We took the name because we believe in the same idea: train the body, sharpen the spirit, carry the mark."
          />
          <ul className="mt-8 grid sm:grid-cols-3 gap-px bg-border">
            {[
              { label: "Discipline", text: "Show up. Every day." },
              { label: "Protection", text: "Train with care. Spar with respect." },
              { label: "Strength", text: "Forged in the gym. Carried for life." },
            ].map((p) => (
              <li key={p.label} className="bg-card p-5">
                <div className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold mb-2">
                  {p.label}
                </div>
                <div className="text-sm text-muted-foreground">{p.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Lakeside() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <Image
        src={images.gymInterior}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="relative container-x">
        <div className="max-w-3xl mx-auto text-center">
          <YantraMark className="h-12 w-12 text-accent mx-auto mb-6" />
          <div className="text-[11px] tracking-[0.4em] uppercase text-secondary font-semibold mb-5">
            Phewa Lakeside · Pokhara
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            Train Hard. <br />
            <span className="text-accent">Breathe Easy.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            The gym sits minutes from Phewa Lake, with the Annapurna range on the horizon. The
            sessions are brutal — the recovery is unreal. Cold lake mornings, lakeside walks,
            paragliding off Sarangkot, dal-bhat on the way home. This is what training in Nepal
            actually feels like.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Lake",
              title: "Phewa",
              text: "Sunrise rows, cold dips, and the calmest mile of mat-prep you'll ever do.",
            },
            {
              tag: "Mountain",
              title: "Sarangkot",
              text: "Pre-dawn hike, Annapurna sunrise, paraglide back down on a rest day.",
            },
            {
              tag: "Town",
              title: "Lakeside",
              text: "Cafés, recovery food, physios, and a community of athletes from everywhere.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-accent/50 transition-colors"
            >
              <div className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold mb-3">
                {b.tag}
              </div>
              <h3 className="font-display text-3xl tracking-wide">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoStrip() {
  return (
    <section className="relative bg-accent text-accent-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 to-transparent" />
      </div>
      <div className="relative container-x py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-4">
          <Ticket className="shrink-0" size={22} />
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase opacity-80 font-semibold">
              Limited Time
            </div>
            <div className="font-display text-xl md:text-2xl tracking-wide">
              First Class Free · No Sign-Up Required
            </div>
          </div>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-background text-foreground px-6 py-3 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-foreground hover:text-background transition-colors"
        >
          Claim Your Spot
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  const events = [
    {
      day: "TBA",
      month: "2026",
      tag: "Fight Night",
      title: "The Contender · Pokhara",
      desc: "Nepal's premier Muay Thai & MMA promotion returns to the lakeside.",
      img: images.cageEvent,
    },
    {
      day: "OPEN",
      month: "Monthly",
      tag: "Seminar",
      title: "Champion Pad Work Clinic",
      desc: "Two-hour intensive on power, timing, and ring IQ with the head coaching team.",
      img: images.cageEventAlt,
    },
    {
      day: "DROP-IN",
      month: "Weekly",
      tag: "Open Mat",
      title: "Saturday Sparring",
      desc: "Light-to-medium sparring open to intermediate and advanced students.",
      img: images.mma,
    },
    {
      day: "SUN",
      month: "Quarterly",
      tag: "Inter-Gym",
      title: "Inter-Gym Smoker",
      desc: "Friendly bouts with partner gyms across Nepal. Build the brotherhood.",
      img: images.cageFighter,
    },
    {
      day: "ALL",
      month: "Year",
      tag: "Retreat",
      title: "Foreign Athlete Camp",
      desc: "One-to-twelve week residencies for visiting fighters. Stay, train, recover.",
      img: images.gymInterior,
    },
    {
      day: "KIDS",
      month: "Monthly",
      tag: "Showcase",
      title: "Junior Showcase Day",
      desc: "Our youngest athletes show what they've learned in front of family and coaches.",
      img: images.trainingKick,
    },
  ];
  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What's On"
          title={
            <>
              Upcoming <span className="text-accent">Events.</span>
            </>
          }
          description="Fights, seminars, open mats, and showcases — every event the academy hosts, in one place."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="group relative border border-border bg-card overflow-hidden hover:border-accent/60 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-background/90 border border-border px-3 py-2 text-center">
                  <div className="font-display text-2xl leading-none text-accent">{e.day}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                    {e.month}
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase bg-accent text-accent-foreground px-3 py-1 font-semibold">
                  {e.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wide">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retreats() {
  const perks = [
    {
      Icon: Plane,
      title: "Airport Pickup",
      text: "We meet you in Kathmandu or Pokhara and handle the transfer.",
    },
    {
      Icon: Bed,
      title: "Stay & Train",
      text: "On-site and partner accommodation walking distance to the gym.",
    },
    {
      Icon: Mountain,
      title: "Himalayan Recovery",
      text: "Lakeside rest days, hikes, and yoga — train hard, recover harder.",
    },
    {
      Icon: Sparkles,
      title: "Sak Yant Ceremony",
      text: "Optional traditional Sak Yant tattoo experience with a local master.",
    },
  ];
  return (
    <section className="relative py-20 md:py-32 bg-card border-y border-border overflow-hidden">
      <Image
        src={images.gymInterior}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative container-x grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="For Foreign Athletes"
            title={
              <>
                Train In The <span className="text-accent">Mountains.</span>
              </>
            }
            description="Pokhara is Nepal's most beautiful training ground — fight gym energy by day, lakeside calm by night. We host athletes from around the world for one-week to three-month residencies."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent/90"
            >
              Plan Your Retreat <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:border-foreground hover:bg-foreground/5"
            >
              Ask A Question
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-2">
          {perks.map(({ Icon, title, text }) => (
            <div key={title} className="bg-background p-7">
              <Icon className="text-accent mb-5" size={26} />
              <h3 className="font-display text-xl tracking-wider">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const tabs = [
    {
      value: "training",
      label: "Training Floor",
      title: "Built For Combat.",
      desc: "Full-size Muay Thai ring, MMA cage, heavy bag wall, and pad stations — all under one roof.",
      img: images.gymInterior,
    },
    {
      value: "strength",
      label: "Strength & Conditioning",
      title: "Forge The Engine.",
      desc: "Olympic platforms, free weights, and combat-specific conditioning gear to keep your gas tank deep.",
      img: images.trainingKick,
    },
    {
      value: "recovery",
      label: "Recovery",
      title: "Heal To Train Again.",
      desc: "Stretching zone, ice baths, and physio support so you can put in the work tomorrow too.",
      img: images.handWraps,
    },
    {
      value: "stay",
      label: "Stay",
      title: "Rest Like A Pro.",
      desc: "Clean, quiet rooms with mountain views minutes from the gym — designed for athletes, not tourists.",
      img: images.cageFighter,
    },
  ];
  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Inside The Facility"
          title="Tour The Gym."
          description="Every space is built around the work — no fluff, no filler."
        />
        <Tabs defaultValue="training" className="mt-12">
          <TabsList className="!h-auto flex flex-wrap justify-start gap-2 bg-transparent p-0 mb-8">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="!rounded-none border border-border bg-card px-5 py-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-muted-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:!shadow-none data-[state=active]:border-accent"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="mt-0">
              <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                <div className="relative lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden border border-border">
                  <Image
                    src={t.img}
                    alt={t.label}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
                </div>
                <div className="lg:col-span-2 bg-card border border-border p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-secondary font-semibold mb-4">
                    {t.label}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-[1]">{t.title}</h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="relative py-20 md:py-28 border-y border-border overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-bronze/10" />
      <div className="relative container-x grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Mail size={16} className="text-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-secondary font-semibold">
              The Dispatch
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
            Get Fight Cards. <br />
            <span className="text-accent">Skip The Noise.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-md">
            One email a month. Upcoming events, new programs, fighter stories, and member-only
            offers. No spam.
          </p>
        </div>
        <form
          className="bg-card border border-border p-6 md:p-8 flex flex-col gap-4"
          action="/api/newsletter"
          method="post"
        >
          <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="warrior@example.com"
            className="bg-background border border-border px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent/90 transition-colors"
          >
            Sign Me Up
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <Clock size={12} /> One email · Monthly · Unsubscribe anytime
          </div>
        </form>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <Image
        src={images.cageFighter}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative container-x text-center">
        <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
          Step Into <span className="text-accent">The Ring.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg">
          Your first class is the hardest. Take it.
        </p>
        <Link
          href="/membership"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-9 py-5 text-sm tracking-[0.25em] uppercase font-semibold hover:bg-accent/90"
        >
          Become A Member <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
