import React from "react";
import Fashiondresses from "../data/Fashiondresses";
import ProductCard from "../Components/ProductCard";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {Fashiondresses.map((dress, i) => {
          return (
            <ProductCard
              key={i}
              id={dress.id}
              name={dress.name}
              img={dress.img}
              Op={dress.oldPrice}
              nP={dress.newPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
