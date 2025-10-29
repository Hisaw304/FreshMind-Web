// src/sections/Testimonials.jsx
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Quote } from "lucide-react";

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
      "The hosting is rock solid, and their support is always there when you need it. I can finally focus on my business instead of worrying about my website.",
    name: "James Wilson",
    role: "Owner, Lakeside Auto",
    image: "/images/clients/james.jpg",
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
    <section
      className="mb-8 py-10 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Trusted by business owners worldwide. Here’s why they love working
            with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            gap: "2rem",
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          aria-label="Client testimonials"
        >
          {testimonials.map((t, idx) => (
            <SplideSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <Quote className="w-10 h-10 text-orange-500 opacity-70" />
                </div>

                {/* Quote */}
                <p className="text-slate-700 italic mb-6 leading-relaxed text-center flex-grow">
                  “{t.quote}”
                </p>

                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 mb-3"
                  />
                  <p className="font-semibold text-slate-800">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
