import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={{color: "firebrick"}}>
    {name} is a Web Developer from {city}
    </h1>
  </div>;
}

export default Home;

// Inside the `<Home>` component, there are a couple of variables defined that will
// allow you to insert your name and city into the portfolio page.

// The `<Home>` component should return the following JSX elements:

// - a `<div>` element with an id of "home"
// - inside the div element, there should be one child element:
//   - an `<h1>` element, with the `style` attribute set to a color of "firebrick",
//     and the content of "Your Name is a Web Developer from Your City"
//   - use JSX expression syntax to use the imported `name` and `city` variables
//     inside your JSX elements