import React from "react";
import { connect } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Login.css";

//import { login } from "../../redux";
//import { login } from "../../redux/loginData/loginActions";

import { sessionLogin } from "../../redux";

function UserLogin(props) {
  let navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  // const [okMsg, setOkMsg] = useState("");
  // const [isSuccess, setSuccess] = useState();

  useEffect(() => {
    //console.log(login);
    // userRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    //localStorage.setItem("isLoggedIn", true);
    //setSuccess(true);
    setUser("");
    setPwd("");
    setErrMsg("");
    props.sessionLogin();
    setIsLogin(true);
    navigate("/home");
  }

  return (
    <section className="loginSection">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      {/*
        <button onClick={() => props.Logout()}> Logout</button>
  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        ></input>

        <label htmlFor="password"> Password</label>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        ></input>
        <button> Sign Up</button>
      </form>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.session.isLoggedIn,
  };
}

function mapDispatchToProps(dispacth) {
  return {
    sessionLogin: () => dispacth(sessionLogin()),
    // Logout: () => dispacth(Logout),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
