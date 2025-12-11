  import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './signupvalidation';
import axios from 'axios';

function SignUp() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (
      validationErrors.name === "" &&
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      axios
        .post('https://electricmeter-backend-1.onrender.com/signup', values) 
        .then(res => navigate('/login'))
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      {/* Modern Styling */}
      <style>{`
        body {
          background: #eef3ff;
        }

        .signup-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: linear-gradient(120deg, #dbe7ff, #f0fff4);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .signup-card {
          background: white;
          padding: 30px;
          width: 400px;
          border-radius: 15px;
          box-shadow: 0px 6px 20px rgba(0,0,0,0.15);
          border-left: 6px solid #1e88e5;
          animation: fadeIn 0.4s ease;
          transition: 0.3s;
        }

        .signup-card:hover {
          transform: scale(1.02);
          box-shadow: 0px 10px 28px rgba(0,0,0,0.25);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .signup-title {
          color: #0A2A66;
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 20px;
          text-align: center;
        }

        .signup-input {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          margin-bottom: 12px;
          border-radius: 10px;
          border: 1px solid #ccc;
          transition: 0.3s;
        }

        .signup-input:focus {
          outline: none;
          border-color: #1e88e5;
          box-shadow: 0px 0px 8px rgba(30,136,229,0.4);
        }

        .signup-button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          cursor: pointer;
          transition: 0.2s;
          margin-top: 10px;
        }

        .signup-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .signup-footer {
          margin-top: 15px;
          text-align: center;
          color: #333;
        }

        .signup-footer a {
          color: #1e88e5;
          font-weight: bold;
          text-decoration: none;
        }

        .signup-footer a:hover {
          text-decoration: underline;
        }

        .error-text {
          color: red;
          font-size: 14px;
          margin-bottom: 5px;
        }

        @media (max-width: 500px) {
          .signup-card {
            width: 90%;
          }
        }
      `}</style>

      {/* Page Content */}
      <div className="signup-wrapper">
        <div className="signup-card">

          <h2 className="signup-title">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="signup-input"
              placeholder="Enter not taken name"
              onChange={handleInput}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="signup-input"
              placeholder="Enter email"
              onChange={handleInput}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="signup-input"
              placeholder="Enter password"
              onChange={handleInput}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <button type="submit" className="signup-button">
              Sign Up
            </button>

            <p className="signup-footer">
              Already have an account? <Link to="/login">Login</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
