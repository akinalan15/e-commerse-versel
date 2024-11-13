import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import PathSet from "../Components/PathSet";
import Navbar from "../Components/Navbar1";
import Footer from "../Components/Footer";
import ProductDisplay from "../Components/ProductDisplay";
import Descriptionbox from "../Components/Descriptionbox";
import Relatedproduct from "../Components/Relatedproduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));

  return (
    <div className="mainProduct">
      <Navbar />
      <PathSet product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <Relatedproduct category={product.category} />
      <Footer />
    </div>
  );
};

export default Product;
