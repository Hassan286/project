import React, { useState } from "react";
import Slider1 from "./../Assets/slider.jpg";
import Slider11 from "./../Assets/slider-arrow-11.png";
import Slider22 from "./../Assets/slider-arrow-22.png";
import { Link } from "react-router-dom";
  

import "./../Style/Slider.css";
const slides = [
  { id: 1, imageUrl: "https://via.placeholder.com/300", alt: "Slide 1" },
  { id: 2, imageUrl: "https://via.placeholder.com/300", alt: "Slide 2" },
  { id: 3, imageUrl: "https://via.placeholder.com/300", alt: "Slide 3" },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={Slider1} alt={slide.alt} />

          </div>
          
        ))}
        <div className="slider-content">
          <p>T-Shirt / Tops</p>
          <h2>Summer Value Pack</h2>
          <p>Cool / colorful / comfy</p>
          <Link to="/product">  <a href="">Shop Now</a></Link>

        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <img src={Slider11} alt="" />
      </button>
      <button className="next-button" onClick={nextSlide}>
        <img src={Slider22} alt="" />
      </button>
    </div>
  );
};

export default Slider;
