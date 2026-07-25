import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="fm-mission-section">
      <div className="fm-container">
        {/* HEADER */}
        <div className="fm-mission-header">
          <span className="fm-section-tag">Mission & Vision</span>

          <h2>
            Driven by Purpose, Focused on <span>Results</span>
          </h2>

          <p>
            Everything we build is guided by a clear mission and a long-term
            vision. We believe great websites should inspire confidence,
            generate opportunities, and help businesses grow sustainably.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-mission-grid">
          {/* MISSION */}
          <div className="fm-mission-card">
            <div className="fm-mission-icon">
              <Target size={32} />
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower businesses with modern, high-performing websites that
              strengthen their online presence, build trust, and generate
              measurable business growth. We combine strategy, creativity, and
              technology to deliver digital solutions that create lasting value
              for every client.
            </p>

            <ul>
              <li>Deliver websites built for growth</li>
              <li>Create exceptional user experiences</li>
              <li>Build long-term client partnerships</li>
            </ul>
          </div>

          {/* VISION */}
          <div className="fm-mission-card">
            <div className="fm-mission-icon">
              <Eye size={32} />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted digital partner for businesses worldwide,
              recognized for creating innovative websites that help companies
              compete, grow, and succeed in an increasingly digital world.
            </p>

            <ul>
              <li>Become a globally recognized web agency</li>
              <li>Continuously innovate with modern technologies</li>
              <li>Help businesses thrive through digital excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
