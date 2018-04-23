import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Link className="header-title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button onClick={startLogout}
          className="btn btn--logout">Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
