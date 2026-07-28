import { MessageCircle, X } from "lucide-react";

export default function AIButton({ open, setOpen }) {
  return (
    <div className="fm-ai-launcher-wrapper">
      {!open && (
        <div className="fm-ai-tooltip">Need help? Chat with FreshMind AI</div>
      )}

      <button
        className={`fm-ai-launcher ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open AI Chat"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}

        {!open && <span className="fm-ai-launcher-ping"></span>}
      </button>
    </div>
  );
}
