import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export default function ChatWidget({
  whatsapp = "18608213853",
  email = "hello@yourdomain.com",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOAT BUTTON */}
      {!open && (
        <button className="fm-chat-trigger" onClick={() => setOpen(true)}>
          <div className="fm-chat-icon">
            <MessageCircle size={18} />
            <span className="fm-chat-dot"></span>
          </div>
          <span>Chat with us</span>
        </button>
      )}

      {/* PANEL */}
      {open && (
        <div className="fm-chat-panel">
          {/* HEADER */}
          <div className="fm-chat-header">
            <div className="fm-chat-title">
              <MessageCircle size={16} />
              <span>Chat</span>
            </div>

            <button className="fm-chat-close" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          {/* BODY */}
          <div className="fm-chat-body">
            <p className="fm-chat-hi">Hi</p>
            <p className="fm-chat-sub">How can we help you?</p>

            <div className="fm-chat-status">
              <span className="fm-status-dot"></span>
              We are online
            </div>

            {/* ACTIONS */}
            <div className="fm-chat-actions">
              <a
                href={`https://wa.me/${whatsapp}?text=Hi! I'm interested in your services`}
                target="_blank"
                rel="noopener noreferrer"
                className="fm-chat-btn fm-chat-whatsapp"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>

              <a href={`mailto:${email}`} className="fm-chat-btn fm-chat-email">
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
