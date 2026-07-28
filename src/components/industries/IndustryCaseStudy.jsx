import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustryCaseStudy({ industry }) {
  const { caseStudy } = industry;

  return (
    <section className="fm-industry-case-study">
      <div className="fm-container">
        <div className="fm-case-study-wrapper">
          {/* LEFT */}
          <div className="fm-case-study-content">
            <span className="fm-section-tag">Featured Case Study</span>

            <h2>{caseStudy.title}</h2>

            <p className="fm-case-study-description">{caseStudy.description}</p>

            <div className="fm-case-study-block">
              <h3>The Challenge</h3>

              <p>{caseStudy.challenge}</p>
            </div>

            <div className="fm-case-study-block">
              <h3>Our Solution</h3>

              <p>{caseStudy.solution}</p>
            </div>

            <Link to="/contact" className="fm-case-study-btn">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="fm-case-study-card">
            <div className="fm-case-study-client">
              <span>Client</span>

              <h3>{caseStudy.client}</h3>

              <p>{caseStudy.industry}</p>
            </div>

            <div className="fm-case-study-results">
              <h4>Project Results</h4>

              {caseStudy.results.map((result) => (
                <div className="fm-case-study-result" key={result}>
                  <CheckCircle2 size={20} />

                  <span>{result}</span>
                </div>
              ))}
            </div>

            <div className="fm-case-study-services">
              <h4>Services Delivered</h4>

              <div className="fm-case-study-tags">
                {caseStudy.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
