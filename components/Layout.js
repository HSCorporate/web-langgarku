import React from "react";
import Navbar from "./Navbar";
import FooterPage from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <FooterPage />
    </div>
  );
};

export default Layout;
