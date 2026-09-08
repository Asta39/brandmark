import { ShopGrid } from "@/components/ShopGrid";

export const metadata = {
  title: "Shop Custom Branded Products in Kenya | Brandmark Print Media",
  description:
    "Order DTF t-shirts, UV-printed merchandise, laser-cut wall art, pull-up banners and more — custom branded products made in Nairobi, checkout instantly on WhatsApp.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Shop</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Branded products, ready to order</h1>
        <p className="mt-3 text-sm text-ink/60">
          Add items to your cart and check out instantly over WhatsApp — no account needed. Bulk pricing available
          on request, with pickup or delivery across Nairobi, Kenya.
        </p>
      </div>

      <ShopGrid />
    </div>
  );
}
