import React from "react";
import "./../Style/Card3.css";
import savingarrow from "./../Assets/saving-arrow.png";
function Card3(props) {
  return (
    <>
      <div className="saving-card-container">
        <img src={props.imagePath} />
        <div className="saving-text-container">
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

export default Card3;
