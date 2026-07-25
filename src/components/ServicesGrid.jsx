import {
  MonitorSmartphone,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  Wrench,
  Search,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Website Design",
    description:
      "Modern, responsive websites designed to build trust, strengthen your brand, and convert visitors into customers.",
    features: [
      "Responsive Design",
      "UI/UX Design",
      "Conversion Focused",
      "SEO Ready",
    ],
  },

  {
    icon: <Code2 size={28} />,
    title: "Custom Web Development",
    description:
      "Powerful web applications built with modern technologies including React, Next.js, Laravel, and scalable backend systems.",
    features: [
      "React Development",
      "Custom Dashboards",
      "API Integration",
      "Secure Backend",
    ],
  },

  {
    icon: <LayoutTemplate size={28} />,
    title: "Landing Pages",
    description:
      "High-converting landing pages built to maximize leads, sales, and campaign performance.",
    features: [
      "Lead Generation",
      "Fast Loading",
      "A/B Ready",
      "Mobile Optimized",
    ],
  },

  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce Development",
    description:
      "Complete online stores with secure payments, product management, inventory, and a seamless shopping experience.",
    features: [
      "Payment Integration",
      "Product Catalog",
      "Shopping Cart",
      "Order Management",
    ],
  },

  {
    icon: <Wrench size={28} />,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, backed up, and performing at its best with ongoing maintenance.",
    features: [
      "Security Updates",
      "Backups",
      "Performance",
      "Technical Support",
    ],
  },

  {
    icon: <Search size={28} />,
    title: "SEO Optimization",
    description:
      "Improve your search rankings with technical SEO, on-page optimization, schema markup, and local SEO.",
    features: [
      "Technical SEO",
      "Local SEO",
      "Schema Markup",
      "Google Indexing",
    ],
  },

  {
    icon: <Database size={28} />,
    title: "Custom Business Systems",
    description:
      "We develop CRM systems, booking platforms, customer portals, and automation tools tailored to your business.",
    features: [
      "CRM Systems",
      "Booking Platforms",
      "Client Portals",
      "Automation",
    ],
  },

  {
    icon: <MonitorSmartphone size={28} />,
    title: "Website Redesign",
    description:
      "Transform outdated websites into fast, modern, and conversion-focused digital experiences that reflect your brand.",
    features: [
      "Modern UI",
      "Speed Improvements",
      "Better UX",
      "Higher Conversions",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="fm-services-grid-section">
      <div className="fm-container">
        <div className="fm-services-grid-heading">
          <h2>
            Our <span>Services</span>
          </h2>

          <p>
            We provide end-to-end web design and development services that help
            businesses establish a strong online presence, attract more
            customers, and scale with confidence.
          </p>
        </div>

        <div className="fm-services-page-grid">
          {services.map((service) => (
            <div className="fm-service-page-card" key={service.title}>
              <div className="fm-service-page-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul className="fm-service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a href="/contact" className="fm-service-page-link">
                Start Your Project
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
