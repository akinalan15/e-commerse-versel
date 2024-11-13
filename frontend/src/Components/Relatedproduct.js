import React, { useContext, useEffect, useState } from "react";
import "./RelatedProduct.css";
import ProductCard from "./ProductCard";
import { ShopContext } from "../Context/ShopContext";
const Relatedproduct = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (all_product.length > 0) {
      let productCopy = all_product.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      setRelated(productCopy.slice(0, 5));
    }
  }, [all_product, category]);

  return (
    <div className="related">
      <h1>Related Product</h1>
      <hr />
      <div className="related_product">
        {related.map((item, i) => {
          return (
            <ProductCard
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              Op={item.old_price}
              nP={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Relatedproduct;
