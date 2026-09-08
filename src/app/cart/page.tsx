"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink, formatKsh } from "@/lib/whatsapp";
import { Icon } from "@/components/Icon";

export default function CartPage() {
  const { itemsWithProduct, subtotal, setQty, removeItem, clear } = useCart();
  const [step, setStep] = useState<"cart" | "sent">("cart");
  const [form, setForm] = useState({ name: "", phone: "", email: "", delivery: "pickup", address: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemLines = itemsWithProduct
      .map(({ product, qty }) => `• ${product.name} x${qty} — ${formatKsh(product.price * qty)}`)
      .join("\n");

    const message = [
      "New order request — Brandmark Print Media website",
      "",
      itemLines,
      "",
      `Subtotal: ${formatKsh(subtotal)}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Delivery: ${form.delivery === "pickup" ? "Pickup at Nairobi office" : "Delivery"}`,
      form.delivery === "delivery" ? `Address: ${form.address}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setStep("sent");
    clear();
  };

  if (step === "sent") {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-5 pb-24 pt-40 text-center md:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-ink">WhatsApp opened with your order</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          Finish sending the message in WhatsApp and our team will confirm pricing, availability and delivery.
        </p>
        <Link href="/shop" className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (itemsWithProduct.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-5 pb-24 pt-40 text-center md:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-ink/40">
          <Icon name="cart" className="h-8 w-8" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-ink">Your cart is empty</h1>
        <p className="mt-2 text-sm text-ink/60">Browse the shop and add branded products to get started.</p>
        <Link href="/shop" className="mt-6 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-ink">Your cart</h1>
      <p className="mt-1 text-sm text-ink/55">{itemsWithProduct.length} item{itemsWithProduct.length > 1 ? "s" : ""} in your cart</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-line rounded-2xl border border-line bg-white">
            {itemsWithProduct.map(({ product, qty }) => (
              <li key={product.slug} className="flex gap-4 p-5">
                <Link href={`/products/${product.slug}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-cream">
                  <Image src={product.images[0]} alt={product.name} fill sizes="96px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-orange">{product.category}</span>
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="mt-0.5 text-sm font-bold text-ink transition hover:text-orange">{product.name}</h3>
                      </Link>
                    </div>
                    <span className="text-sm font-bold text-ink">{formatKsh(product.price * qty)}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/50">{formatKsh(product.price)} each</p>
                  <div className="mt-auto flex items-center gap-3 pt-3">
                    <div className="flex items-center rounded-full border border-line">
                      <button
                        onClick={() => setQty(product.slug, qty - 1)}
                        className="h-8 w-8 text-sm font-bold text-ink"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{qty}</span>
                      <button
                        onClick={() => setQty(product.slug, qty + 1)}
                        className="h-8 w-8 text-sm font-bold text-ink"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(product.slug)}
                      className="text-xs font-medium text-ink/40 hover:text-orange"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/shop" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-ink">
            ← Continue shopping
          </Link>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-line bg-white p-6">
            <h2 className="text-base font-bold text-ink">Order summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-semibold text-ink">{formatKsh(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink/45">Delivery fee confirmed on WhatsApp based on your location.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-line pt-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
                  placeholder="Jane Wanjiru"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Phone number</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
                  placeholder="07xx xxx xxx"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Email (optional)</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Fulfilment</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {(["pickup", "delivery"] as const).map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setForm({ ...form, delivery: opt })}
                      className={`rounded-lg border px-3 py-2.5 text-sm font-medium capitalize transition ${
                        form.delivery === opt ? "border-orange bg-orange/10 text-ink" : "border-line text-ink/60"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              {form.delivery === "delivery" && (
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Delivery address</label>
                  <input
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
                    placeholder="Street, building, area"
                  />
                </div>
              )}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
                  placeholder="Colour, sizing, artwork details…"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:opacity-90"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Send order on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
