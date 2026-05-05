import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const avatars = [
  { name: "New York, USA", img: "/images/avatar1.jpg", x: 38, y: 55 },
  { name: "Los Angeles, USA", img: "/images/avatar2.jpg", x: 18, y: 65 },
  { name: "Chicago, USA", img: "/images/avatar3.jpg", x: 30, y: 58 },
  { name: "London, UK", img: "/images/avatar4.jpg", x: 75, y: 35 },
  { name: "Manchester, UK", img: "/images/avatar5.jpg", x: 70, y: 28 },
];

export default function LocalMarketing({ cities = [] }) {
  const sampleCities = useMemo(() => {
    const source = cities.length
      ? cities
      : ["New York", "Los Angeles", "London", "Manchester", "Chicago"];
    return source.slice(0, 5);
  }, [cities]);

  return (
    <section className="fm-local">
      <div className="fm-local-container">
        {/* HEADING (FULL WIDTH) */}
        <div className="fm-local-header">
          <h2>
            Local <span>Marketing</span> That Connects
          </h2>
        </div>

        <div className="fm-local-grid">
          {/* LEFT */}
          <div className="fm-local-content">
            <p>
              We help businesses grow by connecting them with the right audience
              in their local markets. Every strategy is tailored to your
              location, your audience, and your goals.
            </p>

            <p>
              Whether you're targeting a single city or expanding across
              regions, we build digital systems that drive visibility, trust,
              and results.
            </p>

            {/* CITY CHIPS */}
            <div className="fm-city-list">
              {sampleCities.map((city) => (
                <div key={city} className="fm-city-chip">
                  <span className="fm-dot" />
                  {city}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="fm-local-actions">
              <Link to="/contact" className="fm-btn-primary">
                Start Your Growth
              </Link>
            </div>
          </div>

          {/* RIGHT (MAP + AVATARS) */}
          <div className="fm-local-map">
            <div className="fm-map">
              {/* AVATARS */}
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="fm-avatar"
                  style={{
                    left: `${a.x}%`,
                    top: `${a.y}%`,
                  }}
                >
                  <img src={a.img} alt={a.name} />

                  {/* pointer line */}
                  <span className="fm-avatar-line" />

                  {/* tooltip */}
                  <div className="fm-avatar-tooltip">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
