import React from 'react';
import './EnterChatbot.css';
import Chat from './chat.png' 
import { Link } from 'react-router-dom';

const EnterChatbot = () => {
  return (
    <div className="enter-chatbot-container">
      <div className="chat-description">
        <h1>Chat Your Way to Clarity</h1>
        <p>
          Need someone to talk to right now? Our AI-powered mental health chatbot is here for you, day or night. Whether
          you're feeling overwhelmed, need quick coping strategies, or just want to explore your feelings, our chatbot
          offers a safe, judgment-free space for support and guidance.
        </p>
        <button className="chat-button">Chat Now</button>
      </div>
      <div>
        <img
          src={Chat}
          alt="Chatbot preview"
          className="chatbot-image"
        />
      </div>
    </div>
  );
};

export default EnterChatbot;
