import React from "react";
import "./../Style/Arrival.css";
import Card2 from './Card2.jsx'
import arrival from './../Assets/arrival-1.png'
import arrival2 from './../Assets/arrival-2.png'
import arrival3 from './../Assets/arrival-3.png'
import arrival4 from './../Assets/arrival-4.png'

function Arrival(props) {
  return (
    <>
      <div className="arrival-container">
        <div className="vertical-line"></div>
        <h2 className="arrival-title">{props.title}</h2>
      </div>
      
    </>
  );
}

export default Arrival;
