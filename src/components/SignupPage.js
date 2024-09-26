import React, { useContext, useState } from "react";
import "./SignupPage.css";
import SignupContext from "../Context/SignupContext";
const SignupPage = () => {
  const { signup } = useContext(SignupContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  function handlleSignup() {
    if (password !== confirm) {
      setError("Password does not match!");
    } else {
      signup(email, password);
      setError("");
      setEmail("");
      setConfirm("");
      setPassword("");
    }
  }

  return (
    <div className="signup">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        value={email}
      ></input>
      <input
        type="password"
        placeholder="Create Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        value={password}
      ></input>
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
        value={confirm}
        required
      ></input>
      <p id="notify">{error}</p>
      <button
        onClick={handlleSignup}
        disabled={!email || !password || !confirm}
      >
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
