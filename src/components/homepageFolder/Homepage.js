// Homepage.js
import React, { useState } from "react";
import Dropdown2 from "./Dropdown";
import styles from "./Homepage.module.css";
import FreeHome from "./Free/FreeHome.js";
import GabeHome from "./Gabriel/GabeHome.js";
import NessHome from "./Ness/NessHome.js";

export default function Homepage({ changeNavMode, changeAppStyle }) {
  const [selectedCharacter, setSelectedCharacter] = useState("character1");

  return (
    <div className={styles.container2}>
      <Dropdown2
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      {selectedCharacter === "character1" && <FreeHome />}
      {selectedCharacter === "character2" && (
        <GabeHome
          changeNavMode={changeNavMode}
          changeAppStyle={changeAppStyle}
        />
      )}
      {selectedCharacter === "character3" && <NessHome />}
    </div>
  );
}
