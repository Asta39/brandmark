import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Brandmark Print Media",
  description: "Terms governing use of the Brandmark Print Media website, shop and quote requests.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Legal</span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Terms of Service</h1>
      <p className="mt-3 text-sm text-ink/50">Last updated: September 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
        <section>
          <p>
            These terms govern your use of brandmarkprintmedia.com, operated by Brandmark Print Media
            (&quot;Brandmark&quot;, &quot;we&quot;, &quot;us&quot;), based in Nairobi, Kenya. By browsing
            this site, adding items to your cart, or submitting a quote request, you agree to these
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">1. How ordering works</h2>
          <p className="mt-3">
            This website is a catalogue and enquiry tool, not an automated checkout. Adding products to
            your cart and submitting the checkout form, or submitting a service enquiry, opens WhatsApp
            with your details pre-filled as a message to our business number. No order is confirmed and
            no payment is taken until you send that message and we reply confirming price, availability,
            specifications and turnaround time. Prices shown on this site are indicative and may be
            adjusted based on final artwork, quantity, materials, or delivery location.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">2. Quotes and custom work</h2>
          <p className="mt-3">
            Pricing guidance shown on service pages is an estimate based on typical jobs of that type.
            Every custom branding, signage, printing or vehicle-wrap project is quoted individually once
            we&apos;ve reviewed your specifications, artwork and site (where relevant). Custom and bulk
            orders generally require a 50% deposit before production begins, with the balance due on
            completion or before delivery/installation, unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">3. Payment</h2>
          <p className="mt-3">
            Payment is arranged directly with our team via the channels we confirm on WhatsApp (e.g.
            M-Pesa, bank transfer). This website does not process or store payment card information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">4. Turnaround, delivery and installation</h2>
          <p className="mt-3">
            Turnaround times stated on this site are typical estimates and begin once artwork is
            approved and, where applicable, a deposit is received. Delivery fees for items outside our
            standard pickup location are confirmed separately based on distance. Installation of
            signage or vehicle branding is scheduled by mutual agreement and may be affected by weather,
            site access or approvals outside our control.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">5. Artwork and intellectual property</h2>
          <p className="mt-3">
            You are responsible for ensuring you have the right to use any logo, image, text or design
            you send us for printing, signage or branding, and to indemnify us against any claim arising
            from artwork you supply. Original design work created by Brandmark specifically for your
            project remains our intellectual property until paid for in full, after which usage rights
            transfer to you for that project. Content, photography, and branding on this website belong
            to Brandmark Print Media and may not be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">6. Product accuracy</h2>
          <p className="mt-3">
            We describe products and materials as accurately as possible, but colours may vary slightly
            between screen display and printed or fabricated output due to monitor calibration and
            material finish. Product photography reflects the general style and quality of the item;
            custom branding elements shown are illustrative unless you supply your own artwork.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">7. Cancellations and refunds</h2>
          <p className="mt-3">
            Orders may be cancelled without charge before production begins. Once production has started
            on a custom or bulk order, deposits are non-refundable as they cover materials and labour
            already committed. Catalogue shop items may be cancelled prior to dispatch; once dispatched
            or collected, returns are handled case-by-case, particularly for personalised or
            custom-branded items which cannot be resold.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">8. Limitation of liability</h2>
          <p className="mt-3">
            To the extent permitted by Kenyan law, Brandmark&apos;s liability for any claim arising from
            an order is limited to the value paid for that order. We are not liable for indirect or
            consequential losses, including loss of business or anticipated profit, arising from delays
            or issues outside our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">9. Governing law</h2>
          <p className="mt-3">
            These terms are governed by the laws of Kenya. Any dispute arising from use of this website
            or an order placed through it will be subject to the jurisdiction of the courts of Kenya.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">10. Contact us</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
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
        <Link href="/privacy" className="font-semibold text-orange hover:text-ink">
          Read our Privacy Policy →
        </Link>
      </div>
    </div>
  );
}
