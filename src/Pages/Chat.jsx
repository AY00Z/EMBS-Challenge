import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import PopUp from '../Components/PopUp';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const [conversations, setConversations] = useState([
    "how can I deal with my anxiety",
    "...",
    "....."
  ]);

  const messageListRef = useRef(null);

///////////////////////////////////////////////////////////////////////////////////////////////////////
  const apiUrl = "https://3828-35-204-70-6.ngrok-free.app/get_convo";
///////////////////////////////////////////////////////////////////////////////////////////////////////

const handleSend = async () => {
  if (inputText.trim() === '') return;

  // Add user input to messages
  const newMessage = {
    text: inputText,
    sender: 'user_input',
  };
  setMessages((prev) => [...prev, newMessage]);
  setInputText('');
  setLoading(true);

  // Prepare request data
  const requestData = {
    user_input: inputText,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log("Response data:", data);

    // Check if psychologist_response exists
    if (data.psychologist_response) {
      const psychologistMessage = {
        text: data.psychologist_response,
        sender: 'psychologist_response',
      };
      setMessages((prevMessages) => [...prevMessages, psychologistMessage]);
    } else {
      console.error("Missing psychologist_response in API response");
    }
  } catch (error) {
    console.error('Error:', error);

    // Fallback responses for errors
    const fallbackResponses = [
      "I'm here to assist you, feel free to ask anything!",
      "I'm sorry, I couldn't process that request, but I'm here for you!",
      "It seems there is an issue, but don't worry, I can still help!",
      "I'm having trouble connecting, but you can keep sharing your thoughts!",
    ];
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    const errorMessage = {
      text: randomResponse,
      sender: 'psychologist_response',
    };
    setMessages((prevMessages) => [...prevMessages, errorMessage]);
  } finally {
    setLoading(false); // Ensure loading is reset regardless of success or error
  }

  // Add to conversations if not already included
  if (!conversations.includes(inputText.trim())) {
    setConversations((prev) => [...prev, inputText.trim()]);
  }
};

  

  const handleClearAll = () => {
    setConversations([]);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-page">
      <div className="sidebar">
        <div className="sidebar-header">
          <a href="/" style={{ textDecoration: 'none', marginRight: '10px', fontSize: '20px' }}>←</a>
          <h2 style={{ flexGrow: 1 }}>MoodMateAI</h2>
          <button className="new-chat-button" onClick={handleNewChat}>+ New Chat</button>
        </div>
        <div className="conversation-list">
          <div className="conversation-header">
            <span>Your Conversation</span>
          </div>
          {conversations.map((conv, index) => (
            <div key={index} className="conversation-item">{conv}</div>
          ))}
        </div>
        {conversations.length > 0 && (
          <button className="clear-all-button" onClick={handleClearAll}>
            clear all
          </button>
        )}
        <div className='MoodChecker'>
        <button className="feeling-button" onClick={togglePopUp}>
          Mood Checker
        </button></div>
      </div>

      <div className="chat-container">
        <div className="message-list" ref={messageListRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user_input' ? 'user-message' : 'ai-message'}`}
            >
              {message.text}
            </div>
          ))}
          {loading && (
            <div className="message ai-message loading-message">Typing...</div>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <button onClick={handleSend} className="send-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
      {showPopUp && <PopUp togglePopUp={togglePopUp} />}
    </div>
  );
};

export default Chat;
