import React from "react";
import Slider from "react-slick";
import TestimonialLayout from "./TestimonialLayout";
import coupleOne from "../../assets/couple-one.jpg";
import coupleTwo from "../../assets/couple-two.jpg";
import coupleThree from "../../assets/couple-three.jpg";

const PrevArrow = (props) => {
  const { onClick, className } = props;

  return (
    <div className={className}>
      <i
        className="im im-angle-left-circle"
        onClick={onClick}
        style={{ color: "rgba(0, 0, 0, 0.35)" }}
      ></i>
      ;
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick, className } = props;

  return (
    <div className={className}>
      <i
        className="im im-angle-right-circle"
        onClick={onClick}
        style={{ color: "rgb(0, 0, 0)" }}
      ></i>
      ;
    </div>
  );
};

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="testimonials">
      <h2>What Our Clients Are Saying</h2>
      <Slider {...settings}>
        <div>
          <TestimonialLayout
            src={coupleOne}
            testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sint praesentium sit ab at, ipsum, qui voluptatem perspiciatis dignissimos magnam est atque. Voluptate deleniti architecto, possimus ea ipsa ab voluptatibus."
            coupleName="David & Jane"
          />
        </div>

        <div>
          <TestimonialLayout
            src={coupleTwo}
            testimonial="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt molestias cum officiis non necessitatibus esse aperiam repudiandae alias voluptatem, ut sed ad excepturi saepe tempore iusto perferendis sit facere? Ratione velit autem, quia delectus nisi asperiores non nobis totam amet natus odit officia labore voluptatem reiciendis dolorem dignissimos mollitia. Nostrum."
            coupleName="Rotimi & Victoria"
          />
        </div>
        <div>
          <TestimonialLayout
            src={coupleThree}
            testimonial="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt molestias cum officiis non necessitatibus esse aperiam repudiandae alias voluptatem, ut sed ad excepturi saepe tempore iusto perferendis sit facere? Ratione velit autem, quia delectus nisi."
            coupleName="Wale & Bisola"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
