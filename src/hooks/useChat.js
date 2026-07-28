import { useState } from "react";
import { chatbot } from "../utils/chatbot";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const response = chatbot(text);

      const botMessage = {
        sender: "bot",
        text: response.text,
        quickReplies: response.quickReplies,
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 800);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return {
    messages,
    typing,
    sendMessage,
    clearChat,
  };
}
