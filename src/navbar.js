import React, {useState} from "react";
import "./navbar.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [icon, setIcon] = useState(faBars)
  const [liStyle, setLiStyle] = useState("faBars")

  return (
    <nav>
      <ul className={liStyle === faXmark ? "ulStyle" : ""}>
        <li key="#Home" className={liStyle}>
          <a href="#Home">
            <img src={logo} alt="logo"></img>
          </a>
        </li>
        <li key="#Bikes" className={liStyle} >
          <a href="#Bikes">BIKES</a>
        </li>
        <li key="#Accessories" className={liStyle} >
          <a href="#Accessories">ACCESSORIES</a>
        </li>
        <li key="#New Tech" className={liStyle}>
          <a href="#New Tech">NEW TECH</a>
        </li>
        <li key="#Explore" className={liStyle}>
          <a href="#Explore">EXPLORE</a>
        </li>
        <li key="icon" className={liStyle} onClick={() => {
          setIcon(icon === faBars ? faXmark : faBars)
          setLiStyle(liStyle === "faBars" ? "faXMark" : "faBars")
        }}>
          <FontAwesomeIcon icon={icon} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
