"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function ShopPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8">

      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Shop</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Branded products, ready to order</h1>
        <p className="mt-3 text-sm text-ink/60">
          Add items to your cart and check out instantly over WhatsApp — no account needed. Bulk pricing available on request.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              active === cat ? "border-ink bg-ink text-cream" : "border-line text-ink/60 hover:border-ink/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
