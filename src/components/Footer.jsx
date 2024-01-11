import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      {/* Your footer content */}
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/face.jpg" alt="Facebook Icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Twitter Icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.jpg" alt="Instagram Icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;