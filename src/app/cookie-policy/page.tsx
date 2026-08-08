import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — LogoAmerica",
  description: "Learn how LogoAmerica uses cookies and tracking technologies.",
};

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <section className="section">
          <div className="wrap">
            <div className="policy-container">
              <span className="eyebrow">Legal</span>
              <h1 className="policy-title">Cookie Policy</h1>
              <p className="policy-updated">Last updated: August 8, 2026</p>

              <div className="policy-content">
                <section>
                  <h2>1. What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile
                    device when you visit a website. They are widely used to make websites work
                    more efficiently and to provide information to website owners. Cookies can be
                    &quot;persistent&quot; (remaining on your device until deleted) or
                    &quot;session-based&quot; (deleted when you close your browser).
                  </p>
                </section>

                <section>
                  <h2>2. How We Use Cookies</h2>
                  <p>
                    We use cookies to improve your experience on our website and to understand
                    how visitors interact with our content. Specifically, we use cookies to:
                  </p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you navigate through our site</li>
                    <li>Analyze site traffic and usage patterns</li>
                    <li>Improve our website performance and functionality</li>
                    <li>Detect and prevent fraudulent activity</li>
                  </ul>
                </section>

                <section>
                  <h2>3. Types of Cookies We Use</h2>
                  <h3>Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable
                    core functionality such as security, page navigation, and access to secure
                    areas. You cannot opt out of these cookies as the website would not work
                    properly without them.
                  </p>

                  <h3>Analytics Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can measure
                    and improve the performance of our site. They help us understand which pages
                    are most and least popular and how visitors move around the site.
                  </p>

                  <h3>Functionality Cookies</h3>
                  <p>
                    These cookies enable enhanced functionality and personalization, such as
                    remembering your preferences and choices you make on the website. They may be
                    set by us or by third-party providers whose services we have added to our
                    pages.
                  </p>

                  <h3>Marketing Cookies</h3>
                  <p>
                    These cookies may be set through our site by our advertising partners. They
                    may be used to build a profile of your interests and show you relevant
                    advertisements on other sites. They do not directly store personal
                    information but are based on uniquely identifying your browser and device.
                  </p>
                </section>

                <section>
                  <h2>4. Third-Party Cookies</h2>
                  <p>
                    Some cookies are placed by third-party services that appear on our pages. We
                    use third-party analytics services such as Google Analytics to help us
                    understand how our website is used. These third parties may use cookies in
                    accordance with their own privacy policies.
                  </p>
                  <p>
                    Google Analytics collects information anonymously and reports website trends
                    without identifying individual visitors. You can opt out of Google Analytics
                    by installing the{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2>5. Managing Cookies</h2>
                  <p>
                    Most web browsers allow you to control cookies through their settings. You
                    can typically find these settings in the &quot;Options&quot; or
                    &quot;Preferences&quot; menu of your browser. You can set your browser to:
                  </p>
                  <ul>
                    <li>
                      <strong>Accept all cookies:</strong> This allows all cookies to be placed
                      on your device.
                    </li>
                    <li>
                      <strong>Notify you when a cookie is set:</strong> You can choose whether
                      to accept each cookie individually.
                    </li>
                    <li>
                      <strong>Block all cookies:</strong> This may prevent some features of our
                      website from working properly.
                    </li>
                    <li>
                      <strong>Delete cookies:</strong> You can delete cookies that have already
                      been set on your device.
                    </li>
                  </ul>
                  <p>
                    Please note that blocking or deleting cookies may affect the functionality of
                    our website and your user experience.
                  </p>
                </section>

                <section>
                  <h2>6. Your Choices</h2>
                  <p>
                    In addition to browser-based cookie controls, you may encounter other tracking
                    technologies on our website. You can opt out of personalized advertising by
                    visiting the following resources:
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.networkadvertising.org/choices/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Network Advertising Initiative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youronlinechoices.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Your Online Choices
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>7. Changes to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in
                    technology, legislation, or our business operations. We will post any changes
                    on this page and update the &quot;Last updated&quot; date. We encourage you
                    to review this policy periodically.
                  </p>
                </section>

                <section>
                  <h2>8. Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
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
