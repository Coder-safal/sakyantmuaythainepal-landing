import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShoppingBag, Shirt, Truck, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SealBackdrop } from "@/components/ui/SealBackdrop";
import { SITE } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fight Store — Sak Yant Muay Thai Nepal",
  description:
    "Limited fight-grade gear from Sak Yant Muay Thai Nepal. Summer tank top NPR 1,000 and more drops to come.",
  alternates: { canonical: "/fight-store" },
};

interface Product {
  slug: string;
  name: string;
  tag: string;
  priceLabel: string;
  description: string;
  image: string;
  available: boolean;
  features: string[];
  sizes?: string[];
}

const PRODUCTS: Product[] = [
  {
    slug: "summer-tank-top",
    name: "Summer Tank Top",
    tag: "New Drop",
    priceLabel: "NPR 1,000",
    description:
      "Breathable cotton with a sacred geometry chest print. Cut for sparring, pad rounds, and lakeside walks afterwards.",
    image: images.fightStore,
    available: true,
    features: ["100% cotton", "Studio-tested fit", "Limited run", "Unisex sizing"],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function FightStorePage() {
  const hero = PRODUCTS[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Fight Store"
        title="Wear the colours."
        subtitle="A small drop of fight-grade gear, made in Pokhara. Limited runs, premium fabric, no filler."
        image={images.fightStore}
      />

      {/* Hero product */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-20 opacity-[0.05]">
          <SealBackdrop spin="cw" className="h-100 w-100 opacity-25" />
        </div>

        <div className="relative container-x">
          <Reveal>
            <article className="glass gold-glow overflow-hidden grid lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-auto lg:min-h-[640px] overflow-hidden">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-l" />
                <div className="absolute top-6 left-6 text-[10px] tracking-[0.4em] uppercase text-accent-foreground bg-accent px-3 py-1.5 font-semibold">
                  {hero.tag}
                </div>
              </div>

              <div className="p-8 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="ornament-line mb-6">Summer Edition</div>
                  <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
                    {hero.name}
                  </h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                    {hero.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                    {hero.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-foreground/85">
                        <span className="h-1 w-1 bg-accent rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {hero.sizes && (
                    <div className="mt-8">
                      <div className="text-[10px] tracking-[0.4em] uppercase text-accent/80 mb-3">
                        Available Sizes
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {hero.sizes.map((s) => (
                          <span
                            key={s}
                            className="px-4 py-2 border border-accent/30 text-sm font-display tracking-wider text-foreground/90"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-10 border-t border-accent/15 pt-7">
                  <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                        Price
                      </div>
                      <div className="mt-2 font-display text-6xl gold-gradient leading-none">
                        {hero.priceLabel}
                      </div>
                    </div>
                    <a
                      href={`${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi! I'd like to order the ${hero.name} (${hero.priceLabel}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-foreground transition-colors duration-500"
                    >
                      <MessageCircle size={14} />
                      Order via WhatsApp
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Reassurance row */}
      <section className="py-12 md:py-16 border-y border-accent/10 bg-card/30">
        <div className="container-x grid sm:grid-cols-3 gap-px bg-accent/10">
          {[
            {
              Icon: Shirt,
              title: "Studio-tested",
              text: "Cut and fabric chosen by the fighters who train in them.",
            },
            {
              Icon: Truck,
              title: "Pokhara dispatch",
              text: "Local pickup at the studio · Nepal-wide shipping on request.",
            },
            {
              Icon: ShieldCheck,
              title: "Limited runs",
              text: "Small drops, premium fabric — never on a clearance rack.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="bg-background p-7 hairline">
              <Icon className="text-accent mb-4" size={22} />
              <h3 className="font-display text-xl tracking-wider">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More drops coming */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-x">
          <SectionHeader
            eyebrow="More Drops Coming"
            title={
              <>
                The next pieces are
                <br />
                <span className="gold-gradient">in the cut.</span>
              </>
            }
            description="Training shorts. Hand wraps. Yantra-mark hoodie. New drops every season."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {["Training Shorts", "Hand Wraps", "Yantra-Mark Hoodie"].map((label, i) => (
              <Reveal key={label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="glass aspect-[4/5] grid place-items-center text-center p-8 gold-glow group">
                  <div>
                    <ShoppingBag
                      className="mx-auto text-accent/60 group-hover:text-accent transition-colors duration-500"
                      size={28}
                    />
                    <div className="mt-5 text-[10px] tracking-[0.4em] uppercase text-accent/80">
                      Coming Soon
                    </div>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-wide">
                      {label}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-accent/40 hover:border-accent text-foreground px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold transition-all duration-500"
            >
              Join the Drop List
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
