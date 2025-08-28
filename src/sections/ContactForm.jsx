import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_k6m0tid", // Service ID
        "template_94664tq", // Template ID
        {
          from_name: formData.name, // matches {{from_name}}
          from_email: formData.email, // matches {{from_email}}
          message: formData.message, // matches {{message}}
        },
        "lf-3xkiD4B2VEYmnQ" // Public Key
      )

      .then(() => {
        setSuccess(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
      });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-800">
            Let’s Talk About Your Project
          </h2>
          <p className="text-slate-600">
            Have questions or want to start your next project? Fill out the form
            or reach us directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                info@yourdomain.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span className="text-slate-700 font-medium">
                123 Main Street, Laconia, NH
              </span>
            </div>
          </div>

          {/* Optional Contact Image */}
          <img
            src="/images/office5.jpg"
            alt="Office"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white  rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Send Us a Message
          </h3>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 font-medium text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
