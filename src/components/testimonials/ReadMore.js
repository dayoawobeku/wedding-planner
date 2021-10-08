import React, { useState } from "react";
import "./Testimonials.css";

function ReadMore({ children }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 300) : text;
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  return (
    <div>
      <p className="testimonials--main-text">
        {resultString}
        <span className="read-more" onClick={toggleIsTruncated}>
          {isTruncated ? "...Read More" : " Read Less"}
        </span>
      </p>
    </div>
  );
}

export default ReadMore;
