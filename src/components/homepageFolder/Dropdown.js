import React, { useState } from "react";
import styles from "./Homepage.module.css";

export default function Dropdown2({ selectedCharacter, setSelectedCharacter }) {
  const characters = [
    { id: "character1", name: "Free", icon: "😀", color: "#ff9999" },
    { id: "character2", name: "Gabriel", icon: "😎", color: "#99ff99" },
    { id: "character3", name: "Ness", icon: "🤖", color: "#9999ff" },
  ];

  const selectedChar =
    characters.find((char) => char.id === selectedCharacter) || characters[0];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.navbar2} ${isOpen ? styles.expanded : ""}`}
      style={{
        backgroundColor: selectedChar.color,
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.buttonWrapper}>
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
              onClick={() => {
                setSelectedCharacter(char.id);
                setIsOpen(false);
              }}
            >
              <span className={styles.icon}>{char.icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
