import type { Metadata } from "next";
import { AboutPageClient } from "@/app/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About ordo — Our mission and the team behind it",
  description:
    "Learn about ordo's mission to build the world's first AI‑handled marketplace and the principles guiding our work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
