// src/sections/Clients.jsx

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
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

gsap.registerPlugin(useGSAP, ScrollTrigger);
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

export default function Clients() {
  const clientsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".fm-clients-heading h2", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.9,
        ease: "power3.out",
      })

        .from(
          ".fm-clients-text p",
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .from(
          ".fm-clients-slider",
          {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )

        .from(
          ".fm-client-slide",
          {
            scale: 0.85,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.6"
        );
      // .from(
      //   ".fm-blog-home-footer",
      //   {
      //     y: 25,
      //     autoAlpha: 0,
      //     duration: 0.6,
      //   },
      //   "-=0.45"
      // );
    },
    { scope: clientsRef }
  );

  return (
    <section className="fm-clients" ref={clientsRef}>
      <div className="fm-why-grid-bg" />

      <div className="fm-clients-container">
        <div className="fm-clients-heading">
          <h2>
            Companies We've <span>Worked With</span>
          </h2>

          <div className="fm-clients-text">
            <p>
              Over the years, we've partnered with companies—from small
              family-owned businesses to established regional brands. Each
              project receives the same level of care, strategy, and commitment
              to long-term success.
            </p>

            <p>
              Our focus has always been building relationships through digital
              experiences that genuinely help businesses grow, build trust, and
              stand out online.
            </p>
          </div>
        </div>

        <div className="fm-clients-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop
            speed={900}
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {clients.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="fm-client-slide">
                  <img src={client.logo} alt={client.name} />

                  <div className="fm-client-overlay">
                    <p>{client.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="fm-blog-home-footer">
          <Link to="/industries" className="fm-blog-home-viewall">
            Explore Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
