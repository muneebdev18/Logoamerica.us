import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Logo America's terms and conditions — governing your use of our website and brand identity services.",
};

export default function TermsConditions() {
  return (
    <LegalLayout>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-hairline">
        <div className="shell flex flex-col gap-6 sm:gap-8">
          <p className="eyebrow">Legal</p>
          <h1 className="display-lg max-w-[16ch]">Terms & Conditions</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-asphalt">
            Last updated: September 2026. These terms govern your access to logoamerica.us and
            any services provided by Logo America LLC. By using our site or engaging our services,
            you agree to these terms.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="shell space-y-12 sm:space-y-16 max-w-3xl">
          <article>
            <h2 className="display-md mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>By accessing logoamerica.us (&ldquo;the Site&rdquo;) or engaging Logo America LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) for brand identity services (&ldquo;Services&rdquo;), you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;) agree to be bound by these Terms & Conditions (&ldquo;Terms&rdquo;), our <a href="/privacy-policy" className="text-taillight hover:text-tailglow underline">Privacy Policy</a>, and any applicable service agreement or proposal. If you do not agree, do not use the Site or engage our Services.</p>
              <p>We may update these Terms at any time. Continued use after changes constitutes acceptance. The current version is always posted on this page with the &ldquo;Last updated&rdquo; date.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">2. Services Description</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We provide professional brand identity services including, but not limited to: custom logo design, brand identity systems, strategic rebranding, naming & verbal identity, motion logos & digital assets, brand guidelines & asset libraries, and related add-ons (packaging, illustration, trademark support, social media kits, stationery).</p>
              <p>Specific deliverables, timelines, and fees are detailed in the applicable proposal, package description, or service agreement (&ldquo;Agreement&rdquo;). In case of conflict between these Terms and a signed Agreement, the Agreement prevails.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">3. Client Responsibilities</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>To ensure successful project outcomes, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide accurate, complete information and assets (existing logos, brand assets, copy, stakeholder contacts) in a timely manner</li>
                <li>Designate a single point of contact with authority to approve deliverables</li>
                <li>Provide specific, consolidated feedback within the agreed review periods</li>
                <li>Adhere to the agreed payment schedule</li>
                <li>Not request work that infringes third-party intellectual property, violates laws, or promotes hate, violence, or illegal activities</li>
              </ul>
              <p>Delays caused by late client feedback or asset delivery may extend project timelines and are not grounds for refund.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">4. Intellectual Property & Ownership</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <h3 className="font-display text-lg font-semibold text-moonlight">4.1 Final Deliverables</h3>
              <p>Upon full payment, all final deliverables (approved logos, brand guidelines, asset files, motion files, etc.) are transferred to you with full intellectual property ownership. You receive all file formats needed for current and future use (vector masters, web-optimized, app icons, favicon suites, single-color variants). No licensing fees, usage restrictions, or ongoing royalties.</p>

              <h3 className="font-display text-lg font-semibold text-moonlight mt-4">4.2 Work-In-Process & Concepts</h3>
              <p>Unselected concepts, preliminary sketches, moodboards, rejected directions, and work-in-process files remain our property. These are not delivered to the client and may not be used, published, or claimed as your own.</p>

              <h3 className="font-display text-lg font-semibold text-moonlight mt-4">4.3 Portfolio Rights</h3>
              <p>We reserve the right to feature completed work in our portfolio, case studies, website, social media, and marketing materials (with appropriate client attribution). If you require confidentiality for a specific project, notify us in writing before engagement; a portfolio restriction fee may apply.</p>

              <h3 className="font-display text-lg font-semibold text-moonlight mt-4">4.4 Trademark</h3>
              <p>We conduct preliminary trademark screening on recommended marks, but this is not a legal opinion. Final trademark clearance and registration are your responsibility. We recommend engaging a qualified trademark attorney. We are not liable for trademark office rejections or third-party oppositions.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">5. Fees, Payment & Expenses</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Packages:</strong> Full payment due upfront unless otherwise stated.</li>
                <li><strong>Custom engagements:</strong> 50% deposit to schedule; 50% due upon final delivery. Milestone-based schedules may apply for larger projects.</li>
                <li><strong>Fast-lane:</strong> +30% fee, due with deposit.</li>
                <li><strong>Additional revisions:</strong> $150/round beyond package inclusions.</li>
                <li><strong>Scope changes:</strong> Quoted and approved in writing before work begins.</li>
                <li><strong>Expenses:</strong> Third-party costs (stock photography, font licenses, printing, trademark filing fees) are billed at cost with prior approval.</li>
                <li><strong>Late payment:</strong> 1.5% monthly interest on overdue balances; work may be paused until paid.</li>
                <li><strong>Currency:</strong> All fees in USD.</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">6. Timelines & Scheduling</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Estimated timelines are provided in good faith based on current capacity and assume timely client feedback. We hold two fast-lane slots per month; standard projects are scheduled sequentially. We are not liable for delays caused by:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Client feedback delays</li>
                <li>Third-party dependencies (trademark offices, printers, developers)</li>
                <li>Force majeure events (illness, natural disasters, infrastructure failures)</li>
                <li>Scope changes requested mid-project</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">7. Confidentiality</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Both parties agree to keep confidential all non-public information exchanged during the engagement (business strategies, financial data, unreleased products, creative concepts). This obligation survives project completion. We may use anonymized project data for internal benchmarking and process improvement.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">8. Warranties & Disclaimers</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We warrant that our Services will be performed in a professional, workmanlike manner consistent with industry standards. <strong>Except as expressly stated, we make no warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.</strong></p>
              <p>We do not guarantee specific business outcomes (revenue increases, brand recall metrics, trademark approval). Case study results reflect past clients&rsquo; outcomes under specific conditions and are not guarantees of future performance.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">9. Limitation of Liability</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Our total liability for any claim arising from the Services shall not exceed the total fees paid by you for the applicable engagement.</li>
                <li>We are not liable for indirect, incidental, special, consequential, or punitive damages (lost profits, data loss, business interruption).</li>
                <li>This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability).</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">10. Indemnification</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>You agree to indemnify, defend, and hold harmless Logo America LLC and its officers, employees, and contractors from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from: your breach of these Terms; your use of deliverables in violation of law or third-party rights; content or assets you provide; or trademark disputes related to marks we designed.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">11. Termination</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Either party may terminate the engagement with written notice. Upon termination:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Client pays for all work completed to date (prorated against total fee)</li>
                <li>We deliver all completed work upon receipt of payment</li>
                <li>Unpaid work-in-process remains our property</li>
                <li>Refunds, if any, follow our <a href="/refund-policy" className="text-taillight hover:text-tailglow underline">Refund Policy</a></li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">12. Governing Law & Dispute Resolution</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Services shall be resolved through binding arbitration in New York, NY, administered by the American Arbitration Association under its Commercial Arbitration Rules. The award may be entered in any court having jurisdiction. Class actions and jury trials are waived.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">13. General Provisions</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Entire Agreement:</strong> These Terms, the Agreement, Privacy Policy, and Refund Policy constitute the entire understanding.</li>
                <li><strong>Severability:</strong> If any provision is unenforceable, the remainder remains in effect.</li>
                <li><strong>Waiver:</strong> Failure to enforce a right does not waive it.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our written consent. We may assign to an affiliate or successor.</li>
                <li><strong>Force Majeure:</strong> Neither party is liable for delays due to events beyond reasonable control.</li>
                <li><strong>Notices:</strong> Email to contact@logoamerica.us (us) or the email on file (you) constitutes valid notice.</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">14. Contact Us</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Questions about these Terms? Contact us at:</p>
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