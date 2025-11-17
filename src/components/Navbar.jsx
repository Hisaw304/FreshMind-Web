// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          {/* Logo */}
          <img
            src="/logo.png" // your public folder logo
            alt="FreshMind Web Logo"
            className="w-40 h-10 md:w-50 md:h-13 object-cover"
          />

          {/* Brand Name */}
          {/* <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            FreshMind Web
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="hover:text-teal-400 transition">{item}</span>
              {/* Underline hover effect */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900  px-6 pb-4 space-y-3">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block hover:text-teal-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
