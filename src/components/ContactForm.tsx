"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

const initial = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "New message from the Brandmark Print Media website",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.subject ? `Subject: ${form.subject}` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <p className="text-base font-semibold text-ink">WhatsApp opened with your message</p>
        <p className="text-sm text-ink/60">Send it across and our team will get back to you shortly.</p>
        <button onClick={() => setSent(false)} className="mt-1 text-sm font-semibold text-orange">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 md:p-8">
      <h2 className="text-lg font-bold text-ink">Send us a message</h2>
      <p className="mt-1 text-sm text-ink/55">We&apos;ll reply on WhatsApp, usually within the same working day.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Subject (optional)</label>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="e.g. Shop signage enquiry"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Message</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="Tell us a bit about what you need…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:opacity-90 sm:w-auto sm:px-8"
      >
        <Icon name="whatsapp" className="h-4 w-4" />
        Send on WhatsApp
      </button>
    </form>
  );
}
