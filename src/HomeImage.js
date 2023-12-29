import React from "react";
import homeImage from "./home.png"; // Import the image
import "./HomeImage.css"; // Import the CSS file

export default function HomeImage() {
  return (
    <div>
      <img src={homeImage} alt="Home" />
    </div>
  );
}
