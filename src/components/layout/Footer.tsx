import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { YantraMark } from "@/components/ui/YantraMark";

const FOOTER_COPY = {
  description:
    "Sak Yant Muay Thai Nepal is a fight school in Pokhara built for serious athletes — Nepali and international. Home of The Contender Fight Series and a community of fighters, coaches, and dreamers under the Himalayas.",
  motto: "FIGHT · TRAIN · BELONG",
};

export function Footer({ site }: { site: typeof SITE }) {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="blood-divider" />
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <YantraMark className="h-12 w-12 text-accent" />
            <div>
              <div className="font-display text-lg tracking-[0.25em]">{site.short}</div>
              <div className="text-xs text-muted-foreground tracking-[0.3em]">
                MUAY THAI · NEPAL
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            {FOOTER_COPY.description}
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Instagram, href: site.socials.instagram },
              { Icon: Facebook, href: site.socials.facebook },
              { Icon: Youtube, href: site.socials.youtube },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] text-secondary mb-4">EXPLORE</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  href={n.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] text-secondary mb-4">VISIT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
              {site.location}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 text-accent shrink-0" />
              {site.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 text-accent shrink-0" />
              {site.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.2em]">{FOOTER_COPY.motto}</p>
        </div>
      </div>
    </footer>
  );
}
