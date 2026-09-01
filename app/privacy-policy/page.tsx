import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Logo America's privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-hairline">
        <div className="shell flex flex-col gap-6 sm:gap-8">
          <p className="eyebrow">Legal</p>
          <h1 className="display-lg max-w-[16ch]">Privacy Policy</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-asphalt">
            Last updated: September 2026. This policy explains how Logo America LLC
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
            your information when you visit www.logoamerica.us or engage our services.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="shell space-y-12 sm:space-y-16 max-w-3xl">
          <article>
            <h2 className="display-md mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>
                We collect information you provide directly to us, including when you:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Submit a contact form or request a quote</li>
                <li>Sign up for our newsletter</li>
                <li>Communicate with us via email, chat, or phone</li>
                <li>Enter into a service agreement with us</li>
              </ul>
              <p>This may include your name, email address, company name, phone number, project details, and any other information you choose to share.</p>
              <p>We also collect certain information automatically when you visit our website, such as your IP address, browser type, device information, referring URL, pages visited, and time spent on pages. We use cookies and similar tracking technologies for this purpose (see Section 5).</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver and improve our brand identity services</li>
                <li>Send project-related communications and updates</li>
                <li>Send marketing communications (only with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">3. Information Sharing & Disclosure</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Service providers:</strong> Third parties who perform services on our behalf (hosting, analytics, email delivery, payment processing), bound by confidentiality agreements</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or governmental request</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice)</li>
                <li><strong>With your consent:</strong> For any other purpose disclosed at the time of collection</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">4. Data Retention</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Project files and correspondence are typically retained for the duration of the engagement plus 7 years for legal and accounting purposes. Newsletter subscribers&rsquo; data is retained until unsubscribed.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">5. Cookies & Tracking Technologies</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Essential cookies:</strong> Required for site functionality (session management, security)</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics, Facebook Pixel)</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness</li>
              </ul>
              <p>You can manage cookie preferences through your browser settings. Disabling essential cookies may impair site functionality.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">6. Your Rights</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Access, correct, or delete your personal information</li>
                <li>Restrict or object to certain processing</li>
                <li>Data portability</li>
                <li>Withdraw consent (where processing is based on consent)</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:contact@logoamerica.us" className="text-taillight hover:text-tailglow underline">contact@logoamerica.us</a>. We will respond within 30 days as required by applicable law.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">7. Security</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">8. International Transfers</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Logo America is based in the United States. If you are accessing our site from outside the U.S., your information will be transferred to and processed in the United States, where data protection laws may differ from your jurisdiction. By using our site, you consent to this transfer.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">9. Children&rsquo;s Privacy</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">10. Changes to This Policy</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top will be revised accordingly. Material changes will be communicated via email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </div>
          </article>

          <article>
            <h2 className="display-md mb-4">11. Contact Us</h2>
            <div className="space-y-4 text-asphalt leading-relaxed">
              <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
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