import ServicesGrid from "../components/ServicesGrid";
import WhatsIncluded from "../components/WhatsIncluded";
import Technologies from "../components/Technologies";
import IndustryCards from "../components/IndustryCards";
import ProcessPreview from "../components/ProcessPreview";

import WhyChooseUs from "../components/WhyChooseUs";
// import FAQSection from "../components/FAQSection";
import FooterCTA from "../components/FooterCTA";
import PricingCards from "../components/PricingCards";

export default function ServicesPage() {
  return (
    <div className="fm-services-page">
      {/* HERO */}
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Professional <span>Web Design & Development</span> Services
          </h2>

          <p>
            From beautiful business websites to powerful custom web
            applications, FreshMind Web delivers digital solutions that help
            businesses attract customers, build credibility, and grow with
            confidence.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Start Your Project
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesGrid />

      {/* WHAT'S INCLUDED */}
      <WhatsIncluded />

      {/* TECHNOLOGIES */}
      <Technologies />

      {/* INDUSTRIES */}
      <IndustryCards />

      {/* PROCESS */}
      <ProcessPreview />

      {/* PRICING */}
      <PricingCards />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* CTA */}
      <FooterCTA />
    </div>
  );
}
