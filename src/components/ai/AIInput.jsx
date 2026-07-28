import { useState, useRef, useEffect } from "react";
import { SendHorizontal, Paperclip, Mic } from "lucide-react";

export default function AIInput({ sendMessage, typing }) {
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "24px";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [text]);

  const handleSubmit = () => {
    const value = text.trim();

    if (!value || typing) return;

    sendMessage(value);

    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "24px";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      handleSubmit();
    }
  };

  return (
    <div className="fm-ai-input-wrapper">
      <div className="fm-ai-input-box">
        <button
          type="button"
          className="fm-ai-input-icon"
          disabled
          title="Coming Soon"
        >
          <Paperclip size={18} />
        </button>

        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          placeholder="Ask FreshMind AI anything..."
          onChange={(e) => {
            if (e.target.value.length <= 2000) {
              setText(e.target.value);
            }
          }}
          onKeyDown={handleKeyDown}
        />

        <button className="fm-ai-input-icon" disabled title="Coming Soon">
          <Mic size={18} />
        </button>

        <button
          type="button"
          className={`fm-ai-send ${text.trim() ? "active" : ""}`}
          onClick={handleSubmit}
          disabled={typing || !text.trim()}
        >
          <SendHorizontal size={18} />
        </button>
      </div>

      <div className="fm-ai-input-footer">
        <span>Shift + Enter for a new line</span>

        <span>{text.length}/2000</span>
      </div>
    </div>
  );
}
