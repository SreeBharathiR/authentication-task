import React, { useState } from "react";
import "./SignupLogin.css";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
const SignupLogin = () => {
  const [heading, setHeading] = useState("Login");
  const [toggle, setToggle] = useState(true);
  function handleLogin() {
    setHeading("Login");
    setToggle(true);
  }
  function handleSign() {
    setHeading("Signup");
    setToggle(false);
  }
  return (
    <div className="pageCntainer">
      <div className="signupLogin">
        <p className="toggle">{heading}</p>
        <div className="btns">
          <button
            id="loginbtn"
            className={`btn ${toggle ? "active" : ""}`}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            id="signbtn"
            className={`btn ${!toggle ? "active" : ""}`}
            onClick={handleSign}
          >
            Signup
          </button>
        </div>
        {toggle ? <LoginPage sign={handleSign} /> : <SignupPage />}
      </div>
    </div>
  );
};

export default SignupLogin;
