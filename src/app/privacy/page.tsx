import type { Metadata } from "next";
import { PrivacyPageClient } from "@/app/privacy/PrivacyPageClient";


export const metadata: Metadata = {
  title: "Privacy Policy | How Ordo protects your data",
  description:
    "Learn how Ordo collects, uses, and protects your data with enterprise grade security and transparent controls.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
