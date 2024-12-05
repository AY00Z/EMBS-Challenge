import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import How from '../Components/How';
import Breath from '../Components/Breath';
import SearchTherapist from '../Components/SearchTherapist';
import EnterChatbot from '../Components/EnterChatbot';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'; 

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);  

  useEffect(() => {
    const handleScroll = () => {
     
      if (window.scrollY > 300) {
        setShowNavbar(true);
        setNavbarOpacity(0.7);  
      } else {
        setShowNavbar(false);
        setNavbarOpacity(1);  
      }
    };

   
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      {showNavbar && <Navbar navbarOpacity={navbarOpacity} />} 
      <How />
      <SearchTherapist />
      <Breath />
      <EnterChatbot />
      <Footer />
    </div>
  );
}

export default Home;
