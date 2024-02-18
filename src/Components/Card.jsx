import React from "react";
import "./../Style/Card.css";
function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.imagePath} />
        <div className="text-container">
          <p>{props.title}</p>
          <h2>{props.header}</h2>
          <p>{props.discount}</p>
          <a>{props.button}</a>
        </div>
      </div>
    </>
  );
}

export default Card;
