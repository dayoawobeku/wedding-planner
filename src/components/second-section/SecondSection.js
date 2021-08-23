import React from "react";
import "./SecondSection.css";
import SecondSectionCards from "./SecondSectionCards";
import ideas from "../../assets/ideas and inspiration icon.svg";
import budget from "../../assets/budget and checklist icon.svg";
import checklist from "../../assets/checklist icon.svg";
import vendors from "../../assets/vendors icon.svg";

const SecondSection = () => {
  return (
    <section className="second--section">
      <div className="second--section-cards-parent">
        <h2>EVERYTHING YOU NEED TO START YOUR WEDDING PLANNING ADVENTURE</h2>
        <div className="second--section-cards top-cards">
          <SecondSectionCards
            className="card-1"
            icon={ideas}
            heading="Ideas & Inspiration"
            text1="collect & organize ideas"
            text2="connect to vendors"
            text3="get wedding tips"
          />

          <SecondSectionCards
            className="card-2"
            icon={budget}
            heading="Budget & Checklist"
            text1="organize wedding planning expenses"
            text2="customize categories"
            text3="starter templates"
          />
        </div>

        <div className="second--section-cards bottom-cards">
          <SecondSectionCards
            className="card-4"
            icon={checklist}
            heading="CheckList"
            text1="choose a date"
            text2="personalize and order save the date"
            text3="discuss your budget, and who is paying"
          />

          <SecondSectionCards
            className="card-5"
            icon={vendors}
            heading="Vendors"
            text1="find local professionals"
            text2="see reviews from across the web"
            text3="save and communicate in one place"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
