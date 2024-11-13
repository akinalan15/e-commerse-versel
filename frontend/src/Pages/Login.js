import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img2 from "../assets/img2.avif";
import img3 from "../assets/img 3.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${import.meta.env.REACT_SERVER_APP_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/Home");
      } else {
        setError(data.errors || data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };
  return (
    <>
      <div className="main">
        <div className="right">
          <img src={img2} alt="sample img" />
        </div>
        <div className="left">
          <div className="logo">
            <img src={img3} alt="logo" />
          </div>
          <div className="sub11">
            <h2 className="title-2">Welcome Back</h2>
            <p className="para1">please login to your account </p>
          </div>

          <div className="forms">
            {error && (
              <p className="para2-error" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="inputEmail"
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="password"
              id="setpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="para2">Forgot password?</p>

            <button onClick={handleSubmit}>Login</button>
            <p className="para3">or Login with</p>
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
            Don't have an account ?<Link to={"/Signup"}>Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
