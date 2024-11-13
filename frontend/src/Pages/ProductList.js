import React, { useEffect, useState } from "react";
import "../Styles/ProductList.css";
import Sidebar from "../Components/Sidebar";
import cross_icon from "../assets/svg/cart_cross_icon.png";

const ProductList = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch("http://localhost:4000/allproducts");
      const data = await res.json();
      setAllProducts(data || []); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching product data:", error);
      setAllProducts([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="productlist-main">
      <div className="navbar-primary">
        <Sidebar />
      </div>
      <div className="list-product">
        <h1>All Product list</h1>
        <div className="listproduct-format-main">
          <p>Products1</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((product, index) => {
            return (
              <>
                <div key={index} className="listproduct-format">
                  <img
                    src={product.image}
                    alt=""
                    className="listproduct-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    className="listproduct-remove-icon"
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                    src={cross_icon}
                    alt=""
                  />
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
