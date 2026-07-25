import storyImage from "../assets/ourstory.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <section className="fm-story-section">
      <div className="fm-container">
        <div className="fm-story-grid">
          {/* IMAGE */}
          <div className="fm-story-image">
            <img src={storyImage} alt="FreshMind Web Story" />
          </div>

          {/* CONTENT */}
          <div className="fm-story-content">
            <span className="fm-section-tag">Our Story</span>

            <h2>
              From an <span>Idea</span> to Helping Businesses Grow Online
            </h2>

            <p>
              FreshMind Web was founded with one simple goal—to help businesses
              build a stronger online presence through modern, high-performing
              websites. We recognized that many companies struggled with
              outdated websites that failed to generate leads, build trust, or
              reflect the quality of their services.
            </p>

            <p>
              What started as a passion for creating exceptional digital
              experiences has grown into a web agency focused on delivering
              websites that combine beautiful design, fast performance, and
              results-driven strategy. Every project is approached with
              creativity, attention to detail, and a commitment to helping our
              clients succeed.
            </p>

            <p>
              Today, FreshMind Web works with startups, local businesses, and
              growing companies across multiple industries, creating websites
              that not only look professional but also convert visitors into
              customers.
            </p>

            {/* HIGHLIGHTS */}
            <div className="fm-story-highlights">
              <div className="fm-story-highlight">
                <h3>Modern Design</h3>
                <p>
                  Clean, professional websites tailored to your brand and
                  audience.
                </p>
              </div>

              <div className="fm-story-highlight">
                <h3>Built for Growth</h3>
                <p>
                  Every website is designed to generate leads, increase trust,
                  and support long-term business growth.
                </p>
              </div>
            </div>

            <Link to="/contact" className="fm-story-btn">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
