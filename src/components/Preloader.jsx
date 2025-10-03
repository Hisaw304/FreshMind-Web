// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";

/**
 * Preloader component
 * - Listens for window `load` event, then fades out and calls `onFinish`.
 * - Uses Tailwind classes for layout. Spinner color uses `border-t-teal-400` per your request.
 *
 * Props:
 * - onFinish: function called when preloader is fully hidden (so parent can remove it)
 * - logoSrc: optional path to your logo (defaults to /logo192.png)
 */
export default function Preloader({ onFinish, logoSrc = "/logo.png" }) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    let t;
    const handleLoad = () => {
      // give a small delay so the spinner is visible briefly even on fast loads
      t = setTimeout(() => setIsHiding(true), 200);
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(t);
    };
  }, []);

  // after opacity transition ends, notify parent to remove the component from DOM
  useEffect(() => {
    if (!isHiding) return;
    const timeout = setTimeout(() => {
      onFinish && onFinish();
    }, 500); // match the CSS/Tailwind transition duration
    return () => clearTimeout(timeout);
  }, [isHiding, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ease-out ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isHiding}
    >
      <div className="relative flex items-center justify-center">
        {/* Spinner (behind logo) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-40 h-40 border-4 border-gray-200 border-t-teal-400 rounded-full animate-spin"
            aria-hidden="true"
          ></div>
        </div>

        {/* Logo (in front) - change `logoSrc` as needed */}
        <img src={logoSrc} alt="Logo" className="w-24 h-24 relative z-10" />

        {/* accessible text for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
