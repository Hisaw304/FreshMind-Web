// src/components/FloatingActions.jsx
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FloatingActions({
  phone = "+18608213853",
  whatsapp = "18608213853",
  email = "fishlymind@gmail.com",
}) {
  const actions = [
    { href: `tel:${phone}`, label: "Call", icon: <Phone size={18} /> },
    {
      href: `https://wa.me/${whatsapp}?text=Hey%2C%20I%27d%20love%20to%20know%20more%20about%20your%20services!`,
      label: "WhatsApp",
      icon: <MessageCircle size={18} />,
      external: true,
    },
    { href: `mailto:${email}`, label: "Email", icon: <Mail size={18} /> },
  ];

  return (
    /* outer fixed wrapper — do NOT set position:relative here */
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* relative container anchors the pointer elements */}
      <div className="floating-dock shadow-blink shadow-pointer--accent">
        {/* visual pointer layers (DOM elements = easier to debug) */}
        <span className="box-shadow-tail" aria-hidden />
        <span className="box-shadow-tint" aria-hidden />

        {/* actual dock — keep your Tailwind styles here */}
        <div
          className="
            dock-inner flex items-center gap-3 px-4 py-2
            rounded-2xl backdrop-blur-md
            bg-slate-900 border border-white/10
            shadow-xl
          "
          role="navigation"
          aria-label="Quick contact options"
        >
          {actions.map(({ href, label, icon, external }, idx) => (
            <a
              key={idx}
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              aria-label={label}
              className="
                group flex items-center gap-2 px-3 py-2 rounded-xl
                text-white hover:bg-white/10
                transition transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-[--accent-start]
              "
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {icon}
              </span>
              <span className="hidden sm:inline text-sm font-medium">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
