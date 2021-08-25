import React from "react";
import "./FullImage.css";

function FullImage({ src, alt, text }) {
  return (
    <div className="full-image">
      <img src={src} alt={alt} />
      <h2>{text}</h2>
    </div>
  );
}

export default FullImage;
