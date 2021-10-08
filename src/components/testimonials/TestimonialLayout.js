import React from "react";
import ReadMore from "./ReadMore";
import "./Testimonials.css";

const TestimonialLayout = ({ src, testimonial, coupleName }) => {
  return (
    <div className="testimonials--container">
      <img src={src} alt="wedding photoshoot" className="testimonials--image" />
      <div className="testimonials--text">
        <ReadMore children={testimonial} />
        {/* <p className="testimonials--main-text">{testimonial}</p> */}

        <p className="testimonials--couple-name">{coupleName}</p>
      </div>
    </div>
  );
};

export default TestimonialLayout;
