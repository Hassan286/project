import React from "react";
import "./../Style/Card2.css";
function Card2(props) {
  
  return (
    <>
      <div className="card-2-container">
        <a>
          <img src={props.imagePath} />
        </a>
        <a href="">
          <h2>{props.title}</h2>
        </a>
        <p>{props.para}</p>
      </div>
    </>
  );
}

export default Card2;
