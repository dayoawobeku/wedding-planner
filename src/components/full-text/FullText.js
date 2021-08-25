import React from "react";
import "./FullText.css";

function FullText({ text }) {
  return (
    <div className="full-text">
      <p>{text}</p>
    </div>
  );
}

export default FullText;
