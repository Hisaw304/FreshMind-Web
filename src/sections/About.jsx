import { useEffect, useState } from "react";
import { cities } from "../data/cities";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We learn your goals, audience, and competitive landscape.",
  },
  {
    id: 2,
    title: "Design & Branding",
    description:
      "We craft a design system that reflects your identity and stands out online.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our sites are fast, scalable, and optimized for every device.",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "From SEO to campaigns, we ensure your site gets seen and drives results.",
  },
  {
    id: 5,
    title: "Support",
    description:
      "We provide ongoing support to keep your site secure, updated, and growing.",
  },
  {
    id: 6,
    title: "Analytics",
    description:
      "We track performance and optimize strategies to maximize your ROI.",
  },
];

export default function About() {
  const [randomCities, setRandomCities] = useState([]);

  useEffect(() => {
    const shuffled = [...cities].sort(() => 0.5 - Math.random());
    setRandomCities(shuffled.slice(0, 3));
  }, []);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="mb-8 py-10 ">
        <div className="max-w-5xl mx-auto px-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Trusted by{" "}
            <span className="text-orange-500">Ambitious Businesses</span>
          </h1>

          <p className="text-lg text-slate-700 font-medium max-w-2xl mb-6">
            Successful businesses start with a strong online foundation.
          </p>

          {/* Body Text */}
          <p className="text-lg text-slate-700 font-medium mb-6">
            Your website and digital presence should work as hard as you do.
            That’s why we design and market websites that not only look great,
            but also deliver real growth and results.
          </p>
          <p className="text-lg text-slate-700 font-medium mb-6">
            We specialize in helping businesses shine in their own communities.
            {randomCities.length > 0 && (
              <>
                {" "}
                Whether you’re in{" "}
                <span className="text-orange-600 font-semibold">
                  {randomCities.join(", ")}
                </span>
                , or anywhere in between, our team creates digital strategies
                designed to connect with the people around you and grow your
                local presence.
              </>
            )}
          </p>
          <p className="text-lg text-slate-700 font-medium mb-6">
            Our approach blends creative design, smart technology, and marketing
            strategies tailored to your market—so you can focus on what you do
            best while we help you get noticed.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl border border-orange-500/60 px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-200 hover:text-orange-500 transition active:scale-[0.98] rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Ready to grow your business? Let’s talk today.
          </Link>
        </div>
      </section>

      {/* --- Approach Section --- */}
      <section
        className="py-10 bg-slate-900 relative overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="approach-heading"
            className="section-title text-3xl md:text-5xl font-extrabold text-center mb-14 text-white"
          >
            Our Approach
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <article
                key={step.id}
                role="group"
                aria-label={step.title}
                className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 box text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div
                  className="badge text-white flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Mission Section --- */}
      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="section-title text-2xl md:text-3xl font-semibold mb-4 text-slate-800">
            Our Mission
          </h3>
          <p className="text-lg text-slate-600">
            To empower small businesses and entrepreneurs with the same
            world-class design and marketing tools used by big brands—helping
            them grow, connect, and succeed online.
          </p>
        </div>
      </section>
    </div>
  );
}
