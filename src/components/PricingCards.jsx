import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "From $1,000",
    description:
      "Perfect for startups, freelancers, and small businesses looking to establish a professional online presence.",
    popular: false,
    features: [
      "Up to 5 Pages",
      "Custom Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "Google Analytics",
      "Fast Loading Speed",
      "SSL & Security",
      "30 Days Support",
    ],
  },

  {
    name: "Professional",
    price: "From $2,000",
    description:
      "Our most popular package for growing businesses that need a website focused on generating leads and increasing conversions.",
    popular: true,
    features: [
      "Up to 12 Pages",
      "Premium Custom Design",
      "Advanced SEO Optimization",
      "CMS Integration",
      "Blog Setup",
      "Conversion-Focused Landing Pages",
      "Animations & Interactive UI",
      "Performance Optimization",
      "90 Days Support",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom Quote",
    description:
      "Built for businesses that require advanced functionality, custom integrations, dashboards, or scalable web applications.",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Dashboard",
      "API Integrations",
      "Booking & Payment Systems",
      "Advanced Security",
      "Automation Workflows",
      "Priority Support",
      "Ongoing Maintenance Options",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="fm-pricing-section">
      <div className="fm-container">
        <div className="fm-pricing-heading">
          <h2>
            Choose the <span>Right Plan</span> for Your Business
          </h2>

          <p>
            Every business has different goals. Our pricing is designed to
            provide flexibility while delivering high-quality websites that help
            you grow online.
          </p>
        </div>

        <div className="fm-pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`fm-pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="fm-pricing-badge">
                  <Star size={16} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <h3>{plan.name}</h3>

              <div className="fm-price">{plan.price}</div>

              <p className="fm-plan-description">{plan.description}</p>

              <ul className="fm-plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact" className="fm-pricing-btn">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
