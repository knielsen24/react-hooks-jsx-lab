import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">About
      <h2>About Me</h2>
      <p>Born and raised in Ventura County, Kevin's passion for technology started at an early age.
        That passion was sparked with playing sonic with his cousins</p>
      <img src={ image } alt="I made this" />
    </div>)
  ;
}

export default About;
