import React from "react";
import styledComponents from "styled-components";
import ilimage from "Images/MainImage/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="http://localhost:3000/">
            <img className="nav_logo" src={ilimage} />
          </a>
        </div>
        <ul className="nav_menu">
          <li>
            <a href="http://localhost:3000/">HOME</a>
          </li>
          <li>
            <a href="http://localhost:3000/abouts">ABOUTS</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
