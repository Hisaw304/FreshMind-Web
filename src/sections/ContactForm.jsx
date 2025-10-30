// src/components/ContactForm.jsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

/**
 * IMPORTANT:
 * - Put your EmailJS keys into environment variables for production.
 *   For Vite: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 *   (fallbacks are provided so the component still works in dev if you haven't set them.)
 */

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
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});
  const statusRef = useRef(null);

  // Auto-dismiss status after 5s and focus it for screen readers when it appears
  useEffect(() => {
    if (!status) return;
    if (statusRef.current) {
      // focus the banner so SR reads it
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
    // NOTE: don't validate honeypot; presence is spam check in submit.
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    // honeypot spam check: if website has value — treat as spam and silently drop
    if (formData.website && formData.website.trim().length > 0) {
      // silent fail or set a soft error; here we set an error but do not send
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
      // template params — keep keys small and explicit
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
    <section className="bg-gradient-to-br py-10 from-slate-50 to-slate-100 rounded-2xl shadow-xl">
      <div className="max-w-6xl mx-auto mb-14 px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Let’s <span className="text-orange-500">Build</span> Something Great
        </h2>
        <p className="text-slate-600">
          Have questions or ready to start your next project? Reach out using
          the form, or contact us directly through the details below.
        </p>
      </div>
      <div className="px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <ContactInfo
              icon={<Phone className="text-orange-500" />}
              text="+1 (860) 821-3853"
            />
            <ContactInfo
              icon={<Mail className="text-orange-500" />}
              text="fishlymind@gmail.com"
            />
            <ContactInfo
              icon={<MapPin className="text-orange-500" />}
              text="123 Main Street, Laconia, NH"
            />
          </div>

          <img
            src="/images/office5.jpg"
            alt="Office"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Right Column - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 sm:space-y-8"
          noValidate
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            Send Us a Message
          </h3>

          {/* Subject Pills */}
          <div className="flex flex-wrap gap-3">
            {subjects.map((subj) => {
              const isActive = formData.subject === subj;
              return (
                <button
                  key={subj}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFormData((s) => ({ ...s, subject: subj }))}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                  }`}
                >
                  {subj}
                </button>
              );
            })}
          </div>

          {/* Hidden honeypot field */}
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="website">Do not fill</label>
            <input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          {/* Name */}
          <Field
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="e.g. Marie Curie"
            autoComplete="name"
          />

          {/* Email */}
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="e.g. marie@example.com"
            autoComplete="email"
          />

          {/* Message (textarea) */}
          <Field
            label="Message"
            name="message"
            as="textarea"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell us about your project..."
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex justify-center items-center disabled:opacity-70"
            aria-disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Status Banners (explicit classes so Tailwind sees them) */}
          {status === "success" && (
            <div
              ref={statusRef}
              tabIndex={-1}
              role="status"
              className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl shadow-sm flex items-center gap-3"
            >
              <CheckCircle2 className="text-green-500" />
              <span>Message sent successfully! We’ll be in touch shortly.</span>
            </div>
          )}

          {status === "error" && (
            <div
              ref={statusRef}
              tabIndex={-1}
              role="status"
              className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl shadow-sm flex items-center gap-3"
            >
              <XCircle className="text-red-500" />
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ========== helper subcomponents ========== */

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
      <span>{icon}</span>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

/* Field - flexible input / textarea wrapper */
function Field({ label, name, type = "text", as = "input", error, ...props }) {
  const Comp = as === "textarea" ? "textarea" : "input";
  const inputCommon = {
    id: name,
    name,
    onChange: props.onChange,
    value: props.value,
    className:
      "w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 border " +
      (error ? "border-red-500" : "border-slate-300"),
    placeholder: props.placeholder || "",
    ...("autoComplete" in props ? { autoComplete: props.autoComplete } : {}),
  };

  return (
    <div>
      <label htmlFor={name} className="block font-medium text-slate-700 mb-1">
        {label}
      </label>

      {Comp === "input" ? (
        <input type={type} {...inputCommon} />
      ) : (
        <textarea rows={props.rows || 4} {...inputCommon} />
      )}

      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
