import React from "react";
import Hero from "../sections/Hero";
import ClientsCarousel from "../sections/ClientsCarousel";
import About from "../sections/About";
import Stats from "../sections/Stats";
import LocalMarketing from "../sections/LocalMarketing";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import ContactForm from "../sections/ContactForm";
import FloatingActions from "../sections/FloatingActions";
import FAQSection from "../sections/FAQSection";
import FooterCTA from "../sections/FooterCTA";
import WhyChooseUs from "../sections/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientsCarousel />
      <About />
      <Stats />
      <WhyChooseUs />
      <LocalMarketing />
      <Services />
      <Testimonials />
      <FAQSection />
      <ContactForm />
      <FooterCTA />
      <FloatingActions />
    </>
  );
};

export default Home;
