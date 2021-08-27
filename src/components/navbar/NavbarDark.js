import React, { useState } from "react";
import "./NavbarDark.css";
import { NavLink } from "react-router-dom";
import blackSearch from "../../assets/black-search-icon.svg";
import LogoDark from "./list-items/LogoDark";

const NavbarDark = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <navbar>
      <nav className="nav-container nav-container-black">
        <NavLink to="/">
          <LogoDark className="nav-logo logo-dark-768" />
        </NavLink>
        <ul
          className={isMobile ? "nav-lis-mobile" : "nav--parent"}
          onClick={() => setIsMobile(false)}
        >
          <div className="nav--left-lis">
            <li>
              <NavLink to="/" className="nav--link black nav--left-link" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav--link black  nav--left-link"
                exact
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav--link black nav--left-link services"
                exact
              >
                Services
              </NavLink>
            </li>
          </div>

          <NavLink to="/">
            <LogoDark className="nav-logo" />
          </NavLink>

          <div className="nav--right-lis">
            <li>
              <NavLink
                to="/portfolio"
                className="nav--link black  nav--right-link portfolio"
                exact
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="nav--link black nav--right-link"
                exact
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav--link black  nav--right-link"
                exact
              >
                Contact
              </NavLink>
            </li>

            <img
              src={blackSearch}
              alt="search-icon"
              className="search-icon black "
            />

            <img
              src={blackSearch}
              alt="search-icon"
              className="black--search-icon"
            />
          </div>
        </ul>
      </nav>

      <button
        className="btn-mobile btn-mobile-dark"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i class="im im-x-mark"></i> : <i class="im im-menu"></i>}
      </button>
    </navbar>
  );
};

export default NavbarDark;
