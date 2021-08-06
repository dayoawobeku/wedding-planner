import React from "react";
import playVideo from "../assets/play video icon.svg";

const PlayVideo = ({ className }) => {
  return (
    <div className="play-video-parent">
      <div className="play-video">
        <div className="play-video-container">
          <img src={playVideo} alt="play video icon" />
          <p className={className}>
            {" "}
            <span id="play">play</span> <span>video</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
