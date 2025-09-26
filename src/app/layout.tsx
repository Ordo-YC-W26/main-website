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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ordospaces.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ordo | AI-Powered Property Management OS",
    template: "%s | Ordo",
  },
  description:
    "Ordo is the world's first fully automated AI-powered property management platform. Automate tasks, streamline operations, and scale property management effortlessly.",
  applicationName: "Ordo",
  keywords: [
    "AI property management",
    "real estate automation",
    "AI workflows",
    "property management software",
    "tenant management automation",
    "AI maintenance scheduling",
  ],
  authors: [{ name: "Ordo" }],
  creator: "Ordo",
  publisher: "Ordo",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ordo",
    title: "Ordo — AI-Powered Property Management",
    description:
      "Automate property management tasks, reduce manual work, and scale operations with Ordo’s AI-powered platform.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ordo logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordo — AI-Powered Property Management",
    description:
      "Revolutionizing property management with AI automation — from tenant communications to maintenance scheduling.",
    images: ["/logo.png"],
    creator: "@ordo",
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
    apple: "/apple-touch-icon.png",
  },
  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
      >
        {/* Structured Data for SEO */}
        <Script id="ld-json-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "Ordo",
                "url": siteUrl,
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${siteUrl}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Organization",
                "name": "Ordo",
                "url": siteUrl,
                "logo": `${siteUrl}/logo.png`,
                "sameAs": [
                  "https://twitter.com/ordo",
                  "https://www.linkedin.com/company/ordo"
                ]
              }
            ]
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
