"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { useCart } from "@/lib/cart-context";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-white/95 py-1.5 pl-1.5 pr-4 shadow-sm shadow-ink/5 backdrop-blur">
          <Link href="/" className="flex h-8 w-8 items-center justify-center rounded-full bg-ink">
            <Image src="/images/logo.png" alt="Brandmark" width={20} height={20} className="h-5 w-5" />
          </Link>
          <Link href="/" className="pl-2 pr-1 text-sm font-bold text-ink">
            Brandmark
          </Link>
          <span className="hidden h-4 w-px bg-line md:block" />
          <nav className="hidden items-center text-sm text-ink/60 md:flex">
            {NAV.map((item, i) => (
              <span key={item.href} className="flex items-center">
                {i > 0 && <span className="px-2 text-ink/25">·</span>}
                <Link href={item.href} className="transition hover:text-ink">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/95 shadow-sm shadow-ink/5 backdrop-blur transition hover:border-ink/25"
          >
            <Icon name="cart" className="h-[18px] w-[18px] text-ink" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <Link
            href="/services"
            className="hidden items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2 text-sm font-semibold text-cream transition hover:bg-ink-soft md:flex"
          >
            Get a quote
            <span className="rounded-full bg-orange px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              WhatsApp
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/95 shadow-sm shadow-ink/5 backdrop-blur md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl md:hidden">
          <nav className="flex flex-col gap-1 rounded-2xl border border-ink/10 bg-white/95 p-3 shadow-sm shadow-ink/5 backdrop-blur">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setTimeout(() => setMenuOpen(false), 0)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-xl bg-ink px-3 py-2.5 text-center text-sm font-semibold text-cream"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
