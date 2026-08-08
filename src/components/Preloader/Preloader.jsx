import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">A procurar no universo Nintendo...</p>
    </div>
  );
}

export default Preloader;
