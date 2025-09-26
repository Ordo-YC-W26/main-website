"use client";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { BetaSignupForm } from "@/components/ui/forms";
import { Footer } from "@/components/ui/footer";
import { useState } from "react";

export function ManifestoPageClient() {
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
  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>
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
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white my-20 md:my-40 h-[10vh]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            Ordo Manifesto
          </h1>
          <div className="mt-6 leading-8 text-neutral-700 dark:text-neutral-300 space-y-4">
            At Ordo, we believe property managers deserve better. <br />
            <br />
            For too long, property management has been buried under manual
            processes, fragmented tools, and repetitive work slowing growth,
            increasing stress, and keeping managers from what truly matters:
            creating value.{" "}
            <p className="font-bold my-4">We exist to change that</p> We are
            the{" "}
            <b>
              first in the world to deliver a fully automated, AI-powered
              property management platform
            </b>{" "}
            that turns hours of work into minutes, unifies 6–7 scattered tools
            into one seamless space, and empowers property managers to handle
            hundreds of properties effortlessly.
            <br />
            <br />
            <p className="font-bold my-4"> This isn’t just software</p>
            <br />
            This is a movement to redefine property management making it faster,
            smarter, and truly effortless.
            <br />
            <br />
            <p className="font-bold my-4"> We are Ordo</p>
            <br />
            And we’re building the future where property managers finally take
            back their time.
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <div className=" bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden mt-[100em] md:mt-[50em]">
      <Footer />
        </div>
    </>
  );
}
