import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import './User.css';

function User() {
  const navigate = useNavigate();

  const handlePatientSignIn = () => {
    navigate('/SignIn');
  };

  const handleTherapistSignIn = () => {
    navigate('/TherapistSignIn');
  };

  return (
    <div>
      <Navbar/>
      <div className="background1">
        <form className="form3">
          <h2 className="form-title">Choose Your Sign-In Type</h2>
          <p className="form-subtitle">Select the appropriate registration format</p>
          
          <button 
            type="button" 
            className="button3" 
            onClick={handlePatientSignIn}
          >
            I am a Patient
          </button>
          
          <button 
            type="button" 
            className="button3" 
            onClick={handleTherapistSignIn}
          >
            I am a Therapist
          </button>
        </form>
      </div>
      chat Page
    </div>
  );
}

export default User;