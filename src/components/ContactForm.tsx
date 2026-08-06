"use client";

export default function ContactForm() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="lead-section">
          <div className="lead-grid">
            <div>
              <div className="eyebrow">Get Started</div>
              <h2>Let&apos;s build your brand</h2>
              <p className="sub">Tell us about your business and we&apos;ll follow up with a free consultation and initial direction ideas.</p>
            </div>
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field"><label>First Name *</label><input type="text" placeholder="Jordan" required /></div>
              <div className="form-field"><label>Email Address *</label><input type="email" placeholder="jordan@business.com" required /></div>
              <div className="form-field"><label>Contact Number</label><input type="tel" placeholder="+1 555 000 0000" /></div>
              <div className="form-field"><label>Business Name *</label><input type="text" placeholder="Your business name" required /></div>
              <div className="form-field full"><label>Business Niche *</label><input type="text" placeholder="e.g. eCommerce, SaaS, Hospitality" required /></div>
              <div className="form-field full"><label>Tell us about your business (optional)</label><textarea placeholder="Share a bit about your audience, competitors and style preferences..."></textarea></div>
              <div className="form-field full">
                <button type="submit" className="btn lead-submit">Get Free Consultation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
