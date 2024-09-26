import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import "./LogToggle.css";
const LogToggle = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <button className="logoutbtn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogToggle;
