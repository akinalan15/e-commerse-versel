import React from "react";
import img3 from "../assets/img 3.png";
import cart from "../assets/svg/cart.svg";
import "./Navbar1.css";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={img3} alt="logo" />
        <div className="list">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to={"/Admin"}>Admin</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>

        <div className="btn">
          <Link to={"/Cart"}>
            <img src={cart} alt="cart" />
          </Link>

          <Link to={"/Contact"} className="contact-btn">
            <button className="contact">Contact Us </button>
          </Link>

          <Link to={"/"}>
            <button className="btn1">Logout</button>
          </Link>
        </div>
      </div>
      <Navbar2 />
    </>
  );
};

export default Navbar;
