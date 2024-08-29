// src/Carousel.js
import React, { useState, useEffect } from "react";
import "./carousel.css";
import Img1 from "../../../public/images/patholy.avif";
import Img2 from "../../../public/images/testube.avif";
import Img3 from "../../../public/images/testube.avif";
import Img4 from "../../../public/images/samples.avif";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [Img1, Img2, Img3,Img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div className="carousel-slide">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
