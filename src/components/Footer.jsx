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
          </div>

          {/* LOCATIONS */}
          <div className="fm-footer-col">
            <h4>Locations</h4>
            <ul>
              <li>New York</li>
              <li>Ohio</li>
              <li>Laconia</li>
              <li>California</li>
              <li>Texas</li>
              <li>Florida</li>
            </ul>
          </div>

          {/* NAV */}
          <div className="fm-footer-col">
            <h4>Company</h4>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          {/* NEWSLETTER + SOCIAL */}
          <div className="fm-footer-col">
            <h4>Stay Updated</h4>
            <p>Get insights, tips & updates straight to your inbox.</p>

            <form className="fm-newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>

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
        </div>

        {/* BOTTOM */}
        <div className="fm-footer-bottom">
          <p>© 2026 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
