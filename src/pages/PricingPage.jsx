import { Helmet } from "react-helmet-async";
import PricingCards from "../components/PricingCards";
import FeatureComparison from "../components/FeatureComparison";
import PricingAddons from "../components/PricingAddons";
import PricingFAQ from "../components/PricingFAQ";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";

export default function PricingPage() {
  return (
    <div className="fm-pricing-page">
      <Helmet>
        <title>
          Website Pricing | Affordable Web Design & Development | FreshMind Web
        </title>

        <meta
          name="description"
          content="Explore FreshMind Web's transparent pricing for professional web design, web development, SEO, and custom business websites. Choose the package that fits your goals and budget."
        />

        <meta
          name="keywords"
          content="website pricing, web design pricing, web development cost, business website packages, custom website pricing, SEO pricing"
        />

        <link rel="canonical" href="https://freshmindweb.online/pricing" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreshMind Web" />

        <meta
          property="og:title"
          content="Website Pricing | Affordable Web Design & Development"
        />

        <meta
          property="og:description"
          content="Discover affordable website packages designed to help startups, small businesses, and growing companies establish a strong online presence."
        />

        <meta property="og:url" content="https://freshmindweb.online/pricing" />

        <meta
          property="og:image"
          content="https://freshmindweb.online/images/industries-og.jpg"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Website Pricing | FreshMind Web" />

        <meta
          name="twitter:description"
          content="Affordable web design and development packages tailored to your business needs."
        />

        <meta
          name="twitter:image"
          content="https://freshmindweb.online/images/industries-og.jpg"
        />
      </Helmet>
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
