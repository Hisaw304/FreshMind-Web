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
    title: "Website Design & Management",
    intro: "Make the right first impression.",
    desc: "For many customers, your website is the first interaction with your business. Outdated or poorly designed websites can hurt your credibility. Our team builds modern, mobile-friendly websites tailored to your brand and optimized for performance.",
    icon: Palette,
    image: serviceDesign,
  },
  {
    title: "Search Engine Optimization (SEO)",
    intro: "Be found when it matters most.",
    desc: "We help your website rank higher through optimized content, technical SEO, and strategies that improve visibility so the right customers can find you.",
    icon: Search,
    image: serviceSeo,
  },
  {
    title: "Digital Marketing",
    intro: "Reach your audience with impact.",
    desc: "From targeted ads to engaging content, we develop strategies that connect you with your ideal audience and maximize your ROI.",
    icon: BarChart3,
    image: serviceMarketing,
  },
  {
    title: "Web Development",
    intro: "Scalable solutions for growth.",
    desc: "We build scalable, secure, and high-performing digital solutions—from custom features to full backend systems.",
    icon: Code2,
    image: serviceDevelopment,
  },
  {
    title: "Mobile-Ready Solutions",
    intro: "Engage customers on the go.",
    desc: "We ensure your website looks and performs beautifully across all devices, delivering a seamless mobile-first experience.",
    icon: Smartphone,
    image: serviceMobile,
  },
  {
    title: "Global Reach",
    intro: "Expand beyond borders.",
    desc: "We create strategies that help your business connect with audiences locally and globally, no matter where they are.",
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
            What We <span>Do</span>
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
      </div>
    </section>
  );
}
