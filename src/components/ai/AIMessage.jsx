import { Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

import MarkdownMessage from "./MarkdownMessage";
import QuickReplies from "./QuickReplies";

export default function AIMessage({ message, sendMessage, setView }) {
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message.text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`fm-ai-message ${message.sender === "user" ? "user" : "bot"}`}
    >
      {message.sender === "bot" && (
        <div className="fm-ai-message-avatar">
          <Sparkles size={18} />
        </div>
      )}

      <div className="fm-ai-message-content">
        <div className="fm-ai-bubble">
          <MarkdownMessage text={message.text} />
        </div>

        {/* Quick Replies */}

        {message.quickReplies?.length > 0 && (
          <QuickReplies
            replies={message.quickReplies}
            sendMessage={sendMessage}
            setView={setView}
          />
        )}

        {/* CTA Buttons */}

        {message.sender === "bot" && (
          <div className="fm-ai-actions">
            <button
              className="fm-ai-action-btn"
              onClick={() => setView("quote")}
            >
              Get Instant Estimate
            </button>

            <button
              className="fm-ai-action-btn secondary"
              onClick={() => setView("lead")}
            >
              Request Proposal
            </button>
          </div>
        )}

        <div className="fm-ai-message-footer">
          <span>{message.time}</span>

          {message.sender === "bot" && (
            <button
              onClick={copyMessage}
              className="fm-ai-copy-btn"
              title="Copy response"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
