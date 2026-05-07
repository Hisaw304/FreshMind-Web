// src/components/ContactForm.jsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

const SERVICE_ID =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_SERVICE_ID
    ? import.meta.env.VITE_EMAILJS_SERVICE_ID
    : "service_k6m0tid";
const TEMPLATE_ID =
  typeof import.meta !== "undefined" &&
  import.meta.env?.VITE_EMAILJS_TEMPLATE_ID
    ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    : "template_94664tq";
const PUBLIC_KEY =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_PUBLIC_KEY
    ? import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    : "lf-3xkiD4B2VEYmnQ";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const statusRef = useRef(null);

  useEffect(() => {
    if (!status) return;
    if (statusRef.current) {
      statusRef.current.focus({ preventScroll: true });
    }
    const t = setTimeout(() => setStatus(null), 5000);
    return () => clearTimeout(t);
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    // clear error for that field as user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validateForm() {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email?.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message?.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    if (formData.website && formData.website.trim().length > 0) {
      setErrors({ website: "Spam detected." });
      return;
    }

    const validation = validateForm();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: (formData.subject || "General Inquiry").trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "",
        website: "",
      });
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const subjects = ["Project Estimate", "Collaboration", "General Inquiry"];

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
            <h3>Send Us a Message</h3>

            <div className="fm-subjects">
              {subjects.map((subj) => {
                const isActive = formData.subject === subj;
                return (
                  <button
                    key={subj}
                    type="button"
                    onClick={() =>
                      setFormData((s) => ({ ...s, subject: subj }))
                    }
                    className={`fm-subject-btn ${isActive ? "active" : ""}`}
                  >
                    {subj}
                  </button>
                );
              })}
            </div>

            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: "none" }}
            />

            <Field
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Message"
              name="message"
              as="textarea"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />

            <button type="submit" disabled={loading} className="fm-submit">
              {loading ? (
                <Loader2 className="spin" size={18} />
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* RIGHT - IMAGE */}
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
                <span>fishlymind@gmail.com</span>
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
