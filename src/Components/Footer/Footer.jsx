import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/yourFacebookUsername" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/yourInstagramUsername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/yourGithubUsername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2024 Anurag Neupane <br/>All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
