import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="footer-links">
        <a href="https://github.com/Soko77788" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> {/* GitHub Icon */}
        </a>
        <a href="https://www.linkedin.com/in/nick-sokolowski/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> {/* LinkedIn Icon */}
        </a>
        <a href="https://x.com/NickSokoTheDev" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} /> {/* X/Twitter Icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;


