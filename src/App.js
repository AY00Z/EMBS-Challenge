import React from 'react';
import './index.css';

import Home from './Pages/Home';
import MoodChecker from './Pages/MoodChecker';
import PsychologistSreach from './Pages/PsychologistSearch';
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import TherapistSignin from './Pages/TherapistSignin';
import  User from './Pages/User'
import TherapistPage from './Pages/TherapistPage';
import { Routes, Route, BrowserRouter } from "react-router-dom"


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="MoodChecker" element={<MoodChecker/>} />
          <Route path="PsychologistSearch" element={<PsychologistSreach/>} />
          <Route path="SignIn" element={<SignIn/>} />
          <Route path="TherapistSignin" element={<TherapistSignin/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="Chat" element={<Chat/>} />
          <Route path="User" element={<User/>} />
          <Route path="TherapistPage" element={<TherapistPage/>} />
          
          
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
}

export default App; 
