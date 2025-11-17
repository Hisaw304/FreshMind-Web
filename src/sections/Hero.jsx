import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";
import { cities } from "../data/cities";

export default function Hero({
  phone = "+1 (860) 821-3853",
  bookLink = "/contact",
  bgImage = "/images/hero-bg.jpg",
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -24]);

  // CRAZY MOTION SYSTEM
  const container = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: -20,
      filter: "blur(18px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      rotateY: 8,
      scale: 0.9,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.1,
        ease: [0.18, 1, 0.22, 1],
        type: "spring",
        stiffness: 90,
        damping: 12,
      },
    },
  };

  const crazyParallax = {
    hidden: { opacity: 0, scale: 0.95, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const hover3D = {
    whileHover: {
      scale: 1.04,
      rotateX: 4,
      rotateY: -4,
      boxShadow: "0 25px 35px rgba(0,0,0,0.35)",
      transition: { duration: 0.35 },
    },
    whileTap: { scale: 0.97 },
  };

  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden mb-8 py-10 md:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.65), rgba(2,6,23,0.65)), url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/20 to-slate-900/20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* FULL-WIDTH HEADING + SUBHEADING */}
        <motion.h1
          id="hero-heading"
          className="text-center text-5xl md:text-7xl font-extrabold leading-[1.1] text-white mb-8"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <span className="block">Build a modern online presence</span>
          <span className="block gradient-animated-text mt-2">
            Websites that drive growth & trust
          </span>
        </motion.h1>

        <motion.p
          className="text-center text-lg md:text-2xl text-slate-200 max-w-4xl mx-auto mb-12"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          We design, develop and ship production-grade websites with clean code,
          fast hosting, and marketing support tailored to your business goals.
        </motion.p>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="text-center md:text-left z-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={item}
            >
              <Link
                to={bookLink}
                className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-lg font-semibold text-white shadow-md cta-glow cta-frost focus-visible:ring-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-3"
                  aria-hidden
                >
                  <path
                    d="M2 11.5L22 2L13.5 22L9 14L2 11.5Z"
                    fill="currentColor"
                    opacity="0.92"
                  />
                </svg>
                Send Us a Message
              </Link>

              <a
                href={bookLink}
                className="inline-flex items-center justify-center rounded-xl border border-orange-500/60 px-6 py-3 font-semibold text-orange-300 hover:bg-orange-500 hover:text-white transition active:scale-[0.98]"
              >
                Book a Call
              </a>

              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex border border-teal-50 items-center justify-center rounded-xl px-6 py-3 font-semibold text-slate-300 hover:text-teal-300 transition"
              >
                Call {phone}
              </a>
            </motion.div>

            {/* Typed Cities */}
            <motion.p
              className="mt-10 text-xl font-semibold text-orange-400"
              variants={item}
            >
              Looking for website developer near&nbsp;
              <ReactTyped
                className="inline-block text-orange-300 font-bold"
                strings={cities}
                typeSpeed={80}
                backSpeed={40}
                backDelay={1000}
                loop
              />
              ? You’re in the right place!
            </motion.p>

            {/* Metrics */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4 items-center text-sm text-slate-300"
              variants={item}
            >
              <div className="inline-flex items-center gap-3">
                <strong className="text-white">140+</strong>
                <span>Websites launched</span>
              </div>
              <div className="inline-flex items-center gap-3">
                <strong className="text-white">95%</strong>
                <span>Client satisfaction</span>
              </div>
              <div className="inline-flex items-center gap-3">
                <strong className="text-white">Faster</strong>
                <span>Page speed & conversions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE MOCKUP */}
          <motion.div
            className="mx-auto md:block hidden relative"
            variants={crazyParallax}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}
            whileHover={{
              ...hover3D.whileHover, // 🔥 keep your original 3D tilt
              boxShadow: "0 35px 55px rgba(0,0,0,0.45)",
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            whileTap={{
              scale: 0.97,
              rotateX: 2,
              rotateY: -2,
            }}
            aria-hidden
          >
            <div className="hero-accent-blur" />
            <div className="relative max-w-[520px]">
              <div className="absolute border border-white -inset-4 rounded-2xl -z-10" />
              <picture>
                <source srcSet="/images/hero-mockup.png" type="image/webp" />
                <img
                  src="/images/hero-mockup.png"
                  alt="Website preview"
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl shadow-2xl border border-slate-800/30 w-full"
                  width="520"
                  height="360"
                />
              </picture>
              <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full bg-slate-900/60 text-xs font-semibold text-white backdrop-blur-md">
                <span>
                  Crafting websites for businesses & creators worldwide
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
