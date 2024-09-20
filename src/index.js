import "normalize.css";
import "./styles.css";

import logo from "./assets/jwlogo.png"; // Import the logo image

console.log("Hello, Webpack Template with CSS Reset!");

// Dynamically set the logo image source in the footer
document.querySelector("footer img").src = logo;
