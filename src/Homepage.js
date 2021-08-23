import React from "react";
import FirstSection from "./components/first-section/FirstSection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import SecondSection from "./components/second-section/SecondSection";
import Testimonial from "./components/testimonials/Testimonial";
import ThirdSection from "./components/third-section/ThirdSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Homepage;
