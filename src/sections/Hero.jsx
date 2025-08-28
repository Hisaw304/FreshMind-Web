// src/sections/Hero.jsx
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { cities } from "../data/cities"; // <- list of cities

export default function Hero({
  phone = "(123) 456-7890",
  bookLink = "/contact",
  bgImage = "/images/hero-bg.jpg",
}) {
  return (
    <section
      className="relative py-20 isolate overflow-hidden"
      style={
        bgImage
          ? {
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Build a modern online presence
          <span className="block text-teal-400">
            that drives growth and trust
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="mt-5 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
          We design, develop, and manage professional websites with clean code,
          reliable hosting, and marketing support tailored to your business.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-7 py-4 text-lg font-semibold text-white transition
                       hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 active:scale-[0.98]"
          >
            Send Us a Message
          </Link>

          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            aria-label={`Call ${phone}`}
            className="inline-flex items-center justify-center rounded-xl border border-slate-500/60 px-6 py-3 font-semibold text-white
                       transition hover:border-teal-400 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 active:scale-[0.98]"
          >
            Call {phone}
          </a>

          <a
            href={bookLink}
            className="inline-flex items-center justify-center rounded-xl border border-orange-500/70 px-6 py-3 font-semibold text-orange-300
                       transition hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 active:scale-[0.98]"
          >
            Book a Call
          </a>
        </div>

        {/* Location / tagline with typing cities */}
        <p className="mt-8 text-2xl font-semibold text-orange-400">
          If you are looking for website design near{" "}
          <ReactTyped
            strings={cities}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1200}
            loop
          />
          , you’ve come to the right place!
        </p>
      </div>
    </section>
  );
}
