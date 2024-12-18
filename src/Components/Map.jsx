import React, { useState }  from 'react';
import MapPin from "./map-removebg-preview.png"
import './Map.css'
const MAP = () => {
 
  const [showImage, setShowImage] = useState(false);
  const handleSearch = () => {
    setShowImage(true); 
  };
  
  
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleModal1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    
    <div style={{ width: '100%', height: '92vh',marginTop:'8vh'}}>

      {showImage && (
        <div 
          
          style={{
          position:"absolute",
          marginLeft: '250px',
          marginTop:'500px',
          cursor:'pointer'
           // Ajustez la taille selon vos besoins
        }}>
          <button
          onClick={toggleModal1}>
            <h3 className="hover-container" ><b> 
            Docteur Mohamed Ben Saleh </b></h3>
        </button>
           
          <img 
          src={MapPin} // Remplacez par l'URL de votre image
          alt="Logo"
          style={{width: '30px',
            height: '30px',}}
        />
        </div>
      )}

      <div style={{  textAlign: 'center',position:'absolute',marginTop:'2vh',marginLeft:'35%' }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '10px',
            width: '300px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginLeft: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#4CAF50',
            color: 'white',
          }}
        >
          Search
        </button>
    </div>
        <iframe 
          width="100%" 
          height="645" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cabinet%20+(docteur)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
        </iframe>

        {isOpen1 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2><b>Book a medical visit</b></h2>
            <form >
              {/* Champ Nom */}
              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label htmlFor="name">Full Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </div>

              {/* Champ Email */}
              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </div>

              {/* Champ Date */}
              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label htmlFor="date">Date :</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </div>

              {/* Champ Heure */}
              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label htmlFor="time">Time :</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </div>

              {/* Boutons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button
                  onClick={toggleModal1}
                  type="button"
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    toggleModal1();
                    toggleModal2();
                  }}
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {isOpen2 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2><b>Form submitted successfully ! </b>  </h2>
            <button
              onClick={toggleModal2}
              style={{
                padding: '5px 15px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#276221',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '20px',
              }}
            >
               Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MAP;


