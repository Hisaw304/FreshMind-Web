import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Building2,
  DollarSign,
  Send,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Phone,
} from "lucide-react";

export default function LeadCapture({ estimate = "", onBack, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget:
      estimate && estimate.min
        ? `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`
        : "",

    project: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (estimate?.min) {
      setForm((prev) => ({
        ...prev,
        budget: `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`,
      }));
    }
  }, [estimate]);
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      if (onSubmit) {
        onSubmit(form);
      }

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        project: "",
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fm-lead">
      {onBack && (
        <button className="fm-ai-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          Back
        </button>
      )}
      <div className="fm-lead-header">
        <h3>Let's Turn This Estimate Into A Project</h3>

        <p>
          Complete the short form below and we'll send you a detailed proposal
          tailored to your business.
        </p>
      </div>

      {submitted ? (
        <div className="fm-lead-success">
          <CheckCircle2 size={60} />

          <h3>Request Sent Successfully!</h3>

          <p>
            Thank you for contacting FreshMind.
            <br />
            We've received your project details and will review everything
            carefully.
          </p>

          <p>
            A member of our team will contact you within{" "}
            <strong>24 hours</strong> to discuss your project and provide a
            detailed quote.
          </p>

          <button className="fm-lead-btn" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="fm-lead-form" onSubmit={handleSubmit}>
          {/* Full Name */}

          <div className="fm-lead-field">
            <User size={18} />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}

          <div className="fm-lead-field">
            <Mail size={18} />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone / WhatsApp */}

          <div className="fm-lead-field">
            <Phone size={18} />

            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company */}

          <div className="fm-lead-field">
            <Building2 size={18} />

            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          {/* Estimated Budget */}

          <div className="fm-lead-field fm-lead-select">
            <DollarSign size={18} />

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
            >
              {estimate?.min && (
                <option
                  value={`$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`}
                >
                  Recommended: ${estimate.min.toLocaleString()} - $
                  {estimate.max.toLocaleString()}
                </option>
              )}

              <option value="$1,000 - $2,500">$1,000 - $2,500</option>
              <option value="$2,500 - $5,000">$2,500 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>

          {/* Project Description */}

          <div className="fm-lead-textarea">
            <FileText size={18} />

            <textarea
              rows="5"
              name="project"
              placeholder="Tell us about your project, your goals, and any features you'd like..."
              value={form.project}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="fm-lead-btn" disabled={loading}>
            <Send size={18} />

            {loading ? "Sending..." : "Request My Quote"}
          </button>
        </form>
      )}
    </div>
  );
}
