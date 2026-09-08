import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Icon } from "./Icon";

export function ServicesGrid({ full = false }: { full?: boolean }) {
  const list = full ? services : services.slice(0, 6);

  return (
    <section id="services" className={`mx-auto max-w-7xl px-5 md:px-8 ${full ? "pb-20 pt-10" : "py-20"}`}>
      {!full && (
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Our services</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Everything your brand needs, in-house</h2>
          </div>
          <Link
            href="/services"
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30"
          >
            View all services
          </Link>
        </div>
      )}

      <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${full ? "" : "mt-10"}`}>
        {list.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:border-orange/40 hover:shadow-lg hover:shadow-ink/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-cream">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-ink backdrop-blur">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-bold text-ink">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{service.description}</p>
              <ul className="mt-4 space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-ink/55">
                    <span className="h-1 w-1 rounded-full bg-orange" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-bold text-orange transition group-hover:text-ink">
                View service &amp; request quote →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
