import React from 'react';
import New from './BioData';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

 
const HomePage = () => {
  return (
    axios.post('http://localhost:3003/home'),
    <div className="home-page">
      
      
    
      <h1>Welcome to ToothFixers Ltd.</h1>
      <p className="increased-text">Manage your patients' clinical records with ease.</p>


      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Dental Check-ups</li>
          <li>Root Canal Treatment</li>
          <li>Teeth Whitening</li>
          <li>Fillings and Restorations</li>
          
          <li>Extractions</li>
        </ul>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p> 

        At ToothFixers Ltd., we are a prominent dental firm that is 
        deeply dedicated to delivering exceptional dental services to our patients. 
        With a highly experienced team of dentists and cutting-edge facilities at our disposal,
        our focus is to provide the utmost quality in oral healthcare. 
        Our primary goal is to prioritize the oral well-being of our patients and 
        ensure their complete satisfaction by meeting their dental needs with the highest level of excellence. 
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Phone: 123-456-7890<br />
          Email: ToothFixers@pau.edu.ng<br />
          Address: 8555 road junction, Ikoyi Lagos, Nigeria, ZIP
        </p>
      </section>

    <Link to={'/create'}>
      <button>
        get started
        
      </button>
    
    
    </Link>   
    
      
    </div>
    
    
  );
};

export default HomePage;
