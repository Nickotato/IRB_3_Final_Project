import React from "react";
import styles from "./Homepage.module.css";

export default function CharacterPage2({ character }) {
  return (
    <div
      className={styles.characterContainer2}
      style={{ backgroundImage: character.backgroundImage }}
    >
      <div className={styles.overlay2}>
        <h1 className={styles.characterName2}>{character.name}</h1>
        <p className={styles.characterDescription2}>{character.description}</p>
        <ul className={styles.linksList2}>
          {character.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
