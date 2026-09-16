"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink, formatPrice } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import type { Product } from "@/lib/data";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const askHref = buildWhatsAppLink(
    `Hi Brandmark Print Media, I'd like to ask about "${product.name}" (${formatPrice(product.price)}). Qty: ${qty}.`,
  );

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border border-line">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-11 text-lg font-bold text-ink"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="h-11 w-11 text-lg font-bold text-ink"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 rounded-full bg-ink py-3.5 text-sm font-bold text-cream transition hover:bg-orange"
        >
          {added ? "Added ✓" : "Add to cart"}
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          onClick={() => {
            addItem(product.slug, qty);
            router.push("/cart");
          }}
          className="rounded-full border border-ink/15 py-3 text-sm font-bold text-ink transition hover:border-ink/30"
        >
          Buy now
        </button>
        <a
          href={askHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Ask about this
        </a>
      </div>
    </div>
  );
}
