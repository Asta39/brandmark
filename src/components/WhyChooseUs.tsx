import { Icon } from "./Icon";

const items = [
  {
    icon: "target",
    title: "Innovative design approach",
    body: "Our design team blends creativity with strategy so every print not only looks sharp but communicates your brand message.",
  },
  {
    icon: "sun",
    title: "Advanced printing technology",
    body: "Latest large-format, UV, DTF and laser equipment for vibrant colour, sharp detail and quick turnaround on every job.",
  },
  {
    icon: "check",
    title: "Personalised service",
    body: "We take the time to understand your unique needs — a seamless experience from first brief to final install.",
  },
  {
    icon: "leaf",
    title: "Eco-friendly solutions",
    body: "Sustainable materials and printing options available across our product range, without compromising on quality.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Why choose us</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Built for brands that don&apos;t settle</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-cream p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-orange">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
