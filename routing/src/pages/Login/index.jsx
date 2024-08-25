import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="my-form" action="">
        
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account?
              <Link to={"/signup"}>Register</Link>
              
            </p>
          </div>
        </form>
      </div>
    </form>
  );
};

export default Login;
