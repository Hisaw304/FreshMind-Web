import { Briefcase, FolderKanban, Smile, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: FolderKanban,
    number: "340",
    label: "Projects Delivered",
  },
  {
    icon: Smile,
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    icon: Users,
    number: "38",
    label: "Team Members",
  },
];

export default function StatsAbout() {
  return (
    <section className="fm-about-stats-section">
      <div className="fm-container">
        <div className="fm-about-stats-header">
          <span className="fm-section-tag">Our Impact</span>

          <h2>
            Numbers That Reflect Our <span>Commitment</span>
          </h2>

          <p>
            Every project we complete represents our dedication to helping
            businesses build stronger brands, generate more leads, and achieve
            long-term digital success.
          </p>
        </div>

        <div className="fm-about-stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="fm-about-stat-card">
                <div className="fm-about-stat-icon">
                  <Icon size={28} />
                </div>

                <h3>{stat.number}</h3>

                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
