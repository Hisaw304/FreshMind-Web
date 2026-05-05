import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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
              <li key={link.name} className="fm-nav-link">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(!open)} className="fm-hamburger">
            <div className={`fm-ham ${open ? "open" : ""}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fm-mobile-wrapper"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="fm-mobile-card">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="fm-mobile-link"
                    onClick={() => setOpen(false)} // closes menu on click
                  >
                    {link.name}
                  </Link>
                  {i !== navLinks.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
