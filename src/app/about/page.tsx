import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our story, philosophy and mission — building Nepal's premier Muay Thai and MMA fight academy in Pokhara.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Sak Yant Muay Thai Nepal",
    description: "Our story, philosophy and mission.",
    url: "/about",
  },
};

const TIMELINE = [
  { y: "2020", t: "Founded", d: "Born in a small Pokhara gym with one ring and a vision." },
  { y: "2022", t: "First Champions", d: "Our fighters claim national Muay Thai titles." },
  { y: "2023", t: "International Stage", d: "Athletes compete at WBC Muaythai events abroad." },
  { y: "2024", t: "The Contender", d: "Launching Nepal's home-grown fight promotion." },
  { y: "2025", t: "A Movement", d: "150+ athletes, international students, full-time pros." },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Built By Fighters. For Fighters."
        subtitle="A story of discipline, sacrifice, and a small Himalayan town that learned to throw elbows."
        image={images.handWraps}
      />

      <section className="py-20 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <SectionHeader
            eyebrow="Our Story"
            title="From the foothills, to the world stage."
          />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sak Yant Muay Thai Nepal was founded with a single belief — that world-class combat
            sport doesn&apos;t need a passport. We built a gym where Nepali athletes could train at
            the same standard as Bangkok or Phuket, and where international fighters could come and
            find a home in the Himalayas.
          </p>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={images.gymInterior}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative container-x h-full flex items-center">
          <div className="max-w-lg">
            <div className="text-[11px] tracking-[0.3em] uppercase text-secondary mb-3">
              Mission
            </div>
            <h3 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Make Nepal a <span className="text-accent">fight nation.</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="Timeline" title="Five Years. One Mission." />
          <div className="mt-14 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {TIMELINE.map((e, i) => (
                <div
                  key={e.y}
                  className={`relative grid md:grid-cols-2 gap-6 ${
                    i % 2 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`pl-10 md:pl-0 ${
                      i % 2 ? "md:pl-12" : "md:text-right md:pr-12"
                    }`}
                  >
                    <div className="font-display text-4xl md:text-5xl text-accent">{e.y}</div>
                    <div className="font-display text-xl mt-1">{e.t}</div>
                    <p className="text-muted-foreground mt-2 text-sm">{e.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 bg-accent rounded-full ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden border-t border-border">
        <Image
          src={images.trainingKick}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container-x text-center">
          <h2 className="font-display text-4xl md:text-6xl">Come Train With Us.</h2>
          <Link
            href="/membership"
            className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-semibold"
          >
            See Memberships
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
