import React from 'react';
import './Breath.css';
import Breathe from './Breath.png';

const Breath = () => {
  return (
    <div className="breathing-container">
      <div className="breathing-image-section">
        <img
          src={Breathe}
          alt="Woman practicing breathing"
          className="breathing-image"
        />
      </div>
      <div className="breathing-text-section">
        <h1 className="breathing-title">Let’s Take a Breath</h1>
        <p className="breathing-description">
          Your breath is a powerful tool for managing stress and improving mental well-being. Deep, slow, controlled
          breathing has a profound effect on your nervous system, signaling your body to relax and let go of tension. This
          isn't just folk wisdom – it's backed by solid scientific research.
        </p>
      </div>
    </div>
  );
};

export default Breath;
