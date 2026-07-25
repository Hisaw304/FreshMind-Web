// src/sections/Services.jsx
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Palette,
  Search,
  Smartphone,
  Globe,
} from "lucide-react";

import serviceDesign from "../assets/service-design.jpg";
import serviceSeo from "../assets/service-seo.jpg";
import serviceMarketing from "../assets/marketing.jpg";
import serviceDevelopment from "../assets/service-development.jpg";
import serviceMobile from "../assets/service-mobile.jpg";
import serviceGlobal from "../assets/service-global.jpg";

const services = [
  {
    title: "Website Design",
    intro: "Modern websites that build trust.",
    desc: "Custom responsive websites designed to help businesses attract customers, strengthen their brand, and increase conversions.",
    icon: Palette,
    image: serviceDesign,
  },

  {
    title: "Custom Web Development",
    intro: "Built for performance.",
    desc: "Scalable web applications, portals, dashboards, and custom business solutions developed with modern technologies.",
    icon: Code2,
    image: serviceDevelopment,
  },

  {
    title: "SEO Optimization",
    intro: "Get found on Google.",
    desc: "Technical SEO, local SEO, schema markup, and performance optimization to improve your search visibility.",
    icon: Search,
    image: serviceSeo,
  },

  {
    title: "Landing Pages",
    intro: "Convert more visitors.",
    desc: "High-converting landing pages designed for advertising campaigns, lead generation, and product launches.",
    icon: BarChart3,
    image: serviceMarketing,
  },

  {
    title: "E-commerce Websites",
    intro: "Sell online with confidence.",
    desc: "Professional online stores with secure payments, product management, and seamless shopping experiences.",
    icon: Smartphone,
    image: serviceMobile,
  },

  {
    title: "Website Maintenance",
    intro: "Keep your website secure.",
    desc: "Regular updates, backups, monitoring, security improvements, and ongoing technical support.",
    icon: Globe,
    image: serviceGlobal,
  },
];

export default function Services() {
  return (
    <section id="services" className="fm-services">
      <div className="fm-why-grid-bg" />
      <div className="fm-services-container">
        {/* HEADER */}
        <div className="fm-service-header">
          <h2>
            Solutions We <span>Provide</span>
          </h2>
          <p>
            Our services are designed to build your online presence, connect you
            with the right audience, and grow your business effectively.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-services-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon;

            return (
              <motion.div
                key={idx}
                className="fm-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                {/* IMAGE */}
                <div className="fm-service-image">
                  <img src={svc.image} alt={svc.title} />

                  <div className="fm-service-badge">{idx + 1}</div>
                </div>

                {/* CONTENT */}
                <div className="fm-service-content">
                  {/* TOP */}
                  <div className="fm-service-top">
                    <div className="fm-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3>{svc.title}</h3>
                      <span className="fm-service-intro">{svc.intro}</span>
                    </div>
                  </div>

                  <div className="fm-service-divider" />

                  {/* DESC */}
                  <p className="fm-service-desc">{svc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="fm-services-btn">
          <a href="/services" className="fm-primary-btn">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
