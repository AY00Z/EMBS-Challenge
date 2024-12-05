import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation hook
import './Navbar.css';

const Navbar = ({ navbarOpacity }) => {
  const location = useLocation();  // Get the current location (URL path)
  
  // Determine the active tab based on the current URL
  const getActiveTab = () => {
    if (location.pathname === '/MoodChecker') return 'Mood Checker';
    if (location.pathname === '/PsychologistSearch') return 'Psychologist Search';
    return 'Home';  // Default to Home if no match
  };

  const [active, setActive] = useState(getActiveTab);  // Initialize state with the active tab based on URL

  // Update the active state when the location changes
  useEffect(() => {
    setActive(getActiveTab());  // Update active tab when URL changes
  }, [location]);

  return (
    <nav className="navbar1" style={{ opacity: navbarOpacity }}>
      <ul className="navbar-links">
        <li
          className={`navbar-item ${active === 'Home' ? 'active' : ''}`}
        >
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li
          className={`navbar-item ${active === 'Mood Checker' ? 'active' : ''}`}
        >
          <Link to="/MoodChecker" className="navbar-link">Mood Checker</Link>
        </li>
        <li
          className={`navbar-item ${active === 'Psychologist Search' ? 'active' : ''}`}
        >
          <Link to="/PsychologistSearch" className="navbar-link">Psychologist Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
