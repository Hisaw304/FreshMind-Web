import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-container">
        <div className="fm-footer-top">
          {/* BRAND */}
          <div className="fm-footer-brand">
            <img src="/logo.png" alt="FreshMind Web Logo" className="fm-logo" />

            <p>
              FreshMind Web builds modern, high-performing websites that help
              businesses attract customers, build credibility, and grow online.
              From custom web design to SEO and ongoing support, we create
              digital experiences that deliver real results.
            </p>

            <p className="fm-footer-location">
              Proudly serving businesses worldwide.
            </p>

            <div className="fm-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="fm-footer-col">
            <h4>Services</h4>

            <Link to="/services">Website Design</Link>
            <Link to="/services">Website Development</Link>
            <Link to="/services">UI/UX Design</Link>
            <Link to="/services">SEO Optimization</Link>
            <Link to="/services">Website Maintenance</Link>
            <Link to="/services">Performance Optimization</Link>
          </div>

          {/* INDUSTRIES */}
          <div className="fm-footer-col">
            <h4>Industries</h4>

            <Link to="/industries/real-estate">Real Estate</Link>
            <Link to="/industries/law-firms">Law Firms</Link>
            <Link to="/industries/healthcare">Healthcare</Link>
            <Link to="/industries/restaurants">Restaurants</Link>
            <Link to="/industries/construction">Construction</Link>
            <Link to="/industries">View All Industries</Link>
          </div>

          {/* COMPANY */}
          <div className="fm-footer-col">
            <h4>Company</h4>

            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog & Insights</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* NEWSLETTER */}
          <div className="fm-footer-col">
            <h4>Stay Updated</h4>

            <p>
              Get practical web design, SEO, and digital marketing insights
              delivered straight to your inbox.
            </p>

            <form className="fm-newsletter-form">
              <input type="email" placeholder="Enter your email address" />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="fm-footer-bottom">
          <p>© 2026 FreshMind Web. All rights reserved.</p>

          <div className="fm-footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
