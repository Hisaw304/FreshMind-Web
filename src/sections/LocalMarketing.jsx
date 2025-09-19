import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Fixed LocalMarketing component:
 * - Uses `cityPins` (x,y in percent) — no p/point naming mismatch
 * - Each pin is keyboard-focusable (tabIndex=0), has accessible tooltip
 * - Unique gradient ids per pin to avoid duplicated SVG ids
 * - Works with prefers-reduced-motion
 */

/* Example accurate pinned positions (padded). Replace or compute dynamically if needed */
const cityPins = [
  { city: "Los Angeles", x: 6.0, y: 94.0 },
  { city: "New York", x: 38.96, y: 67.24 },
  { city: "Chicago", x: 28.81, y: 62.56 },
  { city: "Manchester", x: 92.42, y: 15.93 },
  { city: "Edinburgh", x: 91.72, y: 6.0 },
  { city: "London", x: 94.0, y: 23.86 },
];

export default function LocalMarketing({ cities = [] }) {
  // if you still want small city chips, pick a subset or use cities prop
  const sampleCities = useMemo(() => {
    const source = cities.length
      ? cities
      : [
          "New York",
          "Los Angeles",
          "London",
          "Manchester",
          "Edinburgh",
          "Chicago",
        ];
    return source.slice(0, 6);
  }, [cities]);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return (
    <section
      className="py-20 bg-slate-50 local-marketing"
      aria-labelledby="local-marketing-title"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <h2
              id="local-marketing-title"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            >
              Local Digital Marketing Professionals
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              Currently helping businesses grow in cities across the US, UK,
              Scotland, and beyond.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Every business is unique — and so is every market. Our team
              tailors digital strategies that connect with local audiences.
            </p>

            <div className="mb-6 flex flex-wrap gap-3 justify-center md:justify-start">
              {sampleCities.map((c) => (
                <button key={c} className="city-chip" aria-pressed="false">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden
                    className="shrink-0"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="5"
                      fill="currentColor"
                      style={{ color: "var(--accent-start)" }}
                    />
                  </svg>
                  <span className="text-sm text-slate-800">{c}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-block rounded-xl border border-orange-500/60 px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-200 hover:text-orange-500 transition active:scale-[0.98] rounded-lg shadow-lg hover:shadow-xl transition"
              >
                Make the First Move
              </Link>
              {/* <Link
                to="/services/local"
                className="inline-block px-4 py-2 rounded-full border border-white/10 text-sm font-semibold text-slate-700 bg-white/40 backdrop-blur-sm"
              >
                See Local Services
              </Link> */}
            </div>
          </div>

          {/* Right column: map */}
          <div>
            <div
              className="local-map relative h-[400px] w-full rounded-2xl shadow-lg overflow-hidden bg-slate-900"
              style={{
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Decorative background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                viewBox="0 0 800 480"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="mapLg" x1="0" x2="1" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--accent-start)"
                      stopOpacity="0.06"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--accent-end)"
                      stopOpacity="0.04"
                    />
                  </linearGradient>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#mapLg)"
                />
                <g fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1">
                  <line x1="0" y1="80" x2="800" y2="80" />
                  <line x1="0" y1="160" x2="800" y2="160" />
                  <line x1="0" y1="240" x2="800" y2="240" />
                  <line x1="0" y1="320" x2="800" y2="320" />
                </g>
              </svg>

              {/* Pins */}
              {cityPins.map((pin, i) => {
                // defensive guard: ensure numbers exist
                const left = typeof pin.x === "number" ? `${pin.x}%` : "50%";
                const top = typeof pin.y === "number" ? `${pin.y}%` : "50%";
                return (
                  <div
                    key={`pin-${i}`}
                    tabIndex={0} // keyboard-focusable
                    className="group absolute"
                    style={{
                      left,
                      top,
                      transform: "translate(-50%,-50%)",
                      zIndex: 3,
                    }}
                    aria-label={pin.city}
                    aria-describedby={`pin-tooltip-${i}`}
                  >
                    {/* pulsing background (if allowed) */}
                    {!prefersReducedMotion && (
                      <span
                        className="absolute -inset-1 w-5 h-5 rounded-full bg-orange-400/30 animate-ping"
                        aria-hidden
                      />
                    )}

                    {/* pin SVG with unique gradient id */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="relative drop-shadow-md transition-transform group-hover:scale-110 group-focus:scale-110"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient
                          id={`pinGrad-${i}`}
                          x1="0"
                          x2="1"
                          y1="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="var(--accent-start)" />
                          <stop offset="100%" stopColor="var(--accent-end)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill={`url(#pinGrad-${i})`}
                      />
                      <circle cx="12" cy="9" r="3" fill="#fff" />
                    </svg>

                    {/* tooltip (visible on hover/focus) */}
                    <div
                      id={`pin-tooltip-${i}`}
                      role="tooltip"
                      className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition bg-slate-800 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                      aria-hidden={false}
                    >
                      {pin.city}
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-3 left-3 text-xs text-slate-500 z-10">
                Sample service areas — local strategy tailored to each market
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
