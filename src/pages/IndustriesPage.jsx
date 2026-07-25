import { Helmet } from "react-helmet-async";
import IndustryCards from "../components/IndustryCards";
import IndustryBenefits from "../components/IndustryBenefits";
import IndustryCaseStudies from "../components/IndustryCaseStudies";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";

export default function IndustriesPage() {
  return (
    <div className="fm-industries-page">
      <Helmet>
        <title>
          Industries We Serve | Custom Websites for Every Business | FreshMind
          Web
        </title>

        <meta
          name="description"
          content="FreshMind Web designs and develops custom websites for businesses across multiple industries, including healthcare, real estate, legal, education, eCommerce, construction, finance, hospitality, and more."
        />

        <meta
          name="keywords"
          content="industry websites, business websites, healthcare websites, real estate websites, law firm websites, ecommerce websites, education websites, custom web development"
        />

        <link rel="canonical" href="https://freshmindweb.online/industries" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreshMind Web" />

        <meta
          property="og:title"
          content="Industries We Serve | Custom Websites for Every Business"
        />

        <meta
          property="og:description"
          content="Explore the industries FreshMind Web serves and discover how we build modern, high-performing websites tailored to each business sector."
        />

        <meta
          property="og:url"
          content="https://freshmindweb.online/industries"
        />

        <meta
          property="og:image"
          content="https://freshmindweb.online/images/industries-og.jpg"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Industries We Serve | FreshMind Web"
        />

        <meta
          name="twitter:description"
          content="Custom websites for healthcare, legal, real estate, eCommerce, education, construction, finance, hospitality, and many more industries."
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
