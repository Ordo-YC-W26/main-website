import type { Metadata } from "next";
import { ManifestoPageClient } from "@/app/manifesto/ManifestoPageClient";

export const metadata: Metadata = {
  title: "Ordo Manifesto | The agentic future of property management",
  description:
    "Why property management must become agentic: our vision for AI that automates leasing, vendor sourcing, screening, and maintenance.",
  alternates: { canonical: "/manifesto" },
};

export default function ManifestoPage() {
  return <ManifestoPageClient />;
}