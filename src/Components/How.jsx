import React from 'react';
import './How.css';

const How = () => {
  return (
    <section className="how-section">
      <div className="how-left">
        <h2 className="how-title">How it works ?</h2>
        <p className="how-description">
          Our goal is to provide you with a supportive first step towards better mental health, combining the convenience of AI technology with pathways to professional human support when needed. We're here to help you understand your mental health journey and provide the tools you need to thrive.
        </p>
      </div>
      <div className="how-steps">
        <div className="step">
          <div className="yellow-bar1"></div>
          <span className="step-title">Step 1 : Connect with Our AI Chatbot</span>
          <p className="step-description">
            Express yourself freely in a safe, judgment-free environment
            <br />
            Receive immediate support and personalized coping strategies
          </p>
        </div>
        <div className="step">
          <div className="yellow-bar2"></div>
          <span className="step-title">Step 2 : Get Personalized Insights</span>
          <p className="step-description">
            Our AI analyzes your conversations to identify patterns in your thoughts and emotions
            <br />
            Gain valuable insights into your emotional well-being and areas for growth
          </p>
        </div>
        <div className="step">
          <div className="yellow-bar3"></div>
          <span className="step-title">Step 3 : Access Professional Support</span>
          <p className="step-description">
            If needed, get recommendations for appropriate mental health resources
            <br />
            Connect with clinicians who take the time to truly listen and understand your needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
