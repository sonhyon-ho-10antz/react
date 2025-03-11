import React, { useState } from "react";
import "./Animation01.css";

export default function Animation01_Page() {
  const [isBroken, setIsBroken] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isShake, setIsShake] = useState(false);


  const animateClick = () => {
    // 割れる＋揺れる開始
    setIsBroken(true);
    setIsShake(true);

    // 揺れ停止
    setTimeout(() => {
      setIsShake(false);

      // 蓋上昇開始
      setTimeout(() => {
        setIsMoving(true);
        
        //　リセット
        setTimeout(() => {
          setIsBroken(false);
          setIsMoving(false);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="page">
      <h1>Animation01</h1>
      <div className="animation_box">
        <div className={`egg ${isShake ? "shake-1" : ""}`}>
          <div className={`front_egg ${isBroken ? "break" : ""}`} onClick={animateClick}></div>
          <div className={`back_egg ${isShake ? "shake-1" : ""}`}>
            <div className={`back_egg_top ${isMoving ? "moveUp" : ""}`}></div>
            <div className="back_egg_bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}