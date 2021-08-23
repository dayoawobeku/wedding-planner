import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Navbar from "../navbar/Navbar";
import ImageSlider from "./ImageSlider";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <ImageSlider />
      <div className="hero--section__container">
        <Navbar />
        <div className="hero--section-texts-parent">
          <div className="hero--section-texts">
            <h1>Get Married in Style</h1>
            <p>Elegance and Continued Excellence to Every Event</p>
            <Link to="/">
              <Button text="Plan my wedding" className="hero--section-btn" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
