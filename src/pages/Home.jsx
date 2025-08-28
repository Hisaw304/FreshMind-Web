import React from "react";
import Hero from "../sections/Hero";
import ClientsCarousel from "../sections/ClientsCarousel";
import About from "../sections/About";
import Stats from "../sections/Stats";
import LocalMarketing from "../sections/LocalMarketing";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import ContactForm from "../sections/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientsCarousel />
      <About />
      <Stats />
      <LocalMarketing />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
