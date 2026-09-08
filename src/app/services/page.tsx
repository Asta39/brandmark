import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Branding & Print Services in Nairobi | Brandmark Print Media",
  description:
    "Branding & signage, digital & offset printing, large format, vehicle branding, DTF, UV printing, laser cutting and outdoor advertising — all in-house in Nairobi, Kenya.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Services</span>
        <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Full-service branding &amp; print, all in-house
        </h1>
        <p className="mt-3 max-w-xl text-sm text-ink/60">
          Open any service to see recent work and request a quote — our team replies on WhatsApp with pricing and timelines.
        </p>
      </div>
      <ServicesGrid full />
      <CTASection />
    </div>
  );
}
