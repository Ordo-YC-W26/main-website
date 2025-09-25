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
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function CookiesPageClient() {
  const navItems = [
    { name: "Features", link: "/#features" },
    { name: "Pricing", link: "/#pricing" },
    { name: "Experience", link: "/#experience" },
    { name: "Blogs", link: "/blog" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <Modal>
              <ModalTrigger>
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
            <div className="flex w/full items-center justify_between gap-4">
              <div className="flex w/full flex-col gap-4">
                <Modal>
                  <ModalTrigger className="w/full">
                    <NavbarButton variant="primary" className="w/full">
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
      <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white my-20 md:my-40 h-[10vh]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            Cookies
          </h1>
          <p className="mt-6 leading-8 text-neutral-700 dark:text-neutral-300">
            ordo uses cookies and similar technologies to improve performance,
            enhance security, and tailor your experience. Essential cookies keep
            the platform running, while analytics cookies help us understand and
            improve user journeys. You can manage or disable cookies at any time
            in your browser settings, though some features may not work without
            them.
          </p>
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
      <div className="w-full md:-mt-80 -z-10 relative mt-250">
        <Footer />
      </div>
    </>
  );
}


