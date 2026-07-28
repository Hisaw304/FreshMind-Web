// src/utils/chatbot.js

import { knowledge } from "../data/knowledge";
import { getQuickReplies } from "../data/quickReplies";

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function findKnowledge(message) {
  const q = normalize(message);
  // ===========================
  // PRICING DETAILS
  // ===========================

  if (q.includes("business website")) {
    return knowledge.pricingDetails.businessWebsite;
  }

  if (q.includes("real estate website")) {
    return knowledge.pricingDetails.realEstate;
  }

  if (q.includes("law firm website")) {
    return knowledge.pricingDetails.lawFirm;
  }

  if (
    q.includes("e-commerce") ||
    q.includes("ecommerce") ||
    q.includes("store")
  ) {
    return knowledge.pricingDetails.ecommerce;
  }

  if (q.includes("admin dashboard")) {
    return knowledge.pricingDetails.adminDashboard;
  }

  if (q.includes("ai chatbot")) {
    return knowledge.pricingDetails.aiChatbot;
  }
  // ===========================
  // PRICING
  // ===========================

  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("quote") ||
    q.includes("budget")
  ) {
    return knowledge.pricing;
  }

  // ===========================
  // SERVICES
  // ===========================

  if (q.includes("service") || q.includes("offer") || q.includes("build")) {
    return knowledge.services;
  }

  // ===========================
  // INDUSTRIES
  // ===========================

  if (
    q.includes("industry") ||
    q.includes("real estate") ||
    q.includes("law") ||
    q.includes("restaurant") ||
    q.includes("healthcare") ||
    q.includes("construction") ||
    q.includes("startup") ||
    q.includes("coach") ||
    q.includes("ecommerce")
  ) {
    return knowledge.industries;
  }

  // ===========================
  // SEO
  // ===========================

  if (q.includes("seo")) {
    return knowledge.seo;
  }

  // ===========================
  // SUPPORT
  // ===========================

  if (
    q.includes("support") ||
    q.includes("maintenance") ||
    q.includes("bug") ||
    q.includes("security") ||
    q.includes("performance")
  ) {
    return knowledge.support;
  }
  // ===========================
  // AI CHATBOT DETAILS
  // ===========================

  // if (q.includes("ai chatbot pricing")) {
  //   return knowledge.chatbotDetails.pricing;
  // }

  if (q.includes("lead capture") || q.includes("capture leads")) {
    return knowledge.chatbotDetails.leadCapture;
  }

  if (
    q.includes("appointment booking") ||
    q.includes("book appointment") ||
    q.includes("booking")
  ) {
    return knowledge.chatbotDetails.appointmentBooking;
  }

  if (
    q.includes("chatbot features") ||
    q === "features" ||
    q.includes("features")
  ) {
    return knowledge.chatbotDetails.features;
  }
  // ===========================
  // AI CHATBOT
  // ===========================

  if (q.includes("chatbot") || q.includes("artificial intelligence")) {
    return knowledge.chatbot;
  }

  // ===========================
  // PORTFOLIO
  // ===========================

  if (q.includes("portfolio") || q.includes("project") || q.includes("work")) {
    return knowledge.portfolio;
  }

  // ===========================
  // PROCESS
  // ===========================

  if (q.includes("process") || q.includes("workflow")) {
    return knowledge.process;
  }

  // ===========================
  // TIMELINE
  // ===========================

  if (
    q.includes("timeline") ||
    q.includes("duration") ||
    q.includes("how long")
  ) {
    return knowledge.timeline;
  }

  // ===========================
  // TECHNOLOGIES
  // ===========================

  if (
    q.includes("react") ||
    q.includes("next") ||
    q.includes("technology") ||
    q.includes("tech stack") ||
    q.includes("supabase") ||
    q.includes("node") ||
    q.includes("laravel")
  ) {
    return knowledge.technologies;
  }

  // ===========================
  // CONSULTATION
  // ===========================

  if (
    q.includes("consultation") ||
    q.includes("meeting") ||
    q.includes("call")
  ) {
    return knowledge.consultation;
  }

  // ===========================
  // CONTACT
  // ===========================

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("whatsapp")
  ) {
    return knowledge.contact;
  }

  // ===========================
  // FAQ
  // ===========================

  if (
    q.includes("faq") ||
    q.includes("frequently asked") ||
    q.includes("question")
  ) {
    return knowledge.faq;
  }

  // ===========================
  // ABOUT
  // ===========================

  if (
    q.includes("about") ||
    q.includes("who are you") ||
    q.includes("company") ||
    q.includes("agency") ||
    q.includes("freshmind")
  ) {
    return knowledge.about;
  }

  // ===========================
  // DEFAULT
  // ===========================

  return knowledge.default;
}

function isGreeting(message) {
  const q = normalize(message);

  return [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ].some((word) => q.includes(word));
}

function isThanks(message) {
  const q = normalize(message);

  return ["thanks", "thank you", "thx", "appreciate"].some((word) =>
    q.includes(word)
  );
}

function isGoodbye(message) {
  const q = normalize(message);

  return ["bye", "goodbye", "see you", "later"].some((word) =>
    q.includes(word)
  );
}

function fallback() {
  return {
    text: knowledge.default,
    quickReplies: getQuickReplies("welcome"),
  };
}

export function chatbot(message) {
  if (!message) {
    return fallback();
  }

  if (isGreeting(message)) {
    return {
      text: `Hi! 👋

Welcome to FreshMind.

I'm your AI assistant.

Ask me anything about:

• Website Pricing
• Web Design
• Web Development
• SEO
• AI Chatbots
• Industries We Serve
• Timelines
• Portfolio

How can I help today?`,
      quickReplies: getQuickReplies("welcome"),
    };
  }

  if (isThanks(message)) {
    return {
      text: "You're very welcome! If you'd like pricing, project advice, or a custom quote, I'm here to help.",
      quickReplies: getQuickReplies("support"),
    };
  }

  if (isGoodbye(message)) {
    return {
      text: "Thanks for chatting with FreshMind. Have a wonderful day, and feel free to come back anytime!",
      quickReplies: [],
    };
  }

  return {
    text: findKnowledge(message),
    quickReplies: getQuickReplies(message),
  };
}
