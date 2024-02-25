import React from "react";
import "./../Style/Card4.css";
import savingarrow from "./../Assets/saving-arrow.png";
function Card4(props) {
  return (
    <>
      <div className="card-container-22">
        <img src={props.imagePath} />
        <div className="text-container-22">
          <h2>{props.header}</h2>
          <p>{props.para}</p>
          <p>{props.discount}</p>
          {/* <img src={savingarrow} alt="" /> */}
          <a>{props.button}</a>
        </div>
      </div>
    </>
  );
}

export default Card4;
