import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import '../Contact/Contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaCodepen } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="contact-head">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel, libero consequatur ipsum eveniet eos totam
          rem error provident ab!
        </p>
      </div>
      <div className="container">
        <form>
          <div className="field" tabIndex={1}>
            <label htmlFor="username">
              <i className="far fa-user" />
              Your Name
            </label>
            <input name="username" type="text" placeholder="e.g. john doe" required />
          </div>
          <div className="field" tabIndex={2}>
            <label htmlFor="email">
              <i className="far fa-envelope" />
              Your Email
            </label>
            <input name="email" type="text" placeholder="email@domain.com" required />
          </div>
          <div className="field" tabIndex={3}>
            <label htmlFor="message">
              <i className="far fa-edit" />
              Your Message
            </label>
            <textarea name="message" placeholder="type here" required defaultValue={""} />
          </div>
          <button className="my-button" type="reset">
            Send Message
          </button>
          
          <div className="social-media">
            
            <a className="fab fa-facebook-f" href="https://facebook.com" target="blank_"> <FaFacebookF/> </a>
            
            <a className="fab fa-twitter" href="https://twitter.com" target="blank_"><FaTwitter/></a>

            <a className="fab fa-instagram" href="https://www.instagram.com" target="blank_"> <FaInstagram/> </a>
        
          </div>
        </form>
        <div className="form-details">
            <div className="info">
              <FaMapMarkerAlt size={40} style={{ backgroundColor: '#b3b698', borderRadius: '50%', padding: '5px' }} />
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="info">
              <FaPhone size={40} style={{ backgroundColor: '#b3b698', borderRadius: '50%', padding: '5px' }} />
              <p>(123) 456-7890</p>
            </div>
         <div className="info">
          <FaEnvelope size={40} style={{ backgroundColor: '#b3b698', borderRadius: '50%', padding: '5px' }} />
        <p>anuragneupane58@gmail.com</p>
         </div>
       
            <div className="info">
              <FaGlobe size={40} style={{ backgroundColor: '#b3b698', borderRadius: '50%', padding: '5px' }} />
              <p>www.anuragneupane.com.np</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
