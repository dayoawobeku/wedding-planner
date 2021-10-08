import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import NavLogo from "./list-items/NavLogo";
// import search from "../../assets/nav search icon.svg";
// import blackSearch from "../../assets/nav search icon black.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <navbar>
      <nav className="nav-container">
        <NavLink to="/">
          <NavLogo className="logo-768" />
        </NavLink>
        <ul
          className={isMobile ? "nav-lis-mobile" : "nav--parent"}
          onClick={() => setIsMobile(false)}
        >
          <div className="nav--left-lis">
            <li>
              <NavLink
                to="/"
                className="nav--link nav--left-link"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav--link nav--left-link" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav--link nav--left-link services"
                exact
              >
                Services
              </NavLink>
            </li>
          </div>

          <NavLink to="/">
            <NavLogo className="nav-logo" />
          </NavLink>

          <div className="nav--right-lis">
            <li>
              <NavLink
                to="/portfolio"
                className="nav--link nav--right-link portfolio"
                exact
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav--link nav--right-link" exact>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav--link nav--right-link"
                exact
              >
                Contact
              </NavLink>
            </li>

            {/* <img src={search} alt="search-icon" className="search-icon" /> */}

            {/* <img
              src={blackSearch}
              alt="search-icon"
              className="black--search-icon"
            /> */}
          </div>
        </ul>
      </nav>

      <button className="btn-mobile" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i class="im im-x-mark"></i> : <i class="im im-menu"></i>}
      </button>
    </navbar>
  );
};

export default Navbar;
