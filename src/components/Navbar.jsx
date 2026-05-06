import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 HANDLE ANCHOR NAVIGATION FROM ANY PAGE
  const handleAnchorClick = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Services", anchor: "services" },
    { name: "FAQ", anchor: "faq" },
    { name: "Testimonials", anchor: "testimonials" },

    { name: "Contact", path: "/contact", type: "button" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fm-navbar">
        <div className="fm-navbar-inner">
          {/* LOGO */}
          <Link to="/">
            <img src="/logo.png" alt="logo" className="fm-logo" />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="fm-nav-links">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`fm-nav-link ${
                  link.type === "button" ? "fm-nav-btn" : ""
                }`}
              >
                {link.anchor ? (
                  <button onClick={() => handleAnchorClick(link.anchor)}>
                    {link.name}
                  </button>
                ) : (
                  <Link to={link.path}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE (tablet + desktop) */}
          <div className="fm-nav-right">
            {/* PHONE */}
            <a href="tel:+18608213853" className="fm-nav-phone">
              <Phone size={16} />
              <span>+1 (860) 821-3853</span>
            </a>

            {/* CONTACT BUTTON */}
            <Link to="/contact" className="fm-nav-contact-btn">
              Contact
            </Link>

            {/* HAMBURGER */}
            <button onClick={() => setOpen(!open)} className="fm-hamburger">
              <div className={`fm-ham ${open ? "open" : ""}`}>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fm-mobile-wrapper"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="fm-mobile-card">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {link.anchor ? (
                    <button
                      className="fm-mobile-link"
                      onClick={() => handleAnchorClick(link.anchor)}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`fm-mobile-link ${
                        link.type === "button" ? "fm-mobile-btn" : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}

                  {i !== navLinks.length - 1 && <hr />}
                </div>
              ))}

              {/* PHONE INSIDE MOBILE */}
              <a href="tel:+18608213853" className="fm-mobile-phone">
                <Phone size={18} /> +1 (860) 821-3853
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
