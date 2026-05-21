"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const ITEMS = [
  { src: images.gymInterior, cat: "Gym" },
  { src: images.cageEvent, cat: "Fights" },
  { src: images.cageFighter, cat: "Fights" },
  { src: images.trainingKick, cat: "Training" },
  { src: images.handWraps, cat: "Training" },
  { src: images.champion, cat: "Achievements" },
  { src: images.membershipPoster, cat: "Gym" },
  { src: images.schedulePoster, cat: "Gym" },
] as const;

const CATS = ["All", "Gym", "Training", "Fights", "Achievements"] as const;
type Cat = (typeof CATS)[number];

export function GalleryGrid() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase font-semibold border transition-colors ${
                  cat === c
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-1">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(it.src)}
              className={`relative group overflow-hidden ${
                i % 5 === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={it.src}
                alt={it.cat}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors grid place-items-center">
                <span className="opacity-0 group-hover:opacity-100 text-[11px] tracking-[0.3em] uppercase">
                  {it.cat}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <button
          onClick={() => setLightbox(null)}
          aria-label="Close lightbox"
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur grid place-items-center p-6 cursor-zoom-out"
        >
          <Image
            src={lightbox}
            alt=""
            width={1600}
            height={1200}
            className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
            sizes="90vw"
            priority
          />
        </button>
      )}
    </>
  );
}
