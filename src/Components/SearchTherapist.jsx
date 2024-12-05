import React from 'react';
import './SearchTherapist.css';
import frameImage from './Frame 32.png'; // Adjust the path if the image is in a different location

const SearchTherapist = () => {
  return (
    <section className="search-therapist-section">
      <img src={frameImage} alt="Decorative frame" className="frame-image" />
      <h2 className="search-therapist-title">
        It’s your mental health journey,<br />but you’re never alone
      </h2>
      <p className="search-therapist-subtitle">
      Seeking help from professionals is a sign of strength, not weakness, and can be an essential step in finding clarity and relief. Therapists provide a safe, non-judgmental space where you can explore your thoughts and emotions freely.
      </p>
      <button className="search-therapist-button">Find a therapist</button>
    </section>
  );
};

export default SearchTherapist;
