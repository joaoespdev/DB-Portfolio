import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useDarkMode } from '../../src/DarkModeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Caminhos condicionais para as imagens
  const logoSrc = darkMode ? "/images/dbBranco.png" : "/images/imageDB.png";
  const socialIcon1 = darkMode ? "/images/redditBranco.png" : "/images/social1.png";
  const socialIcon2 = darkMode ? "/images/linkedinBranco.png" : "/images/social2.png";

  return (
    <nav className="nav-container">
      <a href="https://start.db.tec.br/">
        <img src={logoSrc} alt="DB" className="logodb" />
      </a>
      <ul className="menu">
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li>
          <a href="https://1drv.ms/b/s!Anicrm3y9Q2Tkbpr1HMU4cHFg2j10w?e=XidLeK">Currículo</a>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
      </ul>
      <ul className="socialMedia">
        <li>
          <a className="logo" href="https://github.com/joaoespdev">
            <img src={socialIcon1} alt="GitHub" className="logodb" />
          </a>
        </li>
        <li>
          <a className="logo" href="https://www.linkedin.com/in/jo%C3%A3o-victor-espindola/">
            <img src={socialIcon2} alt="LinkedIn" className="logodb" />
          </a>
        </li>
        <li>
          <button id="theme-switch" onClick={toggleDarkMode}>
            {darkMode ? (
              // Ícone para voltar ao modo claro (ex.: sol)
              <img src="../../images/sol.png" className="logodb"></img>
            ) : (
              // Ícone para ativar o modo escuro (ex.: lua)
              <img src="../../images/lua.png" className="logodb"></img>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
