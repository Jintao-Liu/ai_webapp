// Carousel.jsx
import React, { useState, useEffect } from "react";
import "./Carousel.css";
import img1 from './landingimg.png';
import img2 from './landingimg2.png';
const images = [
  img1,
  img2
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000); // 自动切换
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
  />
      ))}
      {/* 点击区域替代按钮 */}
      <div className="click-zone left" onClick={goPrev}></div>
      <div className="click-zone right" onClick={goNext}></div>

      <div className="carousel-caption">
        <h1>Example headline.</h1>
        <p>Some representative placeholder content for the first slide of the carousel.</p>
        <button className="cta-button">Sign up today</button>
      </div>
    </div>
  );
};

export default Carousel;
