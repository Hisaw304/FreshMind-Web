import { motion } from "framer-motion";
// import { Phone } from "lucide-react";
import dashboardImg from "../assets/hero-fm.jpg";
import { ReactTyped } from "react-typed";

const services = [
  "Custom Websites",
  "UI/UX Design",
  "Landing Pages",
  "SEO Optimization",
  "Brand Identity",
  "Website Redesign",
  "E-Commerce Stores",
  "Mobile Responsive",
  "Website Hosting",
  "Performance Optimization",
];
export default function Hero() {
  return (
    <section className="fm-hero">
      {/* GRID BG */}
      <div className="fm-hero-grid-bg" />

      <div className="fm-hero-container">
        {/* MAIN GRID */}
        <div className="fm-hero-main">
          {/* LEFT */}
          <motion.div
            className="fm-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="fm-hero-typed">
              <ReactTyped
                strings={[
                  "Professional Web Design",
                  "High-Converting Websites",
                  "Modern UI/UX Experiences",
                  "Business Growth Solutions",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
            <div className="fm-hero-headlines">
              <div className="fm-hero-card">
                <h1>
                  Build a modern <span>online presence</span>
                </h1>
              </div>

              <div className="fm-hero-card">
                <h1>
                  Websites that drive <span>growth</span> & <span>trust</span>
                </h1>
              </div>
            </div>

            <p className="fm-hero-text">
              We design and develop high-performing websites that help
              businesses stand out, attract clients, and scale with confidence.
            </p>

            <div className="fm-hero-actions">
              <a href="#contact" className="fm-btn-primary">
                Let's Get To Work
              </a>

              {/* <a href="tel:+1234567890" className="fm-btn-secondary">
                <Phone size={16} /> +1 (860) 821-3853
              </a> */}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="fm-hero-visual"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="fm-dashboard">
              <img src={dashboardImg} alt="Dashboard preview" />
            </div>
          </motion.div>
        </div>
        {/* ADD THIS AT THE VERY BOTTOM OF HERO SECTION */}
        <div className="fm-hero-marquee">
          <div className="fm-hero-marquee-track">
            {[...services, ...services].map((item, i) => (
              <div key={i} className="fm-hero-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
