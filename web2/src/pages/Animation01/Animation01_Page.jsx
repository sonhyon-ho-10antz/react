import React, { useState } from "react";
import "./Animation01.css";

export default function Animation01_Page() {
  const [isBroken, setIsBroken] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const animateEggClick = () => {
    //　アニメ１実行
    setIsBroken(true);
    setTimeout(() => {
      //　アニメ２実行
      setIsMoving(true);
      setTimeout(() => {
        //　リセット
        setIsBroken(false);
        setIsMoving(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="page">
      <h1>Animation01</h1>
      <div className="animation_box">
        <div className={`front_egg ${isBroken ? "break" : ""}`} onClick={animateEggClick}></div>
        <div className="back_egg">
          <div className={`back_egg_top ${isMoving ? "moveUp" : ""}`}></div>
          <div className="back_egg_bottom"></div>
        </div>
      </div>
    </div>
  );
}