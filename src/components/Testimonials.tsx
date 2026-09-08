import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Client stories</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Made for brands that show up consistently</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-cream/10 bg-white/5 p-6">
              <p className="text-sm leading-relaxed text-cream/85">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-cream">{t.name}</p>
                  <p className="text-cream/50">{t.role}</p>
                </div>
                <div className="text-right text-cream/40">
                  <p>{t.project}</p>
                  <p>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
