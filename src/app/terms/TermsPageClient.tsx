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
import { Footer } from "@/components/ui/footer";
import { useState } from "react";

export function TermsPageClient() {
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
      <div className="w-full -z-10 relative mt-15 md:-mt-80 display:flex flex-col items-center justify-between">
        <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white my-20 md:my-40 h-[10vh]">
          <div className="max-w-3xl mx-auto py-12 px-6 lg:mt-50 md:mt-50">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
              Terms of Service
            </h1>
            <p className="mt-6 leading-8 text-neutral-700 dark:text-neutral-300">
              Welcome to Ordo! These Terms of Service govern your use of our
              platform, including our website, software, AI assistants, and
              integrations. By accessing or using Ordo, you agree to these
              terms.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-xl font-semibold">1. Use of Services</h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  You must be at least 18 years old to use Ordo. Use the
                  services only for lawful purposes and in compliance with all
                  applicable laws. Ordo grants you a limited, non-exclusive
                  license for internal business use.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  2. Accounts and Security
                </h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  You are responsible for your account credentials and agree to
                  notify us of any unauthorized access or security breaches
                  immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  3. AI-Powered Features
                </h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  Ordo provides AI-powered automation and insights for property
                  managers. These outputs are advisory and should be reviewed
                  before implementation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  4. Third-Party Integrations
                </h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  Ordo integrates with third-party tools like Yardi and Entrata.
                  Your use of those services is governed by their own terms and
                  conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Data Privacy</h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  We respect your privacy. Please review our Privacy Policy to
                  understand how we handle your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  6. Payments & Subscriptions
                </h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  Paid features may require a subscription. Fees, billing
                  cycles, and cancellation terms will be clearly disclosed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Prohibited Uses</h2>
                <ul className="list-disc list-inside mt-2 text-neutral-700 dark:text-neutral-300 space-y-1">
                  <li>No reverse-engineering or reselling of the platform.</li>
                  <li>No illegal or fraudulent use.</li>
                  <li>
                    No interference with platform security or functionality.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  8. Limitation of Liability
                </h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  Ordo is not liable for indirect, incidental, or consequential
                  damages. Our total liability is limited to the amount you paid
                  for the services in the last 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">9. Termination</h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  You may stop using Ordo at any time. We may suspend or
                  terminate access for violations of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">10. Governing Law</h2>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  These Terms are governed by the laws of [Insert Location]. Any
                  disputes will be handled in its courts.
                </p>
              </section>
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

        <div className="md:-z-10 bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden mt-[160em] md:mt-[70em]">
          <Footer />
        </div>
      </div>
    </>
  );
}
