import Image from "next/image";
import Link from "next/link";
import { assetUrl, fetchBanner, type BannerSection } from "@/lib/api";

interface Props {
  section: BannerSection;
  /** Used when the backend has no banner configured for this section. */
  fallback: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    subtitle?: string;
    image: string;
    ctaLabel?: string;
    ctaHref?: string;
    ctaSecondaryLabel?: string;
    ctaSecondaryHref?: string;
  };
}

/**
 * Server-rendered banner hero. Pulls the first active banner for the requested
 * section from the backend; falls back to the static `fallback` props when the
 * backend is offline or has no banner for that section.
 *
 * Style options on the banner (overlayOpacity, alignment, colors, CTA backgrounds)
 * are applied inline so admins can tune the look from the admin panel.
 */
export async function DynamicHero({ section, fallback }: Props) {
  const banner = await fetchBanner(section);

  const eyebrow = banner?.eyebrow ?? fallback.eyebrow;
  const title = banner?.title ?? fallback.title;
  const titleAccent = banner?.titleAccent ?? fallback.titleAccent;
  const subtitle = banner?.subtitle ?? fallback.subtitle;
  const image = banner?.imageUrl ? assetUrl(banner.imageUrl) : fallback.image;
  const imageAlt = banner?.imageAlt ?? "";
  const ctaLabel = banner?.ctaLabel ?? fallback.ctaLabel;
  const ctaHref = banner?.ctaHref ?? fallback.ctaHref;
  const ctaSecondaryLabel = banner?.ctaSecondaryLabel ?? fallback.ctaSecondaryLabel;
  const ctaSecondaryHref = banner?.ctaSecondaryHref ?? fallback.ctaSecondaryHref;
  const style = banner?.style ?? {};
  const align = style.align ?? "left";
  const overlayOpacity = typeof style.overlayOpacity === "number" ? style.overlayOpacity : 0.6;

  const alignClass =
    align === "center" ? "items-end justify-center text-center" : align === "right" ? "items-end justify-end text-right" : "items-end justify-start";

  return (
    <section className="relative h-[60vh] min-h-[420px] flex overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className={`relative container-x pb-12 md:pb-20 flex w-full ${alignClass}`}>
        <div className={align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          {eyebrow && (
            <div
              className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""}`}
            >
              <span className="h-px w-8 bg-accent" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-semibold"
                style={{ color: style.eyebrowColor || undefined }}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
            style={{ color: style.color || undefined, fontWeight: style.fontWeight || undefined }}
          >
            {title}
            {titleAccent && (
              <span
                className="ml-3"
                style={{ color: style.titleAccentColor || "var(--accent)" }}
              >
                {titleAccent}
              </span>
            )}
          </h1>
          {subtitle && (
            <p
              className={`mt-5 text-base md:text-lg ${align === "center" ? "mx-auto" : ""} max-w-xl`}
              style={{ color: style.subtitleColor || undefined }}
            >
              {subtitle}
            </p>
          )}
          {(ctaLabel || ctaSecondaryLabel) && (
            <div
              className={`mt-7 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""}`}
            >
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-colors"
                  style={{
                    backgroundColor: style.ctaPrimaryBg || "var(--accent)",
                    color: style.ctaPrimaryColor || "white",
                  }}
                >
                  {ctaLabel}
                </Link>
              )}
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center rounded-md border px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-white/5"
                  style={{
                    borderColor: style.ctaSecondaryColor || "rgba(255,255,255,0.4)",
                    color: style.ctaSecondaryColor || "white",
                  }}
                >
                  {ctaSecondaryLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
