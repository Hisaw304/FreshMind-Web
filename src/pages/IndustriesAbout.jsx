// src/pages/IndustryTemplate.jsx

import { useParams, Link } from "react-router-dom";
import { industries } from "../data/industries";
import { ArrowRight, CheckCircle, Check } from "lucide-react";

export default function IndustryTemplate() {
  const { slug } = useParams();

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return (
      <section className="fm-industry-not-found">
        <div className="fm-container">
          <h2>Industry not found.</h2>

          <Link to="/industries" className="fm-btn-primary">
            Back to Industries
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="fm-industry-hero">
        <div className="fm-container fm-industry-hero-grid">
          <div className="fm-industry-left">
            <span className="fm-section-tag">{industry.tag}</span>

            <h1>{industry.heroTitle}</h1>

            <p>{industry.heroDescription}</p>

            <div className="fm-industry-buttons">
              <Link to="/contact" className="fm-btn-primary">
                Get a Free Quote
              </Link>

              <Link to="/pricing" className="fm-btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="fm-industry-right">
            <img src={industry.heroImage} alt={industry.name} />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="fm-industry-section">
        <div className="fm-container">
          <div className="fm-section-heading">
            <span className="fm-section-tag">Why It Matters</span>

            <h2>{industry.whyTitle}</h2>

            <p>{industry.whyDescription}</p>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="fm-industry-section">
        <div className="fm-container">
          <div className="fm-section-heading">
            <span className="fm-section-tag">Challenges</span>

            <h2>Problems We Solve</h2>
          </div>

          <div className="fm-problems-grid">
            {industry.problems.map((problem, index) => (
              <div key={index} className="fm-problem-card">
                <CheckCircle size={22} />

                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="fm-industry-section">
        <div className="fm-container">
          <div className="fm-section-heading">
            <span className="fm-section-tag">Included</span>

            <h2>What's Included</h2>
          </div>

          <div className="fm-features-grid">
            {industry.features.map((feature, index) => (
              <div key={index} className="fm-feature-card">
                <Check size={18} />

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="fm-industry-section">
        <div className="fm-container">
          <div className="fm-section-heading">
            <span className="fm-section-tag">Results</span>

            <h2>Benefits for Your Business</h2>
          </div>

          <div className="fm-benefits-grid">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="fm-benefit-card">
                <CheckCircle size={20} />

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fm-industry-cta">
        <div className="fm-container">
          <h2>{industry.ctaTitle}</h2>

          <p>{industry.ctaDescription}</p>

          <Link to="/contact" className="fm-btn-primary">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
