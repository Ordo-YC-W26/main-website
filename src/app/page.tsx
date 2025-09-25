"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Invoice from "../assets/Invoice.svg";
import Social from "../assets/Social.svg";
import Maintenance from "../assets/Maintenance.svg";
import Pet from "../assets/Pet.svg";

const FeatureSection = () => {
  const features = [
    {
      title: "Invoice Management",
      description:
        "Automatically process, categorize, and manage all your invoices with AI-powered accuracy.",
      image: Invoice.src,
    },
    {
      title: "Maintenance Scheduling",
      description:
        "Smart scheduling and predictive maintenance to keep your properties in perfect condition.",
      image: Maintenance.src,
    },
    {
      title: "Pet Management",
      description:
        "Comprehensive pet policy enforcement and management for your properties.",
      image: Pet.src,
    },
    {
      title: "Social Integration",
      description:
        "Seamlessly connect with tenants and manage community engagement through integrated social features.",
      image: Social.src,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="sticky top-0 pt-10 md:pt-36 pb-4 bg-white dark:bg-black z-10">
        <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl md:text-7xl font-bold text-transparent text-center">
          Exclusive Features
        </p>
        <p className="text-base max-w-2xl mt-4 text-neutral-500 font-normal dark:text-neutral-300 text-center mx-auto">
          From powering business workflows to simplifying everyday needs, ordo's
          AI agents do it all for individuals, teams, and enterprises.
        </p>
      </div>

      <div className="mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="min-h-screen md:h-screen flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mb-20 md:mb-0"
          >
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -50, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 transform-gpu max-w-xl mx-auto"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-300 text-center md:text-left">
                  {feature.description}
                </p>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain transform-gpu"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-white p-6 md:p-10 dark:h-auto dark:md:h-[50rem] hidden md:block"
    >
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center will-change-transform"
      >
        <img
          src={AppImage.src}
          alt="ordo"
          className="w-full h-full object-cover transform-gpu"
        />
      </motion.div>
    </div>
  );
};
import { BentoGridGlow } from "@/components/bento-glow";
import { cn } from "@/lib/utility";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Footer } from "@/components/ui/footer";
import { Cover } from "@/components/ui/cover";
import { IconCheck } from "@tabler/icons-react";
import { EvervaultHover } from "@/components/ui/evervault-hover";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import AppImage from "../assets/App.svg";
import HeroImage from "../assets/Hero.svg";
import HomeImage from "../assets/house.svg";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { BetaSignupForm, ContactSalesForm } from "@/components/ui/forms";
import { Agents } from "@/components/agents";
import { HeroScrollDemo } from "@/components/container-scroll";
import InfiniteScrollingLogosAnimation from "@/components/ui/infinite-logo";

