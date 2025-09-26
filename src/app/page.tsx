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
import Invoice from "../../public/Invoice.svg";
import Social from "../../public/Social.svg";
import Maintenance from "../../public/Maintenance.svg";
import Pet from "../../public/Pet.svg";

const FeatureSection = () => {
  const features = [
    {
      title: "Pet Screening",
      description:
        "AI Scheduler that verifies vaccination records and communicates with vets, reducing delays",
      image: Pet.src,
      width: 700,
      height: 400,
    },
    {
      title: "Smart Invoice processing",
      description:
        "Track payments made with your business card, instantly process invoices, or just text us a photo of any bill and our AI handles the rest.",
      image: Invoice.src,
      width: 500,
      height: 300,
    },
    {
      title: "Maintenance Scheduling",
      description:
        "Smart scheduling, predictive maintenance and vendor sourcing to keep your properties in perfect condition.",
      image: Maintenance.src,
      width: 500,
      height: 300,
    },

    {
      title: "Communication Integration",
      description:
        "Ordo unifies emails, messages, and chats, tracking unanswered items to streamline tenant engagement",
      image: Social.src,
      width: 500,
      height: 300,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="sticky -top-80 pt-10 md:pt-36 pb-4 bg-white dark:bg-black z-10">
        <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl md:text-7xl font-bold text-transparent text-center">
          Exclusive Features
        </p>
        <p className="text-base max-w-2xl mt-4 text-neutral-500 font-normal dark:text-neutral-300 text-center mx-auto">
          AI-powered co-pilot that works as easily as ChatGPT automating
          reports, vendor quotes, pet screenings, and maintenance scheduling to
          save time, cut errors, and streamline workflows
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
                  width={0}
                  height={100}
                  className="w-full transform-gpu"
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
          alt="Ordo"
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
import AppImage from "../../public/App.svg";
import HeroImage from "../../public/Hero.svg";
import HomeImage from "../../public/house.svg";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { ContactSalesForm } from "@/components/ui/forms";
import { HeroScrollDemo } from "@/components/container-scroll";
import InfiniteScrollingLogosAnimation from "@/components/ui/infinite-logo";
import { ContactUsForm } from "@/components/ui/forms";
import { Toaster } from "react-hot-toast";
import { WobbleCardDemo } from "@/components/wobble-card";

export default function Home() {
  const navItems = [
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "Experience",
      link: "/#experience",
    },
    {
      name: "Contact",
      link: "/#contact",
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
      <Toaster position="top-right" />
      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ordo",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://Ordospaces.com",
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
          <div className="flex items-center gap-4" />
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
            <div className="flex w-full items-center justify-between gap-4" />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="-mt-20 relative w-full bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="flex flex-col items-center relative md:mt-50 lg:mt-60 mt-30">
            <div className="flex justify-center space-y-6 pt-20 lg:pt-0 px-10 md:px-10 w-full">
              <div className="space-y-8 text-center max-w-5xl">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-500">
                  <span className="">
                    {" "}
                    First ever{" "}
                    <FlipWords
                      words={words}
                      className="font-bold text-slate-900"
                    />
                    AI-Powered
                  </span>
                  <br />
                  Property Management OS
                </h1>
                <p className="text-xl md:text-[25px] text-neutral-600 font-mono mt-6 font-light">
                  "Designed to empower, not to replace - use just like ChatGPT"
                </p>
              </div>
            </div>
            <img
              src={HomeImage.src}
              alt="Ordo"
              className="w-full h-full object-fit md:mt-10 lg:mt-1 mt-30"
            />
          </div>
        </div>
        <ParallaxSection />
        <img
          src={AppImage.src}
          alt="Ordo"
          className="w-full h-full object-fit transform-gpu block md:hidden mt-10"
        />
        <HeroScrollDemo />

        <div
          id="features"
          className="w-full bg-white dark:bg-black min-h-screen"
        >
          <FeatureSection />
        </div>

        <div id="experience" className="w-full bg-transparent space-y-20">
          {" "}
          <div className="sticky -top-80 pt-10 md:pt-12 pb-4 bg-white dark:bg-black z-10">
            <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl md:text-7xl font-bold text-transparent text-center">
            Experience
            </p>
            <p className="text-base max-w-2xl mt-4 text-neutral-500 font-normal dark:text-neutral-300 text-center mx-auto">
              Experience the completely new way to manage your properties, seen never before.
            </p>
          </div>
          <WobbleCardDemo />
        </div>
        <div className="w-full mt-10  md:mt-30 relative">
          <InfiniteScrollingLogosAnimation />
        </div>

        {/* Contact us section */}
        <div
          className="w-full bg-transparent py-20 px-6 mb-100 md:-mb-50"
          id="contact"
        >
          <div className="sticky -top-80 pt-10 md:pt-12 pb-4 bg-white dark:bg-black z-10">
            <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl md:text-7xl font-bold text-transparent text-center">
              Contact us
            </p>
            <p className="text-base max-w-2xl mt-4 text-neutral-500 font-normal dark:text-neutral-300 text-center mx-auto">
              Have a question or want to work with us? Send a message and we’ll
              get back to you.
            </p>
          </div>
          <div className="max-w-xl mx-auto mt-8 rounded-2xl bg-transparent shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <ContactUsForm />
          </div>
        </div>

        <div className="mt-30 md:-mt-80 bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden">
          <div className="w-full block dark:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
