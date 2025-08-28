import { Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "../sections/ContactForm";

import FAQSection from "../sections/FAQSection";

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg opacity-90">
          We’d love to hear from you. Reach out today and let’s talk about your
          project.
        </p>
      </section>

      {/* Contact Form + Extras */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-xl shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?...your_map_embed_here..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-slate-600 hover:text-orange-500 transition"
            >
              <Facebook size={28} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-orange-500 transition"
            >
              <Instagram size={28} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-orange-500 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Mini FAQ */}
        {/* Mini FAQ */}
        <section className="bg-white py-16 px-6">
          <FAQSection />
        </section>
      </section>
    </div>
  );
}
