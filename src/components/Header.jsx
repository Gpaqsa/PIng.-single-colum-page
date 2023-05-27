import React from "react";
// import logo from "../src/images/logo.svg";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <header className="logo-content">
      <div>
        <img src={logo} alt="logoImg" />
      </div>
    </header>
  );
};

export default Header;
