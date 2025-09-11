import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, CheckCircle2, XCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name.";
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_k6m0tid", // Service ID
        "template_94664tq", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "General Inquiry",
          message: formData.message,
        },
        "lf-3xkiD4B2VEYmnQ" // Public Key
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        setFormData({ name: "", email: "", message: "", subject: "" });
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  const subjects = ["Project Estimate", "Collaboration", "General Inquiry"];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-800">
            Let’s <span className="text-orange-500">Build</span> Something Great
          </h2>
          <p className="text-slate-600">
            Have questions or ready to start your next project? Reach out using
            the form, or contact us directly through the details below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <Phone className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                +1 (860) 821-3853
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <Mail className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                fishlymind@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <MapPin className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                123 Main Street, Laconia, NH
              </span>
            </div>
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
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            Send Us a Message
          </h3>

          {/* Subject Pills */}
          <div className="flex flex-wrap gap-3">
            {subjects.map((subj) => (
              <button
                type="button"
                key={subj}
                onClick={() => setFormData({ ...formData, subject: subj })}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  formData.subject === subj
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="e.g. Marie Curie"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="e.g. marie@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex justify-center"
          >
            {loading ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Status Banners */}
          {status === "success" && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl shadow-sm flex items-center gap-3 animate-slide-down">
              <CheckCircle2 className="text-green-500" />
              <span>Message sent successfully! We’ll be in touch shortly.</span>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl shadow-sm flex items-center gap-3 animate-slide-down">
              <XCircle className="text-red-500" />
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
