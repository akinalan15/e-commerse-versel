import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import mens from "./assets/banner/mens.gif";
import womens from "./assets/banner/womens_banner.gif";
import kids from "./assets/banner/kids-banner.webp";
import other from "./assets/banner/other_banner.jpg";
import Admin from "./Pages/Admin";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/ProductList" element={<ProductList />}></Route>
        <Route
          path="/Mens"
          element={<Shopcategory category="men" banner={mens} />}
        ></Route>
        <Route
          path="/Womens"
          element={<Shopcategory category="women" banner={womens} />}
        ></Route>
        <Route
          path="/Kids"
          element={<Shopcategory category="kid" banner={kids} />}
        ></Route>
        <Route
          path="/others"
          element={<Shopcategory category="other" banner={other} />}
        ></Route>
        <Route path="/Product/:ProductId" element={<Product />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
