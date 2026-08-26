// src/sections/Testimonials.jsx
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    quote:
      "FreshMind transformed our outdated website into a modern, fast, and mobile-friendly platform. Within weeks, we noticed more inquiries and better engagement from visitors.",
    name: "Hannah Walker",
    role: "Owner, Walker Photography",
    image: "/images/clients/hannah.jpg",
  },
  {
    quote:
      "The team built us a professional website that perfectly represents our brand. Communication was excellent, deadlines were met, and the final result exceeded our expectations.",
    name: "David Green",
    role: "Owner, Green Landscaping",
    image: "/images/clients/david.jpg",
  },
  {
    quote:
      "Our new website is beautiful, easy to navigate, and optimized for search engines. Clients constantly compliment how professional everything looks.",
    name: "Laura Peterson",
    role: "Founder, Lakeside Yoga",
    image: "/images/clients/laura.jpg",
  },
  {
    quote:
      "FreshMind developed a custom dashboard that streamlined our daily operations. What used to take hours now takes just minutes.",
    name: "Charnay Roberts",
    role: "CEO, Charnay Marine Services",
    image: "/images/clients/anthony.jpg",
  },
  {
    quote:
      "The AI chatbot they integrated answers customer questions around the clock and captures leads automatically. It's like having an extra employee working 24/7.",
    name: "Rachel Adams",
    role: "Owner, Sweet Treats Bakery",
    image: "/images/clients/rachel.jpg",
  },
  {
    quote:
      "Professional, creative, and incredibly easy to work with. They delivered a website that not only looks amazing but also performs exceptionally well.",
    name: "Mark Lewis",
    role: "Director, Granite Builders",
    image: "/images/clients/mark.jpg",
  },
  {
    quote:
      "Since launching our new website, our Google rankings have improved and we're receiving more qualified leads than ever before.",
    name: "Karen Mitchell",
    role: "Owner, Mitchell Consulting",
    image: "/images/clients/karen.jpg",
  },
  {
    quote:
      "Their website maintenance service gives us complete peace of mind. Updates, backups, and security are all handled without us having to worry.",
    name: "Ethan Cooper",
    role: "Founder, Cooper Fitness",
    image: "/images/clients/ethan.jpg",
  },
  {
    quote:
      "I had no experience with websites, but FreshMind guided me through every step. They explained everything clearly and delivered exactly what my business needed.",
    name: "Christopher West",
    role: "CEO, Fair Spares New England",
    image: "/images/clients/christopher.jpg",
  },
  {
    quote:
      "Our website loads incredibly fast, looks fantastic on every device, and has already helped us attract new customers. Worth every penny.",
    name: "Emily Johnson",
    role: "Owner, Belmont Firearms",
    image: "/images/clients/emily.jpg",
  },
  {
    quote:
      "The redesign completely changed how customers view our business. We finally have a website that reflects the quality of the services we provide.",
    name: "Daniel Carter",
    role: "Founder, Bigfoot HVAC",
    image: "/images/clients/daniel.jpg",
  },
  {
    quote:
      "Their SEO expertise helped us climb Google's search results and generate consistent organic traffic. We couldn't be happier with the results.",
    name: "Sophia Lee",
    role: "Marketing Manager, Create Escapes",
    image: "/images/clients/sophia.jpg",
  },
  // {
  //   quote:
  //     "From planning to launch, the entire experience was smooth and professional. They delivered on time and kept us informed throughout the project.",
  //   name: "Michael Brown",
  //   role: "Owner, Laconia Refrigeration",
  //   image: "/michael.jpg",
  // },
  {
    quote:
      "FreshMind understood our business from day one and built a custom solution that fits our workflow perfectly. It's made a huge difference to our team.",
    name: "Olivia Smith",
    role: "Director, LaChance Water",
    image: "/images/clients/olivia.jpg",
  },
  {
    quote:
      "Even after our website launched, they continued supporting us with updates, improvements, and technical advice. Their customer service is outstanding.",
    name: "Karen Mitchell",
    role: "Owner, Mitchell Consulting",
    image: "/images/clients/karen.jpg",
  },
  {
    quote:
      "Working with FreshMind was one of the best investments we've made. They built a professional website, improved our online visibility, and helped us generate more business.",
    name: "Sophia Maureen",
    role: "Founder, NH Floral Co.",
    image: "/images/clients/sophia-m.jpg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (index) => {
    const card = sliderRef.current.children[index];

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    setActive(index);
  };

  const next = () => {
    scrollToCard((active + 1) % testimonials.length);
  };

  const prev = () => {
    scrollToCard((active - 1 + testimonials.length) % testimonials.length);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <section id="testimonials" className="fm-testimonials">
      <div className="fm-testimonials-container">
        {/* HEADER */}
        <div className="fm-testimonials-header">
          <h2>
            What Clients Say About <span>FreshMind</span>
          </h2>

          <p>
            We don't just build websites—we build long-term partnerships. Here's
            what our clients have to say about working with FreshMind.
          </p>
        </div>

        {/* HORIZONTAL SLIDER */}
        <div className="fm-testimonials-slider">
          <div className="fm-testimonials-track" ref={sliderRef}>
            {testimonials.map((t, i) => (
              <article key={i} className="fm-testimonial-card">
                {/* Background Image */}
                <div className="fm-testimonial-image">
                  <img src={t.image} alt={t.name} />

                  <div className="fm-testimonial-overlay"></div>

                  {/* Review over image */}
                  <div className="fm-review-overlay">
                    <p>"{t.quote}"</p>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="fm-testimonial-content">
                  <div className="fm-stars">
                    <span className="fm-star">★</span>
                    <span className="fm-star">★</span>
                    <span className="fm-star">★</span>
                    <span className="fm-star">★</span>
                    <span className="fm-star">★</span>
                  </div>

                  <h3>{t.name}</h3>

                  <span className="fm-role">{t.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* CONTROLS */}

        <div className="fm-testimonial-controls">
          <button className="fm-arrow-btn" onClick={prev}>
            ←
          </button>

          <div className="fm-testimonial-dots">
            {(isMobile ? testimonials.slice(0, 5) : testimonials).map(
              (_, index) => (
                <button
                  key={index}
                  className={`fm-dot ${
                    index === (isMobile ? active % 5 : active) ? "active" : ""
                  }`}
                  onClick={() => scrollToCard(index)}
                />
              )
            )}
          </div>

          <button className="fm-arrow-btn" onClick={next}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
