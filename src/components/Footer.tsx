"use client";

import { useState } from "react";
import Image from "next/image";
import { footerServices, paymentMethods } from "@/data/content";

export default function Footer() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <footer>
      <div className="aurora"><span className="a1"></span><span className="a2"></span></div>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="logo logo-img-wrap">
              <Image src="/logo_america_2.png" alt="LogoAmerica" width={304} height={76} className="logo-img-footer" />
            </div>
            <p className="footer-tag">Custom logo design and brand identity for startups, businesses, creators and eCommerce brands.</p>
            <h5 style={{ marginTop: 32 }}>Drop us a line</h5>
            <div className="footer-email-phone">
            <a href="mailto:hello@logoamerica.us" className="footer-email">
              <span>hello@logoamerica.us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a1 1 0 0 1 1-1h9" /></svg>
            </a>
            <a href="tel:+12819539004" className="footer-email" style={{ marginTop: 10 }}>(281) 953 9004
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Packages</h5>
            <ul>
              <li><a href="#pricing">Basic Logo Package</a></li>
              <li><a href="#pricing">Advanced Standard Logo</a></li>
              <li><a href="#pricing">Elite Premium Logo</a></li>
              <li><a href="#pricing">Legendary Ultimate Logo</a></li>
              <li><a href="#pricing">Logo + Website Combo</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="pay-grid">
          {paymentMethods.map((pm, i) => (
            <div key={i} className="pay-card">
              <div className="pay-icon">
                <svg viewBox="0 0 24 24" fill="none" dangerouslySetInnerHTML={{ __html: pm.icon }} />
              </div>
              <div className="pay-name">{pm.name}</div>
              <div className="pay-sub">{pm.sub}</div>
            </div>
          ))}
        </div>

        <button
          className={`footer-accordion ${accordionOpen ? "open" : ""}`}
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chev"><path d="M9 6l6 6-6 6" /></svg>
            {accordionOpen ? " Show fewer services" : " Show more services"}
          </span>
        </button>
        <div className="footer-accordion-body" style={accordionOpen ? { maxHeight: "600px" } : undefined}>
          <div className="footer-accordion-grid">
            {footerServices.map((s, i) => (
              <a key={i} href="#">{s}</a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 10v7" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1z" /></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l16 16M20 4L4 20" /></svg></a>
          </div>
          <div className="footer-copy">&copy; 2026 Logoamerica.us All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
