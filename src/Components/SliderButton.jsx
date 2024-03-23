import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SliderButton.css"; // Archivo CSS para estilos

const SliderButton = ({ buttonText, beforeSlideText, buttons }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="slider-button-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="header-button">{buttonText}</button>
      <div className={`button-group ${isHovered ? "slide-down" : ""}`}>
        {buttons.map((button, index) => (
          <NavLink key={index} to={button.to}>
            <button className="header-button">{button.text}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SliderButton;
