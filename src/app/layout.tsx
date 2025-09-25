import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ordo.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ordo — World's First AI‑Handled Marketplace",
    template: "%s | ordo",
  },
  description:
    "ordo is the world's first AI‑handled marketplace. Deploy marketplace agents, streamline workflows, and scale with autonomous AI.",
  applicationName: "ordo",
  keywords: [
    "AI marketplace",
    "autonomous agents",
    "marketplace automation",
    "AI workflows",
    "buy and sell with AI",
  ],
  authors: [{ name: "ordo" }],
  creator: "ordo",
  publisher: "ordo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ordo",
    title: "ordo — World's First AI‑Handled Marketplace",
    description:
      "Deploy marketplace agents, streamline workflows, and scale with autonomous AI.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ordo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ordo — World's First AI‑Handled Marketplace",
    description:
      "Deploy marketplace agents, streamline workflows, and scale with autonomous AI.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ordo",
            "url": siteUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
