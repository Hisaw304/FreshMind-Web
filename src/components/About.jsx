import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { cities } from "../data/cities";
import {
  Search,
  FileText,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import discoveryImg from "../assets/discovery.jpg";
import planningImg from "../assets/planning.jpg";
import designImg from "../assets/design.jpg";
import developmentImg from "../assets/development.jpg";
import testingImg from "../assets/testing.jpg";
import launchImg from "../assets/launch.jpg";

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: Search,
    image: discoveryImg,
    description:
      "We begin by learning about your business, goals, audience, competitors, and project requirements to create the right strategy.",
  },
  {
    id: 2,
    title: "Planning",
    icon: FileText,
    image: planningImg,
    description:
      "We organize your website structure, user journey, content, features, and technical requirements before development begins.",
  },
  {
    id: 3,
    title: "Design",
    icon: PencilRuler,
    image: designImg,
    description:
      "Our designers create modern, user-focused layouts that reflect your brand and maximize engagement and conversions.",
  },
  {
    id: 4,
    title: "Development",
    icon: Code2,
    image: developmentImg,
    description:
      "Using modern technologies, we build a fast, responsive, secure, and scalable website tailored to your business.",
  },
  {
    id: 5,
    title: "Testing",
    icon: ShieldCheck,
    image: testingImg,
    description:
      "Every page is thoroughly tested across devices and browsers to ensure performance, functionality, and reliability.",
  },
  {
    id: 6,
    title: "Launch & Support",
    icon: Rocket,
    image: launchImg,
    description:
      "Once everything is ready, we launch your website and continue providing updates, monitoring, and ongoing support as your business grows.",
  },
];

export default function About() {
  const [randomCities, setRandomCities] = useState([]);

  useEffect(() => {
    const shuffled = [...cities].sort(() => 0.5 - Math.random());
    setRandomCities(shuffled.slice(0, 3));
  }, []);

  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // ========================
      // HEADER
      // ========================
      tl.from(".fm-trusted-header h2", {
        y: 60,
        autoAlpha: 0,
        filter: "blur(8px)",
        duration: 0.9,
      })

        .from(
          ".fm-trusted-header p",
          {
            y: 30,
            autoAlpha: 0,
            stagger: 0.18,
            duration: 0.7,
          },
          "-=0.5"
        )

        .from(
          ".fm-ready-btn",
          {
            y: 20,
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        )

        // ========================
        // APPROACH TITLE
        // ========================
        .from(
          ".fm-trusted-approach h2",
          {
            y: 60,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.2"
        )

        // ========================
        // MISSION
        // ========================
        .from(
          ".fm-trusted-mission h2",
          {
            y: 50,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.2"
        )

        .from(
          ".fm-trusted-mission p",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.4"
        );

      // ========================
      // STEP CARDS
      // ========================
      gsap.utils.toArray(".fm-step-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          y: 70,
          opacity: 0,
          scale: 0.92,
          duration: 0.8,
          delay: index * 0.08,
          ease: "back.out(1.4)",
        });
      });

      // ========================
      // CARD HOVER EFFECT
      // ========================
      gsap.utils.toArray(".fm-step-card").forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -12,
            scale: 1.03,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    },
    { scope: aboutRef }
  );

  return (
    <section className="fm-trusted" ref={aboutRef}>
      <div className="fm-why-grid-bg" />
      <div className="fm-trusted-container">
        {/* HEADER */}
        <div className="fm-trusted-header">
          <h2>
            Trusted by <span>Ambitious Businesses</span>
          </h2>

          <p>
            At FreshMind Web Agency, we help businesses build a modern,
            credible, and results-driven online presence. By combining strategy,
            design, and technology, we create digital experiences that don’t
            just look good — they perform and drive real growth.
          </p>

          <p>
            Your website should work as hard as you do. That’s why every project
            we deliver is focused on attracting the right audience, building
            trust, and converting visitors into long-term customers.
          </p>

          <p>
            We specialize in helping businesses stand out locally.
            {randomCities.length > 0 && (
              <>
                {" "}
                Whether you’re in{" "}
                <span className="fm-highlight-alt">
                  {randomCities.join(", ")}
                </span>
                , or anywhere in between, we craft strategies that connect with
                your audience and grow your presence where it matters most.
              </>
            )}
          </p>
        </div>

        {/* APPROACH */}
        <div className="fm-trusted-approach">
          <h2>
            Our <span>Approach</span>
          </h2>
          <div className="fm-steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="fm-step-card">
                  <div className="fm-step-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                  {/* CONTENT */}
                  <div className="fm-step-content">
                    {/* TOP */}
                    <div className="fm-step-top">
                      <div className="fm-step-icon">
                        <Icon size={18} />
                      </div>

                      <div className="fm-step-number">{step.id}</div>
                    </div>

                    {/* TEXT */}
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MISSION */}
        <div className="fm-trusted-mission">
          <h2>
            Our <span>Mission</span>
          </h2>
          <p>
            To empower small businesses and entrepreneurs with the same level of
            design, strategy, and digital tools used by leading brands — helping
            them grow, compete, and succeed in today’s online world.
          </p>
        </div>
        <div className=" fm-ready-btn">
          <a href="/contact" className="fm-btn-primary">
            Ready to grow your business? Let’s talk
          </a>
        </div>
      </div>
    </section>
  );
}
