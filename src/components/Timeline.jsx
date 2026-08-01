// src/sections/Timeline.jsx

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const timeline = [
  {
    year: "2021",
    title: "FreshMind Begins",
    description:
      "FreshMind was founded with one simple mission: build modern websites that help businesses establish a strong online presence, earn customer trust, and grow with confidence.",
  },
  {
    year: "2022",
    title: "Building Momentum",
    description:
      "As more businesses came on board, we refined our design process, focused on user experience, and started creating websites that not only looked beautiful but delivered measurable business results.",
  },
  {
    year: "2023",
    title: "Expanding Our Services",
    description:
      "We expanded beyond traditional business websites into SEO, performance optimization, landing pages, booking systems, and custom web solutions tailored to each client's goals.",
  },
  {
    year: "2024",
    title: "Custom Web Solutions",
    description:
      "FreshMind began developing larger digital platforms, admin dashboards, API integrations, and advanced business systems designed to automate operations and improve efficiency.",
  },
  {
    year: "2025",
    title: "AI & Automation",
    description:
      "Artificial Intelligence became part of our workflow as we introduced AI chatbots, intelligent automations, lead generation tools, and smarter customer experiences for modern businesses.",
  },
  {
    year: "2026",
    title: "Trusted Digital Partner",
    description:
      "Today, FreshMind partners with businesses across multiple industries, delivering premium websites, AI-powered solutions, and digital experiences built for long-term growth.",
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);

  useGSAP(
    () => {
      // ==========================
      // HEADER
      // ==========================

      gsap.from(".fm-timeline-header", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fm-timeline-header",
          start: "top 80%",
        },
      });

      // ==========================
      // TIMELINE LINE
      // ==========================

      gsap.from(".fm-timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".fm-timeline-wrapper",
          start: "top 75%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // ==========================
      // LEFT CARDS
      // ==========================

      gsap.utils
        .toArray(".fm-timeline-row.left .fm-timeline-card")
        .forEach((card) => {
          gsap.from(card, {
            x: -120,
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          });
        });

      // ==========================
      // RIGHT CARDS
      // ==========================

      gsap.utils
        .toArray(".fm-timeline-row.right .fm-timeline-card")
        .forEach((card) => {
          gsap.from(card, {
            x: 120,
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          });
        });

      // ==========================
      // HOLES / RINGS
      // ==========================

      gsap.utils
        .toArray(".fm-timeline-hole, .fm-timeline-end-hole")
        .forEach((hole) => {
          gsap.from(hole, {
            scale: 0,
            rotate: -180,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: hole,
              start: "top 85%",
            },
          });
        });

      // ==========================
      // FINAL CARD
      // ==========================

      gsap.from(".fm-timeline-end-card", {
        y: 100,
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".fm-timeline-end-card",
          start: "top 80%",
        },
      });
    },
    { scope: timelineRef }
  );

  return (
    <section className="fm-timeline" ref={timelineRef}>
      <div className="fm-timeline-container">
        {/* HEADER */}
        <div className="fm-timeline-header">
          <span className="fm-section-tag">OUR JOURNEY</span>

          <h2>
            How <span>FreshMind</span> Has Grown
          </h2>

          <p>
            Every year has been another step toward helping businesses build
            stronger digital experiences. Here's a look at how our journey has
            evolved.
          </p>
        </div>
        <div className="fm-timeline-wrapper">
          {/* Center Line */}
          <div className="fm-timeline-line" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`fm-timeline-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="fm-timeline-card">
                {/* Hole where the timeline passes */}
                <div className="fm-timeline-hole">
                  <span className="fm-timeline-ring" />
                </div>

                <span className="fm-timeline-year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}

          {/* Final Center Card */}

          <div className="fm-timeline-end">
            <div className="fm-timeline-end-hole">
              <span className="fm-timeline-ring" />
            </div>

            <div className="fm-timeline-end-card">
              <span className="fm-timeline-year">THE FUTURE</span>

              <h3>Building What's Next</h3>

              <p>
                Our journey is just beginning. We continue investing in emerging
                technologies, AI-powered experiences, scalable web applications,
                and innovative digital solutions that help businesses stay ahead
                in an ever-changing digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
