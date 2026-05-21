import type { Metadata } from "next";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "WBC titles, national championships and international podium finishes from Sak Yant Muay Thai Nepal.",
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: "Achievements — Sak Yant Muay Thai Nepal",
    description: "Champions, titles, podiums.",
    url: "/achievements",
  },
};

const RECORDS = [
  { y: "2024", t: "WBC Muaythai Nepal — National Champion", w: "Women's Flyweight" },
  { y: "2024", t: "ITF Taekwon-Do Worlds — Bronze Medal", w: "International" },
  { y: "2023", t: "National Pro Championship — Champion", w: "Lightweight" },
  { y: "2023", t: "South Asian Muay Thai Open — Finalist", w: "Welterweight" },
  { y: "2022", t: "Nepal MMA Federation — Champion", w: "Bantamweight" },
];

export default function AchievementsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Achievements"
        title="Champions Made Here."
        subtitle="Belts, medals and the records of fighters built in this gym."
        image={images.champion}
      />

      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { v: "12+", l: "National Titles" },
            { v: "8", l: "International Belts" },
            { v: "30+", l: "Podium Finishes" },
            { v: "5", l: "WBC Champions" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-7xl text-accent leading-none">
                {s.v}
              </div>
              <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div className="relative w-full aspect-[4/5] border border-border">
            <Image
              src={images.cageFighter}
              alt=""
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Fight Record" title="Title By Title." />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {RECORDS.map((r, i) => (
                <li key={i} className="py-5 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <Trophy size={20} className="text-accent" />
                  <div>
                    <div className="font-display tracking-wide">{r.t}</div>
                    <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                      {r.w}
                    </div>
                  </div>
                  <div className="font-display text-2xl text-secondary">{r.y}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
