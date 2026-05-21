export const SITE = {
  name: "Sak Yant Muay Thai Nepal",
  short: "Sak Yant Muay Thai",
  tagline: "Train Like A Fighter. Live Like A Warrior.",
  location: "Pokhara, Nepal",
  phone: "+977 98XX XXXXXX",
  email: "info@sakyantmuaythai.com",
  whatsapp: "https://wa.me/9779800000000",
  mapsUrl: "https://share.google/QKXAH6PCaWEm1hQ1T",
  mapsEmbed:
    "https://www.google.com/maps?q=Pokhara,Nepal&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/contender", label: "The Contender" },
  { to: "/podcast", label: "Podcast" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;
