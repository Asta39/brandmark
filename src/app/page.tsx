import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProductsPreview } from "@/components/ProductsPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { FaqJsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <Hero />
      <TrustBar />
      <ProductsPreview />
      <WhyChooseUs />
      <ServicesGrid />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
