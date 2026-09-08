import { WHATSAPP_NUMBER, type Product, type Service } from "@/lib/data";

const SITE_URL = "https://www.brandmarkprintmedia.com";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "Brandmark Print Media",
        image: `${SITE_URL}/images/services/signage-1.jpg`,
        logo: `${SITE_URL}/images/logo-full.png`,
        url: SITE_URL,
        telephone: `+${WHATSAPP_NUMBER}`,
        priceRange: "KSh 600 - KSh 250,000",
        description:
          "Brandmark Print Media designs, prints and installs branding, signage, large-format printing, DTF apparel, UV printing, laser-cut signage and vehicle wraps for businesses in Nairobi, Kenya.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        areaServed: {
          "@type": "City",
          name: "Nairobi",
        },
        foundingDate: "2023",
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.images.map((img) => `${SITE_URL}${img}`),
        category: product.category,
        brand: {
          "@type": "Brand",
          name: "Brandmark Print Media",
        },
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/products/${product.slug}`,
          priceCurrency: "KES",
          price: product.price,
          availability: "https://schema.org/InStock",
          areaServed: "Nairobi, Kenya",
        },
      }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: Service }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.name,
        name: service.name,
        description: service.description,
        provider: {
          "@type": "LocalBusiness",
          name: "Brandmark Print Media",
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: "Nairobi",
        },
        url: `${SITE_URL}/services/${service.slug}`,
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.url}`,
        })),
      }}
    />
  );
}
