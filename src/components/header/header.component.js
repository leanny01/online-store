import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import userEvent from "@testing-library/user-event";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signinsignup">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // state = root store
  //user = user from the root store
  // currentUser from the user reducer
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
