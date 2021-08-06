import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLogo from "./list-items/NavLogo";
import search from "../../assets/nav search icon.svg";
import blackSearch from "../../assets/nav search icon black.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <navbar>
      <nav className="nav-container">
        <Link>
          <NavLogo className="logo-768" />
        </Link>
        <ul
          className={isMobile ? "nav-lis-mobile" : "nav--parent"}
          onClick={() => setIsMobile(false)}
        >
          <div className="nav--left-lis">
            <li>
              <Link to="/" className="nav--link nav--left-link" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link nav--left-link" exact>
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link nav--left-link services" exact>
                Services
              </Link>
            </li>
          </div>

          <Link>
            <NavLogo className="nav-logo" />
          </Link>

          <div className="nav--right-lis">
            <li>
              <Link
                to="/"
                className="nav--link nav--right-link portfolio"
                exact
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link nav--right-link" exact>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link nav--right-link" exact>
                Contact
              </Link>
            </li>

            <img src={search} alt="search-icon" className="search-icon" />

            <img
              src={blackSearch}
              alt="search-icon"
              className="black--search-icon"
            />
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
