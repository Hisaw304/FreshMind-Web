import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cities } from "../data/cities";

import {
  Search,
  Palette,
  Code2,
  Megaphone,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import discoveryImg from "../assets/discovery.jpg";
import brandingImg from "../assets/branding.jpg";
import developmentImg from "../assets/development.jpg";
import marketingImg from "../assets/marketing.jpg";
import supportImg from "../assets/support.jpg";
import analyticsImg from "../assets/analytics.jpg";

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: Search,
    image: discoveryImg,
    description:
      "We dive deep into your business, audience, and goals to define a clear direction.",
  },
  {
    id: 2,
    title: "Design & Branding",
    icon: Palette,
    image: brandingImg,
    description:
      "We craft a distinctive visual identity that builds trust and stands out.",
  },
  {
    id: 3,
    title: "Development",
    icon: Code2,
    image: developmentImg,
    description:
      "We build fast, scalable, and reliable websites optimized for every device.",
  },
  {
    id: 4,
    title: "Marketing",
    icon: Megaphone,
    image: marketingImg,
    description:
      "We implement strategies that drive traffic, visibility, and conversions.",
  },
  {
    id: 5,
    title: "Support",
    icon: ShieldCheck,
    image: supportImg,
    description:
      "We provide ongoing support to keep your site secure, updated, and evolving.",
  },
  {
    id: 6,
    title: "Analytics",
    icon: BarChart3,
    image: analyticsImg,
    description:
      "We track performance and continuously optimize for better results.",
  },
];

export default function About() {
  const [randomCities, setRandomCities] = useState([]);

  useEffect(() => {
    const shuffled = [...cities].sort(() => 0.5 - Math.random());
    setRandomCities(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="fm-trusted">
      <div className="fm-trusted-container">
        {/* HEADER */}
        <motion.div
          className="fm-trusted-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Trusted by <span>Ambitious Businesses</span>
          </h2>

          <p>
            At FreshMind Web Agency, we help businesses build a modern,
            credible, and results-driven online presence. By combining strategy,
            design, and technology, we create digital experiences that don’t
            just look good — they perform and drive real growth.
          </p>

          <p>
            Your website should work as hard as you do. That’s why every project
            we deliver is focused on attracting the right audience, building
            trust, and converting visitors into long-term customers.
          </p>

          <p>
            We specialize in helping businesses stand out locally.
            {randomCities.length > 0 && (
              <>
                {" "}
                Whether you’re in{" "}
                <span className="fm-highlight-alt">
                  {randomCities.join(", ")}
                </span>
                , or anywhere in between, we craft strategies that connect with
                your audience and grow your presence where it matters most.
              </>
            )}
          </p>
          <div className=" fm-ready-btn">
            <a href="/contact" className="fm-btn-primary">
              Ready to grow your business? Let’s talk
            </a>
          </div>
        </motion.div>

        {/* APPROACH */}
        <motion.div
          className="fm-trusted-approach"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>
            Our <span>Approach</span>
          </h2>

          <div className="fm-steps-grid">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  className="fm-step-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  {/* IMAGE */}
                  <div className="fm-step-image">
                    <img src={step.image} alt={step.title} />
                  </div>

                  {/* CONTENT */}
                  <div className="fm-step-content">
                    {/* TOP */}
                    <div className="fm-step-top">
                      <div className="fm-step-icon">
                        <Icon size={18} />
                      </div>

                      <div className="fm-step-number">{step.id}</div>
                    </div>

                    {/* TEXT */}
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          className="fm-trusted-mission"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>
            Our <span>Mission</span>
          </h2>

          <p>
            To empower small businesses and entrepreneurs with the same level of
            design, strategy, and digital tools used by leading brands — helping
            them grow, compete, and succeed in today’s online world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
