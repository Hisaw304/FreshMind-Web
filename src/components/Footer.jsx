// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">FreshMind Web</h2>
          <p className="mt-1 text-sm text-slate-600">
            Building modern websites with speed & creativity
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-teal-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Contact</h3>
          <p className="mt-2 text-sm">Email: info@fishlymind.com</p>
          <p className="text-sm">Phone: +1 (860) 821-3853</p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-6">
        © {new Date().getFullYear()} WebSmart. All rights reserved.
      </div>
    </footer>
  );
}
