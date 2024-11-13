import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/Signup.css";
import img4 from "../assets/img4.jpg";
import img3 from "../assets/img 3.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlSubmit = async () => {
    if (password !== confirmPassword) {
      setError("password do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: email.split("@")[0],
        }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/Home");
      } else {
        setError(data.errors);
      }
    } catch (error) {
      console.log(error);
      setError("Something went Wrong!");
    }
  };
  return (
    <>
      <div className="main">
        <div className="right">
          <img src={img4} alt="sample img" />
        </div>
        <div className="left">
          <div className="logo">
            <img src={img3} alt="logo" />
          </div>
          <div className="sub11">
            <h2 className="title-2">Welcome Back</h2>
            <p className="para1">create your new account </p>
          </div>
          <div className="para-error-main">
            {error && (
              <p className="para-error" style={{ color: "red" }}>
                {error}
              </p>
            )}
          </div>

          <div className="forms">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="confirm_password"></label>
            <input
              type="password"
              placeholder=" confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />

            <button onClick={handlSubmit}>Sign up</button>
            <p className="para3">or Sign up with</p>
          </div>
          <div className="signup">
            <div className="google">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              <p>Google</p>
            </div>
            <div className="facebook">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="facebook-new"
              />
              <p>Facebook</p>
            </div>
          </div>
          <p className="para4">
            Already have an account?<Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
