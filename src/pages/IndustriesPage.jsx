import IndustryCards from "../components/IndustryCards";
import IndustryBenefits from "../components/IndustryBenefits";
import IndustryCaseStudies from "../components/IndustryCaseStudies";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";

export default function IndustriesPage() {
  return (
    <div className="fm-industries-page">
      {/* HERO */}
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Websites Built for <span>Every Industry</span>
          </h2>

          <p>
            Every business is different, which is why we create custom websites
            tailored to your industry, your customers, and your goals. From
            startups to established companies, we build digital experiences that
            drive growth, build trust, and generate results.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Start Your Project
          </a>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustryCards />

      {/* BENEFITS */}
      <IndustryBenefits />

      {/* CASE STUDIES */}
      <IndustryCaseStudies />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <FooterCTA />
    </div>
  );
}
