import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null); // Reference to the footer element
  const [isVisible, setIsVisible] = useState(false); // Tracks if footer is in viewport

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Footer is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={footerRef} // Attach the observer to the footer element
      initial={{ opacity: 0 }} // Start hidden
      animate={isVisible ? { opacity: 1 } : {}} // Fade in when visible
      transition={{ duration: 1 }} // Animation duration: 1 second
    >
      <MDBFooter className="footer text-center text-white">
        <MDBContainer className="footer-content">
          <section className="register-section">
            <p className="register-text">
              <span className="register-label">Register Now</span>
              {/* Wrap the button with Link to navigate to /SignIn */}
              <Link to="/User">
                <MDBBtn type="button" className="signup-btn" outline rounded>
                  Sign up!
                </MDBBtn>
              </Link>
            </p>
          </section>
        </MDBContainer>

        <div className="footer-bottom">
          <p>© 2024 Copyright</p>
        </div>
      </MDBFooter>
    </motion.div>
  );
};

export default Footer;
