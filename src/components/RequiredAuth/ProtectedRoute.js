import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  return props.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
