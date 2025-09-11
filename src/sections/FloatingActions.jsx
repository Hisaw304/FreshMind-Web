import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FloatingActions({
  phone = "+18608213853",
  whatsapp = "18608213853",
  email = "fishlymind@gmail.com",
}) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-row gap-4">
      {/* Call */}
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#3A2525] text-white shadow-lg hover:bg-[#5c3a3a] transition"
      >
        <Phone size={20} />
        <span className="font-medium">Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}?text=Hey%2C%20I%27d%20love%20to%20know%20more%20about%20your%20services!`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1da851] transition"
      >
        <MessageCircle size={20} />
        <span className="font-medium">WhatsApp</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
      >
        <Mail size={20} />
        <span className="font-medium">Email</span>
      </a>
    </div>
  );
}
