import type { Metadata } from "next";
import Image from "next/image";
import { Mic, Play } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

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

export default function PodcastPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="A Podcast"
        title="Beyond The Battles."
        subtitle="Unseen. Unheard. Unspoken."
        image={images.handWraps}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="relative aspect-square bg-card border border-border p-10 grid place-items-center">
            <Image
              src={images.podcastLogo}
              alt="Beyond The Battles"
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-contain p-10"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-secondary text-[11px] tracking-[0.3em] uppercase mb-3">
              <Mic size={14} /> Coming Soon
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              The Stories Behind <span className="text-accent">The Fighters.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Long-form conversations with the athletes, coaches, and characters of Nepal&apos;s
              fast-growing combat sport scene. Subscribe — we drop episode one soon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-x">
          <SectionHeader eyebrow="Episodes" title="Coming Soon." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="relative aspect-video border border-border bg-background grid place-items-center group"
              >
                <Play
                  className="text-accent group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="absolute bottom-0 inset-x-0 p-4 border-t border-border">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-secondary">
                    Episode 0{n}
                  </div>
                  <div className="font-display mt-1">Trailer Drop</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
