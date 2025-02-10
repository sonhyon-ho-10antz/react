import React, { useState } from "react";
import "./Animation02.css";

export default function Animation02_Page() {

  const [isFlipped, setIsFlipped] = useState(false);

  const animateClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="page">
      <h1>Animation02</h1>
      <div className="animation_box">
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={animateClick}>
          <div className="card-front"></div>
          <div className="card-back"></div>
        </div>
      </div>
    </div>
  );
}