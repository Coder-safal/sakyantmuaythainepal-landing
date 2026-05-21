"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { images } from "@/lib/images";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={images.logo}
            alt="Sak Yant Muay Thai Nepal"
            width={48}
            height={48}
            priority
            className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-sm md:text-base tracking-wider">SAK YANT</span>
            <span className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.2em]">
              MUAY THAI · NEPAL
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`relative text-[13px] tracking-[0.15em] uppercase font-medium transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent text-accent-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent/90 transition-colors"
          >
            Join Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container-x py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="py-3 text-sm tracking-[0.15em] uppercase border-b border-border/40 text-foreground/90 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center bg-accent text-accent-foreground py-3 text-xs tracking-[0.25em] uppercase font-semibold"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
