import React from "react";
import VideoModal from "../VideoModal";

const PlayVideo = ({ className }) => {
  return (
    <div className="play-video-parent">
      <div className="play-video">
        <div className="play-video-container">
          <p className={className}>
            <VideoModal />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
