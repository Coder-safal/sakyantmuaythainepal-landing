"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/site";
import { images } from "@/lib/images";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/70 backdrop-blur-xl border-b border-accent/15"
          : "bg-linear-to-b from-background/60 via-background/20 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-18 md:h-22 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={images.sakYantSeal}
            alt="Sak Yant Muay Thai Nepal"
            width={64}
            height={64}
            className={`h-10 w-10 md:h-11 md:w-11 object-contain seal-watermark transition-transform duration-700 ${
              scrolled ? "rotate-45" : ""
            } group-hover:rotate-90`}
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base md:text-lg tracking-[0.32em] text-foreground">
              SAK YANT
            </span>
            <span className="text-[10px] md:text-[11px] text-accent/80 tracking-[0.4em] mt-1">
              MUAY THAI · NEPAL
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`relative text-[12px] tracking-[0.32em] uppercase font-medium transition-colors ${
                  active
                    ? "text-accent"
                    : "text-foreground/70 hover:text-accent"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-6 bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-accent/40 hover:border-accent text-accent hover:bg-accent hover:text-accent-foreground px-5 py-2.5 text-[11px] tracking-[0.3em] uppercase font-semibold transition-all duration-300"
          >
            Book Retreat <ArrowUpRight size={13} />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-accent/15 bg-background/95 backdrop-blur-xl">
          <div className="container-x py-8 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="py-4 text-sm tracking-[0.3em] uppercase border-b border-border/40 text-foreground/85 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 text-[11px] tracking-[0.3em] uppercase font-semibold"
            >
              Book Retreat <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
