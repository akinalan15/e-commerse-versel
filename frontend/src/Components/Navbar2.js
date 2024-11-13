import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="sub-navbar">
      <ul>
        <Link to={"/Mens"}>
          <li>Mens </li>
        </Link>
        <Link to={"/Womens"}>
          <li>Womens </li>
        </Link>
        <Link to={"/kids"}>
          <li>Kids </li>
        </Link>
        <Link to="/others">
          <li>other </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar2;
