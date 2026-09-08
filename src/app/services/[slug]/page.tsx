import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { Icon } from "@/components/Icon";
import { ServiceInquiryForm } from "@/components/ServiceInquiryForm";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Brandmark Print Media`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div>
      <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <Image src={service.image} alt={service.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-10 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <nav className="flex items-center gap-2 text-xs text-cream/60">
              <Link href="/services" className="hover:text-cream">Services</Link>
              <span>/</span>
              <span className="text-cream">{service.name}</span>
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-cream md:text-4xl">{service.name}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-ink/70">{service.longDescription}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{service.extendedDescription}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink/70">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-sm font-bold text-ink">Who this is for</h2>
                <ul className="mt-3 space-y-2.5">
                  {service.whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/65">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-sm font-bold text-ink">What&apos;s included</h2>
                <ul className="mt-3 space-y-2.5">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/65">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-orange/25 bg-orange/5 p-6">
              <h2 className="text-sm font-bold text-ink">Pricing guide</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{service.pricingNote}</p>
            </div>

            <h2 className="mt-12 text-lg font-bold text-ink">How it works</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {service.process.map((step, i) => (
                <div key={step.title} className="rounded-2xl border border-line bg-white p-5">
                  <span className="text-xs font-bold text-orange">Step {i + 1}</span>
                  <h3 className="mt-1 text-sm font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.body}</p>
                </div>
              ))}
            </div>

            {service.gallery.length > 1 && (
              <>
                <h2 className="mt-12 text-lg font-bold text-ink">Recent work</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {service.gallery.map((src) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-line bg-cream">
                      <Image src={src} alt={service.name} fill sizes="25vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="mt-12 text-lg font-bold text-ink">Frequently asked</h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="text-sm font-bold text-ink">{faq.q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ServiceInquiryForm defaultService={service.name} />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="text-lg font-bold text-ink">Other services</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink/70 transition hover:border-orange hover:text-ink"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
