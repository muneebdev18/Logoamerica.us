export default function LogoVsBranding() {
  return (
    <section className="section dark-section boxed" id="branding">
      <div className="aurora"><span className="a1"></span><span className="a2"></span><span className="a3"></span></div>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Logo vs. Branding</div>
          <h2>A great logo is the spark. Branding is the fire.</h2>
          <p>Most people use the words interchangeably — they aren&apos;t the same thing. Here&apos;s the distinction, and why our packages are built around both.</p>
        </div>
        <div className="compare-wrap">
          <div className="compare-card logo-card">
            <div className="eyebrow">The Mark</div>
            <h3>Logo</h3>
            <ul className="compare-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#8DA9C4" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Recognition</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#8DA9C4" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Identity</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#8DA9C4" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Symbol</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#8DA9C4" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>First Impression</li>
            </ul>
          </div>
          <div className="compare-card brand-card">
            <div className="eyebrow">The System</div>
            <h3>Branding</h3>
            <ul className="compare-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Customer Experience</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Brand Personality</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Voice</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Trust</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4L19 6" /></svg>Positioning</li>
            </ul>
          </div>
          <p className="compare-note">Your logo is one component of a complete brand identity — the entry point, not the whole story. That&apos;s why every package above Starter builds toward a full identity system, not just a mark.</p>
        </div>
      </div>
    </section>
  );
}
