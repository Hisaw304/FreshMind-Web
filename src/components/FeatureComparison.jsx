import { Check, Minus } from "lucide-react";

const features = [
  {
    feature: "Custom Website Design",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Responsive Mobile Design",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "SEO Optimization",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced",
  },
  {
    feature: "Pages Included",
    starter: "Up to 5",
    professional: "Up to 12",
    enterprise: "Unlimited",
  },
  {
    feature: "CMS Integration",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Blog Setup",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Booking System",
    starter: false,
    professional: "Optional",
    enterprise: true,
  },
  {
    feature: "Payment Integration",
    starter: false,
    professional: "Optional",
    enterprise: true,
  },
  {
    feature: "Custom Dashboard",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "API Integrations",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Support",
    starter: "30 Days",
    professional: "90 Days",
    enterprise: "Priority",
  },
];

const renderValue = (value) => {
  if (value === true) return <Check size={20} />;
  if (value === false) return <Minus size={20} />;
  return <span>{value}</span>;
};

export default function FeatureComparison() {
  return (
    <section className="fm-feature-comparison">
      <div className="fm-container">
        <div className="fm-feature-heading">
          <h2>
            Compare <span>Our Plans</span>
          </h2>

          <p>
            Every package includes a professionally designed website. Compare
            the features below to find the solution that's right for your
            business.
          </p>
        </div>

        <div className="fm-feature-table-wrapper">
          <table className="fm-feature-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {features.map((item) => (
                <tr key={item.feature}>
                  <td>{item.feature}</td>
                  <td>{renderValue(item.starter)}</td>
                  <td>{renderValue(item.professional)}</td>
                  <td>{renderValue(item.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
