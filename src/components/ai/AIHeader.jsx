import { Sparkles, Minimize2 } from "lucide-react";

export default function AIHeader({ setOpen }) {
  return (
    <div className="fm-ai-header">
      <div className="fm-ai-header-left">
        <div className="fm-ai-avatar">
          <Sparkles size={20} />
        </div>

        <div className="fm-ai-header-info">
          <h4>FreshMind AI</h4>

          <div className="fm-ai-status">
            <span className="fm-ai-status-dot"></span>

            <p>Online • Usually replies instantly</p>
          </div>
        </div>
      </div>

      <button
        className="fm-ai-header-btn"
        onClick={() => setOpen(false)}
        aria-label="Minimize Chat"
      >
        <Minimize2 size={18} />
      </button>
    </div>
  );
}
