import "./Astrology.css";
import { useEffect, useState } from "react";

export default function Astrology({ changeNavMode, changeAppStyle }) {
  const [currentCharacter, setCurrentCharacter] = useState({
    name: "Character",
    sign: "Astrology",
    image: require("../../images/Astrology Signs/wheel2.png"),
    theme: "#0f1419",
    description: "Click a card to get started!",
  });

  const characters = [
    {
      name: "Kira",
      sign: "Scorpio",
      image: require("../../images/Astrology Signs/Scorpio.png"),
      theme: "#1a0d0b",
      description:
        "Scorpio is known for being passionate, intense, and often mysterious. Throught the story Kira's decisions may not make sense but she did them to help people. She might not have many people she cares for, but she cherishes the few she does.",
    },
    {
      name: "Ness",
      sign: "Cancer",
      image: require("../../images/Astrology Signs/Cancer.png"),
      theme: "#0b1a1f",
      description: `Cancer is known for being intuitive, emotional, and deeply caring. 
        After the death of her son Ness was left heart broken and sad. She made alot of drastic desisions, but always made sure to take care of people and to not hurt them.`,
    },
    {
      name: "Jude",
      sign: "Sagittarius",
      image: require("../../images/Astrology Signs/Sagittarius.png"),
      theme: "#1a170b",
      description:
        "Sagittarius is known for being adventurous, optimistic, and freedom-loving. Even when the search for Bella appeared that she might die, Jude was the one who raised everyone's spirits. Jude loves going on vacations and exploring and even when Kira tries to hurt him emotionally, he stays positive and empathizes",
    },
  ];

  useEffect(() => {
    changeNavMode("dark");
    document.body.style.backgroundColor = currentCharacter.theme;
    document.body.style.overflowY = "hidden";
    document.body.style.transition = "0.3s ease-in-out";
    changeAppStyle({
      background: currentCharacter.theme,
      transition: "0.3s ease-in-out",
    });

    return () => {
      changeNavMode("light");
      changeAppStyle({ background: "white", transition: "none" });
      document.body.style.backgroundColor = "white";
      document.body.style.overflowY = "auto";
      document.body.style.transition = "none";
    };
  }, [currentCharacter]);

  return (
    <div className="astrology-page">
      <div className="info-section">
        <h4 className="character-name">{currentCharacter.name}</h4>
        <h1 className="sign-name">{currentCharacter.sign}</h1>
        <p className="sign-description">{currentCharacter.description}</p>
      </div>
      <div className="ring-1"></div>
      <div className="ring-2"></div>
      <img
        className="main-symbol"
        src={currentCharacter.image}
        alt={currentCharacter.sign}
      />
      <div className="card-container">
        {characters.map((character, index) => (
          <div
            key={index}
            className="astrology-card"
            onClick={() => setCurrentCharacter(character)}
          >
            <img
              src={character.image}
              alt={character.sign}
              className="card-image"
            />
            <h3>{character.name}</h3>
            <p className="hidden-info">Click to reveal more</p>
          </div>
        ))}
      </div>
    </div>
  );
}
