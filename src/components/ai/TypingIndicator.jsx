import { Sparkles } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="fm-ai-message bot">
      <div className="fm-ai-message-avatar">
        <Sparkles size={18} />
      </div>

      <div className="fm-ai-message-content">
        <div className="fm-ai-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="fm-ai-message-footer">
          <span>FreshMind AI is typing...</span>
        </div>
      </div>
    </div>
  );
}
