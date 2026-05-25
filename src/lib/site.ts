const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+977 98XX XXXXXX";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9779800000000";
const VIBER_NUMBER = process.env.NEXT_PUBLIC_VIBER_NUMBER ?? "9779800000000";

export const SITE = {
  name: "Sak Yant Muay Thai Nepal",
  short: "Sak Yant Muay Thai",
  tagline: "Muay Thai · MMA · Fitness — In the heart of Lakeside, Pokhara.",
  location: "Lakeside, Pokhara, Nepal",
  phone: CONTACT_PHONE,
  email: "info@sakyantmuaythai.com",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappLabel: CONTACT_PHONE,
  mapsUrl: "https://share.google/QKXAH6PCaWEm1hQ1T",
  mapsEmbed: "https://www.google.com/maps?q=Lakeside,Pokhara,Nepal&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
    viber: `viber://chat?number=${VIBER_NUMBER}`,
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/achievements", label: "Achievements" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/fight-store", label: "Fight Store" },
  { to: "/contact", label: "Contact" },
] as const;
