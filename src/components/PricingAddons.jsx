import {
  Bot,
  Languages,
  Search,
  PenSquare,
  Wrench,
  BarChart3,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const addons = [
  {
    icon: <Search size={28} />,
    title: "Advanced SEO",
    price: "Starting at $500",
    description:
      "Keyword research, on-page SEO, technical optimization, schema markup, local SEO, and search engine indexing.",
  },

  {
    icon: <PenSquare size={28} />,
    title: "Content Writing",
    price: "Starting at $300",
    description:
      "Professionally written website copy, landing pages, service pages, and blog articles optimized for both users and search engines.",
  },

  {
    icon: <Bot size={28} />,
    title: "AI Chatbot Integration",
    price: "Starting at $400",
    description:
      "Integrate an AI-powered chatbot to answer questions, capture leads, schedule appointments, and improve customer support.",
  },

  {
    icon: <CalendarDays size={28} />,
    title: "Booking System",
    price: "Starting at $450",
    description:
      "Allow customers to schedule appointments, consultations, or reservations directly from your website.",
  },

  {
    icon: <Languages size={28} />,
    title: "Multi-language Website",
    price: "Starting at $600",
    description:
      "Reach a wider audience by offering your website in multiple languages with seamless language switching.",
  },

  {
    icon: <BarChart3 size={28} />,
    title: "Analytics & Tracking",
    price: "Starting at $250",
    description:
      "Google Analytics, Google Tag Manager, conversion tracking, and custom reporting dashboards.",
  },

  {
    icon: <ShieldCheck size={28} />,
    title: "Monthly Maintenance",
    price: "Starting at $150/mo",
    description:
      "Regular updates, security monitoring, backups, performance optimization, and technical support.",
  },

  {
    icon: <Wrench size={28} />,
    title: "Custom Features",
    price: "Custom Quote",
    description:
      "Need something unique? We build custom dashboards, portals, CRM integrations, APIs, automation, and advanced web applications.",
  },
];

export default function PricingAddons() {
  return (
    <section className="fm-pricing-addons">
      <div className="fm-container">
        <div className="fm-pricing-addons-heading">
          <h2>
            Optional <span>Add-ons</span>
          </h2>

          <p>
            Enhance your website with additional services that help your
            business attract more customers, automate workflows, and scale as
            you grow.
          </p>
        </div>

        <div className="fm-pricing-addons-grid">
          {addons.map((addon) => (
            <div className="fm-addon-card" key={addon.title}>
              <div className="fm-addon-icon">{addon.icon}</div>

              <div className="fm-addon-price">{addon.price}</div>

              <h3>{addon.title}</h3>

              <p>{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
