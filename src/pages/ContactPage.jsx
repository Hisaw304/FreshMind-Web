import { Facebook, Twitter, Instagram } from "lucide-react";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";

/* ✅ THIS WAS MISSING */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/* Leaflet fix */
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import ChatWidget from "../components/ChatWidget";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function ContactPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="fm-contact-hero">
        <div className="fm-contact-hero-overlay"></div>

        <div className="fm-contact-hero-container">
          <h1>
            Start the <span>Conversation</span>
          </h1>

          <p>
            Have an idea, a project, or just exploring possibilities? We’re here
            to help you turn it into something meaningful. Let’s connect and
            build something that truly makes an impact.
          </p>

          <div className="fm-contact-hero-actions">
            <a href="#contact-form" className="fm-contact-hero-btn">
              Get in Touch
            </a>

            {/* <a href="/about" className="fm-contact-hero-btn secondary">
              Learn More
            </a> */}
          </div>
        </div>
      </section>

      <section>
        <div>
          {/* Contact Form */}
          <ContactForm />
        </div>
        <section className="fm-contact-map">
          <div className="fm-contact-map-container">
            {/* MAP */}
            <div className="fm-contact-map-frame">
              <MapContainer
                center={[43.5279, -71.4704]} // Laconia, NH
                zoom={13}
                scrollWheelZoom={false}
                className="fm-contact-map-leaflet"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[43.5279, -71.4704]}>
                  <Popup>123 Main Street, Laconia, NH</Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* SOCIAL */}
            <div className="fm-contact-social">
              <h3>Connect With Us</h3>

              <div className="fm-contact-social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61592377295673"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://x.com/freshmindweb?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>

                <a
                  href="https://www.instagram.com/freshmindweb?igsh=NWo5NWR5ZmI3OHp5&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <FAQSection />
      {/* <ChatWidget /> */}
    </div>
  );
}
