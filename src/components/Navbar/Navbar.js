import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
          <img src="./assets/logoRamaera1.png" alt="logo" />
      </div>
        <div className="nav-links">
          <div className="nav">
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/">Our Industries</a>
              <img src="./assets/Shape.png" alt="arrow" />
            </li>
            <li className="nav-link">
              <a href="/">Our Companies</a>
              <img src="./assets/Shape.png" alt="arrow" />
            </li>
          </div>
          <div className="nav2">
            <li className="nav-link2">
              <a href="/">Carrer</a>
            </li>
            <li className="nav-link2">
              <a href="/">Contact</a>
            </li>
            <li className="nav-link2">
              <img src="./assets/search.png" alt="arrow" />
            </li>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
