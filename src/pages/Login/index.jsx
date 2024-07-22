import React from "react";
import "./login.scss";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-main">
          <div className="login-form">
            <div className="form-field">
              <label>username</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label>password</label>
              <input type="password" />
            </div>
            <button type="submit">Enter</button>
          </div>
          <div className="divider"></div>
          <div className="login-gateway">
            <button>
              <FaGoogle className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
