import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Mic, Trophy, Flame, Dumbbell, Users } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <TrainLikeFighter />
      <PhilosophyImage />
      <Programs />
      <ContenderHighlight />
      <Trainers />
      <Achievements />
      <Podcast />
      <GalleryPreview />
      <Testimonials />
      <Sponsors />
      <Visit />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src={images.heroFighter}
        alt="Muay Thai fighter in red light"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="relative h-full container-x flex flex-col justify-end pb-20 md:pb-32">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-secondary font-semibold">
              Pokhara · Nepal
            </span>
          </div>
          <h1 className="font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88]">
            <span className="block">Forged In</span>
            <span className="block text-accent">Blood &amp; Sweat.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Sak Yant Muay Thai Nepal is where warriors are built. World-class Muay Thai and MMA
            training under the shadow of the Himalayas — home of The Contender Fight Series.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-accent/90 transition-colors"
            >
              Train With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contender"
              className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:border-foreground hover:bg-foreground/5 transition-all"
            >
              Watch The Contender
            </Link>
          </div>
        </div>
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
  return (
    <section className="relative py-20 md:py-28 border-y border-border overflow-hidden">
      <Image
        src={images.champion}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative container-x grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-7xl text-accent leading-none">{s.v}</div>
            <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
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
              <MapPin className="text-accent shrink-0 mt-0.5" size={18} /> {SITE.location}
            </li>
            <li className="flex gap-3">
              <Calendar className="text-accent shrink-0 mt-0.5" size={18} /> Mon–Sat · 7AM–8:30PM
            </li>
          </ul>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a
              href={SITE.mapsUrl}
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
            src={SITE.mapsEmbed}
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
            title="Sak Yant Muay Thai Nepal location"
          />
        </div>
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
