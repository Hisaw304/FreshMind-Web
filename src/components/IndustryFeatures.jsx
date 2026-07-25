import { CheckCircle2 } from "lucide-react";

export default function IndustryFeatures({ industry }) {
  return (
    <section className="fm-industry-features">
      <div className="fm-container">
        <div className="fm-industry-features-heading">
          <span className="fm-section-tag">Website Features</span>

          <h2>
            Everything Your <span>{industry.title}</span> Website Needs
          </h2>

          <p>
            Every website we build includes features designed specifically for
            your industry, helping you attract more customers, improve user
            experience, and grow your business.
          </p>
        </div>

        <div className="fm-industry-features-grid">
          {industry.features.map((feature) => (
            <div className="fm-industry-feature-card" key={feature.title}>
              <div className="fm-industry-feature-icon">
                <CheckCircle2 size={24} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
