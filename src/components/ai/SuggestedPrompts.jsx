const prompts = [
  {
    icon: "💰",
    text: "Website Pricing",
  },
  {
    icon: "🏡",
    text: "Real Estate Website",
  },
  {
    icon: "🤖",
    text: "AI Chatbot Integration",
  },
  {
    icon: "📈",
    text: "SEO Services",
  },
  {
    icon: "💻",
    text: "View Portfolio",
  },
  {
    icon: "📅",
    text: "Book Consultation",
  },
];

export default function SuggestedPrompts({ sendMessage }) {
  return (
    <div className="fm-ai-prompts">
      <p className="fm-ai-prompts-title">Popular Questions</p>

      <div className="fm-ai-prompts-grid">
        {prompts.map((prompt) => (
          <button
            key={prompt.text}
            className="fm-ai-prompt-card"
            onClick={() => sendMessage(prompt.text)}
          >
            <span className="fm-ai-prompt-icon">{prompt.icon}</span>

            <span className="fm-ai-prompt-text">{prompt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
