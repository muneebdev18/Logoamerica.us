import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Logo America",
  description:
    "Review Logo America's refund policy for brand identity services and packages — fair, transparent terms for custom creative work.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy | Logo America",
    description:
      "Our commitment to fair, transparent refund terms for brand identity services.",
    type: "website",
  },
};

export default function RefundPolicy() {
  return (
    <LegalLayout>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-hairline">
        <div className="shell flex flex-col gap-6 sm:gap-8">
          <p className="eyebrow">Legal</p>
          <h1 className="display-lg max-w-[16ch]">Refund Policy</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-asphalt">
            Last updated: September 2026. This policy outlines the terms under which refunds
            may be issued for Logo America LLC&rsquo;s brand identity services and packages.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="shell space-y-12 sm:space-y-16 max-w-3xl">
          <article>
            <h2 className="display-md mb-4">1. Overview</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Logo America provides custom creative services — including logo design, brand identity systems, strategic rebranding, naming, motion logos, and brand guidelines. Because these services involve significant upfront strategy, research, and creative work tailored specifically to each client, our refund terms differ from standard product returns.</p>
              <p>By engaging our services, you acknowledge that you are commissioning custom creative work, not purchasing an off-the-shelf product.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">2. Package Purchases (Basic, Advanced, Elite, Combo)</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <h3 className="font-display text-lg font-semibold text-moonlight">2.1 Before Work Begins</h3>
              <p>If you cancel before we begin any work on your project (i.e., before the Discover phase kickoff), you are eligible for a full refund minus a <strong>15% administrative fee</strong> to cover project setup, scheduling, and resource allocation.</p>

              <h3 className="font-display text-lg font-semibold text-moonlight mt-4">2.2 After Work Begins</h3>
              <p>Once the Discover phase has commenced, the following applies:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Discover phase completed:</strong> 70% refund (strategy, audit, and brief delivered)</li>
                <li><strong>Define phase completed:</strong> 50% refund (positioning, moodboards, signed brief delivered)</li>
                <li><strong>Design phase commenced:</strong> 25% refund (concept development underway)</li>
                <li><strong>Design concepts presented:</strong> No refund (core creative work delivered)</li>
              </ul>
              <p>Refunds are calculated based on the total package price and the phase at which cancellation occurs.</p>

              <h3 className="font-display text-lg font-semibold text-moonlight mt-4">2.3 Revision Rounds</h3>
              <p>Each package includes a defined number of revision rounds. Additional revisions beyond the included amount are billed at $150/round. Refunds are not issued for dissatisfaction with creative direction after included revisions are exhausted — we continue refining until the work meets the agreed brief.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">3. Custom Engagements (Brand System, Rebrand, Add-Ons)</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>For custom-scoped engagements (Brand System package, strategic rebrands, motion logos, packaging, illustration systems, trademark support, and other add-ons), the following applies:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Deposit (50%):</strong> Non-refundable once the project is scheduled and Discover phase begins</li>
                <li><strong>Mid-project cancellation:</strong> Client owes fees for all work completed to date, prorated against the total engagement value</li>
                <li><strong>Final payment:</strong> Due upon delivery of final files; work is not released until paid in full</li>
              </ul>
              <p>Custom engagement agreements include a detailed payment schedule and cancellation terms specific to the scope.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">4. Fast-Lane Delivery</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Fast-lane delivery (half the standard timeline, +30% fee) is non-refundable once the expedited schedule is confirmed and work begins, as it requires prioritizing your project over others and dedicating exclusive resources.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">5. Satisfaction Guarantee</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We are committed to delivering work that meets the agreed creative brief. If the delivered concepts do not align with the signed-off brief, we will:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Conduct a working session to identify specific misalignments</li>
                <li>Provide one additional concept round at no charge (beyond package inclusions)</li>
                <li>If still unresolved, offer a prorated refund based on phase completion (per Section 2.2 or 3)</li>
              </ul>
              <p>This guarantee applies only when the client has provided timely, specific feedback at each stage and the work demonstrably fails to meet the agreed brief — not for subjective preference changes.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">6. Refund Process</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Email <a href="mailto:contact@logoamerica.us" className="text-taillight hover:text-tailglow underline">contact@logoamerica.us</a> with your project reference and reason for cancellation</li>
                <li>We will confirm the applicable refund amount based on the phase completed</li>
                <li>Approved refunds are processed within 10 business days to the original payment method</li>
                <li>Payment processor fees (Stripe, bank wire) are non-refundable and deducted from the refund amount</li>
              </ol>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">7. Exceptions</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>No refunds will be issued for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Change of mind after creative concepts have been presented</li>
                <li>Client delays or unresponsiveness causing project timeline extensions</li>
                <li>Third-party delays (trademark office, printers, developers) outside our control</li>
                <li>Expired revision rounds without feedback provided</li>
                <li>Digital assets already delivered and downloaded</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">8. Contact Us</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Questions about this Refund Policy or a specific project? Contact us at:</p>
              <address className="not-italic space-y-1">
                <p>Logo America LLC</p>
                <p>New York, NY / Los Angeles, CA</p>
                <p><a href="mailto:contact@logoamerica.us" className="text-taillight hover:text-tailglow underline">contact@logoamerica.us</a></p>
              </address>
            </div>
          </article>
        </div>
      </section>
    </LegalLayout>
  );
}