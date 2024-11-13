import React, { useContext } from "react";
import Navbar from "../Components/Navbar1";
import Footer from "../Components/Footer";
import "../Styles/Cart.css";
import { ShopContext } from "../Context/ShopContext";
import deleteicon from "../assets/svg/delete.png";

const Cart = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="Cart">
      <Navbar />
      <div className="cartitems">
        <div className="cartitems_main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="hrone" />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="primaryCart">
                <div className="secondaryCart">
                  <img src={e.image} alt="" className="imgcart" />
                  <p className="cartname">{e.name}</p>
                  <p className="cartprice">${e.new_price}</p>
                  <button className="cartbtn">{cartItems[e.id]}</button>
                  <p className="total">${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="dltbtn"
                    src={deleteicon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cart-down">
          <div className="cartPriceTotal">
            <h1>Cart Totals</h1>
            <div className="cart-items-total">
              <div className="cart_totalItems">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="btn-proceed">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
