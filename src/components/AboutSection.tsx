import { Icon } from "./Icon";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Who we are</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Passionate innovators in the world of print
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/65">
            Established in 2023, Brandmark Print Media has built a reputation for excellence by delivering
            top-notch printing solutions that combine cutting-edge technology with unparalleled craftsmanship.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">
            From high-quality offset and digital printing to striking large-format and custom projects, our
            team brings precision, creativity and reliability to every job — because at Brandmark, we&apos;re
            not just printers, we&apos;re your partners in bringing your vision to life.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-4 rounded-2xl border border-line bg-cream p-6">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-orange">
              <Icon name="target" className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink">Our mission</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                Every brand has a story to tell. Our mission is to elevate your message through cutting-edge
                design and high-quality print solutions that captivate, engage and inspire.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-line bg-cream p-6">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-orange">
              <Icon name="sun" className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink">Our vision</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                To be the go-to design and print partner for businesses making a bold statement in a
                visually-driven world — setting trends and creating unforgettable brand experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
