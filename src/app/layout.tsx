import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import { QueryProvider } from "@/components/providers/QueryProvider";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b73e5527-e2d6-4751-93ee-fbc0fc699146/id-preview-f079d7f1--e2324f4d-e176-4747-8ef0-3fd3846a23bb.lovable.app-1779202538741.png";

const SITE_TITLE = "Sak Yant Muay Thai Nepal — Elite Fight Academy in Pokhara";
const SITE_DESCRIPTION =
  "Premier Muay Thai & MMA academy in Pokhara, Nepal. Home of The Contender Fight Series.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Sak Yant Muay Thai Nepal",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Sak Yant Muay Thai Nepal" }],
  openGraph: {
    type: "website",
    siteName: "Sak Yant Muay Thai Nepal",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070709",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
