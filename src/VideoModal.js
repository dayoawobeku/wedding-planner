import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../node_modules/react-modal-video/css/modal-video.css";
import playVideo from "../src/assets/play video icon.svg";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="eKng7C5RLaY"
        onClose={() => setOpen(false)}
      />

      <p className="btn-primary" onClick={() => setOpen(true)}>
        <img
          src={playVideo}
          alt="play video icon"
          style={{ marginRight: ".5rem" }}
        />
        <span id="play">play</span> <span>video</span>
      </p>
    </>
  );
};

export default VideoModal;
