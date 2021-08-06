import React from "react";
import arrow from "../../assets/arrow then texts icon.svg";

const SecondSectionCards = ({
  className,
  icon,
  heading,
  text1,
  text2,
  text3,
}) => {
  return (
    <div className={className}>
      <div className="second--section-cards-container">
        <div>
          <img src={icon} alt="second section icon" className="icon-cards" />
        </div>
        <div>
          <h3 className="second--section-card-h3">{heading}</h3>
        </div>

        <div className="second--section-card-p">
          <div className="second--section-card-p-child">
            <img src={arrow} alt="arrow" className="arrow" />
            <p>{text1}</p>
          </div>

          <div className="second--section-card-p-child">
            <img src={arrow} alt="arrow" className="arrow" />
            <p>{text2}</p>
          </div>

          <div className="second--section-card-p-child">
            <img src={arrow} alt="arrow" className="arrow" />
            <p>{text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCards;
