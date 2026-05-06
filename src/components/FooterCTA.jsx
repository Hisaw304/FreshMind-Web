export default function FooterCTA() {
  return (
    <section className="fm-cta">
      <div className="fm-cta-overlay" />

      <div className="fm-cta-container">
        <h2>
          Ready to <span>Grow</span> Your Business?
        </h2>

        <p>
          We don’t just build websites — we build systems that attract clients,
          increase trust, and help your business scale with confidence.
        </p>

        <div className="fm-cta-actions">
          <a href="/contact" className="fm-cta-primary">
            Get Started
          </a>

          <a href="/about" className="fm-cta-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
