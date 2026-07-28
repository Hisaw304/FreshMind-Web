import { useEffect, useRef, useState } from "react";
import useChat from "../../hooks/useChat";

import AIHeader from "./AIHeader";
import AIMessage from "./AIMessage";
import AIInput from "./AIInput";
import TypingIndicator from "./TypingIndicator";
import SuggestedPrompts from "./SuggestedPrompts";

import QuoteEstimator from "./QuoteEstimator";
import LeadCapture from "./LeadCapture";

export default function AIChat({ open, setOpen }) {
  const { messages, typing, sendMessage } = useChat();

  const contentRef = useRef(null);
  const messagesEndRef = useRef(null);

  // chat | quote | lead
  const [view, setView] = useState("chat");

  const [estimate, setEstimate] = useState("");

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  // Scroll to top whenever changing views
  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [view]);

  return (
    <div className={`fm-ai-chat ${open ? "show" : ""}`}>
      <AIHeader setOpen={setOpen} view={view} setView={setView} />

      {/* ========================= */}
      {/* CHAT */}
      {/* ========================= */}

      {view === "chat" && (
        <>
          <div ref={contentRef} className="fm-ai-messages">
            {messages.length === 0 && (
              <>
                <div className="fm-ai-welcome">
                  <h3>👋 Welcome!</h3>

                  <p>I'm FreshMind AI.</p>

                  <span>
                    Ask me about website pricing, web design, development, SEO,
                    AI chatbots, our portfolio, or how we can help grow your
                    business.
                  </span>
                </div>

                <SuggestedPrompts sendMessage={sendMessage} />
              </>
            )}

            {messages.map((message, index) => (
              <AIMessage
                key={index}
                message={message}
                sendMessage={sendMessage}
                setView={setView}
              />
            ))}

            {typing && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          <AIInput sendMessage={sendMessage} typing={typing} />
        </>
      )}

      {/* ========================= */}
      {/* QUOTE ESTIMATOR */}
      {/* ========================= */}

      {view === "quote" && (
        <div ref={contentRef} className="fm-ai-messages">
          <QuoteEstimator
            onBack={() => setView("chat")}
            onContinue={(price) => {
              setEstimate(price);
              setView("lead");
            }}
          />
        </div>
      )}

      {/* ========================= */}
      {/* LEAD CAPTURE */}
      {/* ========================= */}

      {view === "lead" && (
        <div ref={contentRef} className="fm-ai-messages">
          <LeadCapture
            estimate={estimate}
            onBack={() => setView("quote")}
            onSubmit={(data) => {
              console.log(data);

              // Later we'll send this to your backend
            }}
          />
        </div>
      )}
    </div>
  );
}
