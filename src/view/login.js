import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="page-container">
      <div className="login-form-container shadow">
        <div className="login-form-right-side">
          <div className="top-logo-wrap"></div>
          <h2>8월 해돋이 프로젝트</h2>
          <p>
              배달의 민족 앱 클론코딩
          </p>
        </div>
        <div className="login-form-left-side">
          <div className="login-top-wrap">
            <span>Don't have an account?</span>
            <button className="create-account-btn shadow-light">
              <Link to="/register">Create Profile</Link> 
            </button>
          </div>
          <div className="login-input-container">
            <div className="login-input-wrap input-id">
              <i className="far fa-envelope"></i>
              <input placeholder="Email" type="text" />
            </div>
            <div className="login-input-wrap input-password">
              <i className="fas fa-key"></i>
              <input placeholder="Password" type="password" />
            </div>
          </div>
          <div className="login-btn-wrap">
            <button className="login-btn">Login</button>
            <a href="#">Forgot password?</a>  {/* register 라우팅 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
