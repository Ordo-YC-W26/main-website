import type { Metadata } from "next";
import { BlogPageClient } from "@/app/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — Insights on agentic marketplaces and AI",
  description:
    "Read the latest from ordo on agentic commerce, AI‑handled marketplaces, and building autonomous workflows.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return <BlogPageClient />;
}
// content moved to BlogPageClient
