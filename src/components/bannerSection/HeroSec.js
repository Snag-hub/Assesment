import React from "react";
import "./HeroSec.css";

import Navbar from "../Navbar/Navbar";

const HeroSec = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <img src="./assets/bg.png" alt="background" />
          <div className="nav-wrapper-conatiner">
            <Navbar />
          </div>
          <div className="hero-text">
            <div className="img">
              <img src="./assets/Name.png" alt="logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum, nisl eget aliquam tincidunt, nisl eros aliquam massa,
              vitae aliquam nisl nisl sit amet lorem. Sed fermentum, nisl eget
              aliquam tincidunt, nisl eros aliquam massa, vitae aliquam nisl
            </p>
            <button className="btnInfo">Learn More</button>
          </div>
          <div className="hero-img">
            <img src="./assets/slide.png" alt="hero" />
          </div>
          <div className="hero-img-1">
            <img src="./assets/Vector.png" alt="group"/>
          </div>
          
        </header>
      </div>
    </>
  );
};

export default HeroSec;
