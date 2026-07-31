// // src/sections/Timeline.jsx

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);
// const timeline = [
//   {
//     year: "2021",
//     title: "FreshMind Begins",
//     description:
//       "FreshMind was founded with one simple mission: build modern websites that help businesses establish a strong online presence, earn customer trust, and grow with confidence.",
//   },
//   {
//     year: "2022",
//     title: "Building Momentum",
//     description:
//       "As more businesses came on board, we refined our design process, focused on user experience, and started creating websites that not only looked beautiful but delivered measurable business results.",
//   },
//   {
//     year: "2023",
//     title: "Expanding Our Services",
//     description:
//       "We expanded beyond traditional business websites into SEO, performance optimization, landing pages, booking systems, and custom web solutions tailored to each client's goals.",
//   },
//   {
//     year: "2024",
//     title: "Custom Web Solutions",
//     description:
//       "FreshMind began developing larger digital platforms, admin dashboards, API integrations, and advanced business systems designed to automate operations and improve efficiency.",
//   },
//   {
//     year: "2025",
//     title: "AI & Automation",
//     description:
//       "Artificial Intelligence became part of our workflow as we introduced AI chatbots, intelligent automations, lead generation tools, and smarter customer experiences for modern businesses.",
//   },
//   {
//     year: "2026",
//     title: "Trusted Digital Partner",
//     description:
//       "Today, FreshMind partners with businesses across multiple industries, delivering premium websites, AI-powered solutions, and digital experiences built for long-term growth.",
//   },
// ];

// export default function Timeline() {
//   const timelineRef = useRef(null);
//   const wrapperRef = useRef(null);

//   const svgRef = useRef(null);

//   const bgPathRef = useRef(null);

//   const pathRef = useRef(null);

//   const futureCardRef = useRef(null);

//   const cardRefs = useRef([]);

//   const buildTimelinePath = () => {
//     if (!wrapperRef.current) return;

//     const wrapper = wrapperRef.current;
//     const wrapperRect = wrapper.getBoundingClientRect();

//     // All cards including future card
//     const cards = [
//       ...cardRefs.current.filter(Boolean),
//       futureCardRef.current,
//     ].filter(Boolean);

//     const centerX = wrapper.clientWidth / 2;

//     let d = "";

//     cards.forEach((card, index) => {
//       const rect = card.getBoundingClientRect();

//       const top = rect.top - wrapperRect.top;
//       const height = rect.height;
//       const middle = top + height / 2;

//       const isLeft = card.classList.contains("left");

//       // Where the line enters the card
//       const holeX = isLeft
//         ? rect.right - wrapperRect.left
//         : rect.left - wrapperRect.left;

//       if (index === 0) {
//         // Start at top center
//         d += `M ${centerX} 0 `;
//         d += `L ${centerX} ${middle} `;
//       } else {
//         // Continue vertically
//         d += `L ${centerX} ${middle} `;
//       }

//       // Smooth curve toward card
//       d += `Q ${centerX} ${middle} ${(centerX + holeX) / 2} ${middle} `;

//       // Into the hole
//       d += `L ${holeX} ${middle} `;

//       // Back out of the hole
//       d += `L ${centerX} ${middle} `;
//     });

//     // Finish below last card
//     const lastRect = cards[cards.length - 1].getBoundingClientRect();

//     const endY = lastRect.bottom - wrapperRect.top + 120;

//     d += `L ${centerX} ${endY}`;

//     bgPathRef.current.setAttribute("d", d);
//     pathRef.current.setAttribute("d", d);

//     svgRef.current.setAttribute(
//       "viewBox",
//       `0 0 ${wrapper.clientWidth} ${wrapper.scrollHeight}`
//     );
//   };

//   // useLayoutEffect(() => {
//   //   buildTimelinePath();

//   //   window.addEventListener("resize", buildTimelinePath);

//   //   return () => {
//   //     window.removeEventListener("resize", buildTimelinePath);
//   //   };
//   // }, []);

//   useGSAP(
//     () => {
//       buildTimelinePath();

//       const handleResize = () => {
//         buildTimelinePath();
//         ScrollTrigger.refresh();
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };

//       // ============================
//       // HEADING
//       // ============================

//       gsap.from(".fm-timeline-header", {
//         y: 60,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".fm-timeline-header",
//           start: "top 80%",
//         },
//       });

//       // ============================
//       // DRAW SVG
//       // ============================

//       const path = pathRef.current;

//       const length = path.getTotalLength();

//       gsap.set(path, {
//         strokeDasharray: length,
//         strokeDashoffset: length,
//       });

//       gsap.to(path, {
//         strokeDashoffset: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top center",
//           end: "bottom bottom",
//           scrub: true,
//         },
//       });

//       // ============================
//       // LEFT CARDS
//       // ============================

//       gsap.utils.toArray(".fm-timeline-card.left").forEach((card) => {
//         gsap.from(card, {
//           x: -100,
//           opacity: 0,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 82%",
//           },
//         });
//       });

//       // ============================
//       // RIGHT CARDS
//       // ============================

//       gsap.utils.toArray(".fm-timeline-card.right").forEach((card) => {
//         gsap.from(card, {
//           x: 100,
//           opacity: 0,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 82%",
//           },
//         });
//       });

//       // ============================
//       // FUTURE CARD
//       // ============================

//       gsap.from(".fm-timeline-future-card", {
//         y: 80,
//         scale: 0.95,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".fm-timeline-future-card",
//           start: "top 80%",
//         },
//       });

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     },
//     { scope: timelineRef }
//   );

//   return (
//     <section className="fm-timeline" ref={timelineRef}>
//       <div className="fm-timeline-container">
//         {/* HEADER */}
//         <div className="fm-timeline-header">
//           <span className="fm-section-tag">OUR JOURNEY</span>

//           <h2>
//             How <span>FreshMind</span> Has Grown
//           </h2>

//           <p>
//             Every year has been another step toward helping businesses build
//             stronger digital experiences. Here's a look at how our journey has
//             evolved.
//           </p>
//         </div>
//         <div className="fm-timeline-wrapper" ref={wrapperRef}>
//           {/* SVG */}

//           <svg
//             ref={svgRef}
//             className="fm-timeline-svg"
//             preserveAspectRatio="none"
//           >
//             {/* Background */}

//             <path ref={bgPathRef} className="fm-timeline-path-bg" />

//             {/* Animated */}

//             <path ref={pathRef} className="fm-timeline-path" />
//           </svg>

//           {/* Timeline cards */}

//           {timeline.map((item, index) => (
//             <article
//               key={item.year}
//               ref={(el) => (cardRefs.current[index] = el)}
//               className={`fm-timeline-card ${
//                 index % 2 === 0 ? "left" : "right"
//               }`}
//             >
//               <span className="fm-timeline-year">{item.year}</span>

//               <h3>{item.title}</h3>

//               <p>{item.description}</p>
//             </article>
//           ))}

//           {/* Future */}

//           <article ref={futureCardRef} className="fm-timeline-future-card">
//             <span className="fm-timeline-year">THE FUTURE</span>

//             <h3>Building What's Next</h3>

//             <p>
//               We're continuing to invest in AI, scalable web applications,
//               automation, and innovative digital experiences that help
//               businesses stay ahead in an ever-changing digital world.
//             </p>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }
