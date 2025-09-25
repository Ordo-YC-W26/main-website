  
import type { Metadata } from "next";
import { TermsPageClient } from "@/app/terms/TermsPageClient";


export const metadata: Metadata = {
  title: "Terms of Service — Rules for using ordo",
  description:
    "Review ordo's Terms of Service, including acceptable use, account responsibilities, and service limitations.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
