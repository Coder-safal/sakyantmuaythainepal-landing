import type { Metadata } from "next";
import Image from "next/image";
import { Mic, Play } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { assetUrl, fetchSectionData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Beyond The Battles — Podcast",
  description:
    "Beyond The Battles. Unseen. Unheard. Unspoken. Stories from fighters, coaches and dreamers of Nepal's combat scene.",
  alternates: { canonical: "/podcast" },
  openGraph: {
    title: "Beyond The Battles — Podcast",
    description: "Unseen. Unheard. Unspoken.",
    url: "/podcast",
  },
};

interface PodcastContent {
  pageHero?: { eyebrow?: string; title?: string; subtitle?: string; image?: string };
  sectionLabel?: string;
  heading?: string;
  headingAccent?: string;
  body?: string;
  logoImage?: string;
  episodesSection?: { eyebrow?: string; title?: string };
  episodes?: { number: string; title: string }[];
}

export default async function PodcastPage() {
  const p = await fetchSectionData<PodcastContent>("podcast", {});
  const episodes = p.episodes ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="podcast"
        fallback={{
          eyebrow: p.pageHero?.eyebrow,
          title: p.pageHero?.title ?? "",
          subtitle: p.pageHero?.subtitle,
          image: assetUrl(p.pageHero?.image) || "/images/hand-wraps.jpg",
        }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {p.logoImage && (
            <div className="relative aspect-square bg-card border border-border p-10 grid place-items-center">
              <Image
                src={assetUrl(p.logoImage)}
                alt="Beyond The Battles"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-contain p-10"
              />
            </div>
          )}
          <div>
            {p.sectionLabel && (
              <div className="flex items-center gap-2 text-accent text-[11px] tracking-[0.3em] uppercase mb-3">
                <Mic size={14} /> {p.sectionLabel}
              </div>
            )}
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              {p.heading}{" "}
              {p.headingAccent && <span className="text-accent">{p.headingAccent}</span>}
            </h2>
            {p.body && <p className="mt-5 text-muted-foreground text-lg">{p.body}</p>}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-x">
          <SectionHeader
            eyebrow={p.episodesSection?.eyebrow}
            title={p.episodesSection?.title ?? ""}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {episodes.map((ep) => (
              <div
                key={ep.number}
                className="relative aspect-video border border-border bg-background grid place-items-center group"
              >
                <Play
                  className="text-accent group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="absolute bottom-0 inset-x-0 p-4 border-t border-border">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-accent">
                    Episode {ep.number}
                  </div>
                  <div className="font-display mt-1">{ep.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
