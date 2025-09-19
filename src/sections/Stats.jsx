import React, { useEffect, useRef, useState } from "react";

// Images - public/images/...
const images = [
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.jpg",
  "/images/office4.jpg",
];

export default function Stats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const targets = [5, 140, 95, 24];
  const labels = [
    "Years Experience",
    "Projects Delivered",
    "Client Satisfaction",
    "Support",
  ];

  const containerRef = useRef(null);
  const imageIntervalRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  // Auto-rotate (pauses on hover or when user prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!isPaused) {
      imageIntervalRef.current = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % images.length);
      }, 4000);
    }

    return () => clearInterval(imageIntervalRef.current);
  }, [isPaused]);

  // IntersectionObserver: start count-up animation when section becomes visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startCounters();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startCounters() {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(targets);
      return;
    }

    const duration = 1200; // ms

    targets.forEach((target, idx) => {
      const start = performance.now();

      function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts((prev) => {
          const next = [...prev];
          next[idx] = Math.round(target * eased);
          return next;
        });

        if (progress < 1) requestAnimationFrame(frame);
        else {
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = target;
            return next;
          });
        }
      }

      requestAnimationFrame(frame);
    });
  }

  // keyboard navigation for slideshow
  function onKeyDown(e) {
    if (e.key === "ArrowLeft")
      setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
  }

  return (
    <section className="py-16 stats-section" aria-labelledby="stats-heading">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stats-inner">
        {/* Stats side */}
        <div ref={containerRef} tabIndex={-1} onKeyDown={onKeyDown}>
          <h2
            id="stats-heading"
            className="section-title text-3xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Results You Can Trust
          </h2>

          <p className="text-slate-600 mb-10">
            Our experience and proven track record help businesses grow with
            measurable results. From local startups to international brands, we
            deliver strategies that work.
          </p>

          {/* semantic definition list for accessibility */}
          <dl className="grid grid-cols-2 gap-6" aria-live="polite">
            {targets.map((_, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl card-shadow card-glass"
                role="group"
                aria-label={labels[i]}
              >
                <dt className="text-4xl font-extrabold text-orange-500 leading-none">
                  {i === 0
                    ? `${counts[i]}+`
                    : i === 2
                    ? `${counts[i]}%`
                    : counts[i]}
                </dt>
                <dd className="text-slate-600 mt-2">{labels[i]}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Rotating Image side */}
        <div>
          <div
            className="relative rounded-2xl overflow-hidden card-shadow h-[400px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            tabIndex={0}
            aria-label="Project imagery carousel. Use left and right arrow keys to navigate."
          >
            {/* stacked images for smooth crossfade */}
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Office workspace ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out transform ${
                  idx === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
                style={{ willChange: "opacity, transform" }}
              />
            ))}

            {/* soft accent gradient overlay using your CSS variables */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                opacity: 0.1,
                mixBlendMode: "overlay",
              }}
            />

            {/* subtle glass panel in the corner for buttons / indicators */}
            <div
              className="absolute bottom-4 left-4 rounded-full px-3 py-2 flex items-center gap-2 backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--glass-border)",
              }}
            >
              <button
                onClick={() =>
                  setCurrentIndex(
                    (i) => (i - 1 + images.length) % images.length
                  )
                }
                aria-label="Previous image"
                className="p-2 rounded-full text-white bg-black/20 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                ◀
              </button>

              {/* dots */}
              <div className="flex items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    className={`w-2 h-2 rounded-full focus:outline-none ${
                      idx === currentIndex
                        ? "ring-2 ring-offset-1 ring-white"
                        : "bg-white/40"
                    }`}
                    style={{
                      background:
                        idx === currentIndex
                          ? "white"
                          : "rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
                aria-label="Next image"
                className="p-2 rounded-full text-white bg-black/20 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
