"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 md:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">FAQ</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Questions before you order?</h2>
        <p className="mt-2 text-sm text-ink/60">Answers about turnaround, formats, installation and quotes.</p>
      </div>

      <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="px-6 py-5">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-semibold text-ink">{item.q}</span>
                <span className={`ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-line text-ink transition ${isOpen ? "rotate-45 border-orange text-orange" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
