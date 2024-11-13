import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Newadd from "../assets/svg/Newadd.png";
import picklist from "../assets/svg/picklist.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="admin-btns">
        <Link to={"/Admin"}>
          <button className="S1">
            <img src={Newadd} alt="" />
            Add Product
          </button>
        </Link>
        <Link to={"/ProductList"}>
          <button className="S2">
            <img src={picklist} alt="" />
            Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
