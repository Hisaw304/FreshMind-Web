// src/App.jsx (updated)
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Preloader
// import Preloader from "./components/Preloader";

export default function App() {
  // control whether the preloader is mounted. Preloader will call onFinish
  // after it fades out so we can remove it from the DOM.
  // const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Preloader mounted at root so it appears before everything */}
      {/* {showPreloader && (
        <Preloader
          // optional: pass a custom logo path if your logo isn't at /logo192.png
          // logoSrc={'/assets/my-logo.svg'}
          onFinish={() => setShowPreloader(false)}
        />
      )} */}

      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
