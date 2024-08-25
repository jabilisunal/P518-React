import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <div className="sepacial-form">
    <form className="signup" onsubmit="return false" autocomplete="off">
        <h1>Create account</h1>
        <h2>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </h2>

        <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="username"
            id="username"
            required
          />
          <label className="signup__label" for="username">
            Username
          </label>
        </div>

        <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="email"
            id="email"
            required
          />
          <label className="signup__label" for="email">
            Email
          </label>
        </div>

        <div className="signup__field">
          <input
            className="signup__input"
            type="password"
            name="password"
            id="password"
            required
          />
          <label className="signup__label" for="password">
            Password
          </label>
        </div>

        <button>Sign up</button>
      </form>
    </div>
      
    </>
  );
};

export default Register;
