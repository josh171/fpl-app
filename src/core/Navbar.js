import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (path) => {
    navigate(path);
    setIsHovered(false);
  };
  return (
    <nav className="fpl-navbar">
      <div className="dropdown-container">
        <div className="icon-container" onMouseEnter={() => setIsHovered(true)}>
          <img className="icon" src="./images/fpl_icon.png" alt="fpl icon" />
        </div>
        <div
          className={`dropdown-content ${isHovered ? "visible" : "hidden"}`}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul className="list">
            <li className="list-item" onClick={() => handleClick("/")}>
              Home
            </li>
            <li
              className="list-item"
              onClick={() => handleClick("/my-current-team")}
            >
              Current Team
            </li>
            <li
              className="list-item"
              onClick={() => handleClick("/league-standings")}
            >
              Coole League Standings
            </li>
            <li className="list-item" onClick={() => handleClick("/players")}>
              Players
            </li>
            <li className="list-item no-hover-change">Tools</li>
            <li
              className="list-item"
              onClick={() => handleClick("/player-comparison")}
            >
              Player Comparison
            </li>
            <li
              className="list-item"
              onClick={() => handleClick("/gameweek-notes")}
            >
              Gameweek Notes
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
