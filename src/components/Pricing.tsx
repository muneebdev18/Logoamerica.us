import { pricingPlans } from "@/data/content";

function CheckIcon({ popular }: { popular: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={popular ? "#FFFFFF" : "#8DA9C4"} strokeWidth="2">
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h4l2 6-2.5 1.5a11 11 0 0 0 5 5L14 14l6 2v4a2 2 0 0 1-2 2C9.4 22 2 14.6 2 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="aurora-light"><span className="a1"></span><span className="a2"></span></div>
      <div className="wrap">
        <div className="section-head center" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="eyebrow">Pricing</div>
          <h2>Packages for every stage</h2>
          <p>Transparent deliverables, no hidden fees. Choose the package that fits where your brand is right now.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`price-card ${plan.popular ? "popular" : ""}`}>
              {plan.badge && <div className="badge-price">{plan.badge}</div>}
              <h3>{plan.name}</h3>
              <div className="price-tag">{plan.tag}</div>
              <div className="price-big">
                <span className="price-currency">$</span>
                <span className="price-amount">{plan.price}</span>
                <span className="price-suffix">Only</span>
              </div>
              <div className="price-divider"></div>
              <div className="price-list-scroll">
                <ul className="price-list">
                  {plan.features.map((f, fi) => (
                    <li key={fi}><CheckIcon popular={plan.popular} />{f}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={`btn ${plan.popular ? "lead-submit" : "btn-ghost"}`}>Order Now</a>
              <div className="price-contact">
                <a href="tel:+13153550142" className="price-contact-item">
                  <PhoneIcon />+1 (315) 555-0142
                </a>
                <span className="price-contact-divider">|</span>
                <a href="#contact" className="price-contact-item">
                  <ChatIcon />Live Chat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
