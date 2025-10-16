"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { useCallback } from "react";

export default function Footer() {
  const handleTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <footer role="contentinfo" className="bg-neutral-900 text-neutral-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Logo + brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Brno Web homepage">
              <Image
                src="/logo.svg"
                alt="Brno Web logo"
                width={44}
                height={44}
                className="w-11 h-11"
                priority={false}
              />
              <span className="font-semibold text-lg">Brno Web</span>
            </Link>
            <p className="text-sm font-medium text-neutral-300">
              Next.js · UI/UX · Web3 — Production-ready websites and dApps built for performance and SEO.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-primary-100">Explore</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-sm text-neutral-200 hover:text-primary-100 font-medium">Home</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-neutral-200 hover:text-primary-100 font-medium">Blogs</Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-sm text-neutral-200 hover:text-primary-100 font-medium">How We Work</Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-primary-100">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm font-medium text-neutral-200">
              <li>
                <a href="mailto:brnoweb.com@outlook.com" className="hover:underline">brnoweb.com@outlook.com</a>
              </li>
        
              <li className="text-neutral-300 text-sm">Iran, Kish Island - Remote</li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary-100">Follow</h3>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://t.me/TheOneAndOnlyMaverick"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram — Brno Web"
                  className="p-2 rounded-md bg-white/5 hover:text-primary-100 duration-200 hover:bg-white/10"
                >
                  <FaTelegram />
                </a>

                <a
                  href="https://www.linkedin.com/in/iliya-keyhani-7b62b7362"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Brno Web"
                  className="p-2 rounded-md bg-white/5 hover:text-primary-100 duration-200 hover:bg-white/10"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-medium text-neutral-400">© {new Date().getFullYear()} Brno Web. All rights reserved.</p>

          <div className="flex items-center gap-4 font-medium">
            <button
              onClick={handleTop}
              className="text-sm cursor-pointer text-neutral-300 hover:text-primary-100 underline-offset-4"
              aria-label="Back to top"
            >
              Back to top
            </button>
            <p className="text-xs  text-neutral-500">Built with Next.js — Performance & SEO</p>
          </div>
        </div>
      </div>

      {/* JSON-LD Organization schema (replace placeholders if you already have it elsewhere) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Brno Web",
            url: "https://www.brnoweb.com",
            logo: "https://www.brnoweb.com/brnoOg.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+989338238",
                contactType: "Support",
                areaServed: "Iran",
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kish Island",
              addressCountry: "Iran",
            },
          }),
        }}
      />
    </footer>
  );
}
