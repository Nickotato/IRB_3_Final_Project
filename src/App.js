import "./styles.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepageFolder/Homepage";
import TwentyQuestions from "./components/TwentyQuestions";
import Astrology from "./components/astrology/Astrology";

export default function App() {
  const [mode, setMode] = useState("Home");

  function changeMode(modeName) {
    setMode(modeName);
  }

  return (
    <div className="App">
      <Navbar changeMode={changeMode} />
      {mode === "Home" && <Homepage />}
      {mode === "Questions" && <TwentyQuestions />}
      {mode === "Astrology" && <Astrology />}
    </div>
  );
}
