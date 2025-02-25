import React from 'react';
import '../App.css';
import { useDarkMode } from '../DarkModeContext';

const Footer: React.FC = () => {
  const { darkMode } = useDarkMode();
  const footerImgSrc = darkMode ? "/images/footerBranco.png" : "/images/footerFoto.png";

  return (
    <footer>
      <img src={footerImgSrc} alt="LogoDB" className="logoDBFooter" />
    </footer>
  );
};

export default Footer;
