import { Link } from "react-router-dom";
import {
  Building2,
  Scale,
  HeartPulse,
  UtensilsCrossed,
  Hammer,
  Rocket,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    description: "Lead Generation • Property Listings • Trust Building",
  },
  {
    title: "Law Firms",
    slug: "law-firms",
    icon: Scale,
    description: "Consultation Booking • Practice Areas • Trust Building",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    description: "Patient Booking • Secure Forms • Accessibility",
  },
  {
    title: "Restaurants",
    slug: "restaurants",
    icon: UtensilsCrossed,
    description: "Online Menu • Reservations • Local SEO",
  },
  {
    title: "Construction",
    slug: "construction",
    icon: Hammer,
    description: "Project Showcase • Quote Requests • Lead Generation",
  },
  {
    title: "Startups",
    slug: "startups",
    icon: Rocket,
    description: "Product Launch • Investor Ready • Growth Focused",
  },
  {
    title: "Coaches",
    slug: "coaches",
    icon: GraduationCap,
    description: "Personal Branding • Online Booking • Client Growth",
  },
  {
    title: "E-commerce",
    slug: "ecommerce",
    icon: ShoppingCart,
    description: "Online Store • Secure Payments • Higher Conversions",
  },
];

export default function IndustryCards() {
  return (
    <section className="fm-industries-section">
      <div className="fm-container">
        <div className="fm-industries-heading">
          <h2>
            Industries We <span>Serve</span>
          </h2>

          <p>
            We create custom websites for businesses across a wide range of
            industries. While the sectors below highlight some of our expertise,
            they're only a selection of the clients we work with. Whether you're
            an established company, growing startup, or operate in a niche
            market, we build tailored digital solutions that connect with your
            audience, strengthen your brand, and drive measurable business
            growth.
          </p>
        </div>

        <div className="fm-industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="fm-industry-card"
              >
                <div className="fm-industry-top">
                  <div className="fm-industry-icon">
                    <Icon size={28} />
                  </div>

                  <ArrowRight size={20} className="fm-industry-arrow" />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <span className="fm-industry-link">Learn More</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
