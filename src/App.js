import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

import './app.scss';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <Main />
        <About />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
}

export default App;
