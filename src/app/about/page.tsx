import type { Metadata } from "next";
import { AboutPageClient } from "@/app/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Ordo | Our mission and the team behind it",
  description:
    "Learn about Ordo's mission to build the world's first AI-powered property management platform and the principles guiding our work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
