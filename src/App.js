import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

import './app.scss';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <Main />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
