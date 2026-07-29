import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Images - public/images/...
const images = [
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.jpg",
  "/images/office4.jpg",
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  const resultsRef = useRef(null);
  const statCardsRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: resultsRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // ==========================
      // HEADER
      // ==========================
      tl.from(".fm-results-header h2", {
        y: 60,
        autoAlpha: 0,
        filter: "blur(8px)",
        duration: 0.9,
      })

        // ==========================
        // LEFT TEXT
        // ==========================
        .from(
          ".fm-results-text",
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.45"
        )

        // ==========================
        // RIGHT IMAGE
        // ==========================
        .from(
          ".fm-results-right",
          {
            x: 100,
            autoAlpha: 0,
            scale: 0.95,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        );

      // ==========================
      // STATS
      // ==========================
      gsap.from(".fm-stat-card", {
        scrollTrigger: {
          trigger: ".fm-stats-grid",
          start: "top 85%",
          once: true,
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.5)",
      });

      // ==========================
      // HOVER
      // ==========================
      gsap.utils.toArray(".fm-stat-card").forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });

      // ==========================
      // CAROUSEL PARALLAX
      // ==========================
      const carousel = document.querySelector(".fm-carousel");

      if (carousel) {
        carousel.addEventListener("mousemove", (e) => {
          const rect = carousel.getBoundingClientRect();

          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;

          gsap.to(carousel, {
            rotateY: x,
            rotateX: y,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1200,
          });
        });

        carousel.addEventListener("mouseleave", () => {
          gsap.to(carousel, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      }
    },
    { scope: resultsRef }
  );
  return (
    <section className="fm-results" ref={resultsRef}>
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
          className="fm-results-container"
          tabIndex={-1}
          onKeyDown={onKeyDown}
        >
          {/* LEFT */}
          <div className="fm-results-left">
            <p className="fm-results-text">
              Our experience and proven track record help businesses grow with
              measurable results. From local startups to established brands, we
              deliver strategies that actually move the needle.
            </p>

            <dl className="fm-stats-grid">
              {targets.map((_, i) => (
                <div
                  key={labels[i]}
                  className="fm-stat-card"
                  ref={(el) => {
                    statCardsRef.current[i] = el;
                  }}
                >
                  <dt className="fm-stat-value">
                    {i === 0
                      ? `${counts[i]}+`
                      : i === 2
                      ? `${counts[i]}%`
                      : counts[i]}
                  </dt>

                  <dd className="fm-stat-label">{labels[i]}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT */}
          <div className="fm-results-right">
            <div className="fm-carousel">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Result ${idx + 1}`}
                  className={`fm-carousel-img ${
                    idx === currentIndex ? "active" : ""
                  }`}
                />
              ))}

              <div className="fm-carousel-controls">
                <button
                  type="button"
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
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={idx === currentIndex ? "active" : ""}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((i) => (i + 1) % images.length)
                  }
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
