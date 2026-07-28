// src/data/quickReplies.js

export const quickReplies = {
  welcome: [
    "Website Pricing",
    "Services",
    "Portfolio",
    "Industries",
    "Book a Call",
  ],

  pricing: [
    "Business Website",
    "Real Estate Website",
    "Law Firm Website",
    "E-commerce Store",
    "Admin Dashboard",
    "AI Chatbot",
  ],

  services: [
    "Web Design",
    "Web Development",
    "SEO",
    "Website Maintenance",
    "Speed Optimization",
    "AI Chatbots",
  ],

  industries: [
    "Real Estate",
    "Healthcare",
    "Restaurants",
    "Construction",
    "Law Firms",
    "Startups",
    "Coaches",
    "E-commerce",
  ],

  seo: ["Technical SEO", "Local SEO", "Website Speed", "Google Rankings"],

  chatbot: [
    "AI Chatbot Pricing",
    "Lead Capture",
    "Appointment Booking",
    "Features",
  ],

  support: [
    "Website Maintenance",
    "Bug Fixes",
    "Performance",
    "Security",
    "Contact Support",
  ],

  consultation: ["Book a Call", "Project Estimate", "Pricing"],

  contact: ["Email", "WhatsApp", "Schedule Meeting"],

  portfolio: ["Recent Projects", "Case Studies", "Industries"],

  technologies: ["React", "Next.js", "Supabase", "Node.js"],

  quote: [
    "Business Website",
    "Need Admin Dashboard",
    "Custom Features",
    "Contact Sales",
  ],
};

/**
 * Returns quick replies based on the message.
 */
export function getQuickReplies(message = "") {
  const text = message.toLowerCase();

  // ===========================
  // SUPPORT / MAINTENANCE
  // Put BEFORE "website"
  // ===========================

  if (
    text.includes("maintenance") ||
    text.includes("support") ||
    text.includes("bug") ||
    text.includes("security") ||
    text.includes("performance")
  ) {
    return quickReplies.support;
  }

  // ===========================
  // PRICING
  // ===========================

  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("quote") ||
    text.includes("budget")
  ) {
    return quickReplies.pricing;
  }

  // ===========================
  // AI CHATBOT
  // ===========================

  if (text.includes("chatbot") || text.includes("ai")) {
    return quickReplies.chatbot;
  }

  // ===========================
  // SEO
  // ===========================

  if (text.includes("seo") || text.includes("google")) {
    return quickReplies.seo;
  }

  // ===========================
  // PORTFOLIO
  // ===========================

  if (
    text.includes("portfolio") ||
    text.includes("project") ||
    text.includes("case study")
  ) {
    return quickReplies.portfolio;
  }

  // ===========================
  // TECHNOLOGIES
  // ===========================

  if (
    text.includes("react") ||
    text.includes("next") ||
    text.includes("supabase") ||
    text.includes("node")
  ) {
    return quickReplies.technologies;
  }

  // ===========================
  // INDUSTRIES
  // ===========================

  if (
    text.includes("industry") ||
    text.includes("real estate") ||
    text.includes("restaurant") ||
    text.includes("construction") ||
    text.includes("healthcare") ||
    text.includes("law") ||
    text.includes("coach") ||
    text.includes("startup") ||
    text.includes("e-commerce") ||
    text.includes("ecommerce")
  ) {
    return quickReplies.industries;
  }

  // ===========================
  // CONSULTATION
  // ===========================

  if (
    text.includes("consultation") ||
    text.includes("meeting") ||
    text.includes("call")
  ) {
    return quickReplies.consultation;
  }

  // ===========================
  // CONTACT
  // ===========================

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("phone") ||
    text.includes("whatsapp")
  ) {
    return quickReplies.contact;
  }

  // ===========================
  // SERVICES
  // Keep this near the bottom because
  // "website" appears in many prompts.
  // ===========================

  if (
    text.includes("service") ||
    text.includes("build") ||
    text.includes("website") ||
    text.includes("development") ||
    text.includes("design")
  ) {
    return quickReplies.services;
  }

  return quickReplies.welcome;
}
