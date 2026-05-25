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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background border-b border-accent/10 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center h-16 md:h-20">
        {/* Logo — anchored to the left */}
        <Link
          href="/"
          className="flex items-center gap-3 mr-auto group"
          aria-label="Sak Yant Muay Thai Nepal — Home"
        >
          <Image
            src={images.teamLogo}
            alt="Sak Yant Muay Thai Nepal — Fight Team"
            width={56}
            height={56}
            className="h-9 w-9 md:h-10 md:w-10 object-contain transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm md:text-base tracking-[0.22em] text-foreground">
              SAK YANT
            </span>
            <span className="text-[9px] md:text-[10px] text-muted-foreground tracking-[0.3em] mt-0.5">
              MUAY THAI · NEPAL
            </span>
          </div>
        </Link>

        {/* Primary nav */}
        <nav className="hidden lg:flex items-center gap-8 mr-8">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors duration-200 ${
                  active
                    ? "text-accent"
                    : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase font-semibold rounded-sm transition-colors duration-200"
          >
            Book Retreat <ArrowUpRight size={13} />
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-accent transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-accent/10 bg-background">
          <div className="container-x py-6 flex flex-col">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`py-3.5 text-sm tracking-[0.22em] uppercase border-b border-border/30 transition-colors ${
                    active ? "text-accent" : "text-foreground/85 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold rounded-sm"
            >
              Book Retreat <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
