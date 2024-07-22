import React from "react";
import { sample1, sample2, sample3 } from "../../../assets/img/sample";

function Sample() {
  return (
    <div className="sample">
      <div className="sample-title">
        <h1>Styling Your Outfit</h1>
        <p>With us, your style's a breeze, dressed to impress with ease!</p>
      </div>
      <div className="sample-image">
        <img src={sample1}/>
        <img src={sample2}/>
        <img src={sample3}/>
      </div>
    </div>
  );
}

export default Sample;
