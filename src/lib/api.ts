/**
 * Server-side fetcher for the landing page. Pulls dynamic content from the backend
 * (membership plans, site sections) with a short-lived cache and graceful fallback
 * so the page keeps rendering when the backend is offline or seeded with defaults.
 *
 * All fetches run on the server (App Router) — no client requests, no UI change.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api/v1";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "http://localhost:4000";

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
