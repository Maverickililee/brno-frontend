"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaList, FaX } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const MENU = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/how-we-work", label: "How We Work" }, 
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const firstFocusable = useRef(null);
  const lastFocusable = useRef(null);
  const previouslyFocused = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open & handle focus trapping + Escape
  useEffect(() => {
    const body = document?.body;
    if (isOpen) {
      previouslyFocused.current = document.activeElement;
      body.style.overflow = "hidden";
      // wait a tick then focus first focusable element in menu
      setTimeout(() => {
        const focusables = menuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables && focusables.length) {
          firstFocusable.current = focusables[0];
          lastFocusable.current = focusables[focusables.length - 1];
          focusables[0].focus();
        }
      }, 50);
    } else {
      body.style.overflow = "";
      // return focus to previously focused element
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    }

    function onKey(e) {
      if (!isOpen) return;
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "Tab") {
        // basic focus trap
        const active = document.activeElement;
        if (e.shiftKey) {
          // Shift + Tab
          if (active === firstFocusable.current) {
            e.preventDefault();
            lastFocusable.current?.focus();
          }
        } else {
          // Tab
          if (active === lastFocusable.current) {
            e.preventDefault();
            firstFocusable.current?.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const toggle = () => setIsOpen((s) => !s);

  return (
    <div className="fixed left-4 top-4 z-50">
      {/* Toggle button */}
      <button
        aria-controls="site-sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggle}
        className="nav-shadow"
      >
        {isOpen ? <FaX /> : <FaList />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="site-sidebar"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 h-full w-72 bg-stone-100 text-stone-900 p-6 z-50 transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo + Close (for clarity inside sidebar too) */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image src="/logo.svg" alt="Brno Web logo" width={56} height={56} />
            <span className="font-semibold">Brno Web</span>
          </Link>

          <button
            className="text-black hover:rotate-180 duration-300 hover:text-primary-100 cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaX />
          </button>
        </div>

        {/* Nav */}
        <nav className="mt-6 flex flex-col gap-1" aria-label="Primary">
          {MENU.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-full px-4 py-3 text-sm font-medium hover:bg-stone-200 focus:outline-none `}
            >
              {item.label}
            </Link>
          ))}
        </nav>


        {/* Optional small footer */}
        <div className="mt-8 text-xs font-medium text-stone-600">
          <p>© {new Date().getFullYear()} Brno Web</p>
        </div>
      </aside>
    </div>
  );
}
