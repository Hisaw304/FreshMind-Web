import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-container">
        {/* TOP */}
        <div className="fm-footer-top">
          {/* BRAND */}
          <motion.div
            className="fm-footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="logo" className="fm-logo" />

            <p>
              We build modern websites and digital experiences that help
              businesses grow, connect, and stand out online.
            </p>
          </motion.div>

          {/* NAV + SOCIAL */}
          <motion.div
            className="fm-footer-nav-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="fm-footer-nav">
              <h4>Navigation</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>

            <div className="fm-footer-social">
              <h4>Follow Us</h4>
              <div className="fm-socials">
                <a href="#">
                  <Facebook size={18} />
                </a>
                <a href="#">
                  <Instagram size={18} />
                </a>
                <a href="#">
                  <Linkedin size={18} />
                </a>
                <a href="#">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            className="fm-footer-newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Stay Updated</h4>
            <p>Get insights, tips, and updates delivered to your inbox.</p>

            <form className="fm-newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="fm-footer-bottom">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
