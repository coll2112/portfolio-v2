import React from 'react';
import Selfie from '../../images/selfie.png';
import './About.scss';

export default function About() {
  return (
    <div className='aboutContainer' id='about'>
      <div className='aboutContent'>
        {/* <img src={Selfie} alt='Headshot of Lee Collins' /> */}
        <h2>A Little About Me</h2>
        <p>
          Growing up I've always tried to find new ways to express myself
          creatively. As a child, I'd spend all night building new things with
          the thousands of LEGOs I had. Eventually my parents bought their first
          computer, and I instantly fell in love with it after seeing the
          Windows '98 splash screen. After spending years studying computer
          hardware and networking, I eventually fell into web development and
          have been in love ever since.
        </p>
        <p>
          Web Development isn't just a job to me. It's so much more. It's my
          creative outlet. My hobby. My lifestyle. I'm very passionate about the
          work that I do. When I'm not on my computer coding, you can probably
          find me either obsessing over anything and everything Batman, spending
          time with my beautiful fiancé, or hunting for Pokemon in my local
          park.
        </p>
      </div>
    </div>
  );
}
