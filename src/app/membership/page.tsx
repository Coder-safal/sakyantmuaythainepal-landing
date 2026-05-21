import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";
import { fetchPlans, fetchSectionData, type PublicPlan } from "@/lib/api";

export const metadata: Metadata = {
  title: "Membership & Training",
  description:
    "Membership and training plans for Muay Thai and MMA in Pokhara — for foreign athletes, Nepali athletes, kids and pros.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Membership — Sak Yant Muay Thai Nepal",
    description: "Plans for every level of fighter.",
    url: "/membership",
  },
};

// Backend-provided pricing is the source of truth. These are used only when the
// backend is offline before the seed runs — mirrors the original static layout
// so the UI keeps rendering.
const FALLBACK_PLANS: PublicPlan[] = [
  {
    id: "fallback-weekly",
    name: "Weekly Pass",
    slug: "weekly-pass",
    priceLabel: "NPR 3,000",
    amount: 3000,
    currency: "NPR",
    pricePer: "/week",
    durationDays: 7,
    audience: "general",
    description: "Flexible short-term training access.",
    features: [{ label: "All group classes" }, { label: "Open mat sessions" }, { label: "Drop-in friendly" }],
    isFeatured: false,
    sortOrder: 10,
  },
  {
    id: "fallback-monthly-np",
    name: "Monthly · Nepali",
    slug: "monthly-nepali",
    priceLabel: "NPR 8,000",
    amount: 8000,
    currency: "NPR",
    pricePer: "first month",
    durationDays: 30,
    audience: "members",
    description: "Includes complimentary hand wraps & training tank top.",
    features: [{ label: "All group classes" }, { label: "Welcome kit" }, { label: "Renewal NPR 6,000/mo" }],
    isFeatured: true,
    sortOrder: 20,
  },
];

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
  const [plansRaw, schedule] = await Promise.all([
    fetchPlans(),
    fetchSectionData<{ blocks: ScheduleBlock[] }>("schedule", SCHEDULE_FALLBACK),
  ]);
  const plans = plansRaw && plansRaw.length > 0 ? plansRaw : FALLBACK_PLANS;
  const blocks = schedule.blocks ?? SCHEDULE_FALLBACK.blocks;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Membership & Training"
        title="Choose Your Plan. Step On The Mat."
        subtitle="Built for fighters at every stage — visiting athletes, Nepali pros, total beginners, kids."
        image={images.membershipPoster}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Plans" title="Training Programs." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`relative border p-7 flex flex-col ${
                  p.isFeatured ? "border-accent bg-card" : "border-border bg-card"
                }`}
              >
                {p.isFeatured && (
                  <span className="absolute -top-3 left-7 bg-accent text-accent-foreground px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="text-[11px] tracking-[0.3em] uppercase text-secondary">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl">{p.priceLabel}</span>
                  <span className="text-muted-foreground text-sm">{p.pricePer}</span>
                </div>
                {p.description && (
                  <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                )}
                <ul className="mt-5 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex gap-2">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" /> {f.label}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.ctaUrl ?? SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 text-center py-3 text-xs tracking-[0.25em] uppercase font-semibold transition-colors ${
                    p.isFeatured
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border border-foreground/30 hover:border-foreground"
                  }`}
                >
                  {p.ctaLabel ?? "Inquire"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden border-y border-border">
        <Image
          src={images.trainingKick}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative container-x">
          <SectionHeader eyebrow="Schedule" title="Classes Schedule." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blocks.map((b) => (
              <div key={b.time} className="border border-border bg-background/80 backdrop-blur p-7">
                <div className="font-display text-2xl text-accent">{b.time}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {b.sessions.map((s) => (
                    <li key={s} className="border-l-2 border-accent/40 pl-3">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <Image
            src={images.schedulePoster}
            alt="Schedule poster"
            width={800}
            height={1131}
            className="w-full border border-border"
          />
          <div>
            <SectionHeader
              eyebrow="Group Discounts"
              title="Bring Your Crew. Save Together."
              description="Special pricing available for groups, gyms and teams visiting from abroad. Send us your team size and dates."
            />
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-semibold"
            >
              Request Group Quote
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
