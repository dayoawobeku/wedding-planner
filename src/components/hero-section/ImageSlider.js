import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "ease",
  };

  return (
    <div className="hero--section">
      <Slider {...settings}>
        <img src={image1} alt="couple at wedding" />
        <img src={image4} alt="wedding flowers" />
        <img src={image2} alt="couple in field" />
        <img src={image3} alt="couple holding each other" />
        <img src={image5} alt="couple in front of bus" />
      </Slider>
    </div>
  );
}

export default ImageSlider;
