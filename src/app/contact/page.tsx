import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Contact Us | Brandmark Print Media Nairobi",
  description:
    "Get in touch with Brandmark Print Media — Nairobi's branding, signage and printing company. Call, WhatsApp or send us a message for a quote.",
  alternates: { canonical: "/contact" },
};

const whatsappHref = buildWhatsAppLink("Hi Brandmark Print Media, I'd like to get in touch.");

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <BreadcrumbJsonLd items={[{ name: "Contact", url: "/contact" }]} />

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Contact</span>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Let&apos;s talk about your project
      </h1>
      <p className="mt-3 max-w-xl text-sm text-ink/60">
        Reach us directly on WhatsApp, call, or send a message below — we&apos;re based in Nairobi and reply on
        working days within a few hours.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="space-y-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-[#25D366]/50"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <Icon name="whatsapp" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">WhatsApp</p>
                <p className="text-sm text-ink/60">+254 719 855331</p>
              </div>
            </a>

            <a
              href="tel:+254719855331"
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-orange/50"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon name="phone" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Call us</p>
                <p className="text-sm text-ink/60">+254 719 855331</p>
              </div>
            </a>

            <a
              href="mailto:info@brandmarkprintmedia.com"
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-orange/50"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon name="print" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Email</p>
                <p className="text-sm text-ink/60">info@brandmarkprintmedia.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon name="signage" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Location</p>
                <p className="text-sm text-ink/60">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon name="check" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Response time</p>
                <p className="text-sm text-ink/60">Usually within a few hours on WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
