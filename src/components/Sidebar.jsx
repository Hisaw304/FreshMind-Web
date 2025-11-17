import React, { useEffect, useRef } from "react";
import { X, Home, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Full-screen right-side drawer for small screens.
 * - Covers entire viewport (inset-0)
 * - Links vertically centered
 * - Icons on each link
 * - ESC to close, overlay click to close, swipe right to close, body scroll lock
 */
export default function Sidebar({ open, onClose }) {
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const touchRef = useRef({ startX: 0, touching: false });

  // touch swipe-to-close
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    function onTouchStart(e) {
      if (!open) return;
      touchRef.current.touching = true;
      touchRef.current.startX = e.touches?.[0]?.clientX ?? 0;
    }
    function onTouchEnd(e) {
      if (!touchRef.current.touching) return;
      touchRef.current.touching = false;
      const endX = e.changedTouches?.[0]?.clientX ?? 0;
      // user swiped right (endX > startX) enough to close
      if (endX - touchRef.current.startX > 60) onClose?.();
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, onClose]);

  // keyboard + focus + scroll lock
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab" && open && rootRef.current) {
        const focusables = rootRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (open) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus?.(), 60);
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }

    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Drawer (full screen) */}
      <aside
        ref={rootRef}
        className={`fixed inset-0 z-50 transform bg-slate-900/95 text-white transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* Close button (top-right) */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-5 right-5 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          <X size={22} />
        </button>

        {/* Centered nav links */}
        <nav className="h-full flex flex-col items-center justify-center gap-6">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-4 text-3xl font-semibold hover:text-teal-400 transition"
            aria-label="Home"
          >
            <Home className="w-8 h-8" /> <span>Home</span>
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="flex items-center gap-4 text-3xl font-semibold hover:text-teal-400 transition"
            aria-label="About"
          >
            <Info className="w-8 h-8" /> <span>About</span>
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center gap-4 text-3xl font-semibold hover:text-teal-400 transition"
            aria-label="Contact"
          >
            <Mail className="w-8 h-8" /> <span>Contact</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
