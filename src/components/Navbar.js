import React, { useState } from "react";

export default function Navbar({ changeMode, navMode }) {
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

  const navStyle = {
    border: navMode === "dark" ? "1px solid white" : "1px solid black",
  };

  const navImgStyle = {
    filter: navMode === "dark" ? "invert(100%)" : "",
  };

  return (
    <nav className="navbar shine" style={navStyle}>
      <button
        className="navbar-link"
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => changeMode("Home")}
      >
        <img
          src={require("../images/home.png")}
          className="navbar-img"
          style={navImgStyle}
        />
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
          style={navImgStyle}
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
        <img
          src={require("../images/star.png")}
          className="navbar-img"
          style={navImgStyle}
        />
        {tooltipVisible && hoveredButton === "astrology" && (
          <span className="tooltip">Astrology Signs</span>
        )}
      </button>
    </nav>
  );
}
