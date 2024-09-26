import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const navigate = useNavigate();
  function navigation() {
    navigate(`/${data.id}`);
  }
  return (
    <div className="card" onClick={navigation}>
      <p>{data.title}</p>
    </div>
  );
};

export default Card;
