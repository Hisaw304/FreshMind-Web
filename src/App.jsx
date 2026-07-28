import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AIButton from "./components/ai/AIButton";
import AIChat from "./components/ai/AIChat";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryTemplate from "./pages/IndustryTemplate";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryTemplate />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      <Footer />

      {/* AI Chat */}

      <AIButton open={chatOpen} setOpen={setChatOpen} />

      <AIChat open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
}
