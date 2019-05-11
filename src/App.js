import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Divider from './components/Divider/Divider';
import { library } from '@fortawesome/fontawesome-svg-core';
import './main.scss';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <Main />
        <Divider />
        <About />
      </div>
    </div>
  );
}

export default App;
