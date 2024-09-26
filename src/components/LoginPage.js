import React, { useContext, useState } from "react";
import "./LoginPage.css";
import SignupContext from "../Context/SignupContext";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ sign }) => {
  const { handleLogin } = useContext(AuthContext);
  const { signState } = useContext(SignupContext);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  function checkAvailablity() {
    if (!mail || !pass) {
      setError("Both email and password are required!");
    } else {
      const element = signState.users.find(
        (val) => val.email === mail && val.password === pass
      );
      console.log(element);
      if (element) {
        handleLogin();
        nav("/");
        setError("");
      } else {
        setError("Your Email or Password wrong!!");
      }
    }
  }
  return (
    <div className="login">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setMail(e.target.value)}
        required
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        required
      ></input>
      <p id="notify">{error}</p>
      <button onClick={checkAvailablity}>Login</button>
      <p className="text">
        Not a member?
        <span onClick={sign}>Signup now</span>
      </p>
    </div>
  );
};

export default LoginPage;
