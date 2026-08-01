// src/pages/AboutPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import FooterCTA from "../components/FooterCTA";
// import ChatWidget from "../components/ChatWidget";
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
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import CompanyValues from "../components/CompanyValues";
import ProcessPreview from "../components/ProcessPreview";
import StatsAbout from "../components/StatsAbout";
import Timeline from "../components/Timeline";

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
      <Helmet>
        <title>About FreshMind Web | Web Design & Development Agency</title>

        <meta
          name="description"
          content="Learn about FreshMind Web, a modern web design and development agency helping businesses grow with high-performance websites, SEO, branding, and digital solutions."
        />

        <meta
          name="keywords"
          content="About FreshMind Web, web design agency, web development company, React developers, SEO agency, digital agency"
        />

        <link rel="canonical" href="https://freshmindweb.online/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreshMind Web" />
        <meta
          property="og:title"
          content="About FreshMind Web | Web Design & Development Agency"
        />
        <meta
          property="og:description"
          content="Discover FreshMind Web's mission, experience, and passion for building fast, modern websites that help businesses grow."
        />
        <meta property="og:url" content="https://freshmindweb.online/about" />
        <meta
          property="og:image"
          content="https://freshmindweb.online/images/hero-fm.jpg"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About FreshMind Web | Web Design & Development Agency"
        />
        <meta
          name="twitter:description"
          content="Meet the team behind FreshMind Web and learn how we build websites that drive business growth."
        />
        <meta
          name="twitter:image"
          content="https://freshmindweb.online/images/hero-fm.jpg"
        />
      </Helmet>
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Building Digital Experiences That <span>Drive Growth</span>
          </h2>

          <p>
            FreshMind Web is a web design and development agency dedicated to
            helping businesses establish a strong online presence. We combine
            strategy, creativity, and modern technology to build websites that
            not only look exceptional but also generate measurable results.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Let's Work Together
          </a>
        </div>
      </section>

      <OurStory />
      <MissionVision />
      <CompanyValues />
      <StatsAbout />
      <ProcessPreview />

      {/* <section className="fm-consulting">
        <div className="fm-consulting-container">
          <div className="fm-consulting-heading">
            <h2>
              Website Strategy & <span>Consulting</span>
            </h2>
          </div>

          <div className="fm-consulting-grid">
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
      </section> */}

      <section id="porfolio" className="fm-portfolio">
        <div className="fm-portfolio-container">
          {/* HEADER */}
          <div className="fm-portfolio-header">
            <h2>
              Selected Projects From Our <span>Past Work</span>
            </h2>

            <p>
              A curated look at some of the brands and products we've helped
              shape. From strategy to execution, each project reflects our focus
              on clarity, performance, and meaningful user experience. These
              featured projects represent just a selection of our work, as we've
              partnered with businesses across a wide range of industries to
              create custom digital experiences that deliver real results.
            </p>
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
      <Timeline />
      <FooterCTA />
      {/* <ChatWidget /> */}
    </div>
  );
}
