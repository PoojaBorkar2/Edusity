import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Being self-confident is a major part of being successful in life. And
          what better way to gain that confidence than with an education? Your
          level of education is often considered a way to prove your knowledge,
          and it can give you the confidence.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Hero;
