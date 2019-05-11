import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import './main.scss';

function App() {
  return (
    <div className='container' style={{ height: '200vh' }}>
      <Navbar />
      <div className='main'>
        <Main />
      </div>
    </div>
  );
}

export default App;
