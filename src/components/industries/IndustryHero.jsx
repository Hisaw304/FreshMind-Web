import { Link } from "react-router-dom";
import { ArrowRight, CircleCheckBig } from "lucide-react";

export default function IndustryHero({ industry }) {
  return (
    <section className="fm-about-hero">
      <div className="fm-about-hero-overlay" />

      <div className="fm-about-hero-container">
        <span className="fm-industry-badge">Industry Solutions</span>

        <h2>
          <h2>{industry.heading}</h2>
          <span> Website Development</span>
        </h2>

        <p>{industry.subtitle}</p>

        <div className="fm-industry-hero-features">
          {industry.features.slice(0, 3).map((feature) => (
            <div className="fm-industry-feature" key={feature.title}>
              <CircleCheckBig size={18} />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>

        <div className="fm-industry-hero-buttons">
          <Link to="/contact" className="fm-about-hero-btn">
            Start Your Project
          </Link>

          {/* <Link to="/portfolio" className="fm-industry-secondary-btn">
            View Portfolio
            <ArrowRight size={18} />
          </Link> */}
        </div>
      </div>
    </section>
  );
}
