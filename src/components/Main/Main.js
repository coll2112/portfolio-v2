import React from 'react';
import './Main.scss';

export default function Main() {
  return (
    <div className='mainContainer' id='top'>
      <div className='mainContent'>
        <h3>Lee Collins</h3>
        {/* <h3>Full Stack Web Developer</h3> */}
        <p>
          Hey, I'm glad you found me! If you're looking for a full stack web
          developer with skills in React, Node, SQL, and more then you've come
          to the right place.
        </p>
        <button className='learnBtn'>
          Learn More
          <i class='fas fa-angle-right' />
        </button>
      </div>
    </div>
  );
}
