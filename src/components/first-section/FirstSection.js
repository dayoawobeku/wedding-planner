import React from "react";
import PlayVideo from "../PlayVideo";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="first--section">
      <div className="first--section-texts">
        <h3>WELCOME TO LOVE & HARMONY EVENTS</h3>
        <p>
          We are a team of redefined event planners and coordinators with the
          belief that our customer’s needs are of upmost importance and we are
          committed to meeting those needs.
        </p>
      </div>
      <div className="first--section-image">
        <PlayVideo className="play-video-text" />
      </div>
    </div>
  );
};

export default FirstSection;
