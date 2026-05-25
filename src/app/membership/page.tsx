import type { Metadata } from "next";
import Image from "next/image";
import { Check, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SealBackdrop } from "@/components/ui/SealBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";
import { fetchPlans, fetchSectionData, fetchSiteConfig, type PublicPlan } from "@/lib/api";

export const metadata: Metadata = {
  title: "Membership & Training",
  description:
    "Membership and training plans for Muay Thai, MMA, BJJ, wrestling, kickboxing and fitness in Pokhara, Nepal.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Membership — Sak Yant Muay Thai Nepal",
    description: "Plans for every level — Muay Thai · MMA · Fitness.",
    url: "/membership",
  },
};

interface ScheduleBlock {
  time: string;
  sessions: string[];
}

const SCHEDULE_FALLBACK: { blocks: ScheduleBlock[] } = {
  blocks: [
    { time: "Morning", sessions: ["7:00 – 8:30 AM · Muay Thai for All", "8:30 – 10:00 AM · MMA"] },
    { time: "Day", sessions: ["10 AM – 4 PM · Private Sessions Only"] },
    {
      time: "Evening",
      sessions: [
        "5 – 6 PM · Kids",
        "6 – 7 PM · Beginners (Adult)",
        "7 – 8:30 PM · Intermediate / Pro",
      ],
    },
  ],
};

export default async function MembershipPage() {
  const [plansRaw, schedule, site] = await Promise.all([
    fetchPlans(),
    fetchSectionData<{ blocks: ScheduleBlock[] }>("schedule", SCHEDULE_FALLBACK),
    fetchSiteConfig(SITE),
  ]);
  const plans: PublicPlan[] = plansRaw ?? [];
  const blocks = schedule.blocks ?? SCHEDULE_FALLBACK.blocks;

  return (
    <SiteLayout>
      <DynamicHero
        section="membership"
        fallback={{
          eyebrow: "Membership & Training",
          title: "Choose your plan. Step on the mat.",
          subtitle:
            "Built for fighters at every stage — visiting athletes, Nepali pros, beginners, kids.",
          image: images.membershipPoster,
        }}
      />

      {plans.length > 0 ? (
        <FeeGrid plans={plans} site={site} />
      ) : (
        <FeesComingSoon site={site} />
      )}

      {/* Schedule */}
      <section className="relative py-20 md:py-28 overflow-hidden border-y border-accent/10">
        <Image
          src={images.trainingKick}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container-x">
          <SectionHeader
            eyebrow="Schedule"
            title={
              <>
                Classes
                <br />
                <span className="gold-gradient">schedule.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.time} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="glass p-7 gold-glow h-full">
                  <div className="font-display text-2xl text-accent">{b.time}</div>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {b.sessions.map((s) => (
                      <li key={s} className="border-l-2 border-accent/40 pl-3 py-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group discount */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="fade">
            <div className="relative aspect-4/5 overflow-hidden hairline">
              <Image
                src={images.schedulePoster}
                alt="Schedule poster"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover ken-burns"
              />
              <div className="absolute inset-0 smoke-overlay-light" />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Group Discounts"
              title={
                <>
                  Bring your crew.
                  <br />
                  <span className="gold-gradient">Save together.</span>
                </>
              }
              description="Special pricing for groups, gyms and teams visiting from abroad. Send us your team size and dates."
            />
            <Reveal delay={3}>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-foreground transition-colors duration-500"
              >
                <MessageCircle size={14} />
                Request Group Quote
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ── Coming-soon state ───────────────────────────────────────── */
function FeesComingSoon({ site }: { site: typeof SITE }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <SealBackdrop spin="cw" className="h-[55vmin] w-[55vmin] opacity-25" />
      </div>

      <div className="relative container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Membership"
            title={
              <>
                Fee poster
                <br />
                <span className="gold-gradient">coming soon.</span>
              </>
            }
            description="The studio doors open shortly. The official fee structure — drop-in, weekly, monthly, fighter program, kids — will be released as a single poster on launch day."
          />
          <Reveal delay={3}>
            <ul className="mt-10 space-y-4 max-w-md">
              {[
                "Drop-in & weekly passes",
                "Monthly memberships (Nepali & visiting athletes)",
                "Kids Muay Thai program",
                "Fighter program (application only)",
                "Group & team discounts",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground/85">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-foreground transition-colors duration-500"
              >
                <MessageCircle size={14} />
                Reserve Your Spot
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-accent/40 hover:border-accent text-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold transition-all duration-500"
              >
                Ask About Pricing
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade">
          <div className="relative">
            <div className="relative aspect-4/5 glass-strong overflow-hidden hairline grid place-items-center p-12 text-center">
              {/* Watermark seal */}
              <SealBackdrop
                spin="cw"
                className="absolute inset-12 h-[calc(100%-6rem)] w-[calc(100%-6rem)] opacity-35"
              />
              <div className="relative">
                <Sparkles className="mx-auto text-accent mb-6 pulse-glow" size={28} />
                <div className="ornament-line mb-6 justify-center inline-flex">
                  Fee Poster
                </div>
                <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">
                  Releasing
                  <br />
                  <span className="gold-gradient">on launch day.</span>
                </h3>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  All membership tiers, schedules and inclusions — published in one
                  clean poster the day the studio opens.
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-accent">
                  <span className="h-1 w-1 bg-accent rounded-full animate-pulse" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Live fee grid (when plans exist) ──────────────────────── */
function FeeGrid({ plans, site }: { plans: PublicPlan[]; site: typeof SITE }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Plans"
          title={
            <>
              Training
              <br />
              <span className="gold-gradient">programs.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div
                className={`relative p-8 flex flex-col h-full gold-glow ${
                  p.isFeatured
                    ? "glass-strong border-accent/40"
                    : "glass"
                }`}
              >
                {p.isFeatured && (
                  <span className="absolute -top-3 left-7 bg-accent text-accent-foreground px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="text-[11px] tracking-[0.35em] uppercase text-accent/80">
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl gold-gradient leading-none">
                    {p.priceLabel}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">{p.pricePer}</span>
                </div>
                {p.description && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                )}
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex gap-2.5 text-foreground/85">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" /> {f.label}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.ctaUrl ?? site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto pt-8 text-center text-[11px] tracking-[0.3em] uppercase font-semibold transition-colors duration-500 ${
                    p.isFeatured
                      ? "text-accent hover:text-foreground"
                      : "text-foreground/70 hover:text-accent"
                  }`}
                >
                  {p.ctaLabel ?? "Inquire"} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
