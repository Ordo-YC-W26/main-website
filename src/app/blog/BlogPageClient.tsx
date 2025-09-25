"use client";
import Link from "next/link";
import Image from "next/image";
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
import { posts } from "./posts";

export function BlogPageClient() {
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
          <NavItems
            items={[
              { name: "Features", link: "/#features" },
              { name: "Pricing", link: "/#pricing" },
              { name: "Experience", link: "/#experience" },
              { name: "Blogs", link: "/blog" },
              { name: "About", link: "/about" },
            ]}
          />
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
      <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white my-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            Blogs
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{p.readMins} min read</span>
                    <span>•</span>
                    <span>{p.date}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                    {p.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-sm text-neutral-700 dark:text-neutral-300">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <div className="min-h-[36rem] md:h-[60rem] bg-black hidden flex-col items-center justify-around relative w-full dark:flex gap-8">
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <span>ordo</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>Marketplace</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>AI</span>
          </h2>
          <div className="pointer-events-none absolute inset-0 z-0">
            <ShootingStars />
            <StarsBackground />
          </div>
          <div className="w-full hidden dark:block relative z-10">
            <Footer />
          </div>
        </div>

        <div className="min-h-[36rem] md:h-[36rem] bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden">
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-zince-800 via-zinc-600 to-zinc-400 flex items-center gap-2 md:gap-8 my-20">
            <span>ordo</span>
            <span className="text-black text-lg font-thin">x</span>
            <span>Marketplace</span>
            <span className="text-black text-lg font-thin">x</span>
            <span>AI</span>
          </h2>
          <div className="w-full block dark:hidden">
            <Footer />
          </div>
        </div>
    </>
  );
}


