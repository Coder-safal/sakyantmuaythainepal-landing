/**
 * Server-side fetcher for the landing page. Pulls dynamic content from the backend
 * (membership plans, site sections) with a short-lived cache and graceful fallback
 * so the page keeps rendering when the backend is offline or seeded with defaults.
 *
 * All fetches run on the server (App Router) — no client requests, no UI change.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api/v1";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "http://localhost:3000";

const REVALIDATE_SECONDS = 60;

export interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  error?: { code: string; message: string };
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["sakyant-content"] },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiEnvelope<T>;
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

/** Resolve a possibly-relative asset path to an absolute URL pointing at the backend. */
export function assetUrl(url?: string | null): string {
  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  if (url.startsWith("/images/")) return url; // local /public asset
  return `${ASSET_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

// ── Membership plans ───────────────────────────────────────────────
export interface PublicPlan {
  id: string;
  name: string;
  slug: string;
  description?: string;
  priceLabel: string;
  amount: number;
  currency: string;
  pricePer: string;
  durationDays: number;
  audience: string;
  features: { label: string }[];
  isFeatured: boolean;
  ctaUrl?: string;
  ctaLabel?: string;
  sortOrder: number;
}

export async function fetchPlans(): Promise<PublicPlan[] | null> {
  return getJson<PublicPlan[]>("/membership-plans/public");
}

// ── Site content ───────────────────────────────────────────────────
export interface PublicSiteContent {
  section: string;
  data: Record<string, unknown>;
  images: { url: string; alt?: string; caption?: string }[];
}

export async function fetchSection(section: string): Promise<PublicSiteContent | null> {
  return getJson<PublicSiteContent>(`/site-content/public/${section}`);
}

export async function fetchSectionData<T = Record<string, unknown>>(
  section: string,
  fallback: T,
): Promise<T> {
  const result = await fetchSection(section);
  if (!result) return fallback;
  return result.data as T;
}

// ── Site config (global) ───────────────────────────────────────────
export interface SiteConfig {
  name: string;
  short: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  whatsapp: string;
  whatsappLabel: string;
  mapsUrl: string;
  mapsEmbed: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
    viber: string;
  };
}

export async function fetchSiteConfig(fallback: SiteConfig): Promise<SiteConfig> {
  const data = await fetchSection("site");
  if (!data) return fallback;
  const d = data.data as Partial<SiteConfig> & { socials?: Partial<SiteConfig["socials"]> };
  return {
    name: d.name ?? fallback.name,
    short: d.short ?? fallback.short,
    tagline: d.tagline ?? fallback.tagline,
    location: d.location ?? fallback.location,
    phone: d.phone ?? fallback.phone,
    email: d.email ?? fallback.email,
    whatsapp: d.whatsapp ?? fallback.whatsapp,
    whatsappLabel: d.whatsappLabel ?? fallback.whatsappLabel,
    mapsUrl: d.mapsUrl ?? fallback.mapsUrl,
    mapsEmbed: d.mapsEmbed ?? fallback.mapsEmbed,
    socials: {
      instagram: d.socials?.instagram ?? fallback.socials.instagram,
      facebook: d.socials?.facebook ?? fallback.socials.facebook,
      youtube: d.socials?.youtube ?? fallback.socials.youtube,
      tiktok: d.socials?.tiktok ?? fallback.socials.tiktok,
      viber: d.socials?.viber ?? fallback.socials.viber,
    },
  };
}

// ── Banners ────────────────────────────────────────────────────────
export type BannerSection =
  | "home"
  | "membership"
  | "muaythai"
  | "yantra"
  | "events"
  | "contact"
  | "about"
  | "gallery"
  | "contender"
  | "achievements"
  | "podcast";

export interface BannerStyle {
  color?: string;
  subtitleColor?: string;
  eyebrowColor?: string;
  titleAccentColor?: string;
  ctaPrimaryColor?: string;
  ctaPrimaryBg?: string;
  ctaSecondaryColor?: string;
  align?: "left" | "center" | "right";
  overlayOpacity?: number;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
}

export interface PublicBanner {
  id: string;
  section: BannerSection;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  style: BannerStyle;
  sortOrder: number;
}

export async function fetchBannersBySection(section: BannerSection): Promise<PublicBanner[]> {
  return (await getJson<PublicBanner[]>(`/banners/public/${section}`)) ?? [];
}

export async function fetchBanner(section: BannerSection): Promise<PublicBanner | null> {
  const list = await fetchBannersBySection(section);
  return list[0] ?? null;
}

// ── Contact / inquiry ──────────────────────────────────────────────
export interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type?: "general" | "membership" | "group" | "event" | "press";
}

/** Client-side POST so the contact form keeps working without server actions. */
export async function submitInquiry(input: InquiryInput): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE}/inquiries/public`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const json = (await res.json()) as ApiEnvelope<{ id: string }>;
    if (!json.success) return { ok: false, message: json.error?.message ?? "Could not send message" };
    return { ok: true };
  } catch (err) {
    return { ok: false, message: err instanceof Error ? err.message : "Network error" };
  }
}
