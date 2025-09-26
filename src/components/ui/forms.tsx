"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FORMSPREE_BETA_ID = process.env.NEXT_PUBLIC_FORMSPREE_BETA_ID || "";
const FORMSPREE_SALES_ID = process.env.NEXT_PUBLIC_FORMSPREE_SALES_ID || "xyylzdaa";

async function submitForm(formId: string, data: Record<string, string | number>) {
  if (!formId) {
    console.warn("Formspree form ID missing.");
    throw new Error("Form not configured");
  }
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Submission failed");
  return res.json();
}

export function BetaSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitForm("xyylzdaa", { name, email, type: "beta" });
      setStatus("success");
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="beta-name" className="text-neutral-700 dark:text-neutral-300">Name</Label>
        <Input id="beta-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="beta-email" className="text-neutral-700 dark:text-neutral-300">Email</Label>
        <Input id="beta-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {status === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! You're on the list.</p>
      ) : (
        <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90">
          {status === "loading" ? "Submitting..." : "Join private beta"}
        </button>
      )}
    </form>
  );
}

export function ContactSalesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitForm("xyylzdaa", { name, email, business, phone, message, type: "sales" });
      setStatus("success");
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="sales-name" className="text-neutral-700 dark:text-neutral-300">Name</Label>
        <Input id="sales-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="sales-email" className="text-neutral-700 dark:text-neutral-300">Email</Label>
        <Input id="sales-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="sales-business" className="text-neutral-700 dark:text-neutral-300">Business name</Label>
        <Input id="sales-business" value={business} onChange={(e) => setBusiness(e.target.value)} required placeholder="Company LLC" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="sales-phone" className="text-neutral-700 dark:text-neutral-300">Phone</Label>
        <Input id="sales-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="sales-message" className="text-neutral-700 dark:text-neutral-300">Message</Label>
        <textarea id="sales-message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-24 p-3 text-sm text-neutral-800 dark:text-neutral-200 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10" />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {status === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! We’ll be in touch shortly.</p>
      ) : (
        <button type="submit" disabled={status === "loading"} className="w-full rounded-lg dark:bg-gray-100/90 bg-black px-4 py-2 text-sm font-medium dark:text-black text-white transition-colors hover:bg-zinc-900 dark:hover:bg-white disabled:opacity-60 cursor-pointer">
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      )}
    </form>
  );
}

export function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitForm(FORMSPREE_SALES_ID, { name, email, message, type: "contact" });
      setStatus("success");
      // toast.success("Message sent! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
      // toast.error("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl bg-transparent  p-4 md:p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="contact-name" className="text-neutral-700 dark:text-neutral-300">Name</Label>
          <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="bg-white/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="contact-email" className="text-neutral-700 dark:text-neutral-300">Email</Label>
          <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="bg-white/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800" />
        </div>
        <div className="space-y-1 lg:col-span-2">
          <Label htmlFor="contact-message" className="text-neutral-700 dark:text-neutral-300">Message</Label>
          <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="How can we help?" className="w-full rounded-md bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 h-32 p-3 text-sm text-neutral-800 dark:text-neutral-200 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10" />
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {status === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! We'll get back to you soon.</p>
      ) : (
        <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90">
          {status === "loading" ? "Submitting..." : "Send message"}
        </button>
      )}
    </form>
  );
}
