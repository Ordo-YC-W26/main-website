import type { Metadata } from "next";
import { ManifestoPageClient } from "@/app/manifesto/ManifestoPageClient";

export const metadata: Metadata = {
  title: "ordo Manifesto — The agentic future of commerce",
  description:
    "Why marketplaces must become agentic: our vision for AI that works for people by automating search, negotiation, and workflows.",
  alternates: { canonical: "/manifesto" },
};

export default function ManifestoPage() {
  return <ManifestoPageClient />;
}