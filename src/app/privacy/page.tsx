import type { Metadata } from "next";
import { PrivacyPageClient } from "@/app/privacy/PrivacyPageClient";


export const metadata: Metadata = {
  title: "Privacy Policy — How ordo protects your data",
  description:
    "Learn how ordo collects, uses, and protects your data with enterprise‑grade security and transparent controls.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
