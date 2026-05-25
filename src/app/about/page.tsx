import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { assetUrl, fetchSectionData } from "@/lib/api";

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

interface AboutContent {
  title?: string;
  subtitle?: string;
  story?: { eyebrow?: string; title?: string; description?: string };
  mission?: { eyebrow?: string; title?: string; titleAccent?: string; image?: string };
  timelineSection?: { eyebrow?: string; title?: string };
  timeline?: { year: string; title: string; description: string }[];
  outro?: { title?: string; ctaLabel?: string; ctaHref?: string; image?: string };
}

export default async function AboutPage() {
  const about = await fetchSectionData<AboutContent>("about", {});
  const timeline = about.timeline ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="about"
        fallback={{
          eyebrow: about.story?.eyebrow,
          title: about.title ?? "",
          subtitle: about.subtitle,
          image: assetUrl(about.mission?.image) || "/images/hand-wraps.jpg",
        }}
      />

      <section className="py-20 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <SectionHeader eyebrow={about.story?.eyebrow} title={about.story?.title ?? ""} />
          <p className="text-muted-foreground text-lg leading-relaxed">
            {about.story?.description}
          </p>
        </div>
      </section>

      {about.mission?.image && (
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src={assetUrl(about.mission.image)}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="relative container-x h-full flex items-center">
            <div className="max-w-lg">
              {about.mission.eyebrow && (
                <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">
                  {about.mission.eyebrow}
                </div>
              )}
              <h3 className="font-display text-4xl md:text-6xl leading-[0.95]">
                {about.mission.title}{" "}
                {about.mission.titleAccent && (
                  <span className="text-accent">{about.mission.titleAccent}</span>
                )}
              </h3>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow={about.timelineSection?.eyebrow}
            title={about.timelineSection?.title ?? ""}
          />
          <div className="mt-14 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((e, i) => (
                <div
                  key={e.year}
                  className={`relative grid md:grid-cols-2 gap-6 ${
                    i % 2 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`pl-10 md:pl-0 ${
                      i % 2 ? "md:pl-12" : "md:text-right md:pr-12"
                    }`}
                  >
                    <div className="font-display text-4xl md:text-5xl text-accent">{e.year}</div>
                    <div className="font-display text-xl mt-1">{e.title}</div>
                    <p className="text-muted-foreground mt-2 text-sm">{e.description}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 bg-accent rounded-full ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {about.outro && (
        <section className="relative py-24 md:py-32 overflow-hidden border-t border-border">
          {about.outro.image && (
            <>
              <Image
                src={assetUrl(about.outro.image)}
                alt=""
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-background/80" />
            </>
          )}
          <div className="relative container-x text-center">
            <h2 className="font-display text-4xl md:text-6xl">{about.outro.title}</h2>
            {about.outro.ctaLabel && about.outro.ctaHref && (
              <Link
                href={about.outro.ctaHref}
                className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-semibold"
              >
                {about.outro.ctaLabel}
              </Link>
            )}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
