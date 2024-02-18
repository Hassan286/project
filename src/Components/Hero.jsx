import React from 'react'
import './../Style/Hero.css'
import Card from './../Components/Card.jsx'
import card from "./../Assets/card1.jpg";
import card2 from "./../Assets/card2.jpg";

function Hero() {
  return (
    <>
    <div className="hero-content">
        <Card 
        title="Low Price"
        header="High Coziness"
        discount="UPTO 50% OFF"
        button="Explore Items"
        imagePath={card}
        />
        <Card
        title="Beyoung Presents"
        header="Breezy Summer Style"
        discount="UPTO 50% OFF"
        button="Explore Items"
        imagePath={card2}
        
        />
    </div>
    
    </>
  )
}

export default Hero