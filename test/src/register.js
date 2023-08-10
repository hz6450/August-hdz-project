import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="page-container">
      <div className="login-form-container shadow">
        <div className="login-form-right-side">
          <div className="top-logo-wrap"></div>
          <h1>8월 해돋이 프로젝트</h1>
          <p>
              배달의 민족 앱 클론코딩
          </p>
        </div>
        <div className="login-form-left-side">
          <div className="login-top-wrap">
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
            <div className="login-input-wrap input-password">
              <i className="fas fa-key"></i>
              <input placeholder="Password Again" type="password" />
            </div>
          </div>
          <div className="login-btn-wrap">
          <Link to="/">Create Profile</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
