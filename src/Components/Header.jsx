import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();  // Get the current location (URL path)

  // Determine the active tab based on the current URL
  const getActiveTab = () => {
    if (location.pathname === '/MoodChecker') return 'Mood Checker';
    if (location.pathname === '/PsychologistSearch') return 'Psychologist Search';
    return 'Home';  // Default to Home if no match
  };

  const [active, setActive] = useState(getActiveTab());  // Initialize state with the active tab based on URL

  // Update the active state when the location changes
  useEffect(() => {
    setActive(getActiveTab());  // Update active tab when URL changes
  }, [location]);

  // Scroll down 400px when 'Learn More' button is clicked
  const handleScrollDown = () => {
    window.scrollBy({ top: 787, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className={`nav-item ${active === 'Home' ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className={`nav-item ${active === 'Mood Checker' ? 'active' : ''}`}>
            <Link to="/MoodChecker" className="nav-link">Mood Checker</Link>
          </li>
          <li className={`nav-item ${active === 'Psychologist Search' ? 'active' : ''}`}>
            <Link to="/PsychologistSearch" className="nav-link">Psychologist Search</Link>
          </li>
        </ul>
        <Link to="/Login" className="login1">
          <span role="img" aria-label="login">👤</span> Member Login
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="title">Your Guide to Emotional Wellness and Growth</h1>
        <p className="subtitle">
          Innovative chatbot screening, tailored support for your mental wellness journey.
        </p>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <Link to="/Chat">
          <button className="button-primary">Chat Now</button>
        </Link>

        {/* Learn More Button with Scroll Functionality */}
        <button className="button-secondary" onClick={handleScrollDown}>
          Learn more
        </button>
      </div>
    </header>
  );
};

export default Header;
