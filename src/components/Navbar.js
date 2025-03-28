import React, { useState } from "react";

export default function Navbar({ changeMode }) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);

    setTimeout(() => {
      if (buttonId === hoveredButton) {
        setTooltipVisible(true);
      }
    }, 1000); // Delay of 1 second
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
    setTooltipVisible(false);
  };

  return (
    <nav className="navbar shine">
      <button
        className="navbar-link"
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeMode("Home")}
      >
        <img src={require("../images/home.png")} className="navbar-img" />
        {tooltipVisible && hoveredButton === "home" && (
          <span className="tooltip">Homepage</span>
        )}
      </button>
      <button
        className="navbar-link"
        onMouseEnter={() => handleMouseEnter("questions")}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeMode("Questions")}
      >
        <img
          src={require("../images/questionmark.png")}
          className="navbar-img"
        />
        {tooltipVisible && hoveredButton === "questions" && (
          <span className="tooltip">20 Questions</span>
        )}
      </button>
      <button
        className="navbar-link"
        onMouseEnter={() => handleMouseEnter("astrology")}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeMode("Astrology")}
      >
        <img src={require("../images/star.png")} className="navbar-img" />
        {tooltipVisible && hoveredButton === "astrology" && (
          <span className="tooltip">Astrology Signs</span>
        )}
      </button>
    </nav>
  );
}
