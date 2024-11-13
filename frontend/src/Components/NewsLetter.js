import React from "react";
import "../Components/Newsletter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter-main">
      <div className="Newsletter">
        <h1>Get Exclusive offers on Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
      </div>
      <div className="newmail">
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="input-email"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
