"use client";

import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import FooterImage from "../../../public/footer-sketch.svg";
import LogoImage from "../../../public/logo.png";

export function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-white dark:border-neutral-800 dark:bg-transparent relative">
      <div className="relative w-full">
        <img src={FooterImage.src} alt="ordo" className="w-full h-auto object-contain opacity-30" />
        <div className="absolute inset-x-0 bottom-0 w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 py-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3" onClick={() => router.push("/")}>
                  <img src={LogoImage.src} alt="ordo" width={50} height={50} className="" />
                  <span className="text-lg font-semibold text-black dark:text-white">ordo</span>
                </div>
                <p className="mt-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
                  Building fast and smart AI experiences for individuals and businesses.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link href="mailto:support@ordospaces.com" aria-label="Email" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">
                    <IconMail size={20} />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black dark:text-white">Product</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><Link href="/#features" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Features</Link></li>
                  <li><Link href="/#pricing" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Pricing</Link></li>
                  <li><Link href="/#experience" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Experience</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black dark:text-white">Company</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><Link href="/about" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">About</Link></li>
                  <li><Link href="/blog" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Blog</Link></li>
                  <li><Link href="/manifesto" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Manifesto</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black dark:text-white">Resources</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><Link href="/terms" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Terms</Link></li>
                  <li><Link href="/privacy" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Privacy</Link></li>
                  <li><Link href="/cookies" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Cookies</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">© 2025 ordo. All rights reserved.</p>
                <div className="flex items-center gap-6 text-xs">
                  <Link href="/terms" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Terms</Link>
                  <Link href="/privacy" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Privacy</Link>
                  <Link href="/cookies" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer">Cookies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}