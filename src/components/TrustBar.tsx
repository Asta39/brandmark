import { clients } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
          Brands we&apos;ve printed and branded for
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {clients.map((name) => (
            <span key={name} className="text-sm font-bold tracking-tight text-ink/35 md:text-base">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
