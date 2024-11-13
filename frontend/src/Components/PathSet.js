import React from "react";
import "../Components/PathSet";
import arrow from "../assets/Frontend_Assets/breadcrum_arrow.png";
import "./PathSet.css";

const PathSet = (props) => {
  const { product } = props;
  return (
    <div className="Details">
      <div className="dsub">
        Home <img src={arrow} alt="" />
        Shop <img src={arrow} alt="" />
        {product.category}
        <img src={arrow} alt="" />
        {product.name}
      </div>
    </div>
  );
};

export default PathSet;
