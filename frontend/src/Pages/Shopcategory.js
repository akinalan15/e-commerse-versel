import React, { useContext } from "react";
import Navbar from "../Components/Navbar1";
import { ShopContext } from "../Context/ShopContext";
import ProductCard from "../Components/ProductCard";
import "../Styles/ShopCategory.css";
import Footer from "../Components/Footer";
import sort from "../assets/svg/sort.png";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="categ">
      <Navbar />
      <div className="categ2">
        <img src={props.banner} alt="" />
      </div>
      <div className="other-items">
        <p>
          <span>Showing 1-12</span>
          <br></br> out of 36 products
        </p>
        <div className="sort">
          <p>Sort by</p>
          <img src={sort} alt="" />
        </div>
      </div>
      <div className="newItems">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Shopcategory;
