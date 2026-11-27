import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { PageTransition } from "@/components/site/page-transition";
import { SiteHeader } from "@/components/site/site-header";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Telkom University Dormitory", template: "%s | Telkom University Dormitory" },
  description: "Informasi kehidupan asrama, kegiatan, berita, dan profil Senior Resident Telkom University Dormitory.",
  openGraph: { type: "website", locale: "id_ID", siteName: "Telkom University Dormitory" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#e03a2f" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={sans.variable}>
      <body>
        <a className="skip-link" href="#konten">Lewati ke konten</a>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
