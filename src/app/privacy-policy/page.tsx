import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — LogoAmerica",
  description: "Learn how LogoAmerica collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <section className="section">
          <div className="wrap">
            <div className="policy-container">
              <span className="eyebrow">Legal</span>
              <h1 className="policy-title">Privacy Policy</h1>
              <p className="policy-updated">Last updated: August 8, 2026</p>

              <div className="policy-content">
                <section>
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to LogoAmerica (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your
                    personal information and your right to privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information
                    when you visit our website and use our services.
                  </p>
                  <p>
                    By accessing or using our website, you agree to the collection and use of
                    information in accordance with this policy. If you do not agree with the
                    terms of this policy, please do not access the site.
                  </p>
                </section>

                <section>
                  <h2>2. Information We Collect</h2>
                  <h3>Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when
                    you fill out a contact form, request a quote, or otherwise communicate with
                    us. This information may include:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Project details and preferences</li>
                  </ul>

                  <h3>Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information
                    about your device, including:
                  </p>
                  <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring URLs and pages visited</li>
                    <li>Date and time of your visit</li>
                  </ul>
                </section>

                <section>
                  <h2>3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, operate, and maintain our website and services</li>
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information, such as updates and security alerts</li>
                    <li>Improve and personalize your experience on our website</li>
                    <li>Monitor and analyze usage trends to improve functionality</li>
                    <li>Protect against fraudulent or unauthorized activity</li>
                  </ul>
                </section>

                <section>
                  <h2>4. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience
                    on our website. Cookies are small data files stored on your device that help
                    us understand how you use our site. You can control the use of cookies at the
                    browser level. For more details, please refer to our{" "}
                    <a href="/cookie-policy">Cookie Policy</a>.
                  </p>
                </section>

                <section>
                  <h2>5. How We Share Your Information</h2>
                  <p>
                    We do not sell or rent your personal information to third parties. We may
                    share your information only in the following situations:
                  </p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> We may share your data with third-party
                      vendors who perform services on our behalf, such as payment processing,
                      hosting, and analytics.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if
                      required to do so by law or in response to valid requests by public
                      authorities.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with a merger,
                      acquisition, or sale of assets, your information may be transferred as
                      part of that transaction.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>6. Data Security</h2>
                  <p>
                    We implement commercially reasonable administrative, technical, and physical
                    security measures to protect your personal information. However, no method of
                    transmission over the Internet or electronic storage is 100% secure, and we
                    cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2>7. Data Retention</h2>
                  <p>
                    We will retain your personal information only for as long as is necessary for
                    the purposes outlined in this policy, unless a longer retention period is
                    required or permitted by law. When we no longer need your information, we will
                    securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2>8. Your Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal
                    information, including:
                  </p>
                  <ul>
                    <li>The right to access, update, or delete your information</li>
                    <li>The right to object to the processing of your data</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent at any time</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information below.
                  </p>
                </section>

                <section>
                  <h2>9. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services that are not
                    operated by us. We are not responsible for the privacy practices or content of
                    these third-party sites. We encourage you to review the privacy policies of
                    any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2>10. Children&apos;s Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 13. We do not
                    knowingly collect personal information from children under 13. If you become
                    aware that a child has provided us with personal information, please contact
                    us and we will take steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2>11. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of
                    any changes by posting the new policy on this page and updating the
                    &quot;Last updated&quot; date. Your continued use of our website after any
                    changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2>12. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please
                    contact us at:
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
