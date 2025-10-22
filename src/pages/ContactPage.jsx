import { Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "../sections/ContactForm";

import FAQSection from "../sections/FAQSection";
import FloatingActions from "../sections/FloatingActions";

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Contact Form */}
        <div>
          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-xl shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16420137.357938174!2d-101.94898240342127!3d37.27557902458946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d05c4cbdc41%3A0xf8e8f6b3e9c89cfa!2sUnited%20States!5e0!3m2!1sen!2sus!4v1696898754476!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
        <section className=" pt-16  ">
          <FAQSection />
        </section>
      </section>
      <FloatingActions />
    </div>
  );
}
