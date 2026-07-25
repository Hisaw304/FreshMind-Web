import PricingCards from "../components/PricingCards";
import FeatureComparison from "../components/FeatureComparison";
import PricingAddons from "../components/PricingAddons";
import PricingFAQ from "../components/PricingFAQ";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";

export default function PricingPage() {
  return (
    <div className="fm-pricing-page">
      {/* HERO */}
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Transparent Website <span>Pricing</span>
          </h2>

          <p>
            Whether you're launching a new business, upgrading your online
            presence, or building a custom web application, we offer flexible
            pricing designed to deliver exceptional value without compromising
            on quality. Choose the package that best fits your goals, or contact
            us for a custom quote.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Get a Free Quote
          </a>
        </div>
      </section>

      <PricingCards />

      <FeatureComparison />

      <PricingAddons />

      <PricingFAQ />

      <Testimonials />

      <FooterCTA />
    </div>
  );
}
