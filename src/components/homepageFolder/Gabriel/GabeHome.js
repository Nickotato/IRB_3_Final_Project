import React, { useEffect } from "react";
import "./GabeHome.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function GabeHome({ changeNavMode }) {
  useEffect(() => {
    changeNavMode("dark");
    document.body.style.backgroundColor = "#16303c";

    return () => {
      changeNavMode("light");
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div
            className="animation_layer parallax"
            id="bg"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/bg.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div
            className="animation_layer parallax"
            id="far"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/far-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div
            className="animation_layer parallax"
            id="mid"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/mid-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div
            className="animation_layer parallax"
            id="close"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/close-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        {/* #16303C */}
        <ParallaxLayer offset={0.99} speed={1.5}>
          <div id="textblock" className="animation_layer parallax">
            <div id="textblock-container">
              <h1 id="textblock-title">Gabriel?</h1>
              <p id="textblock-content">
                As a child, Gabriel's life was irreparably altered when his
                brother Andrés disappeared in a mysterious vanishing. In their
                tiny village, such vanishings were eerily common; numerous
                villagers abandoned their previous lives to find peace in the
                woods. But for Gabriel, it was not a passing phenomenon—it was
                his dear brother who was gone, and he promised to bring him
                back.
                <br />
                <br />
                Over the years, Gabriel painstakingly mapped out the surrounding
                terrain, exploring the secret caves within the imposing
                mountains. He was a familiar figure on online forums, posting
                complex questions that illustrated his relentless quest.
                Regardless of how he tried, he was unable to uncover the destiny
                of his brother ultimately.
              </p>
              <ul>
                <li>
                  <a href="https://www.pioneerbushcraft.org/nature-articles/bushcraft-articles/deepening-your-tracking-skills/">
                    Deeping Your Tracking Skills
                  </a>
                </li>
                <li>
                  <a href="https://doc.arcgis.com/en/arcgis-online/get-started/get-started-with-maps-mv.htm#:~:text=To%20create%20a%20meaningful%20map,the%20symbology%20is%20not%20intuitive.">
                    How to Make a Map
                  </a>
                </li>
                <li>
                  <a href="https://www.wikihow.com/Live-off-the-Grid">
                    How to Live Off the Grid
                  </a>
                </li>
                <li>
                  <a href="https://outdoors.stackexchange.com/questions/27469/correct-technique-to-traverse-exposed-sandy-rock-slope">
                    Correct Way to Climb Sandy Slope
                  </a>
                </li>
                <li>
                  <a href="https://www.fs.usda.gov/visit/know-before-you-go/cave-safety">
                    Traverse Caves Safely
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
