import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { formatKsh } from "@/lib/whatsapp";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ProductCard } from "@/components/ProductCard";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Brandmark Print Media`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 md:px-8">
      <nav className="flex items-center gap-2 text-xs text-ink/50">
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        <span>/</span>
        <span className="text-ink/70">{product.category}</span>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          {product.badge && (
            <span className="inline-block rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
          <span className="mt-2 block text-xs font-semibold uppercase tracking-wide text-orange">{product.category}</span>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">{product.name}</h1>
          <p className="mt-3 text-2xl font-bold text-ink">{formatKsh(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">{product.longDescription}</p>

          <div className="mt-6">
            <ProductPurchasePanel product={product} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 rounded-2xl border border-line bg-cream/60 p-4 text-xs text-ink/60 sm:grid-cols-3">
            <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 flex-shrink-0 text-orange" /> No account needed</span>
            <span className="flex items-center gap-1.5"><Icon name="whatsapp" className="h-3.5 w-3.5 flex-shrink-0 text-orange" /> Confirmed on WhatsApp</span>
            <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 flex-shrink-0 text-orange" /> Pickup or delivery</span>
          </div>

          {product.options.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-ink">Customisation options</h3>
              <ul className="mt-3 space-y-1.5">
                {product.options.map((opt) => (
                  <li key={opt} className="flex items-center gap-2 text-sm text-ink/65">
                    <span className="h-1 w-1 rounded-full bg-orange" />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-line bg-cream p-5">
            <h3 className="text-sm font-bold text-ink">Specifications</h3>
            <dl className="mt-3 space-y-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-ink/55">{spec.label}</dt>
                  <dd className="text-right font-medium text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-ink">Perfect for</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-2 rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink/65">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange" />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="text-lg font-bold text-ink">Frequently asked</h2>
        <div className="mt-5 space-y-3">
          {product.faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-sm font-bold text-ink">{faq.q}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-xl font-bold tracking-tight text-ink">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
