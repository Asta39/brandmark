import Link from "next/link";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden wavy-bg">
      <div className="absolute inset-0 bg-cream/40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-28 text-center md:px-8 md:pb-28 md:pt-40">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
          Design, print &amp; branding that makes your business impossible to miss.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
          From shop signage and vehicle wraps to DTF apparel and promotional merchandise — Brandmark Print Media brings your brand to life with precision and craftsmanship.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/shop"
            className="rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange/20 transition hover:bg-orange-soft"
          >
            Browse the shop
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:border-ink/30"
          >
            Request a quote
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-ink/50">
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-orange" /> No minimum order on DTF &amp; UV printing</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-orange" /> On-site installation across Nairobi</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-orange" /> Order straight to WhatsApp</span>
        </div>
      </div>
    </section>
  );
}
