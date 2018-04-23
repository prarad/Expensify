import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__box--title">Expensify</h1>
      <p>It's time to get your expenses under the control.</p>
      <button className="btn" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
