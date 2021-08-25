import React from "react";
import Footer from "./footer/Footer";
// import Navbar from "./navbar/Navbar";
import NavbarDark from "./navbar/NavbarDark";

function Layout({ children }) {
  return (
    <>
      <NavbarDark />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
