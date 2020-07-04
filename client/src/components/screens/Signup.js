import React from "react";
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="Enter your name"
        />
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
          SignUp
        </button>
        <h5><Link to="/signin">Already have a account?</Link></h5>
      </div>
    </div>
  );
};
