import { CircleCheckBig } from "lucide-react";

export default function IndustryChallenges({ industry }) {
  return (
    <section className="fm-industry-challenges">
      <div className="fm-container">
        <div className="fm-industry-challenges-grid">
          {/* IMAGE */}
          <div className="fm-industry-challenges-image">
            <img src={industry.image} alt={industry.title} />
          </div>

          {/* CONTENT */}
          <div className="fm-industry-challenges-content">
            <span className="fm-section-tag">Common Challenges</span>

            <h2>
              Why <span>{industry.title}</span> Businesses Need a Better Website
            </h2>

            <p>
              Every industry has unique challenges online. We build websites
              designed to solve these problems, improve customer experience, and
              help your business generate more enquiries, bookings, and sales.
            </p>

            <div className="fm-challenges-list">
              {industry.challenges.map((challenge) => (
                <div className="fm-challenge-item" key={challenge}>
                  <CircleCheckBig size={20} />

                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
