import React from "react";
import logo from "../../../assets/navbar logo.svg";

const NavLogo = ({ className }) => {
  return (
    <div>
      <img src={logo} alt="navbar-logo" className={className} />
    </div>
  );
};

export default NavLogo;
