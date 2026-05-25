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

const LOCAL_GALLERY_ITEMS: { src: string; category: string }[] = [
  { src: "/photos/mayuthai.png", category: "Muay Thai" },
  { src: "/photos/mma.png", category: "MMA" },
  { src: "/photos/fitness.png", category: "Fitness" },
  { src: "/photos/kids-muaythai.png", category: "Kids" },
  { src: "/photos/kids-boxing.png", category: "Kids" },
  { src: "/photos/cake-with-kids.png", category: "Community" },
  { src: "/photos/khukuri-gift.png", category: "Community" },
  { src: "/photos/our-hall-image.png", category: "Gym" },
  { src: "/photos/teams.png", category: "Team" },
  { src: "/photos/rabindara-dham-with-team.png", category: "Team" },
  { src: "/photos/team-with-rabindara-dhant-muaythai-champain.png", category: "Team" },
  { src: "/photos/man-champain.png", category: "Fights" },
  { src: "/photos/man-winner.png", category: "Fights" },
  { src: "/photos/lady-winner.png", category: "Fights" },
  { src: "/photos/lady-winner-1.png", category: "Fights" },
  { src: "/photos/nepali-wineer-lady.png", category: "Fights" },
  { src: "/photos/winner-celebration-with-nepali-flag.png", category: "Fights" },
  { src: "/photos/achivements.png", category: "Achievements" },
  { src: "/photos/the-contender-fight-series-i.png", category: "Events" },
  { src: "/photos/the-contender-fight-series-team.png", category: "Events" },
  { src: "/photos/upcomming-events.png", category: "Events" },
  { src: "/photos/upcomming-events-1.png", category: "Events" },
  { src: "/photos/upcomming-events-2.png", category: "Events" },
];

const LOCAL_CATEGORIES = [
  "All",
  "Muay Thai",
  "MMA",
  "Fitness",
  "Kids",
  "Fights",
  "Events",
  "Team",
  "Achievements",
  "Community",
  "Gym",
];

export default async function GalleryPage() {
  const gallery = await fetchSectionData<GalleryContent>("gallery", {});
  const apiItems = (gallery.items ?? []).map((it) => ({ src: assetUrl(it.src), cat: it.category }));
  const items =
    apiItems.length > 0
      ? apiItems
      : LOCAL_GALLERY_ITEMS.map((it) => ({ src: it.src, cat: it.category }));
  const categories =
    gallery.categories && gallery.categories.length > 0 ? gallery.categories : LOCAL_CATEGORIES;

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
