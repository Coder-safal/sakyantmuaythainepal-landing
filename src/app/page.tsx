import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Flame,
  Swords,
  Dumbbell,
  Trees,
  MessageCircle,
  Mic,
  Trophy,
  ShoppingBag,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { YantraMark } from "@/components/ui/YantraMark";
import { SealBackdrop } from "@/components/ui/SealBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sak Yant Muay Thai Nepal — Muay Thai · MMA · Fitness in Pokhara",
  description:
    "World-class Muay Thai, MMA, kickboxing and fitness training in the heart of Lakeside, Pokhara. For first-timers and professionals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sak Yant Muay Thai Nepal",
    description:
      "Muay Thai · MMA · Fitness — In the heart of Lakeside, Pokhara, Nepal.",
    type: "website",
    url: "/",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Sak Yant Muay Thai Nepal",
  description:
    "Muay Thai, MMA, kickboxing and fitness training in Lakeside, Pokhara, Nepal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pokhara",
    addressRegion: "Lakeside",
    addressCountry: "NP",
  },
  sport: ["Muay Thai", "Mixed Martial Arts", "Kickboxing", "Fitness"],
};

export default function HomePage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Hero />
      <SacredMarquee />
      <About />
      <OurClasses />
      <UpcomingEvents />
      <SakYantSymbolism />
      <CinematicGallery />
      <FightStoreTeaser />
      <Philosophy />
      <Testimonials />
      <FinalInvocation />
    </SiteLayout>
  );
}

/* ────────────────────────────────────────────────────────────
   HERO — fullscreen cinematic
   ──────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[720px] overflow-hidden grain">
      <div className="absolute inset-0 ken-burns">
        <Image
          src={images.heroFighter}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Bangtao cinema gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,10,10,0.2),_rgba(10,10,10,0.92))]" />
      <div className="absolute inset-0 cinema-overlay" />
      <div className="absolute inset-0 vignette" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-1/4 left-[18%] h-1 w-1 bg-accent/80 rounded-full float-slow" />
        <span className="absolute top-1/3 right-[22%] h-1 w-1 bg-accent/70 rounded-full float-mid" />
        <span className="absolute bottom-1/3 left-1/3 h-[3px] w-[3px] bg-accent rounded-full float-slow" />
        <span className="absolute bottom-1/4 right-1/4 h-1 w-1 bg-accent/60 rounded-full float-mid" />
      </div>

      <div className="relative h-full container-x flex flex-col justify-end items-center text-center pb-32">
        <Reveal delay={3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-9 py-5 text-[11px] tracking-[0.4em] uppercase font-semibold hover:bg-foreground transition-all duration-500"
            >
              Book Now
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 glass text-foreground px-9 py-5 text-[11px] tracking-[0.4em] uppercase font-semibold hover:border-accent transition-all duration-500"
            >
              <MessageCircle size={15} className="text-accent" />
              Connect on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-accent/70">
        <span className="text-[10px] tracking-[0.5em] uppercase">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   SACRED MARQUEE
   ──────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "MMA",
  "MUAY THAI",
  "FITNESS",
  "KID BOXING",
  "LAKESIDE · POKHARA",
  "HEART OF POKHARA",
];

function SacredMarquee() {
  return (
    <section className="border-y border-accent/15 bg-card/40 py-6 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-4xl text-stroke flex items-center gap-8"
            >
              {t}
              <span className="text-accent text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   ABOUT
   ──────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden sacred-bg">
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <SealBackdrop spin="cw" className="h-[60vmin] w-[60vmin] opacity-20" />
      </div>

      <div className="relative container-x grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <Reveal variant="fade" className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden hairline">
              <Image
                src={images.handWraps}
                alt="A warrior carries the sacred mark"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover ken-burns"
              />
              <div className="absolute inset-0 smoke-overlay-light" />
              <div className="absolute inset-0 vignette" />
            </div>
            <div className="absolute top-6 left-6 text-[10px] tracking-[0.4em] uppercase text-accent/90 bg-background/80 px-4 py-2 border border-accent/20">
              Sacred · Discipline
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Our Story"
            title={
              <>
                Two ancient
                <br />
                <span className="gold-gradient">paths converge.</span>
              </>
            }
          />
          <Reveal delay={2}>
            <div className="mt-10 space-y-6 text-muted-foreground leading-[1.85] text-base md:text-lg max-w-xl">
              <p>
                For centuries, Thai warriors carried{" "}
                <em className="text-accent not-italic">Sak Yant</em> — sacred geometric ink
                etched by monks, blessed with mantras, worn as armour against the unseen.
              </p>
              <p>
                In Lakeside Pokhara we have built a modern studio where the ancient warrior
                code meets the calm of the Annapurnas. Muay Thai. MMA. Fitness. For every
                body, every level — from first round to first belt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-12 grid grid-cols-3 gap-px bg-accent/10">
              {[
                { value: "4", label: "Disciplines" },
                { value: "108", label: "Sacred Mantras" },
                { value: "∞", label: "Inner Stillness" },
              ].map((s) => (
                <div key={s.label} className="bg-background p-6 text-center hairline">
                  <div className="font-display text-4xl md:text-5xl gold-gradient leading-none">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   OUR CLASSES — the real offering
   ──────────────────────────────────────────────────────────── */
