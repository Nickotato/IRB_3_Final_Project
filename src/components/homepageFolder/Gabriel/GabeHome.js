import React from "react";
import "./GabeHome.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function GabeHome() {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div
            class="animation_layer parallax"
            id="bg"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/bg.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div
            class="animation_layer parallax"
            id="far"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/far-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div
            class="animation_layer parallax"
            id="mid"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/mid-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div
            class="animation_layer parallax"
            id="close"
            style={{
              backgroundImage: `url(${require("../../../images/DemonsWoods/close-trees.png")})`,
            }}
          ></div>
        </ParallaxLayer>
        {/* #16303C */}
        <ParallaxLayer offset={0.99} speed={1.5}>
          <div id="textblock"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
