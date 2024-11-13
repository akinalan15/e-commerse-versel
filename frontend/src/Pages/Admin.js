import React, { useState } from "react";
import "../Styles/Admin.css";
import Navbar from "../Components/Navbar1";
import Sidebar from "../Components/Sidebar";
import upload from "../assets/svg/cloud_upload_24dp_GREY_FILL0_wght400_GRAD0_opsz24.png";

const Admin = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "Men",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch(`${import.meta.env.REACT_SERVER_APP_URL}/upload`, {
      method: "POST",
      headers: {
        Accept: "application.json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch(`${import.meta.env.REACT_SERVER_APP_URL}/addproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };
  return (
    <div className="Admin">
      <Navbar />
      <div className="admin-primary">
        <div className="admin-secondary">
          <Sidebar />
        </div>

        <div className="admin-content">
          <div className="product-title">
            <h3>Product Title</h3>
            <label htmlFor="product-title"></label>
            <input
              onChange={changeHandler}
              value={productDetails.name || ""}
              name="name"
              type="text"
              placeholder="Product name"
            />
          </div>
          <div className="different-prices">
            <div className="Price">
              <h3>Price</h3>
              <label htmlFor="Price"></label>
              <input
                name="new_price"
                onChange={changeHandler}
                value={productDetails.new_price || ""}
                type="number"
                placeholder="Enter price"
              />
            </div>
            <div className="offer-price">
              <h3>Offer Price</h3>
              <label htmlFor="Offer Price"></label>
              <input
                name="old_price"
                onChange={changeHandler}
                value={productDetails.old_price || ""}
                type="number"
                placeholder="New price"
              />
            </div>
          </div>

          <div className="product-category">
            <h3>Product Category</h3>
            <select
              onChange={changeHandler}
              value={productDetails.category || ""}
              name="category"
              id="category"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kid">Kids</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="upload">
            <h3>Add Image</h3>
            <label htmlFor="file-input">
              <img
                src={image ? URL.createObjectURL(image) : upload}
                alt="upload"
              />
              <input
                onChange={imageHandler}
                type="file"
                id="file-input"
                hidden
              />
            </label>
          </div>

          <button onClick={addProduct} className="admin-addbtn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
