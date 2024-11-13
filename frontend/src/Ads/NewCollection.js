import React from "react";
import data_json from "../data/data_json";
import ProductCard from "../Components/ProductCard";
import "../Ads/NewCollection.css";

const NewCollection = () => {
  return (
    <div className="NewCollection">
      <h1 className="heading">NEW ARRIVALS</h1>
      <hr />
      <div className="data">
        {data_json.map((item, i) => {
          return (
            <ProductCard
              key={i}
              id={item.id}
              name={item.name}
              img={item.img}
              Op={item.oldPrice}
              nP={item.newPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
