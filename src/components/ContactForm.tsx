"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    businessName: "",
    businessNiche: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({
          firstName: "",
          email: "",
          contactNumber: "",
          businessName: "",
          businessNiche: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="lead-section">
          <div className="lead-grid">
            <div>
              <div className="eyebrow">Get Started</div>
              <h2>Let&apos;s build your brand</h2>
              <p className="sub">
                Tell us about your business and we&apos;ll follow up with a free
                consultation and initial direction ideas.
              </p>
            </div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-field">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jordan"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jordan@business.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="+1 555 000 0000"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field full">
                <label>Business Niche *</label>
                <input
                  type="text"
                  name="businessNiche"
                  placeholder="e.g. eCommerce, SaaS, Hospitality"
                  value={formData.businessNiche}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field full">
                <label>Tell us about your business (optional)</label>
                <textarea
                  name="message"
                  placeholder="Share a bit about your audience, competitors and style preferences..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field full">
                {submitStatus && (
                  <div
                    className={`form-message ${submitStatus.success ? "success" : "error"}`}
                    role="alert"
                  >
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn lead-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
