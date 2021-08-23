import React from "react";
import "./Testimonials.css";

const TestimonialLayout = ({ src, testimonial, coupleName }) => {
  return (
    <div className="testimonials--container">
      <img src={src} alt="wedding photoshoot" className="testimonials--image" />
      <div className="testimonials--text">
        <p className="testimonials--main-text">{testimonial}</p>
        <p className="testimonials--couple-name">{coupleName}</p>
      </div>
    </div>
  );
};

export default TestimonialLayout;
