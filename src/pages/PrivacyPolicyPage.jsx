import PrivacyContent from "../components/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="fm-privacy-page">
      {/* HERO */}
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Privacy <span>Policy</span>
          </h2>

          <p>
            We value your privacy and are committed to protecting your personal
            information. This policy explains what data we collect, how we use
            it, and the choices you have regarding your information.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Contact Us
          </a>
        </div>
      </section>

      <PrivacyContent />
    </div>
  );
}
