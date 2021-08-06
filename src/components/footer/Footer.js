import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/footer logo.svg";
import btnArrow from "../../assets/white right arrow icon.svg";
import facebook from "../../assets/facebook icon.svg";
import instagram from "../../assets/instagram icon.svg";
import youtube from "../../assets/youtube icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer--left">
          <h4>FOLLOW US</h4>
          <div className="social--links-parent">
            <Link className="social--links">
              <img src={facebook} alt="facebook logo" />
            </Link>
            <Link className="social--links">
              <img src={instagram} alt="instagram logo" />
            </Link>
            <Link className="social--links">
              <img src={youtube} alt="youtube logo" />
            </Link>
          </div>

          <p>wedding_planner@gmail.com</p>
        </div>

        <img src={footerLogo} alt="footer logo" className="footer-logo" />

        <div className="footer--right">
          <h4>NEWSLETTER</h4>
          <p>Follow our latest stories</p>
          <label htmlFor="text" />
          <input type="text" placeholder="Your email" />
          <button className="footer--right-btn">
            <img src={btnArrow} alt="arrow button" />
          </button>
        </div>
      </div>
      <p className="copyright">2021 Copyright - Love & Harmony Events</p>
    </footer>
  );
};

export default Footer;
