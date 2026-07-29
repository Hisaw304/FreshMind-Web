import { Link } from "react-router-dom";
import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const avatars = [
  { name: "United States", img: "/images/avatar1.jpg", x: 38, y: 55 },
  { name: "Canada", img: "/images/avatar2.jpg", x: 25, y: 45 },
  { name: "United Kingdom", img: "/images/avatar3.jpg", x: 73, y: 34 },
  { name: "Australia", img: "/images/avatar4.jpg", x: 88, y: 82 },
  { name: "Worldwide", img: "/images/avatar5.jpg", x: 55, y: 48 },
];
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function LocalMarketing({ cities = [] }) {
  const sampleCities = useMemo(() => {
    const source = cities.length
      ? cities
      : ["United States", "United Kingdom", "Canada", "Australia", "Worldwide"];

    return source.slice(0, 5);
  }, [cities]);
  const localRef = useRef(null);
  const cityChipsRef = useRef([]);
  const avatarRefs = useRef([]);

  useGSAP(
    () => {
      // ==========================
      // MAIN TIMELINE
      // ==========================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: localRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".fm-local-header h2", {
        y: 60,
        autoAlpha: 0,
        filter: "blur(8px)",
        duration: 0.9,
      })

        .from(
          ".fm-local-content p",
          {
            y: 30,
            autoAlpha: 0,
            stagger: 0.18,
            duration: 0.7,
          },
          "-=0.45"
        )

        .from(
          ".fm-local-actions",
          {
            y: 25,
            autoAlpha: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        )

        .from(
          ".fm-map",
          {
            x: 80,
            autoAlpha: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.7"
        );

      // ==========================
      // CITY CHIPS
      // ==========================
      cityChipsRef.current.forEach((chip, index) => {
        if (!chip) return;

        gsap.from(chip, {
          scrollTrigger: {
            trigger: chip,
            start: "top 90%",
            once: true,
          },
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          delay: index * 0.05,
          ease: "back.out(1.5)",
        });

        const enter = () => {
          gsap.to(chip, {
            y: -4,
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(chip, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        chip.addEventListener("mouseenter", enter);
        chip.addEventListener("mouseleave", leave);
      });

      // ==========================
      // AVATARS
      // ==========================
      avatarRefs.current.forEach((avatar, index) => {
        if (!avatar) return;

        gsap.from(avatar, {
          scrollTrigger: {
            trigger: avatar,
            start: "top 92%",
            once: true,
          },
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "back.out(2)",
        });

        // Floating animation
        gsap.to(avatar, {
          y: -8,
          duration: gsap.utils.random(2, 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 1),
        });
      });

      // ==========================
      // MAP PARALLAX
      // ==========================
      gsap.to(".fm-map", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".fm-map",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: localRef }
  );
  return (
    <section className="fm-local" ref={localRef}>
      <div className="fm-local-container">
        {/* HEADING */}
        <div className="fm-local-header">
          <h2>
            Helping Businesses <span>Grow Locally</span>
          </h2>
        </div>

        <div className="fm-local-grid">
          {/* LEFT */}
          <div className="fm-local-content">
            <p>
              Growing your business starts with being visible where your
              customers are searching. We create local SEO and digital marketing
              strategies that increase visibility, generate qualified leads, and
              turn visitors into loyal customers.
            </p>

            <p>
              Whether you serve one neighborhood, an entire city, or multiple
              locations, we help your business build trust, rank higher in
              search results, and reach the right audience.
            </p>

            <p>
              Whether you're targeting a single city or expanding across
              regions, we build digital systems that drive visibility, trust,
              and results.
            </p>

            {/* CITY CHIPS */}
            <div className="fm-city-list">
              {sampleCities.map((city, index) => (
                <div
                  key={city}
                  ref={(el) => (cityChipsRef.current[index] = el)}
                  className="fm-city-chip"
                >
                  <span className="fm-dot" />
                  {city}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="fm-local-actions">
              <Link to="/contact" className="fm-btn-primary">
                Grow My Business
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fm-local-map">
            <div className="fm-map">
              {avatars.map((a, index) => (
                <div
                  key={a.name}
                  ref={(el) => (avatarRefs.current[index] = el)}
                  className="fm-avatar"
                  style={{
                    left: `${a.x}%`,
                    top: `${a.y}%`,
                  }}
                >
                  <img src={a.img} alt={a.name} />

                  <span className="fm-avatar-line" />

                  <div className="fm-avatar-tooltip">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
