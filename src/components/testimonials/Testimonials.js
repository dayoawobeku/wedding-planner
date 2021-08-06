import React from "react";
import "./Testimonials.css";
import testimonial from "../../assets/web third section image.png";
import testimonialSmall from "../../assets/x426 testimonials image.png";
import nextArrow from "../../assets/black right arrow icon.svg";
import previousArrow from "../../assets/grey left arrow icon.svg";
import previousArrowSmall from "../../assets/previous arrow small.svg";
import nextArrowSmall from "../../assets/next arrow small.svg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Are Saying</h2>
      <div className="testimonials--container">
        <img
          src={testimonial}
          alt="testimonial"
          className="testimonials--image"
        />

        <img
          src={testimonialSmall}
          alt="testimonial"
          className="testimonials--image-small"
        />

        <div className="testimonials--text">
          <p className="testimonials--main-text">
            Lorem ipsum dshvsh sd jdsba cjbdjc dcbjusabcjub ascnmabciuohjsac
            ioahsc asc ascjh avi ianscubsai c acubascinka sc ibasjcavh bu sc
            aishc iashc asi cihaisc o ahscihao aos iacbiusav ischuas ihiusac
            iascbin aisci aisnciasnc asohwdihqw iahsciini wdvwi ih wci i v i via
            bci anicubaibsi.
          </p>
          <p className="testimonials--couple-name">DAMI & IFE</p>
        </div>

        <div className="testimonials--arrows">
          <img
            src={previousArrow}
            alt="previous arrow"
            className="previous-arrow"
          />
          <img
            src={previousArrowSmall}
            alt="previous arrow small"
            className="previous-arrow-small"
          />

          <img src={nextArrow} alt="next arrow" className="next-arrow" />
          <img
            src={nextArrowSmall}
            alt="next arrow small"
            className="next-arrow-small"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
