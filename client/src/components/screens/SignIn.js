import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          className="input-field"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter your password"
        />
        <button
          className="btn waves-effect waves-light #0d47a1 blue darken-4"
          type="submit"
          name="action"
        >
          Login
        </button>
        <h5><Link to="/signup">Don't have a account?</Link></h5>
      </div>
    </div>
  );
};
