"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="logo logo-img-wrap" aria-label="Logoamerica.us — home">
          <Image
            src="/Logo-new.png"
            alt="LogoAmerica"
            width={168}
            height={92}
            className="logo-img"
            priority
          />
        </a>
        <ul className="nav-links">
          {/* <li><a href="#portfolio">Portfolio</a></li> */}
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="tel:+12819539004" className="btn btn-primary btn-sm">+1 (281) 953 9004</a>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
