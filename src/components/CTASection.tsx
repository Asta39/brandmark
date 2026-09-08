import Link from "next/link";
import { Icon } from "./Icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTASection() {
  const href = buildWhatsAppLink("Hi Brandmark Print Media, I'd like to discuss a project.");
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <div className="relative overflow-hidden rounded-3xl wavy-bg px-6 py-16 text-center md:px-16 md:py-20">
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-cream md:text-4xl">
            Where your ideas take flight. Let&apos;s create something amazing together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70">
            Ready to elevate your brand? Send us your project on WhatsApp and get a quote today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/services"
              className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-bold text-cream transition hover:border-cream/50"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
