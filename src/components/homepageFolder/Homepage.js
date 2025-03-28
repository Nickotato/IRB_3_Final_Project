// Homepage.js
import React, { useState } from "react";
import Dropdown2 from "./Dropdown";
import CharacterPage2 from "./CharacterPage";
import styles from "./Homepage.module.css";
import { characters } from "../../data/charactersData.js";
import FreeHome from "./Free/FreeHome.js";
import GabeHome from "./Gabriel/GabeHome.js";

export default function Homepage() {
  const [selectedCharacter, setSelectedCharacter] = useState("character1");

  return (
    <div className={styles.container2}>
      <Dropdown2
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      {selectedCharacter === "character1" && <FreeHome />}
      {selectedCharacter === "character2" && <GabeHome />}
    </div>
  );
}
