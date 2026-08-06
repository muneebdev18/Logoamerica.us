export default function FinalCta() {
  const starPath = "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z";

  return (
    <section className="final-cta-wrap">
      <div className="wrap">
        <div className="final-cta-card">
          <div className="eyebrow center" style={{ justifyContent: "center", margin: "0 auto 20px", color: "var(--violet-2)" }}>Ready When You Are</div>
          <h2>Ready to build a<br />memorable brand?</h2>
          <p>Let&apos;s talk about the identity your business needs — a logo, a full brand system, or both, built to make people remember you.</p>
          <a href="#contact" className="btn btn-primary">Book a Call
            <span className="final-cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
          </a>
        </div>
        <div className="trust-row">
          <div className="trust-item">
            <div className="trust-badge-row">
              <svg className="laurel" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div className="trust-badge-center">
                <div className="trust-name">Trustpilot</div>
                <div className="trust-stars">
                  {[0,1,2,3,4].map(i => <svg key={i} viewBox="0 0 24 24" fill="currentColor"><path d={starPath} /></svg>)}
                </div>
              </div>
              <svg className="laurel laurel-right" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </div>
            <div className="trust-sub">4.8 rating from 900+ reviews</div>
          </div>
          <div className="trust-item">
            <div className="trust-badge-row">
              <svg className="laurel" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div className="trust-badge-center">
                <div className="trust-name">DesignRush</div>
                <div className="trust-stars">
                  {[0,1,2,3,4].map(i => <svg key={i} viewBox="0 0 24 24" fill="currentColor"><path d={starPath} /></svg>)}
                </div>
              </div>
              <svg className="laurel laurel-right" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </div>
            <div className="trust-sub">Featured logo design agency</div>
          </div>
          <div className="trust-item">
            <div className="trust-badge-row">
              <svg className="laurel" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div className="trust-badge-center">
                <div className="trust-name">Bark Pro</div>
                <div className="trust-year">Verified 2022</div>
              </div>
              <svg className="laurel laurel-right" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </div>
            <div className="trust-sub">Verified professional</div>
          </div>
          <div className="trust-item">
            <div className="trust-badge-row">
              <svg className="laurel" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div className="trust-badge-center">
                <div className="trust-name">Horizon Award</div>
                <div className="trust-year">Silver 2025</div>
              </div>
              <svg className="laurel laurel-right" viewBox="0 0 40 100"><path d="M20 97 Q13 55 20 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </div>
            <div className="trust-sub">Silver winner, branding</div>
          </div>
        </div>
      </div>
    </section>
  );
}
