import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { GalleryGrid } from "./_components/GalleryGrid";
import { assetUrl, fetchSectionData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside the gym, training sessions, fight nights and community moments from Sak Yant Muay Thai Nepal.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Sak Yant Muay Thai Nepal",
    description: "Training. Fights. Life.",
    url: "/gallery",
  },
};

interface GalleryContent {
  pageHero?: { eyebrow?: string; title?: string; subtitle?: string; image?: string };
  items?: { src: string; category: string }[];
  categories?: string[];
}

export default async function GalleryPage() {
  const gallery = await fetchSectionData<GalleryContent>("gallery", {});
  const items = (gallery.items ?? []).map((it) => ({ src: assetUrl(it.src), cat: it.category }));
  const categories = gallery.categories ?? [];

  return (
    <SiteLayout>
      <DynamicHero
        section="gallery"
        fallback={{
          eyebrow: gallery.pageHero?.eyebrow,
          title: gallery.pageHero?.title ?? "",
          subtitle: gallery.pageHero?.subtitle,
          image: assetUrl(gallery.pageHero?.image) || "/images/cage-event.jpg",
        }}
      />
      <GalleryGrid items={items} categories={categories} />
    </SiteLayout>
  );
}
