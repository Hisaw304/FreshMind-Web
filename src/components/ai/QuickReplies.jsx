import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickReplies({ replies = [], sendMessage, setView }) {
  const navigate = useNavigate();

  if (!replies.length) return null;

  const handleReply = (reply) => {
    switch (reply) {
      case "Contact Us":
        navigate("/contact");
        break;

      case "Email":
        window.location.href = "mailto:freshmindwebagency@gmail.com";
        break;

      case "WhatsApp":
        window.open("https://wa.me/18608213853/", "_blank");
        break;

      case "Schedule Meeting":
      case "Book a Call":
        navigate("/contact");
        break;

      case "Recent Projects":
        navigate("/industries");
        break;

      case "Case Studies":
        navigate("/industries");
        break;

      case "Industries":
        navigate("/industries");
        break;

      case "Get Instant Estimate":
        window.dispatchEvent(new CustomEvent("openQuoteEstimator"));
        break;
      case "Contact Support":
        setView("lead");
        break;

      case "Request Proposal":
        window.dispatchEvent(new CustomEvent("openLeadCapture"));
        break;

      default:
        sendMessage(reply);
    }
  };

  return (
    <div className="fm-ai-quick-replies">
      {replies.map((reply, index) => (
        <button
          key={index}
          type="button"
          className="fm-ai-quick-reply"
          onClick={() => handleReply(reply)}
        >
          <span>{reply}</span>
          <ArrowUpRight size={14} />
        </button>
      ))}
    </div>
  );
}
