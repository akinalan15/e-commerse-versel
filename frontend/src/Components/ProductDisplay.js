import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../assets/svg/star_icon.png";
import stardull from "../assets/svg/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="ProductDisplay">
      <div className="product-left">
        <div className="image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="large">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="rating-stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={stardull} alt="" />
          <img src={stardull} alt="" />
          <div className="para_value">
            <p>(122)</p>
          </div>
        </div>
        <div className="product-prices">
          <div className="product_new">
            <p>${product.new_price}</p>
          </div>
          <div className="old">${product.old_price}</div>
        </div>

        <div className="sizes">
          <h1>Select Size</h1>
          <div className="product-sizes">
            <div
              className="
            s"
            >
              S
            </div>
            <div
              className="
            s"
            >
              M
            </div>
            <div
              className="
            s"
            >
              L
            </div>
            <div
              className="
            s"
            >
              XL
            </div>
            <div
              className="
            s"
            >
              XXL
            </div>
          </div>
          <button
            className="btn_cart"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nam
            natus laborum unde optio corporis perspiciatis temporibus earum aut!
            Necessitatibus alias quos odit at fuga soluta, exercitationem
            voluptas ullam! Necessitatibus!
          </div>
          <p className="product-display-category"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
