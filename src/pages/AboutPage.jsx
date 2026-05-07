// src/pages/AboutPage.jsx
import React from "react";
import About from "../components/About";
import FooterCTA from "../components/FooterCTA";
import ChatWidget from "../components/ChatWidget";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import belmont from "../assets/belmont.png";
import bigfoot from "../assets/bigfoot.png";
import createescapes from "../assets/createescapes.png";
import fairspares from "../assets/fairspares.png";
import laconia from "../assets/laconia.png";
import lachance from "../assets/lachance.png";
import trini from "../assets/Trini-and-Sons-1024x1024.webp";
import trailer from "../assets/Trailer-Outlet-1024x1024.webp";
import total from "../assets/Total-Concepts-1024x1024.webp";
import sawin from "../assets/Sawin-1024x1024.webp";
import prime from "../assets/Prime-Sealcoating-1024x1024.webp";
import necc from "../assets/NECC-1024x1024.webp";
import epoxy from "../assets/Lakes-Region-Epoxy-1024x1024.webp";
import intervale from "../assets/Intervale-Stove-Shop-1024x1024.webp";
import grasshoppers from "../assets/Grasshoppers-1024x1024.webp";
import concierge from "../assets/Lakes-Region-Concierge-1024x1024.webp";

const clients = [
  { name: "Belmont Firearms", logo: belmont },
  { name: "Bigfoot HVAC", logo: bigfoot },
  { name: "Create Escapes", logo: createescapes },
  { name: "Fair Spares NE", logo: fairspares },
  { name: "Laconia Refrigeration", logo: laconia },
  { name: "LaChance Water", logo: lachance },
  { name: "Trini & Sons", logo: trini },
  { name: "Trailer Outlet", logo: trailer },
  { name: "Total Concepts", logo: total },
  { name: "Sawin", logo: sawin },
  { name: "Prime Sealcoating", logo: prime },
  { name: "NECC", logo: necc },
  { name: "Lakes Region Epoxy", logo: epoxy },
  { name: "Intervale Stove Shop", logo: intervale },
  { name: "Grasshoppers", logo: grasshoppers },
  { name: "Lakes Region Concierge", logo: concierge },
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

      <section id="porfolio" className="fm-portfolio">
        <div className="fm-portfolio-container">
          {/* HEADER */}
          <div className="fm-portfolio-header">
            <div>
              <h2>
                Selected Projects From Our <span>Past Work</span>
              </h2>
            </div>

            <div>
              <p>
                A curated look at some of the brands and products we’ve helped
                shape. From strategy to execution, each project reflects our
                focus on clarity, performance, and meaningful user experience.
              </p>
            </div>
          </div>

          {/* SWIPER */}
          <div className="fm-portfolio-slider">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                },
                640: {
                  slidesPerView: 1.5,
                },
                900: {
                  slidesPerView: 2.2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {clients.map((client, i) => (
                <SwiperSlide key={i}>
                  <div className="fm-portfolio-card">
                    <img src={client.logo} alt={client.name} />

                    <div className="fm-portfolio-overlay">
                      <h4>{client.name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
