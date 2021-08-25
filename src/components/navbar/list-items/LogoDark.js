import React from "react";
import logo from "../../../assets/footer logo.svg";

const LogoDark = ({ className }) => {
  return (
    <div>
      <img src={logo} alt="dark-logo" className={className} />
    </div>
  );
};

export default LogoDark;
