import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { images } from "@/lib/images";
import { SealBackdrop } from "@/components/ui/SealBackdrop";

const FOOTER_COPY = {
  description:
    "A sacred sanctuary where Muay Thai discipline meets Himalayan spirituality. Train. Heal. Transform — under the Annapurnas, beside Phewa Lake.",
  motto: "DISCIPLINE · SPIRIT · POWER",
};

export function Footer({ site }: { site: typeof SITE }) {
  return (
    <footer className="relative border-t border-accent/15 bg-background overflow-hidden">
      {/* Sacred geometry watermark */}
      <div className="pointer-events-none absolute -left-24 -bottom-24">
        <SealBackdrop spin="ccw" className="h-100 w-100 opacity-20" />
      </div>
      <div className="pointer-events-none absolute -right-32 top-10">
        <SealBackdrop spin="cw" className="h-80 w-80 opacity-20" />
      </div>

      <div className="gold-line h-px" />

      {/* CTA strip */}
      <div className="relative container-x py-16 md:py-24 border-b border-accent/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="ornament-line mb-6">Begin Your Journey</div>
            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-balance">
              Walk the path of the
              <br />
              <span className="gold-gradient">spiritual warrior.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 text-xs tracking-[0.35em] uppercase font-semibold hover:bg-foreground transition-colors duration-500 shrink-0"
          >
            Book Your Retreat
            <ArrowUpRight
              size={16}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      <div className="relative container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Image
              src={images.sakYantSeal}
              alt="Sak Yant Muay Thai Nepal"
              width={56}
              height={56}
              className="h-14 w-14 object-contain seal-watermark"
            />
            <div>
              <div className="font-display text-xl tracking-[0.3em]">{site.short}</div>
              <div className="text-xs text-accent/80 tracking-[0.4em] mt-1">
                POKHARA · NEPAL
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
            {FOOTER_COPY.description}
          </p>
          <div className="flex gap-3 mt-7">
            {[
              { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
              { Icon: Facebook, href: site.socials.facebook, label: "Facebook" },
              { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-11 w-11 grid place-items-center border border-accent/25 text-foreground/80 hover:text-accent-foreground hover:bg-accent hover:border-accent transition-colors duration-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] tracking-[0.4em] text-accent mb-5">EXPLORE</h4>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  href={n.to}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[11px] tracking-[0.4em] text-accent mb-5">SANCTUARY</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
              {site.location}
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 text-accent shrink-0" />
              {site.phone}
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 text-accent shrink-0" />
              {site.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-accent/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.4em] text-accent/70 font-display">{FOOTER_COPY.motto}</p>
        </div>
      </div>
    </footer>
  );
}
