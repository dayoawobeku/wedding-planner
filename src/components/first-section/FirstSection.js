import React from "react";
import PlayVideo from "../PlayVideo";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="first--section">
      <div className="first--section-texts">
        <h3>WELCOME TO EVENTS.LY NIGERIA LIMITED</h3>
        <p>
          We are a team of dedicated & professional event planners. We pride
          ourself as a brand that offers a dedicated service tailored to your
          individual needs. We create fun-filled & memorable events.
        </p>
      </div>
      <div className="first--section-image">
        <PlayVideo className="play-video-text" />
      </div>
    </div>
  );
};

export default FirstSection;
