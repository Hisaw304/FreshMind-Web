import { useEffect, useState } from "react";
import { cities } from "../data/cities"; // <- list of cities
import { Link } from "react-router-dom";

export default function About() {
  const [randomCities, setRandomCities] = useState([]);

  useEffect(() => {
    const shuffled = [...cities].sort(() => 0.5 - Math.random());
    setRandomCities(shuffled.slice(0, 3));
  }, []);

  return (
    <div>
      {/* --- Original Hero Section --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Successful businesses start with a strong online foundation.
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Your website and digital presence should work as hard as you do.
            That’s why we design and market websites that not only look great
            but also deliver real results.
          </p>
          <p className="text-lg text-slate-700 font-medium mb-6">
            We specialize in helping businesses shine in their own communities.
            {randomCities.length > 0 && (
              <>
                {" "}
                Whether you’re in{" "}
                <span className="text-orange-500 font-semibold">
                  {randomCities.join(", ")}
                </span>
                , or anywhere in between, our team creates digital strategies
                designed to connect with the people around you and grow your
                local presence.
              </>
            )}
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Our approach blends creative design, smart technology, and marketing
            strategies tailored to your market—so you can focus on what you do
            best while we help you get noticed.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Ready to grow your business? Let’s talk today.
          </Link>
        </div>
      </section>

      {/* --- New Our Approach Section --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-800">
            Our Approach
          </h3>
          <p className="text-lg text-slate-600 mb-4">
            We believe a website should be more than a digital brochure—it
            should be a growth engine for your business. Our process is rooted
            in strategy, creativity, and technology, ensuring every project we
            deliver is built for impact.
          </p>
          <ul className="grid md:grid-cols-2 gap-6 text-slate-700 mt-6">
            <li className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-orange-500 mb-2">
                1. Discovery
              </h4>
              <p>We learn your goals, audience, and competitive landscape.</p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-orange-500 mb-2">
                2. Design & Branding
              </h4>
              <p>
                We craft a design system that reflects your identity and stands
                out online.
              </p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-orange-500 mb-2">
                3. Development
              </h4>
              <p>
                Our sites are fast, scalable, and optimized for every device.
              </p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-orange-500 mb-2">
                4. Marketing
              </h4>
              <p>
                From SEO to campaigns, we ensure your site gets seen and drives
                results.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* --- New Mission Section --- */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-800">
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
