import React, { useContext } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../../ThemeContext';

const Footer = () => {
    const {theme} =useContext(ThemeContext)
  return (
    <footer className={`${theme === 'dark' ? ' bg-gray-950 text-white' : 'bg-blue-600 text-white '} z-30 p-4 text-center`}>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-2">&copy; 2024 Aamin Patel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
