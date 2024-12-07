import React from 'react';
import './PopUp.css';

const PopUp = ({ togglePopUp }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Feeling Depressed?</h2>
        <p>We understand it can be hard. Would you like to talk with MoodMateAI ?</p>
        <button className="popup-close-button" onClick={togglePopUp}>
          Back to Chat
        </button>
      </div>
    </div>
  );
};

export default PopUp;
