import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I a task-oriented Professional Web Developer with 4 year of revelant experience and a clear track-record.</p>
      <img
         src= {image}
         alt= "I made this"
       />
    </div>
  )
}

export default About;
