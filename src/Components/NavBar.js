import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
       <a href="/"> <h2>Logo</h2></a>
        <div className="nav">
          <nav>
            <ul className="nav__links">
              <li className="nav__link">
                <a href="/">Current Weather</a>
              </li>

              <li className="nav__link">
                <a href="/">Consequences</a>
              </li>

              <li className="nav__link">
                <a href="/">Your Contribution</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
