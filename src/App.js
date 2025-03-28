import "./styles.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepageFolder/Homepage";
import TwentyQuestions from "./components/TwentyQuestions";
import Astrology from "./components/astrology/Astrology";

export default function App() {
  const [mode, setMode] = useState("Home");
  const [navMode, setNavMode] = useState("light");
  const [appStyle, setAppStyle] = useState({ background: "white" });

  function changeMode(modeName) {
    setMode(modeName);
  }

  function changeNavMode(modeName) {
    setNavMode(modeName);
  }

  function changeAppStyle(color) {
    setAppStyle(color);
  }

  return (
    <div className="App" style={appStyle}>
      <Navbar changeMode={changeMode} navMode={navMode} />
      {mode === "Home" && <Homepage changeNavMode={changeNavMode} />}
      {mode === "Questions" && <TwentyQuestions />}
      {mode === "Astrology" && (
        <Astrology
          changeNavMode={changeNavMode}
          changeAppStyle={changeAppStyle}
        />
      )}
    </div>
  );
}