export default function Home() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const words = ["Commercial", "Residential"];
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  const price = (m: number) =>
    billingCycle === "monthly" ? m : Math.round(m * 0.85);

  return (
    <div>
      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ordo",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://ordo.ai",
            logo: "/logo.png",
            sameAs: ["https://twitter.com/", "https://www.linkedin.com/"],
          }),
        }}
      />
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Modal>
              <ModalTrigger className="w-full">
                <NavbarButton variant="primary">Join Beta</NavbarButton>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Join the private beta
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Enter your details below and we’ll notify you.
                  </p>
                  <div className="mt-6">
                    <BetaSignupForm />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex w-full flex-col gap-4">
                <Modal>
                  <ModalTrigger className="w-full">
                    <NavbarButton variant="primary" className="w-full">
                      Join Beta
                    </NavbarButton>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h3 className="text-xl font-semibold text-black dark:text-white">
                        Join the private beta
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        Enter your details below and we’ll notify you.
                      </p>
                      <div className="mt-6">
                        <BetaSignupForm />
                      </div>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="-mt-20 relative w-full bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="flex flex-col items-center relative md:mt-50 lg:mt-60 mt-30">
            <div className="flex justify-center space-y-6 pt-20 lg:pt-0 px-10 md:px-10 w-full">
              <div className="space-y-4 text-center max-w-4xl">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-500">
                  First ever{" "}
                  <FlipWords
                    words={words}
                    className="font-bold text-slate-900"
                  />
                  Property management AI Platform
                </h1>
                <p className="text-xl md:text-xl text-neutral-600 font-mono mt-6">
                  "Designed to empower, not replace - learn instantly, just like
                  ChatGPT"
                </p>
              </div>
            </div>
            <img
              src={HomeImage.src}
              alt="ordo"
              className="w-full h-full object-fit md:mt-10 lg:mt-10 mt-30"
            />
          </div>
        </div>
        <ParallaxSection />
        <img
          src={AppImage.src}
          alt="ordo"
          className="w-full h-full object-fit transform-gpu block md:hidden mt-10"
        />
        <HeroScrollDemo />

        <div
          id="features"
          className="w-full bg-white dark:bg-black min-h-screen"
        >
          <FeatureSection />
        </div>
        <div className="w-full -mt-50 md:mt-0 relative">
          <InfiniteScrollingLogosAnimation />
        </div>
        {/* <div
          id="pricing"
          className="relative flex h-[130rem] md:h-[70rem] w-full items-center justify-center bg-white dark:bg-black"
        >
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="flex flex-col items-center justify-center">
            <p className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-5xl md:text-7xl font-bold text-transparent sm:text-7xl">
              Pricing
            </p>
            <div className="relative z-10 mt-2 mb-6 flex items-center justify-center gap-2 text-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "rounded-full px-4 py-2 border transition-colors",
                  billingCycle === "monthly"
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-transparent text-black border-neutral-300 dark:text-white dark:border-neutral-700"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={cn(
                  "rounded-full px-4 py-2 border transition-colors",
                  billingCycle === "annual"
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-transparent text-black border-neutral-300 dark:text-white dark:border-neutral-700"
                )}
              >
                Annual (15% off)
              </button>
            </div>
            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-8">
              <div className="dark:hidden">
                <EvervaultHover className="rounded-2xl border border-neutral-200 bg-white p-0 shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black">
                      Individuals
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Personal Muvius Agent
                    </p>
                    <div className="mt-6">
                      <div className="text-4xl font-bold text-black">Free</div>
                      <p className="mt-2 text-sm text-neutral-600">
                        Extra credits: $5 each or $15 for 5 credits
                      </p>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                      {[
                        "Search & browse listings — Unlimited",
                        "Buy through personal Muvius agent — Unlimited",
                        "Sell secondhand items — 1 free credit/month (max 4 saved)",
                        "Listings/month — Up to 5 total (credits required)",
                        "AI-powered matchmaking — Basic",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-neutral-700"
                        >
                          <IconCheck
                            size={18}
                            className="mt-0.5 text-emerald-500"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Modal>
                      <ModalTrigger className="mt-6 w-full rounded-lg border border-black text-black hover:text-white px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-800 hover:via-gray-600 hover:border-none">
                        Signup for beta
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h3 className="text-xl font-semibold text-black dark:text-white">
                            Join the private beta
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            Enter your details below and we’ll notify you.
                          </p>
                          <div className="mt-6">
                            <BetaSignupForm />
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </EvervaultHover>
              </div>
              <div className="hidden dark:block">
                <CardSpotlight className="rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Individuals
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Personal Muvius Agent
                  </p>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-white">Free</div>
                    <p className="mt-2 text-sm text-neutral-400">
                      Extra credits: $5 each or $15 for 5 credits
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {[
                      "Search & browse listings — Unlimited",
                      "Buy through personal Muvius agent — Unlimited",
                      "Sell secondhand items — 1 free credit/month (max 4 saved)",
                      "Listings/month — Up to 5 total (credits required)",
                      "AI-powered matchmaking — Basic",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-neutral-300"
                      >
                        <IconCheck
                          size={18}
                          className="mt-0.5 text-emerald-500"
                        />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Modal>
                    <ModalTrigger className="mt-6 w-full rounded-lg border border-white text-white hover:text-black px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-100 hover:via-gray-50">
                      Signup for beta
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          Join the private beta
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                          Enter your details below and we’ll notify you.
                        </p>
                        <div className="mt-6">
                          <BetaSignupForm />
                        </div>
                      </ModalContent>
                    </ModalBody>
                  </Modal>
                </CardSpotlight>
              </div>

              <div className="dark:hidden">
                <EvervaultHover className="relative rounded-2xl bg-white p-0 shadow-md ring-1 ring-blue-500/20 overflow-visible">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-gradient-to-r from-green-600 to-indigo-600 via-cyan-600 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black">
                      Business
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Choose Marketplace or Workflow API
                    </p>
                    <div className="mt-6 space-y-3 rounded-xl bg-neutral-50 p-4">
                      <div className="text-sm font-medium text-neutral-800">
                        Marketplace Tier
                      </div>
                      <ul className="space-y-2 text-sm">
                        {[
                          { name: "Starter (≤5000 req/mo)", monthly: 50 },
                          { name: "Growth (5001–15,000 req/mo)", monthly: 120 },
                          { name: "Pro (15,001–30,000 req/mo)", monthly: 200 },
                        ].map((t) => (
                          <li
                            key={t.name}
                            className="flex items-center justify-between"
                          >
                            <span className="text-neutral-700">{t.name}</span>
                            <span className="text-neutral-900 font-semibold">
                              ${price(t.monthly)}
                              <span className="text-xs font-normal text-neutral-500">
                                /mo
                                {billingCycle === "annual"
                                  ? " (billed annually)"
                                  : ""}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 rounded-xl bg-neutral-50 p-4 text-sm">
                      <div className="font-medium text-neutral-800">
                        Workflow API Tier
                      </div>
                      <p className="mt-1 text-neutral-600">
                        Usage-based: billed per compute second + token
                        consumption. Example: ~$
                        {billingCycle === "annual" ? 340 : 400}/month at
                        moderate volume.
                      </p>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                      {[
                        "AI-powered search & match",
                        "Analytics dashboard",
                        "Priority placement (Growth+)",
                        "Bulk uploads (Growth+)",
                        "Advanced reporting & branding (Pro)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-neutral-700"
                        >
                          <IconCheck
                            size={18}
                            className="mt-0.5 text-blue-500"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Modal>
                      <ModalTrigger className="mt-6 w-full rounded-lg bg-gradient-to-r from-gray-700 to-gray-700 via-gray-800 text-white px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-900 hover:via-gray-900">
                        Contact Sales
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h3 className="text-xl font-semibold text-black dark:text-white">
                            Contact sales
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            Tell us about you and your business.
                          </p>
                          <div className="mt-6">
                            <ContactSalesForm />
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </EvervaultHover>
              </div>
              <div className="hidden dark:block">
                <CardSpotlight className="relative rounded-2xl p-0 ring-1 ring-blue-500/20 overflow-visible">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600  px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Business
                    </h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      Choose Marketplace or Workflow API
                    </p>
                    <div className="mt-6 space-y-3 rounded-xl bg-neutral-900 p-4">
                      <div className="text-sm font-medium text-neutral-200">
                        Marketplace Tier
                      </div>
                      <ul className="space-y-2 text-sm">
                        {[
                          { name: "Starter (≤5000 req/mo)", monthly: 50 },
                          { name: "Growth (5001–15,000 req/mo)", monthly: 120 },
                          { name: "Pro (15,001–40,000 req/mo)", monthly: 200 },
                        ].map((t) => (
                          <li
                            key={t.name}
                            className="flex items-center justify-between"
                          >
                            <span className="text-neutral-300">{t.name}</span>
                            <span className="text-white font-semibold">
                              ${price(t.monthly)}
                              <span className="text-xs font-normal text-neutral-400">
                                /mo
                                {billingCycle === "annual"
                                  ? " (billed annually)"
                                  : ""}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 rounded-xl bg-neutral-900 p-4 text-sm">
                      <div className="font-medium text-neutral-200">
                        Workflow API Tier
                      </div>
                      <p className="mt-1 text-neutral-400">
                        Usage-based: billed per compute second + token
                        consumption. Example: ~$
                        {billingCycle === "annual" ? 340 : 400}/month at
                        moderate volume.
                      </p>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                      {[
                        "AI-powered search & match",
                        "Analytics dashboard",
                        "Priority placement (Growth+)",
                        "Bulk uploads (Growth+)",
                        "Advanced reporting & branding (Pro)",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-neutral-300"
                        >
                          <IconCheck
                            size={18}
                            className="mt-0.5 text-pink-500"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Modal>
                      <ModalTrigger className="mt-6 w-full rounded-lg dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-400 dark:via-gray-100 dark:text-black px-4 py-2 text-sm font-medium text-white transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-100 hover:via-gray-50">
                        Contact Sales
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h3 className="text-xl font-semibold text-black dark:text-white">
                            Contact sales
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            Tell us about you and your business.
                          </p>
                          <div className="mt-6">
                            <ContactSalesForm />
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </CardSpotlight>
              </div>

              <div className="dark:hidden">
                <EvervaultHover className="rounded-2xl border border-neutral-200 bg-white p-0 shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black">
                      Enterprise
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Fully customized, SLA-backed, white-label
                    </p>
                    <div className="mt-6">
                      <div className="text-4xl font-bold text-black">
                        Custom
                      </div>
                      <p className="mt-2 text-sm text-neutral-600">
                        Based on scope, request volume, and integration
                        complexity
                      </p>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                      {[
                        "Unlimited request volume",
                        "Dedicated account manager & priority SLA",
                        "Custom AI workflows & agent orchestration",
                        "API integration & white-label marketplace",
                        "On-prem/VPC deployment options",
                        "Advanced analytics with predictive insights",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-neutral-700"
                        >
                          <IconCheck
                            size={18}
                            className="mt-0.5 text-emerald-500"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Modal>
                      <ModalTrigger className="mt-6 w-full rounded-lg border border-black text-black hover:text-white px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-800 hover:via-gray-600 hover:border-none">
                        Contact Sales
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h3 className="text-xl font-semibold text-black dark:text-white">
                            Contact sales
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            Tell us about you and your business.
                          </p>
                          <div className="mt-6">
                            <ContactSalesForm />
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </EvervaultHover>
              </div>
              <div className="hidden dark:block">
                <CardSpotlight className="rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Enterprise
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Fully customized, SLA-backed, white-label
                  </p>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-white">Custom</div>
                    <p className="mt-2 text-sm text-neutral-400">
                      Based on scope, request volume, and integration complexity
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {[
                      "Unlimited request volume",
                      "Dedicated account manager & priority SLA",
                      "Custom AI workflows & agent orchestration",
                      "API integration & white-label marketplace",
                      "On-prem/VPC deployment options",
                      "Advanced analytics with predictive insights",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-neutral-300"
                      >
                        <IconCheck
                          size={18}
                          className="mt-0.5 text-emerald-500"
                        />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Modal>
                    <ModalTrigger className="mt-6 w-full rounded-lg border border-white text-white hover:text-black px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-100 hover:via-gray-50">
                      Contact Sales
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          Contact sales
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                          Tell us about you and your business.
                        </p>
                        <div className="mt-6">
                          <ContactSalesForm />
                        </div>
                      </ModalContent>
                    </ModalBody>
                  </Modal>
                </CardSpotlight>
              </div>
            </div>
          </div>
        </div> */}

        <div className="mt-120 md:mt-0 md:-z-10 min-h-[36rem] md:h-[36rem] bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden">
          <div className="w-full block dark:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
