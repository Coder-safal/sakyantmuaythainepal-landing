import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "./_components/GalleryGrid";
import { images } from "@/lib/images";

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

export default function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Inside The Fight."
        subtitle="Moments from training, fight nights and gym life."
        image={images.cageEvent}
      />
      <GalleryGrid />
    </SiteLayout>
  );
}
