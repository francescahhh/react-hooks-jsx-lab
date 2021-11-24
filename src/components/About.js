import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>I am a student at Flatiron School</p>
  <img src={(image)} alt="I made this"></img>
  </div>;
}

export default About;

// The `<About>` component should return the following JSX elements:

// - a `<div>` element with an id of "about"
// - inside the div element, there should be three child elements:
//   - an `<h2>` element with the content of "About Me"
//   - a `<p>` element with any content of your choosing
//   - an `<img>` element with the `src` attribute set to the `image` variable, and
//     the `alt` attribute set to "I made this"