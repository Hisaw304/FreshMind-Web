import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const avatars = [
  { name: "United States", img: "/images/avatar1.jpg", x: 38, y: 55 },
  { name: "Canada", img: "/images/avatar2.jpg", x: 25, y: 45 },
  { name: "United Kingdom", img: "/images/avatar3.jpg", x: 73, y: 34 },
  { name: "Australia", img: "/images/avatar4.jpg", x: 88, y: 82 },
  { name: "Worldwide", img: "/images/avatar5.jpg", x: 55, y: 48 },
];

export default function LocalMarketing({ cities = [] }) {
  const sampleCities = useMemo(() => {
    const source = cities.length
      ? cities
      : ["United States", "United Kingdom", "Canada", "Australia", "Worldwide"];

    return source.slice(0, 5);
  }, [cities]);

  return (
    <section className="fm-local">
      <div className="fm-local-container">
        {/* HEADING (FULL WIDTH) */}
        <div className="fm-local-header">
          <h2>
            Helping Businesses <span>Grow Locally</span>
          </h2>
        </div>

        <div className="fm-local-grid">
          {/* LEFT */}
          <div className="fm-local-content">
            <p>
              Growing your business starts with being visible where your
              customers are searching. We create local SEO and digital marketing
              strategies that increase visibility, generate qualified leads, and
              turn visitors into loyal customers.
            </p>

            <p>
              Whether you serve one neighborhood, an entire city, or multiple
              locations, we help your business build trust, rank higher in
              search results, and reach the right audience.
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
                Grow My Business
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
