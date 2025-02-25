import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import { DarkModeProvider } from '../src/DarkModeContext'; // ajuste o caminho se necessário

import './App.css';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
