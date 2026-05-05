import { Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "../sections/ContactForm";
import FAQSection from "../sections/FAQSection";
import FloatingActions from "../sections/FloatingActions";

/* ✅ THIS WAS MISSING */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/* Leaflet fix */
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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

      {/* Contact Form + Extras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
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
                <a href="#">
                  <Facebook size={26} />
                </a>
                <a href="#">
                  <Instagram size={26} />
                </a>
                <a href="#">
                  <Linkedin size={26} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Mini FAQ */}
        <section className=" pt-16  ">
          <FAQSection />
        </section>
      </section>
      <FloatingActions />
    </div>
  );
}
