import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { bodyFont, displayFont } from "@/app/fonts";
import { LocaleShell } from "@/components/site/LocaleShell";
import { SITE_URL } from "@/lib/seo/site-url";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <LocaleShell locale="en">{children}</LocaleShell>
      </body>
    </html>
  );
}
