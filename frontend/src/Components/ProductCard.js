import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="item">
      <Link to={`/Product/${props.id}`} onClick={window.scrollTo(0, 0)}>
        <img src={props.img} alt="" />
      </Link>
      <p className="items-prices">{props.name}</p>
      <div className="items-prices">
        <div className="items-prices-new">${props.nP}</div>
        <div className="items-price-old">${props.Op}</div>
      </div>
    </div>
  );
}

export default ProductCard;
