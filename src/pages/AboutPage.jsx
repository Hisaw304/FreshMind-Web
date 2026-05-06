// src/pages/AboutPage.jsx
import React from "react";
import About from "../components/About";
import FooterCTA from "../components/FooterCTA";
import ChatWidget from "../components/ChatWidget";

export const PORTFOLIO = [
  {
    src: "/images/belmont.png",
    alt: "Belmont Firearms website screenshot",
    title: "Belmont Firearms",
  },
  {
    src: "/images/bigfoot.png",
    alt: "Bigfoot HVAC website screenshot",
    title: "Bigfoot HVAC",
  },
  {
    src: "/images/createescapes.png",
    alt: "CreateEscapes travel platform screenshot",
    title: "CreateEscapes",
  },
  {
    src: "/images/fairspares.png",
    alt: "Fair Spares NE website screenshot",
    title: "Fair Spares NE",
  },
  {
    src: "/images/laconia.png",
    alt: "Laconia Refrigeration website screenshot",
    title: "Laconia Refrigeration",
  },
  {
    src: "/images/lachance.png",
    alt: "LaChance Water website screenshot",
    title: "LaChance Water",
  },
  {
    src: "/images/Belmont-Firearms-1024x1024.webp",
    alt: "Belmont Firearms project image",
    title: "Belmont Firearms",
  },
  {
    src: "/images/Trini-and-Sons-1024x1024.webp",
    alt: "Trini & Sons project screenshot",
    title: "Trini & Sons",
  },
  {
    src: "/images/Trailer-Outlet-1024x1024.webp",
    alt: "Trailer Outlet project screenshot",
    title: "Trailer Outlet",
  },
  {
    src: "/images/Total-Concepts-1024x1024.webp",
    alt: "Total Concepts project screenshot",
    title: "Total Concepts",
  },
  {
    src: "/images/Sawin-1024x1024.webp",
    alt: "Sawin project screenshot",
    title: "Sawin",
  },
  {
    src: "/images/Prime-Sealcoating-1024x1024.webp",
    alt: "Prime Sealcoating project screenshot",
    title: "Prime Sealcoating",
  },
  {
    src: "/images/NECC-1024x1024.webp",
    alt: "NECC project screenshot",
    title: "NECC",
  },
  {
    src: "/images/Lakes-Region-Epoxy-1024x1024.webp",
    alt: "Lakes Region Epoxy project screenshot",
    title: "Lakes Region Epoxy",
  },
  {
    src: "/images/Intervale-Stove-Shop-1024x1024.webp",
    alt: "Intervale Stove Shop project screenshot",
    title: "Intervale Stove Shop",
  },
  {
    src: "/images/Grasshoppers-1024x1024.webp",
    alt: "Grasshoppers project screenshot",
    title: "Grasshoppers",
  },
  {
    src: "/images/Lakes-Region-Concierge-1024x1024.webp",
    alt: "Lakes Region Concierge project screenshot",
    title: "Lakes Region Concierge",
  },
];

export default function AboutPage() {
  return (
    <div className="">
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Ready to Grow With a Team That <span>Cares?</span>
          </h2>

          <p>
            We don’t just build digital experiences — we build long-term
            partnerships. Let’s talk about how we can help your business scale
            with confidence.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Let’s Connect
          </a>
        </div>
      </section>

      <About />

      <section className="fm-consulting">
        <div className="fm-consulting-container">
          {/* MAIN HEADING (FULL WIDTH) */}
          <div className="fm-consulting-heading">
            <h2>
              Website Strategy & <span>Consulting</span>
            </h2>
          </div>

          {/* GRID */}
          <div className="fm-consulting-grid">
            {/* LEFT SIDE */}
            <div className="fm-consulting-left">
              <p>
                At FreshMind Agency, we help businesses unlock their full online
                potential through thoughtful strategy, modern design, and
                performance-driven execution.
              </p>

              <p>
                Whether you're starting from scratch or improving an existing
                presence, we guide you through every step with clarity and
                purpose.
              </p>

              <p>
                From user experience planning to conversion-focused design and
                scalable development, we build systems that attract, engage, and
                convert your ideal customers.
              </p>
            </div>

            {/* RIGHT SIDE (SCROLLING CARDS) */}
            <div className="fm-consulting-right">
              <div className="fm-consulting-scroll">
                {[
                  "Naming",
                  "Brand Strategy",
                  "Positioning",
                  "Visual Identity",
                  "Brand Refresh",
                  "Websites",
                  "Rapid Prototyping",
                  "User Research",
                  "Marketing",
                  "Digital Campaigns",
                  "Print Work",
                  "Copywriting",
                ].map((item, i) => (
                  <div key={i} className="fm-services-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BLOCK (FULL WIDTH) */}
          <div className="fm-consulting-footer">
            <h2>
              How We Can <span>Help You</span>
            </h2>

            <p>
              Contact us today — we’ll help you build a brand and website that
              drives real results.
            </p>
            <div className="">
              <a href="/contact" className="fm-btn-primary">
                Let’s Talk Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fm-portfolio">
        <div className="fm-portfolio-container">
          {/* HEADING */}
          <div className="fm-portfolio-header">
            <h2>
              Selected Projects From Our <span>Past Work</span>
            </h2>

            <p>
              A curated look at some of the brands and products we’ve helped
              shape. From strategy to execution, each project reflects our focus
              on clarity, performance, and meaningful user experience.
            </p>
          </div>

          {/* ROW 1 (scroll right) */}
          <div className="fm-portfolio-row fm-scroll-right">
            <div className="fm-portfolio-track">
              {[...PORTFOLIO, ...PORTFOLIO].map((p, i) => (
                <div key={i} className="fm-portfolio-card">
                  <img src={p.src} alt={p.alt} />
                  <div className="fm-portfolio-overlay">
                    <h4>{p.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 (scroll left) */}
          <div className="fm-portfolio-row fm-scroll-left">
            <div className="fm-portfolio-track">
              {[...PORTFOLIO, ...PORTFOLIO].map((p, i) => (
                <div key={i} className="fm-portfolio-card">
                  <img src={p.src} alt={p.alt} />
                  <div className="fm-portfolio-overlay">
                    <h4>{p.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="fm-portfolio-footer">
            <a href="/contact" className="fm-portfolio-btn">
              Want to See More Projects?
            </a>
          </div>
        </div>
      </section>
      <FooterCTA />
      <ChatWidget />
    </div>
  );
}
