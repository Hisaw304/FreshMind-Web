import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactTyped } from "react-typed";
import dashboardImg from "../assets/hero-fm.jpg";

gsap.registerPlugin(useGSAP);

const services = [
  "Custom Websites",
  "UI/UX Design",
  "Landing Pages",
  "SEO Optimization",
  "Brand Identity",
  "Website Redesign",
  "E-Commerce Stores",
  "Mobile Responsive",
  "Website Hosting",
  "Performance Optimization",
];

export default function Hero() {
  const heroRef = useRef(null);
  const dashboardRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // ========================
      // TEXT
      // ========================
      tl.from(".fm-hero-typed", {
        y: 25,
        autoAlpha: 0,
        duration: 0.5,
      })
        .from(
          ".fm-hero-card",
          {
            y: 80,
            autoAlpha: 0,
            stagger: 0.18,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".fm-hero-text",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".fm-hero-actions",
          {
            y: 25,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.45"
        )

        // ========================
        // DASHBOARD ENTRANCE
        // ========================
        .fromTo(
          dashboardRef.current,
          {
            autoAlpha: 0,
            x: 180,
            y: 50,
            rotation: 8,
            scale: 0.82,
            transformOrigin: "center center",
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.8)",
          },
          "-=0.9"
        );

      // ========================
      // FLOATING
      // ========================
      gsap.to(dashboardRef.current, {
        y: -18,
        rotation: 1,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });

      // ========================
      // 3D MOUSE TILT
      // ========================
      const card = dashboardRef.current;

      const move = (e) => {
        const rect = card.getBoundingClientRect();

        const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 18;

        const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -18;

        gsap.to(card, {
          rotateY,
          rotateX,
          duration: 0.45,
          ease: "power2.out",
          transformPerspective: 1200,
          transformOrigin: "center center",
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      };
    },
    { scope: heroRef }
  );
  return (
    <section className="fm-hero" ref={heroRef}>
      {/* GRID BG */}
      <div className="fm-hero-grid-bg" />

      <div className="fm-hero-container">
        {/* MAIN GRID */}
        <div className="fm-hero-main">
          {/* LEFT */}
          <div className="fm-hero-content">
            <div className="fm-hero-typed">
              <ReactTyped
                strings={[
                  "Professional Web Design",
                  "High-Converting Websites",
                  "Modern UI/UX Experiences",
                  "Business Growth Solutions",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>

            <div className="fm-hero-headlines">
              <div className="fm-hero-card">
                <h1>
                  Build a modern <span>online presence</span>
                </h1>
              </div>

              <div className="fm-hero-card">
                <h1>
                  Websites that drive <span>growth</span> & <span>trust</span>
                </h1>
              </div>
            </div>

            <p className="fm-hero-text">
              We design and develop high-performing websites that help
              businesses stand out, attract clients, and scale with confidence.
            </p>

            <div className="fm-hero-actions">
              <a href="#contact" className="fm-btn-primary">
                Let's Get To Work
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fm-hero-visual">
            <div className="fm-dashboard" ref={dashboardRef}>
              <img src={dashboardImg} alt="Dashboard preview" />
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="fm-hero-marquee">
          <div className="fm-hero-marquee-track">
            {[...services, ...services].map((item, i) => (
              <div key={i} className="fm-hero-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
