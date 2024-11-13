import React from "react";
import "./Footer.css";
import img3 from "../assets/img 3.png";
import ic1 from "../assets/social/ic1.png";
import ic2 from "../assets/social/ic2.png";
import ic3 from "../assets/social/ic3.png";
import ic4 from "../assets/social/ic4.png";
import ic5 from "../assets/social/ic5.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="secondary">
        <img src={img3} alt="" srcset="" />
        <ul>
          <li>WEEKLY OFFERS</li>
          <li>PRE-SALE FAQS</li>
          <li>SUBMIT A TICKET</li>
        </ul>
        <ul>
          <li>SERVICES</li>
          <li>THEME TWEAK</li>
        </ul>
        <ul>
          <li>SHOWCASE</li>
          <li>WIDGETKIT</li>
          <li>SUPPORT</li>
        </ul>

        <ul>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>AFFILIATES</li>
          <li>RESOURCES</li>
        </ul>
      </div>
      <hr />
      <div className="logos-end">
        <img src={ic1} alt="" />
        <img src={ic2} alt="" />
        <img src={ic3} alt="" />
        <img src={ic4} alt="" />
        <img src={ic5} alt="" />
      </div>

      <p>@Copyright .All rights reserved.</p>
    </div>
  );
};

export default Footer;