function OurClasses() {
  const classes = [
    {
      Icon: Flame,
      tag: "01",
      title: "Muay Thai",
      desc: "The art of eight limbs. Traditional Thai striking, clinch work and ring craft.",
      img: images.trainingKick,
    },
    {
      Icon: Swords,
      tag: "02",
      title: "MMA",
      desc: "Mixed martial arts — striking, grappling, transitions. Ring and cage ready.",
      img: images.mma,
    },
    {
      Icon: Dumbbell,
      tag: "03",
      title: "Kickboxing",
      desc: "Punches, kicks, footwork — pad rounds, bag work, sparring for every level.",
      img: images.gymInterior,
    },
    {
      Icon: Trees,
      tag: "04",
      title: "Fitness · Indoor & Outdoor",
      desc: "Strength, conditioning and mobility — designed for performance, health, growth.",
      img: images.cageEventAlt,
    },
  ];

  return (
    <section className="relative py-24 md:py-40 border-y border-accent/10 bg-card/30 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionHeader
            eyebrow="Our Classes"
            title={
              <>
                World-class training,
                <br />
                <span className="gold-gradient">modern studio atmosphere.</span>
              </>
            }
            description="Led by experienced coaches and national & international achievers. Muay Thai, MMA and kickboxing — alongside indoor and outdoor fitness programs tailored for performance, health, and personal growth."
          />
          <Reveal delay={2}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-accent hover:text-foreground transition-colors"
            >
              Try a Class
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((c, i) => (
            <Reveal key={c.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="group relative overflow-hidden glass gold-glow h-full">
                <div className="relative aspect-[5/6] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 transition-colors duration-700" />

                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.4em] uppercase text-accent/80">
                    {c.tag}
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 grid place-items-center border border-accent/30 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                    <c.Icon size={16} />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-7">
                    <h3 className="font-display text-2xl md:text-3xl tracking-wide">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Join Class
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   UPCOMING EVENTS — Podcast + Contender Series 5
   ──────────────────────────────────────────────────────────── */
function UpcomingEvents() {
  const events = [
    {
      Icon: Mic,
      tag: "Coming Soon",
      title: "Beyond The Battles · Podcast",
      desc: "Unseen. Unheard. Unspoken. The stories of fighters, coaches and dreamers building combat sport in Nepal.",
      cta: "Listen In",
      href: "/podcast",
      img: images.cageEvent,
    },
    {
      Icon: Trophy,
      tag: "Headline Event",
      title: "The Contender Series · 5",
      desc: "Nepal's premier Muay Thai & MMA promotion returns to the lakeside for its fifth headline night.",
      cta: "Reserve a Seat",
      href: "/contender",
      img: images.cageEventAlt,
    },
    {
      Icon: Flame,
      tag: "Fight Camp",
      title: "Lakeside Fight Camp",
      desc: "An intensive multi-week camp by the lake — sparring, conditioning and tradition under one roof.",
      cta: "Join the Camp",
      href: "/contact",
      img: images.cageEventThird,
    },
  ];

  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-20">
        <SealBackdrop spin="ccw" className="h-100 w-100 opacity-25" />
      </div>

      <div className="relative container-x">
        <SectionHeader
          eyebrow="What's Coming"
          title={
            <>
              Upcoming
              <br />
              <span className="gold-gradient">events.</span>
            </>
          }
          description="Two headline moments shaping the season ahead."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={((i % 2) + 1) as 1 | 2}>
              <article className="group relative glass gold-glow overflow-hidden h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={e.img}
                    alt={e.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 cinema-overlay" />
                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.4em] uppercase text-accent-foreground bg-accent px-3 py-1.5 font-semibold">
                    {e.tag}
                  </div>
                  <div className="absolute top-5 right-5 h-12 w-12 grid place-items-center bg-background/80 border border-accent/30 text-accent">
                    <e.Icon size={18} />
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="font-display text-3xl md:text-4xl tracking-wide leading-[0.95]">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{e.desc}</p>
                  <Link
                    href={e.href}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-accent hover:text-foreground transition-colors group/cta"
                  >
                    {e.cta}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   SAK YANT SYMBOLISM
   ──────────────────────────────────────────────────────────── */
function SakYantSymbolism() {
  const symbols = [
    {
      glyph: "ห้าแถว",
      title: "Hā Thaew",
      meaning: "Five Sacred Lines",
      text: "Protection from misfortune. Five mantras inked across the body — five blessings carried for life.",
    },
    {
      glyph: "เก้ายอด",
      title: "Gao Yord",
      meaning: "Nine Spires",
      text: "Nine peaks rising — strength, fortune, charisma, success. The yantra of the most sacred mountain.",
    },
    {
      glyph: "หนุมาน",
      title: "Hanuman",
      meaning: "Warrior Devotion",
      text: "Courage in battle. Loyalty without limit. The sacred image worn by fighters and the fearless.",
    },
  ];

  return (
    <section
      id="sak-yant"
      className="relative py-24 md:py-44 overflow-hidden bg-gradient-to-b from-background via-card/40 to-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10">
          <SealBackdrop spin="cw" className="h-[480px] w-[480px] opacity-25" />
        </div>
        <div className="absolute -right-24 bottom-10">
          <SealBackdrop spin="ccw" className="h-100 w-100 opacity-20" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 bg-accent/60 rounded-full float-slow"
            style={{
              top: `${(i * 73) % 90 + 5}%`,
              left: `${(i * 41) % 92 + 4}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container-x">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="ornament-line mb-6 justify-center inline-flex">Sacred Symbolism</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-balance">
              The geometry
              <br />
              <span className="gold-gradient">of the spirit.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              Every yantra is a circuit of mantra and meaning — drawn by hand, blessed by lineage,
              chosen for who you are becoming. The body becomes the temple.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade">
          <div className="mt-20 grid place-items-center">
            <div className="relative h-[min(70vmin,540px)] w-[min(70vmin,540px)] grid place-items-center">
              <SealBackdrop
                spin="cw"
                className="absolute inset-0 h-full w-full opacity-90 pulse-glow"
              />
              <div className="relative font-serif text-3xl md:text-4xl text-accent text-center leading-tight">
                สักยันต์
                <div className="font-display text-xs tracking-[0.5em] mt-3 text-mist/80">
                  SAK YANT
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {symbols.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="relative glass p-8 md:p-10 h-full gold-glow group">
                <div className="font-serif text-3xl md:text-4xl text-accent mb-6">
                  {s.glyph}
                </div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-accent/80 mb-3">
                  {s.meaning}
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-wide">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                <div className="mt-8 h-px gold-line opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   CINEMATIC GALLERY
   ──────────────────────────────────────────────────────────── */
function CinematicGallery() {
  const imgs = [
    { src: images.gymInterior, span: "row-span-2", label: "The Floor" },
    { src: images.handWraps, span: "", label: "The Mark" },
    { src: images.cageEvent, span: "", label: "The Stage" },
    { src: images.trainingKick, span: "", label: "The Strike" },
    { src: images.cageFighter, span: "row-span-2", label: "The Warrior" },
    { src: images.cageEventAlt, span: "", label: "The Ritual" },
    { src: images.mma, span: "", label: "The Crucible" },
    { src: images.champion, span: "", label: "The Champion" },
  ];

  return (
    <section className="py-24 md:py-40 grain">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="The Sanctuary"
            title={
              <>
                Frames from a
                <br />
                <span className="gold-gradient">sacred life.</span>
              </>
            }
          />
          <Reveal delay={2}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-accent hover:text-foreground transition-colors"
            >
              Full Gallery
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {imgs.map((img, i) => (
            <Reveal
              key={i}
              variant="fade"
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={`relative overflow-hidden group cursor-pointer hairline ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors duration-500" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-display tracking-[0.3em] text-sm uppercase translate-y-3 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {img.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-accent translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FIGHT STORE TEASER — Summer Tank Top NPR 1,000
   ──────────────────────────────────────────────────────────── */
function FightStoreTeaser() {
  return (
    <section className="relative py-24 md:py-40 border-y border-accent/10 bg-card/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <SealBackdrop spin="ccw" className="h-[55vmin] w-[55vmin] opacity-20" />
      </div>

      <div className="relative container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Fight Store"
            title={
              <>
                Wear the
                <br />
                <span className="gold-gradient">colours.</span>
              </>
            }
            description="A small drop of fight-grade gear, made for the studio and worn beyond it. Limited runs, premium fabric, no filler."
          />
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/fight-store"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-foreground transition-colors duration-500"
              >
                Visit Store
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-accent/40 hover:border-accent text-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold transition-all duration-500"
              >
                <MessageCircle size={14} className="text-accent" />
                Order via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="lg:col-span-7">
          <article className="group relative glass gold-glow overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto md:min-h-[480px] overflow-hidden">
                <Image
                  src={images.fightStore ?? images.heroFighter}
                  alt="Summer Tank Top — Sak Yant Muay Thai Nepal"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent md:bg-gradient-to-l" />
                <div className="absolute top-5 left-5 text-[10px] tracking-[0.4em] uppercase text-accent-foreground bg-accent px-3 py-1.5 font-semibold">
                  New Drop
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="ornament-line mb-5">Summer Edition</div>
                  <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">
                    Summer Tank Top
                  </h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    Breathable cotton. Sacred geometry chest print. Cut for sparring,
                    pad rounds, and lakeside walks afterward.
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    {[
                      "100% cotton",
                      "Studio-tested fit",
                      "Limited run",
                      "Unisex sizing",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-foreground/85">
                        <span className="h-1 w-1 bg-accent rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-accent/15 pt-6">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                      Price
                    </div>
                    <div className="mt-2 font-display text-5xl gold-gradient leading-none">
                      NPR 1,000
                    </div>
                  </div>
                  <Link
                    href="/fight-store"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-accent hover:text-foreground transition-colors"
                  >
                    <ShoppingBag size={14} />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   PHILOSOPHY
   ──────────────────────────────────────────────────────────── */
function Philosophy() {
  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 ken-burns">
        <Image
          src={images.handWraps}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 vignette" />

      <div className="relative container-x h-full flex items-center">
        <div className="max-w-2xl">
          <Reveal>
            <div className="ornament-line mb-6">The Philosophy</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-balance">
              Discipline is the
              <br />
              <span className="gold-gradient">only shortcut.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 text-mist/85 text-base md:text-lg leading-relaxed max-w-xl">
              No quick fixes. No marketing lines. Early mornings, bruised shins, long
              sessions, and the quiet pride of becoming the strongest version of yourself.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   TESTIMONIALS
   ──────────────────────────────────────────────────────────── */
function Testimonials() {
  const quotes = [
    {
      q: "Trained here for three months. The coaching is real, the energy is sacred, and Pokhara is the most beautiful place I've ever taught my body to fight in.",
      a: "Jake M.",
      r: "Visiting Athlete · Australia",
    },
    {
      q: "Muay Thai, MMA, kickboxing — all under one roof, all coached at a level I didn't expect to find in Nepal. The community made it home.",
      a: "Aarti S.",
      r: "Amateur Fighter · India",
    },
    {
      q: "World-class striking, honest grappling, and lakeside recovery between sessions. The Contender nights are the cherry on top.",
      a: "Luca R.",
      r: "Pro Fighter · Italy",
    },
  ];

  return (
    <section className="relative py-24 md:py-40 border-y border-accent/10 bg-card/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <SealBackdrop spin="ccw" className="h-[55vmin] w-[55vmin] opacity-20" />
      </div>

      <div className="relative container-x">
        <SectionHeader
          eyebrow="Voices From The Sanctuary"
          title={
            <>
              What the warriors
              <br />
              <span className="gold-gradient">carry home.</span>
            </>
          }
          align="center"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <figure className="relative glass p-9 md:p-10 h-full gold-glow">
                <Quote
                  className="absolute -top-4 left-8 text-accent bg-background px-2"
                  size={32}
                />
                <blockquote className="text-foreground/90 leading-[1.85] text-[15px]">
                  {q.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-accent/15">
                  <div className="font-display tracking-[0.2em] text-lg">{q.a}</div>
                  <div className="text-[10px] text-accent/80 tracking-[0.35em] uppercase mt-1">
                    {q.r}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FINAL INVOCATION
   ──────────────────────────────────────────────────────────── */
function FinalInvocation() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 ken-burns">
        <Image
          src={images.cageFighter}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,10,10,0.4),_rgba(10,10,10,0.96))]" />

      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <SealBackdrop
          spin="cw"
          className="h-[min(55vmin,460px)] w-[min(55vmin,460px)] opacity-25 pulse-glow"
        />
      </div>

      <div className="relative container-x text-center">
        <Reveal>
          <div className="ornament-line mb-8 justify-center inline-flex">{SITE.location}</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.88] text-balance">
            Step onto
            <br />
            <span className="gold-gradient">the mat.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-xl mx-auto text-mist/85 text-base md:text-lg leading-relaxed">
            Your first round is the hardest. After that — only the studio, the strike, and
            the version of yourself you came here to find.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-[11px] tracking-[0.4em] uppercase font-semibold hover:bg-foreground transition-colors duration-500"
            >
              Book Now
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass text-foreground hover:border-accent px-10 py-5 text-[11px] tracking-[0.4em] uppercase font-semibold transition-all duration-500"
            >
              <MessageCircle size={14} className="text-accent" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
