import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Add login logic here if required
    alert('Logged in successfully!');
    navigate('/dashboard'); // Navigate to the dashboard or any route
  };

  return (
    <div>
      <Navbar />
      <div className="login-background">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">Mail Address</label>
          <div className="login-input-box">
            <input
              type="text"
              placeholder="Write your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="password" className="login-label">Password</label>
          <div className="login-input-box">
            <input
              type="password"
              placeholder="Write your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="signup-redirect">
            <p>
              Don't have an account?{' '}
              <Link to="/User" className="signup-link">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
