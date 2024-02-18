import React from 'react';
import './../Style/Poster.css';
function Poster(props) {
  return (
    <>
   <div className="poster-card">
    <img src={props.imagePath}/>
      <div className="poster-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.button && <a href=""><button>{props.button}</button></a>}
      </div>
    </div> 
    
    
    
    </>
  )
}

export default Poster