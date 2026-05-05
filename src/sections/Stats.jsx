import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

  const targets = [5, 340, 95, 38];
  const labels = [
    "Years Experience",
    "Projects Delivered",
    "Client Satisfaction",
    "Team Members",
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
    <section className="fm-results">
      <div className="fm-results-wrapper">
        {/* HEADER */}
        <div className="fm-results-header">
          <h2>
            Results You Can <span>Expect</span>
          </h2>
        </div>

        {/* GRID */}
        <div
          ref={containerRef}
          tabIndex={-1}
          onKeyDown={onKeyDown}
          className="fm-results-container"
        >
          {/* LEFT */}
          <motion.div
            className="fm-results-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="fm-results-text">
              Our experience and proven track record help businesses grow with
              measurable results. From local startups to established brands, we
              deliver strategies that actually move the needle.
            </p>

            <dl className="fm-stats-grid">
              {targets.map((_, i) => (
                <motion.div
                  key={i}
                  className="fm-stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <dt className="fm-stat-value">
                    {i === 0
                      ? `${counts[i]}+`
                      : i === 2
                      ? `${counts[i]}%`
                      : counts[i]}
                  </dt>
                  <dd className="fm-stat-label">{labels[i]}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="fm-results-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="fm-carousel">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  className={`fm-carousel-img ${
                    idx === currentIndex ? "active" : ""
                  }`}
                />
              ))}

              <div className="fm-carousel-controls">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (i) => (i - 1 + images.length) % images.length
                    )
                  }
                >
                  ◀
                </button>

                <div className="fm-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={idx === currentIndex ? "active" : ""}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentIndex((i) => (i + 1) % images.length)
                  }
                >
                  ▶
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
