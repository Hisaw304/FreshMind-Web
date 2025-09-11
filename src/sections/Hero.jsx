// src/sections/Hero.jsx
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { cities } from "../data/cities"; // <- list of cities

export default function Hero({
  phone = "+1 (860) 821-3853",
  bookLink = "/contact",
  bgImage = "/images/hero-bg.jpg",
}) {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/80" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build a modern online presence
            <span className="block text-teal-400">
              Websites that drive growth & trust
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We design, develop, and manage professional websites with clean
            code, reliable hosting, and marketing support tailored to your
            business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-7 py-4 text-lg font-semibold text-white shadow-md
                         hover:bg-teal-600 active:scale-[0.98] transition"
            >
              Send Us a Message
            </Link>

            <a
              href={bookLink}
              className="inline-flex items-center justify-center rounded-xl border border-orange-500/70 px-6 py-3 font-semibold text-orange-300
                         hover:bg-orange-500 hover:text-white transition active:scale-[0.98]"
            >
              Book a Call
            </a>

            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              aria-label={`Call ${phone}`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-slate-300
                         hover:text-teal-300 transition"
            >
              Call {phone}
            </a>
          </motion.div>

          {/* Typed Cities */}
          <motion.p
            className="mt-10 text-xl font-semibold text-orange-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Looking for website design near{" "}
            <ReactTyped
              strings={cities}
              typeSpeed={80}
              backSpeed={40}
              backDelay={1000}
              loop
            />
            ? You’re in the right place!
          </motion.p>
        </motion.div>

        {/* Right Side: Optional Hero Image */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/hero-mockup.png"
            alt="Website preview"
            className="rounded-xl shadow-2xl border border-slate-800/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
