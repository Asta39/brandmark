import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

export function ProductsPreview() {
  const featured = products.slice(0, 8);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Shop</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Ready-to-order branded products</h2>
          <p className="mt-2 max-w-lg text-sm text-ink/60">
            Add straight to cart and check out over WhatsApp — no account, no waiting.
          </p>
        </div>
        <Link
          href="/shop"
          className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30"
        >
          View full shop
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
