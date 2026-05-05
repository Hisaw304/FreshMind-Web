import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import dashboardImg from "../assets/about-hero-fm.jpg";

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
                Contact Us
              </a>

              <a href="tel:+1234567890" className="fm-btn-secondary">
                <Phone size={16} /> +1 (860) 821-3853
              </a>
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

        {/* STATS BELOW */}
        {/* <motion.div
          className="fm-hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="fm-stat">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="fm-stat">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="fm-stat">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
