import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="blood-divider" />
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src={images.logo} alt="" width={56} height={56} className="h-14 w-14" />
            <div>
              <div className="font-display text-lg tracking-wider">SAK YANT</div>
              <div className="text-xs text-muted-foreground tracking-[0.25em]">
                MUAY THAI · NEPAL
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            A premier Muay Thai and MMA fight academy in Pokhara, Nepal. Built for fighters,
            open to everyone — train under championship coaches in the foothills of the
            Himalayas.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Instagram, href: SITE.socials.instagram },
              { Icon: Facebook, href: SITE.socials.facebook },
              { Icon: Youtube, href: SITE.socials.youtube },
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
              {SITE.location}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 text-accent shrink-0" />
              {SITE.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 text-accent shrink-0" />
              {SITE.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="tracking-[0.2em]">UNSEEN · UNHEARD · UNSPOKEN</p>
        </div>
      </div>
    </footer>
  );
}
