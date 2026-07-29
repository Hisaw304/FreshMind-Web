import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a custom website cost?",
    answer:
      "The cost depends on the size and complexity of your project. Our Starter package begins at $1,000, while larger websites and custom web applications are quoted based on your specific requirements.",
  },
  {
    question: "Do you require a deposit before starting?",
    answer:
      "Yes. We typically require a 50% deposit before work begins, with the remaining balance due upon project completion. For larger projects, milestone-based payment plans are also available.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 3–6 weeks. More complex websites with custom functionality, dashboards, or integrations may require additional development time.",
  },
  {
    question: "Can I request changes during the project?",
    answer:
      "Absolutely. Every project includes revision rounds to ensure the final website matches your vision. Additional revisions or major scope changes can also be accommodated if needed.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones, ensuring an excellent user experience across all devices.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes. Every website includes foundational SEO, including optimized page structure, metadata, performance optimization, and search engine indexing. Advanced SEO services are available as an optional add-on.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Whether your current website looks outdated, performs poorly, or no longer reflects your brand, we can redesign and rebuild it while preserving valuable content where appropriate.",
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer:
      "Yes. We offer optional maintenance plans that include security updates, backups, performance optimization, content updates, and ongoing technical support to keep your website running smoothly.",
  },
];

export default function PricingFAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="fm-pricing-faq">
      <div className="fm-container">
        <div className="fm-pricing-faq-heading">
          <h2>
            Pricing <span>Questions</span>
          </h2>

          <p>
            Have questions about pricing, timelines, or what's included? Here
            are answers to the questions we receive most often.
          </p>
        </div>

        <div className="fm-pricing-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`fm-pricing-faq-item ${
                active === index ? "active" : ""
              }`}
            >
              <button
                className="fm-pricing-faq-question"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>

                <ChevronDown size={22} />
              </button>

              <div className="fm-pricing-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
