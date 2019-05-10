import React from 'react';
import './navbar.scss';
import Selfie from './selfie.png';

export default function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='navbarContent'>
        {/* <h1>LC</h1> */}
        <img src={Selfie} />
        <div>
          <p>
            <i class='fas fa-home' />
          </p>
          <p>
            <i class='fas fa-user' />
          </p>
          <p>
            <i class='fas fa-image' />
          </p>
          <p>
            <i class='fas fa-laptop-code' />
          </p>
          <p>
            <i class='fas fa-envelope' />
          </p>
        </div>
        <div className='social'>
          <p>
            <i class='fab fa-github' />
          </p>
          <p>
            <i class='fab fa-linkedin' />
          </p>
          <p>
            <i class='fas fa-at' />
          </p>
        </div>
      </div>
    </div>
  );
}
