import type { Metadata } from "next";
import { CookiesPageClient } from "@/app/cookies/CookiesPageClient";

export const metadata: Metadata = {
  title: "Cookie Policy — How and why we use cookies",
  description:
    "Understand the types of cookies ordo uses, why we use them, and how you can manage preferences.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <CookiesPageClient />;
}
