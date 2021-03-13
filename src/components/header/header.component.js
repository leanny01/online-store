import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signinsignup">
        SIGNIN
      </Link>
      <Link className="option" to="/signinsignup">
        SIGNUP
      </Link>
    </div>
  </div>
);

export default Header;
