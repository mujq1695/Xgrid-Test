import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="lefti">
        <p>{item.src}</p>
      </div>
      <div className="data">
        <h2>{item.title}</h2>
        <p>{item.data}</p>
      </div>
    </div>
  );
};

export default Card;
