import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Brandmark Print Media" width={32} height={32} className="h-8 w-8" />
            <span className="text-base font-bold">Brandmark Print Media</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Design. Print. Brand. Nairobi&apos;s partner for signage, large-format printing, apparel and vehicle branding since 2023.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-orange">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="transition hover:text-cream">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-orange">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link href="/#about" className="transition hover:text-cream">About us</Link></li>
            <li><Link href="/shop" className="transition hover:text-cream">Shop</Link></li>
            <li><Link href="/#faq" className="transition hover:text-cream">FAQ</Link></li>
            <li><Link href="/#testimonials" className="transition hover:text-cream">Client reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-orange">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>+254 719 855331</li>
            <li>info@brandmarkprintmedia.com</li>
            <li>www.brandmarkprintmedia.com</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-cream/50 md:flex-row">
          <span>© {new Date().getFullYear()} Brandmark Print Media. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition hover:text-cream">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-cream">Terms of Service</Link>
            <span className="hidden md:inline">Design . Print . Brand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
