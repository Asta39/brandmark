import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Brandmark Print Media",
  description: "How Brandmark Print Media collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Legal</span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink/50">Last updated: September 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
        <section>
          <p>
            Brandmark Print Media (&quot;Brandmark&quot;, &quot;we&quot;, &quot;us&quot;) operates
            brandmarkprintmedia.com. This policy explains what information we collect when you browse
            our shop, request a quote, or place an order, and how we use it. By using this site you
            agree to the practices described here.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">1. Information we collect</h2>
          <p className="mt-3">We collect information you provide directly to us, specifically:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Order and quote details</strong> — your name, phone number,
              email address (optional), delivery address (if requesting delivery), and details of the
              products or services you enquire about, submitted through our cart checkout or service
              enquiry forms.
            </li>
            <li>
              <strong className="text-ink">Artwork and files</strong> — logos, designs or reference
              images you send us for a print, signage or branding job.
            </li>
            <li>
              <strong className="text-ink">Cart contents</strong> — items you add to your cart are
              stored locally in your browser (via localStorage) so your cart persists between visits.
              This data stays on your device and is not sent to our servers until you submit an order.
            </li>
          </ul>
          <p className="mt-3">
            We do not collect payment card details through this website — no on-site checkout or
            payment processing takes place here.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">2. How your order reaches us</h2>
          <p className="mt-3">
            When you submit the cart checkout form or a service enquiry, this site opens WhatsApp with
            a pre-filled message containing your details and order/enquiry summary, addressed to our
            business WhatsApp number. Sending that message is a separate step you control — the
            information is transmitted to us via WhatsApp (operated by Meta Platforms, Inc.), subject
            to WhatsApp&apos;s own privacy policy and terms, not this site directly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">3. How we use your information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To respond to quote requests and confirm order details, pricing and timelines</li>
            <li>To produce, fulfil and deliver or arrange pickup of your order</li>
            <li>To communicate with you about an active or past order</li>
            <li>To improve our products, services and this website</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent or trade your personal information to third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">4. Data retention</h2>
          <p className="mt-3">
            We retain order and communication records for as long as reasonably necessary to fulfil
            your order, handle any warranty or dispute, and meet our accounting and tax obligations
            under Kenyan law. Cart data stored in your browser remains until you clear it or clear your
            browser storage.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">5. Your rights</h2>
          <p className="mt-3">
            Under the Kenya Data Protection Act, 2019, you have the right to access, correct, or request
            deletion of your personal data held by us, and to object to or restrict certain processing.
            To exercise any of these rights, contact us using the details below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">6. Cookies and local storage</h2>
          <p className="mt-3">
            This site uses your browser&apos;s local storage to remember the contents of your shopping
            cart between visits. We do not use tracking cookies or third-party advertising trackers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">7. Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time to reflect changes in our practices or for legal
            reasons. The &quot;last updated&quot; date at the top of this page will reflect the most
            recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">8. Contact us</h2>
          <p className="mt-3">
            Questions about this policy or your data can be sent to{" "}
            <a href="mailto:info@brandmarkprintmedia.com" className="font-semibold text-orange">
              info@brandmarkprintmedia.com
            </a>{" "}
            or via WhatsApp at{" "}
            <a href="https://wa.me/254719855331" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange">
              +254 719 855331
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-line pt-6 text-sm">
        <Link href="/terms" className="font-semibold text-orange hover:text-ink">
          Read our Terms of Service →
        </Link>
      </div>
    </div>
  );
}
