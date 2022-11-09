import React from "react";
import "./navbar.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home">
            <img src={logo} alt="logo"></img>
          </a>
        </li>
        <li>
          <a href="#Bikes">BIKES</a>
        </li>
        <li>
          <a href="#Accessories">ACCESSORIES</a>
        </li>
        <li>
          <a href="#New Tech">NEW TECH</a>
        </li>
        <li>
          <a href="#Explore">EXPLORE</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
