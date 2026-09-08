"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: services[0].name,
  budget: "",
  timeline: "",
  details: "",
};

export function ServiceInquiryForm({ defaultService }: { defaultService?: string }) {
  const [form, setForm] = useState({ ...initial, service: defaultService ?? services[0].name });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "New service enquiry — Brandmark Print Media website",
      "",
      `Service: ${form.service}`,
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.budget ? `Estimated budget: ${form.budget}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      "",
      `Project details: ${form.details}`,
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
        <p className="text-base font-semibold text-ink">WhatsApp opened with your enquiry</p>
        <p className="text-sm text-ink/60">Send the message and our team will get back to you with pricing and next steps.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-1 text-sm font-semibold text-orange"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 md:p-8">
      <h3 className="text-lg font-bold text-ink">Request a quote</h3>
      <p className="mt-1 text-sm text-ink/55">Tell us about your project and we&apos;ll reply on WhatsApp with pricing.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Service</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-orange"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

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
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Company (optional)</label>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="Company Ltd"
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
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Estimated budget (optional)</label>
          <input
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="e.g. KSh 50,000"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Timeline (optional)</label>
          <input
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="e.g. Within 2 weeks"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">Project details</label>
          <textarea
            required
            rows={4}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-orange"
            placeholder="What are you looking to brand or print? Sizes, quantities, locations…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:opacity-90 sm:w-auto sm:px-8"
      >
        <Icon name="whatsapp" className="h-4 w-4" />
        Send enquiry on WhatsApp
      </button>
    </form>
  );
}
