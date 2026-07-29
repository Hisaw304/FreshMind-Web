import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",

    subject: "",

    budget: "",
    timeline: "",

    message: "",

    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const statusRef = useRef(null);

  useEffect(() => {
    if (!status) return;

    statusRef.current?.focus({ preventScroll: true });

    const timer = setTimeout(() => {
      setStatus(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject) newErrors.subject = "Please select a project type.";

    if (!formData.message.trim())
      newErrors.message = "Please tell us about your project.";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus(null);
    setErrors({});

    // Honeypot
    if (formData.website.trim()) return;

    const validation = validateForm();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        budget: "",
        timeline: "",
        message: "",
        website: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const subjects = [
    "New Website",
    "Website Redesign",
    "E-commerce Website",
    "Custom Web Application",
    "SEO & Digital Marketing",
    "General Inquiry",
  ];

  const budgetOptions = [
    "Under $1,000",
    "$1,000 - $2,000",
    "$2,000 - $3,500",
    "$3,500 - $6,000",
    "$6,000+",
    "Not Sure",
  ];

  const timelineOptions = [
    "ASAP",
    "2-4 Weeks",
    "1-2 Months",
    "3+ Months",
    "Flexible",
  ];

  return (
    <section id="contact" className="fm-contact">
      <div className="fm-contact-container">
        {/* HEADER */}
        <div className="fm-contact-header">
          <h2>
            Let’s <span>Build</span> Something Great
          </h2>
          <p>
            Have questions or ready to start your next project? Reach out using
            the form, or contact us directly through the details below.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-contact-grid">
          {/* LEFT - FORM */}
          <form onSubmit={handleSubmit} className="fm-contact-form" noValidate>
            <h3>Tell Us About Your Project</h3>

            <p>
              Complete the form below and we'll get back to you within one
              business day.
            </p>

            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: "none" }}
            />

            <div className="fm-subjects">
              {subjects.map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: subj,
                    }))
                  }
                  className={`fm-subject-btn ${
                    formData.subject === subj ? "active" : ""
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>

            {errors.subject && (
              <span className="fm-error">{errors.subject}</span>
            )}
            <div className="fm-form-grid">
              <Field
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Field
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />

              <Field
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <div className="fm-field">
                <label>Estimated Budget</label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget</option>

                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="fm-field">
                <label>Project Timeline</label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select Timeline</option>

                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Field
              label="Project Details"
              name="message"
              as="textarea"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />

            {status === "success" && (
              <div className="fm-success-message" ref={statusRef} tabIndex="-1">
                Thank you! Your inquiry has been sent successfully. We'll review
                your project and get back to you within 24 hours.
              </div>
            )}

            {status === "error" && (
              <div className="fm-error-message" ref={statusRef} tabIndex="-1">
                Sorry, something went wrong. Please try again in a few minutes.
              </div>
            )}
            <div className="fm-blog-home-footer">
              <button type="submit" disabled={loading} className="fm-submit">
                {loading ? (
                  <Loader2 className="spin" size={18} />
                ) : (
                  "Request Free Proposal"
                )}
              </button>
            </div>
          </form>

          {/* RIGHT - IMAGE */}

          <div className="fm-contact-right">
            <div className="fm-contact-visual">
              <img src="/images/office5.jpg" alt="Office" />

              <div className="fm-contact-card">
                <div className="fm-contact-item">
                  <div className="fm-icon-wrap">
                    <Phone size={16} />
                  </div>
                  <span>+1 (860) 821-3853</span>
                </div>

                <div className="fm-contact-item">
                  <div className="fm-icon-wrap">
                    <Mail size={16} />
                  </div>
                  <span>freshmindwebagency@gmail.com</span>
                </div>

                <div className="fm-contact-item">
                  <div className="fm-icon-wrap">
                    <MapPin size={16} />
                  </div>
                  <span>123 Main Street, Laconia, NH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="fm-contact-info">
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
}

function Field({ label, name, type = "text", as = "input", error, ...props }) {
  const Comp = as === "textarea" ? "textarea" : "input";

  return (
    <div className="fm-field">
      <label htmlFor={name}>{label}</label>

      <Comp id={name} name={name} {...props} />

      {error && <span className="fm-error">{error}</span>}
    </div>
  );
}
