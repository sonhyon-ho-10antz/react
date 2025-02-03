import React from "react";
import "./Animation01.css";
import animateEgg from "./Animation01";

export default function Animation01_Page() {
  React.useEffect(() => {
    animateEgg();
  }, []);

  return (
    <div className="page">
      <h1>Animation01</h1>
      <div className="animation_box">
          <div className="front_egg"></div>
          <div className="back_egg">
              <div className="back_egg_top"></div>
              <div className="back_egg_bottom"></div>
          </div>
      </div>
    </div>
  );
}