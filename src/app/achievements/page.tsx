import type { Metadata } from "next";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { assetUrl, fetchSectionData } from "@/lib/api";

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

interface AchievementsContent {
  pageHero?: { eyebrow?: string; title?: string; subtitle?: string; image?: string };
  extendedStats?: { value: string; label: string }[];
  recordsSection?: { eyebrow?: string; title?: string; image?: string };
  records?: { year: string; title: string; weight: string }[];
}

export default async function AchievementsPage() {
  const a = await fetchSectionData<AchievementsContent>("achievements", {});
  const stats = a.extendedStats ?? [];
  const records = a.records ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="achievements"
        fallback={{
          eyebrow: a.pageHero?.eyebrow,
          title: a.pageHero?.title ?? "",
          subtitle: a.pageHero?.subtitle,
          image: assetUrl(a.pageHero?.image) || "/images/champion.jpg",
        }}
      />

      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl md:text-7xl text-accent leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[1fr_1.4fr] gap-12">
          {a.recordsSection?.image && (
            <div className="relative w-full aspect-[4/5] border border-border">
              <Image
                src={assetUrl(a.recordsSection.image)}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <SectionHeader
              eyebrow={a.recordsSection?.eyebrow}
              title={a.recordsSection?.title ?? ""}
            />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {records.map((r, i) => (
                <li key={i} className="py-5 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <Trophy size={20} className="text-accent" />
                  <div>
                    <div className="font-display tracking-wide">{r.title}</div>
                    <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                      {r.weight}
                    </div>
                  </div>
                  <div className="font-display text-2xl text-accent">{r.year}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
