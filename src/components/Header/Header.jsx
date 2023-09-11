import React, { useState } from "react";
import "../../assets/styles/header.css";
import Logo from "../../assets//images/Note Logo.svg";
import HeaderMenu from "./HeaderMenu";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container py-3 header">
        <div className="row w-100 gap-lg-0 gap-3 justify-content-around text-center align-items-center">
          <HeaderMenu />
          <div className="headerLogo col-lg-2">
            <Link to={"/"}>
              <img src={Logo} className="Logo" />
            </Link>
          </div>
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
