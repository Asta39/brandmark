"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatKsh } from "@/lib/whatsapp";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";

const badgeStyles: Record<string, string> = {
  NEW: "bg-ink text-cream",
  POPULAR: "bg-orange text-white",
  "BEST SELLING": "bg-orange text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-cream">
        {product.badge && (
          <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-orange">{product.category}</span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 text-sm font-bold text-ink transition hover:text-orange">{product.name}</h3>
        </Link>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink/55">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-bold text-ink">{formatKsh(product.price)}</span>
          <button
            onClick={handleAdd}
            className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream transition hover:bg-orange"
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
