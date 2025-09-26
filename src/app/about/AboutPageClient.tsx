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

export function AboutPageClient() {
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
      name: "Blogs",
      link: "/blog",
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
      <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white my-20 md:my-40 h-[10vh]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            About Us
          </h1>
          <p className="mt-6 leading-8 text-neutral-700 dark:text-neutral-300">
            At Ordo, we are proud to be the world’s first fully automated
            property management platform, built with one mission: to redefine
            how property managers work. For decades, property management has
            been slowed down by fragmented tools, manual processes, and
            time-consuming tasks that eat into productivity and profits.
            Property managers often find themselves switching between multiple
            software platforms, chasing vendors, managing maintenance requests,
            approving tenants, and handling invoices all while juggling
            countless emails, calls, and spreadsheets.
          </p>
          <h2 className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300 font-bold text-3xl">We decided to change that.</h2>
          <p className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300">
            Ordo brings AI-powered automation to the heart of property
            management, delivering a single, unified platform that integrates
            seamlessly with industry leaders like Yardi, Entrata, AppFolio, and
            more. With chat agents, voice agents, and software co-pilots
            available at your fingertips, Ordo ensures property managers can
            handle everything anytime, anywhere.
          </p>
          <h2 className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300 font-bold text-3xl">Why We’re Different</h2>
          <div className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300">
            <ul className="list-disc list-inside space-y-2">
              <li><b className="font-bold text-lg">First in the World:</b> Ordo is the first platform to fully automate the end-to-end property management workflow, from vendor sourcing and tenant communications to maintenance scheduling and financial management.</li>
              <li><b className="font-bold text-lg">Massive Time Savings:</b> We cut time on critical tasks from weeks, days, and hours down to just minutes helping large property management firms dramatically improve efficiency and responsiveness.</li>
              <li><b className="font-bold text-lg">Scale for Independent Managers:</b> Independent property managers can now scale from 20–30 properties per year to hundreds or even thousands without needing more staff or dealing with administrative bottlenecks.</li>
              <li><b className="font-bold text-lg">Seamless PMS Integration:</b> We integrate with all major PMS software, so property managers don’t have to abandon their existing systems we simply make them smarter, faster, and more automated.</li>
              <li><b className="font-bold text-lg">Work Anywhere:</b> Whether through chat, voice commands, or software co-pilots, Ordo is always available, ensuring property managers have total control no matter where they are.</li>
            </ul>
          </div>
          <h2 className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300 font-bold text-3xl">Our Vision</h2>
          <p className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300">
          We believe property managers should spend their time building relationships, driving growth, and creating value not stuck in software or buried under paperwork. Our goal is to empower property managers worldwide to handle more properties, deliver better service, and run their operations with speed, precision, and ease.
          </p>
          <p className="mt-4 leading-8 text-neutral-700 dark:text-neutral-300 font-mono">With Ordo, the future of property management isn’t just digital it’s fully automated.</p>
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
      <div className="w-full md:mt-100 -z-10 relative mt-250">
        <Footer />
      </div>
    </>
  );
}
