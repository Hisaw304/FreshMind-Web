import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-container">
        <div className="fm-footer-top">
          {/* BRAND */}
          <div className="fm-footer-brand">
            <img src="/logo.png" alt="logo" className="fm-logo" />

            <p>
              We build modern, high-performing websites that help businesses
              grow, convert, and stand out in competitive markets.
            </p>

            <div className="fm-socials">
              <a href="#">
                <Facebook size={18} />
              </a>

              <a href="#">
                <Twitter size={18} />
              </a>

              <a href="#">
                <Instagram size={18} />
              </a>

              <a href="#">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="fm-footer-col">
            <h4>Industries</h4>

            <Link to="/industries">Web Design</Link>
            <Link to="/industries">Website Development</Link>
            <Link to="/industries">UI/UX Design</Link>
            <Link to="/industries">SEO Optimization</Link>
            <Link to="/industries">Website Maintenance</Link>
            <Link to="/industries">Performance Optimization</Link>
          </div>

          {/* COMPANY */}
          <div className="fm-footer-col">
            <h4>Company</h4>

            <Link to="/about">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* NEWSLETTER */}
          <div className="fm-footer-col">
            <h4>Stay Updated</h4>

            <p>
              Get web design insights, business tips, and updates delivered to
              your inbox.
            </p>

            <form className="fm-newsletter-form">
              <input type="email" placeholder="Enter your email address" />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom */}

        <div className="fm-footer-bottom">
          <p>© 2026 Your Company. All rights reserved.</p>

          <div className="fm-footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
