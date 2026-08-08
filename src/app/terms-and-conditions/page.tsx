import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — LogoAmerica",
  description: "Review the terms and conditions governing your use of LogoAmerica services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <section className="section">
          <div className="wrap">
            <div className="policy-container">
              <span className="eyebrow">Legal</span>
              <h1 className="policy-title">Terms &amp; Conditions</h1>
              <p className="policy-updated">Last updated: August 8, 2026</p>

              <div className="policy-content">
                <section>
                  <h2>1. Agreement to Terms</h2>
                  <p>
                    By accessing or using the LogoAmerica website and services, you agree to be
                    bound by these Terms and Conditions. If you do not agree with any part of
                    these terms, you may not access our website or use our services.
                  </p>
                </section>

                <section>
                  <h2>2. Services</h2>
                  <p>
                    LogoAmerica provides professional logo design and brand identity services.
                    The specific details, deliverables, timelines, and pricing for each service
                    are described in the respective package descriptions on our website or as
                    agreed upon in a separate written proposal or contract.
                  </p>
                </section>

                <section>
                  <h2>3. Ordering and Payment</h2>
                  <h3>Orders</h3>
                  <p>
                    When you place an order for our services, you are making an offer to engage
                    our services. We reserve the right to accept or decline any order at our
                    discretion. An order is considered accepted only upon our written confirmation
                    or commencement of work.
                  </p>

                  <h3>Pricing</h3>
                  <p>
                    All prices listed on our website are in US Dollars (USD) unless otherwise
                    stated. We reserve the right to modify pricing at any time without prior
                    notice. Any changes in pricing will not affect orders that have already been
                    confirmed.
                  </p>

                  <h3>Payment Terms</h3>
                  <p>
                    Full payment is required before work begins on your project unless otherwise
                    agreed upon in writing. We accept payment through the methods listed on our
                    website. Late payments may result in delays to your project or suspension of
                    services.
                  </p>
                </section>

                <section>
                  <h2>4. Revisions and Deliverables</h2>
                  <p>
                    Each package includes a specific number of revision rounds as outlined in the
                    package description. Additional revisions beyond the included rounds may
                    incur additional charges. Revision requests must be submitted in writing and
                    within the timeframe specified in your project agreement.
                  </p>
                  <p>
                    Final deliverables will be provided in the file formats specified for your
                    chosen package. Ownership of the final design and associated files transfers
                    to you upon full payment.
                  </p>
                </section>

                <section>
                  <h2>5. Intellectual Property</h2>
                  <h3>Your Content</h3>
                  <p>
                    You retain full ownership of any content, materials, or intellectual property
                    you provide to us for use in your project. By providing such materials, you
                    grant us a non-exclusive license to use them solely for the purpose of
                    completing your project.
                  </p>

                  <h3>Our Work</h3>
                  <p>
                    Upon full payment, you receive full ownership and all rights to the final
                    deliverables. We may display completed work in our portfolio and marketing
                    materials unless you request otherwise in writing.
                  </p>
                </section>

                <section>
                  <h2>6. Cancellation and Refunds</h2>
                  <p>
                    You may cancel your order before work has begun for a full refund. Once work
                    has commenced, cancellations may be subject to a fee based on the work
                    completed. Refund requests will be evaluated on a case-by-case basis.
                  </p>
                  <p>
                    If you are dissatisfied with the initial concepts provided, you may request
                    a full refund before proceeding with revisions, subject to the terms outlined
                    in your project agreement.
                  </p>
                </section>

                <section>
                  <h2>7. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, LogoAmerica shall not be liable for
                    any indirect, incidental, special, consequential, or punitive damages arising
                    from your use of our services or website. Our total liability for any claim
                    arising from or related to our services shall not exceed the amount you paid
                    for those services.
                  </p>
                </section>

                <section>
                  <h2>8. Disclaimer of Warranties</h2>
                  <p>
                    Our website and services are provided on an &quot;as is&quot; and &quot;as
                    available&quot; basis. We make no warranties, expressed or implied,
                    regarding the reliability, accuracy, or availability of our website or
                    services. We do not guarantee that our services will meet your specific
                    requirements or that results will be uninterrupted or error-free.
                  </p>
                </section>

                <section>
                  <h2>9. Privacy</h2>
                  <p>
                    Your use of our website and services is also governed by our{" "}
                    <a href="/privacy-policy">Privacy Policy</a>, which describes how we
                    collect, use, and protect your personal information. By using our services,
                    you consent to the practices described in the Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2>10. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not
                    responsible for the content, policies, or practices of any third-party sites.
                    Your interactions with third-party websites are governed by their respective
                    terms and conditions.
                  </p>
                </section>

                <section>
                  <h2>11. Governing Law</h2>
                  <p>
                    These Terms and Conditions shall be governed by and construed in accordance
                    with the laws of the United States and the State of Texas, without regard to
                    conflict of law principles. Any disputes arising under these terms shall be
                    resolved in the courts of competent jurisdiction in Texas.
                  </p>
                </section>

                <section>
                  <h2>12. Changes to These Terms</h2>
                  <p>
                    We reserve the right to update or modify these Terms and Conditions at any
                    time without prior notice. Your continued use of our website or services
                    following any changes constitutes acceptance of the updated terms. We
                    encourage you to review these terms periodically.
                  </p>
                </section>

                <section>
                  <h2>13. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact
                    us at:
                  </p>
                  <ul>
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:hello@logoamerica.us">hello@logoamerica.us</a>
                    </li>
                    <li>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+12819539004">(281) 953 9004</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
