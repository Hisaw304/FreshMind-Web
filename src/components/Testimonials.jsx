// src/sections/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "From start to finish, the process was smooth. They listened to my ideas, gave great suggestions, and delivered exactly what I needed.",
    name: "Hannah Walker",
    role: "Owner, Walker Photography",
    image: "/images/clients/hannah.jpg",
  },
  {
    quote:
      "I was skeptical about digital marketing, but after working with them, I can’t believe the difference it has made. Our sales are up significantly.",
    name: "David Green",
    role: "Manager, Green Landscaping",
    image: "/images/clients/david.jpg",
  },
  {
    quote:
      "Finally, a team that explains things in plain English! They made the tech side simple and easy to understand.",
    name: "Laura Peterson",
    role: "Founder, Lakeside Yoga",
    image: "/images/clients/laura.jpg",
  },
  {
    quote:
      "They were proactive, responsive, and truly invested in my business. It felt like having a dedicated in-house marketing team.",
    name: "Anthony Roberts",
    role: "CEO, Roberts Marine Services",
    image: "/images/clients/anthony.jpg",
  },
  {
    quote:
      "Our social media has gone from silent to buzzing with activity. Customers are engaging more than ever before.",
    name: "Rachel Adams",
    role: "Owner, Sweet Treats Bakery",
    image: "/images/clients/rachel.jpg",
  },
  {
    quote:
      "Professional, creative, and reliable. I recommend them to every small business owner I know.",
    name: "Mark Lewis",
    role: "Director, Granite Builders",
    image: "/images/clients/mark.jpg",
  },
  {
    quote:
      "Their hosting service has been flawless. My website loads fast, stays online, and I don’t have to worry about downtime anymore.",
    name: "Karen Mitchell",
    role: "Owner, Mitchell Consulting",
    image: "/images/clients/karen.jpg",
  },
  {
    quote:
      "It’s rare to find a company that combines technical skills with real customer care. They truly value relationships.",
    name: "Ethan Cooper",
    role: "Founder, Cooper Fitness",
    image: "/images/clients/ethan.jpg",
  },

  {
    quote:
      "Amazing service!! Absolutely the best to deal with. I know nothing about getting a website started, but he makes it easy and guides you throughout the whole start-up experience.",
    name: "Christopher West",
    role: "CEO, Fair Spares New England",
    image: "/images/clients/christopher.jpg",
  },
  {
    quote:
      "Working with this team has been a game changer for our business. Professional, responsive, and results-driven. They genuinely care about helping small businesses succeed.",
    name: "Emily Johnson",
    role: "Owner, Belmont Firearms",
    image: "/images/clients/emily.jpg",
  },
  {
    quote:
      "Our website not only looks fantastic but also performs better than ever. We’ve seen a noticeable increase in online inquiries since launching. Highly recommend!",
    name: "Daniel Carter",
    role: "Founder, Bigfoot HVAC",
    image: "/images/clients/daniel.jpg",
  },
  {
    quote:
      "The SEO strategies they implemented put our business on the map—literally. We’re ranking higher than competitors and attracting more local customers every week.",
    name: "Sophia Lee",
    role: "Marketing Manager, Create Escapes",
    image: "/images/clients/sophia.jpg",
  },
  {
    quote:
      "They redesigned our old, clunky site into something clean, modern, and easy for customers to navigate. The difference is night and day!",
    name: "Michael Brown",
    role: "Owner, Laconia Refrigeration",
    image: "/images/clients/michael.jpg",
  },
  {
    quote:
      "What impressed me most was how quickly they understood our business needs and came up with solutions tailored just for us. Fantastic team!",
    name: "Olivia Smith",
    role: "Director, LaChance Water",
    image: "/images/clients/olivia.jpg",
  },
  {
    quote:
      "I had no technical knowledge but needed a website for my business. They took care of everything from start to finish and continued supporting me even after launch. It was a smooth, stress-free experience.",
    name: "Karen Mitchell",
    role: "Owner, Mitchell Consulting",
    image: "/images/clients/karen.jpg",
  },
  {
    quote:
      "Social media used to overwhelm me, but they’ve taken it off my plate and turned it into a steady source of new customers. Couldn’t be happier.",
    name: "Sophia Martinez",
    role: "Founder, NH Floral Co.",
    image: "/images/clients/sophia-m.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="fm-testimonials">
      <div className="fm-testimonials-container">
        {/* HEADER */}
        <div className="fm-testimonials-header">
          <h2>
            What Clients Say About <span>FreshMind</span>
          </h2>
          <p>
            We don’t just build websites — we build relationships. Here’s what
            business owners say about working with FreshMind Web Agency and the
            results we’ve helped them achieve.
          </p>
        </div>

        {/* SCROLL WRAPPER */}
        <div className="fm-testimonials-wrapper">
          <div className="fm-testimonials-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="fm-testimonial-card">
                <div className="fm-testimonial-top">
                  <div className="fm-stars">
                    <span className="fm-star" />
                    <span className="fm-star" />
                    <span className="fm-star" />
                    <span className="fm-star" />
                    <span className="fm-star" />
                  </div>

                  <div className="fm-quote-icon">“</div>
                </div>

                <p className="fm-quote">{t.quote}</p>

                <div className="fm-user">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
