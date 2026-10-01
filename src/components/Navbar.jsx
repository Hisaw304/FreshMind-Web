import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // HANDLE ANCHOR NAVIGATION FROM ANY PAGE
  const handleAnchorClick = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const industries = [
    {
      name: "Real Estate",
      path: "/industries/real-estate",
    },
    {
      name: "Law Firms",
      path: "/industries/law-firms",
    },
    {
      name: "Healthcare",
      path: "/industries/healthcare",
    },
    {
      name: "Restaurants",
      path: "/industries/restaurant",
    },
    {
      name: "Construction",
      path: "/industries/construction",
    },
    {
      name: "Startups",
      path: "/industries/startups",
    },
    {
      name: "Coaches",
      path: "/industries/coaches",
    },
    {
      name: "E-commerce",
      path: "/industries/ecommerce",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog & Insights", path: "/blog" },
    { name: "Contact", path: "/contact" },
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
                {link.name === "Industries" ? (
                  <div className="fm-industries-wrapper">
                    <Link to="/industries" className="fm-industries-trigger">
                      <span>Industries</span>
                      <ChevronDown size={14} />
                    </Link>

                    {/* DESKTOP DROPDOWN */}
                    <div className="fm-industries-dropdown">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.path}
                          className="fm-industry-dropdown-link"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.anchor ? (
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
                  {link.name === "Industries" ? (
                    <>
                      <div className="fm-mobile-industries-row">
                        <Link
                          to="/industries"
                          className="fm-mobile-link"
                          onClick={() => setOpen(false)}
                        >
                          Industries
                        </Link>

                        <button
                          type="button"
                          className="fm-mobile-industries-trigger"
                          onClick={() => setIndustriesOpen(!industriesOpen)}
                          aria-label="Toggle Industries menu"
                          aria-expanded={industriesOpen}
                        >
                          <ChevronDown
                            size={18}
                            className={
                              industriesOpen ? "fm-mobile-chevron-open" : ""
                            }
                          />
                        </button>
                      </div>

                      {industriesOpen && (
                        <div className="fm-mobile-industries">
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              to={industry.path}
                              className="fm-mobile-industry-link"
                              onClick={() => {
                                setIndustriesOpen(false);
                                setOpen(false);
                              }}
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : link.anchor ? (
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
