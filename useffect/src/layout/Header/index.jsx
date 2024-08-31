import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
     <Link to={"/about"}>    <li >About</li></Link>
        <Link to={"/sliders"}> <li >Slider</li></Link>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
