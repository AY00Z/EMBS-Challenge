import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      username,
      email,
      password, 
      phoneNumber,
      address,
      city,
      country
    };

    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add new user
    const updatedUsers = [...existingUsers, newUser];
    
    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Clear form
    setUsername('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setAddress('');
    setCity('');
    setCountry('');

    // Optionally, redirect to login page or show a success message
    alert('Compte créé avec succès!');
    navigate('/login'); 
  };

  return (
    <div>
      <Navbar/>
      <div className="background1">
        <form className="form1" onSubmit={handleSubmit}>
  
          <label htmlFor="address" className="label1">User Name</label>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Write your user name" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <label htmlFor="address" className="label1">Mail Adress</label>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Write your mail adress" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <label htmlFor="city" className="label1">Mobile Phone</label>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Write your mobile phone" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <label htmlFor="country" className="label1">Password</label>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Write your password" 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <button type="submit" className="button3">Create an account</button>
          
          
        </form>
      </div>
    </div>
  );
}

export default SignIn;
