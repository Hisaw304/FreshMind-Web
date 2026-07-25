import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function IndustryFAQ({ industry }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="fm-industry-faq">
      <div className="fm-container">
        <div className="fm-industry-faq-heading">
          <span className="fm-section-tag">Frequently Asked Questions</span>

          <h2>
            Questions About Our <span>{industry.title}</span> Websites
          </h2>

          <p>
            Here are some of the most common questions businesses ask before
            starting their website project. If you have a different question,
            we'd be happy to help.
          </p>
        </div>

        <div className="fm-industry-faq-list">
          {industry.faqs.map((faq, index) => (
            <div
              className={`fm-industry-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={faq.question}
            >
              <button
                className="fm-industry-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <ChevronDown size={22} />
              </button>

              <div className="fm-industry-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
