import React from "react";
import logo from "../../../assets/navbar logo.svg";

const NavLogo = ({ className }) => {
  return (
    <div className="navo">
      <img src={logo} alt="navbar-logo" className={className} />
    </div>
  );
};

export default NavLogo;
