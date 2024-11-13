import React from "react";
import Navbar from "../Components/Navbar1";
import Ads1 from "../Ads/Ads1";
import Popular from "../Ads/Popular";
import Ads2 from "../Ads/Ads2";
import NewCollection from "../Ads/NewCollection";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Ads1 />
      <Popular />
      <Ads2 />
      <NewCollection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
