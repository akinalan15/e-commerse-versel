import React from "react";
import "../Ads/Ads2.css";
import img6 from "../assets/img6.png";

const Ads2 = () => {
  return (
    <div className="main-ads2">
      <div className="ads2-left">
        <img src={img6} alt="" srcset="" />
      </div>

      <div className="ads2-right">
        <h2>
          Exclusive <br /> Offers for you
        </h2>
        <p>Only on best sellers products</p>
        <button>Check Now </button>
      </div>
    </div>
  );
};

export default Ads2;
