import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites are completed within weeks or months, depending on the scope and complexity of the project. Simpler sites can be delivered faster, while more advanced features like custom integrations, animations, or dashboards may extend the timeline slightly. We follow a structured process—planning, design, development, and testing—to ensure everything is done efficiently without compromising quality. You’ll also be kept in the loop at every stage so there are no surprises.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes, we don’t just disappear after launch. We offer ongoing support, maintenance, and updates to keep your website secure, fast, and performing at its best. This includes fixing bugs, updating content, improving performance, and ensuring compatibility with new technologies. Whether you need occasional help or long-term support, we’re available to grow with your business.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we build is fully responsive and designed to work seamlessly across all devices—mobile, tablet, and desktop. We prioritize mobile performance because most users will visit your site from their phones. This means fast loading times, clean layouts, and an intuitive experience that keeps visitors engaged no matter what device they’re using.",
  },
  {
    q: "Can you help with SEO and marketing?",
    a: "Yes, we build every website with SEO best practices from the ground up. This includes proper structure, fast performance, optimized content, and clean code that search engines can easily understand. Beyond that, we can guide you on marketing strategies such as content creation, local SEO, and conversion optimization to help you attract the right audience and turn visitors into customers.",
  },
  {
    q: "Do I need to provide content?",
    a: "You can provide your own content if you have it, but it’s not required. We help you structure, refine, and improve your messaging to make sure it’s clear, professional, and conversion-focused. If needed, we can guide you on what content works best or even assist in rewriting sections so your website not only looks good but also communicates effectively and drives results.",
  },
  {
    q: "What makes FreshMind Web Agency different?",
    a: "We focus on results, not just aesthetics. While design matters, every decision we make is centered around helping your business grow—whether that’s generating leads, increasing conversions, or building trust with your audience. We combine strategy, design, and performance to create websites that don’t just look good, but actually work for your business long-term.",
  },
  {
    q: "How do we get started?",
    a: "Getting started is simple. Reach out through our contact form and tell us a bit about your project and goals. From there, we’ll schedule a quick discussion to understand your needs, recommend the best approach, and outline the next steps. Once everything is clear, we’ll begin the process and keep you updated every step of the way.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="fm-faq">
      <div className="fm-faq-container">
        {/* HEADER */}
        <div className="fm-faq-header">
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know about working with FreshMind Web Agency
            and how we help businesses grow online.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-faq-grid">
          {/* LEFT (FAQ LIST) */}
          <div className="fm-faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`fm-faq-item ${active === i ? "active" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="fm-faq-question">
                  <h3>{item.q}</h3>
                  <span className="fm-faq-icon">
                    {active === i ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      className="fm-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT (CARD) */}
          <div className="fm-faq-card">
            <h3>Still have questions?</h3>
            <p>
              We’re here to help. Reach out and we’ll guide you through
              everything step by step.
            </p>

            <button className="fm-btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
