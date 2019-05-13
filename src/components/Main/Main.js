import React from 'react';
import './Main.scss';

export default function Main() {
  return (
    <div className='mainContainer current' id='home'>
      <div className='mainContent'>
        <h3>Lee Collins</h3>
        {/* <h3>Full Stack Web Developer</h3> */}
        <p>
          Hey, I'm glad you found me! I'm a full stack web developer with
          experience in JavaScript, React, Node.js, HTML5, CSS3, SQL, and more.
        </p>
        <a href='#about'>
          <button className='learnBtn'>
            Learn More
            <i class='fas fa-angle-right' />
          </button>
        </a>
      </div>
    </div>
  );
}
