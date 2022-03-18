import React from "react";
import { connect } from "react-redux";
import { Navigate, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

function RequiredAuth(props, { children }) {
  console.log(children);
  let navigate = useNavigate();
  let testText = props.isLoggedIn ? "true" : "false";

  return props.isLoggedIn === true ? children : <Login />;
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
  };
};

export default connect(mapStateToProps)(RequiredAuth);
