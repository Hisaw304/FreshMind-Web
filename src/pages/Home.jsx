import React from "react";
import Hero from "../components/Hero";
import ClientsCarousel from "../components/ClientsCarousel";
import About from "../components/About";
import Stats from "../components/Stats";
import LocalMarketing from "../components/LocalMarketing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";
import FooterCTA from "../components/FooterCTA";
import WhyChooseUs from "../components/WhyChooseUs";
import ChatWidget from "../components/ChatWidget";

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
      <ChatWidget />
    </>
  );
};

export default Home;
