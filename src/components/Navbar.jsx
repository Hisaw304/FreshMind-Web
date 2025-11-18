import React, { useState } from "react";
import { Menu, Home, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import ToolsMarquee from "./ToolsMarquee"; // make sure this file exists

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="bg-slate-900/95 backdrop-blur-md text-white shadow">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* logo (no text) */}
            <Link to="/" aria-label="Home" className="flex items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="w-36 h-9 object-cover"
              />
            </Link>

            {/* DESKTOP LINKS (visible md+) */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 px-2 py-1 hover:text-teal-400 transition text-lg"
                aria-label="Home"
              >
                <Home className="w-5 h-5" /> <span>Home</span>
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 px-2 py-1 hover:text-teal-400 transition text-lg"
                aria-label="About"
              >
                <Info className="w-5 h-5" /> <span>About</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 px-2 py-1 hover:text-teal-400 transition text-lg"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" /> <span>Contact</span>
              </Link>
            </div>

            {/* MOBILE HAMBURGER (only visible < md) */}
            <div className="md:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
                aria-expanded={sidebarOpen}
                className="p-2 rounded-md hover:bg-white/6 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>

          {/* Tools marquee directly under the navbar */}
          <div className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-2">
              <ToolsMarquee />
            </div>
          </div>
        </nav>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
