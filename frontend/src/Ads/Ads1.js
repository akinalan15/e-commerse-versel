import React from "react";
import img5 from "../assets/img5.png";
import "../Ads/Ads1.css";
import { Link } from "react-router-dom";

const Ads1 = () => {
  return (
    <div className="main-ads">
      <div className="ads-right">
        <h2>
          Explore top brands <br /> and styles
        </h2>
        <p>eKart finds to keep you on trend</p>
        <Link to={"/Womens"}>
          {" "}
          <button>Shop Now </button>
        </Link>
      </div>
      <div className="ads-left">
        <img src={img5} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Ads1;
