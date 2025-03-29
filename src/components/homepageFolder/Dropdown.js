// Dropdown2.js
import React, { useState } from "react";
import styles from "./Homepage.module.css";

// --- If using src/assets (Vite/CRA) ---
// import freeIcon from './assets/free-icon.png';
// import gabeIcon from './assets/gabe-icon.png';
// import nessIcon from './assets/ness-icon.png';
// --- --- --- --- --- --- --- --- --- ---

export default function Dropdown2({ selectedCharacter, setSelectedCharacter }) {
  const characters = [
    {
      id: "character1",
      name: "Free",
      // --- Use imported variables if using src/assets ---
      // icon: freeIcon,
      // --- Use public folder path otherwise ---
      icon: "https://picsum.photos/id/24/900/900", // Path relative to the public folder
      color: "rgba(255, 153, 153, 0.8)", // Example semi-transparent color
    },
    {
      id: "character2",
      name: "Gabriel",
      // icon: gabeIcon,
      icon: "/images/gabicon.png",
      color: "rgba(153, 255, 153, 0.8)",
    },
    {
      id: "character3",
      name: "Ness",
      // icon: nessIcon,
      icon: "https://picsum.photos/id/216/900/900",
      color: "rgba(153, 153, 255, 0.8)",
    },
  ];

  const selectedChar =
    characters.find((char) => char.id === selectedCharacter) || characters[0];

  const [isOpen, setIsOpen] = useState(false);

  // We will control background via CSS now for the glass effect
  // const selectedStyle = {
  //   // Optional: Keep border color dynamic?
  //   // borderColor: selectedChar.color
  // };

  return (
    // Remove inline backgroundColor, style is now primarily from CSS
    <div
      className={`${styles.navbar2} ${isOpen ? styles.expanded : ""}`}
      onClick={(e) => {
        // Prevent click on icons from closing the dropdown immediately
        if (e.target.closest(`.${styles.iconWrapper}`)) {
          // Allow icon clicks to proceed but don't toggle isOpen here
        } else {
          setIsOpen(!isOpen);
        }
      }}
    >
      <div className={styles.buttonWrapper}>
        {/* Display selected character's icon next to name in button? Optional */}
        {/* <img src={selectedChar.icon} alt="" className={styles.buttonIcon} /> */}
        <button className={styles.navbarButton2}>{selectedChar.name}</button>
      </div>

      {isOpen && (
        <div className={styles.iconContainer}>
          {characters.map((char) => (
            <div
              key={char.id}
              className={`${styles.iconWrapper} ${
                selectedCharacter === char.id ? styles.active2 : ""
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent onClick from firing
                setSelectedCharacter(char.id);
                setIsOpen(false); // Close dropdown after selection
              }}
            >
              {/* Use img tag instead of span */}
              <img
                src={char.icon}
                alt={char.name}
                className={styles.iconImage} // New class for image styling
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
