import React from 'react';
import Projects from './Projects/Projects';
import ServiceDashImg from './images/servicedash.png';
import WellTreadImg from './images/welltread.png';
import './Portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolioContainer' id='portfolio'>
      <div className='portfolioContent'>
        <h2>Portfolio</h2>
        <div className='projects'>
          <Projects
            projectImg={ServiceDashImg}
            projectName={'ServiceDash'}
            projectInfo={
              'ServiceDash allows users to sign up, submit service request applications, and admins are able to assign those applications to companies that meet the needs of the users request.'
            }
            githubRepo={'https://github.com/Gray754/personal_project'}
          />
          <Projects
            projectImg={WellTreadImg}
            projectName={'Well Tread'}
            projectInfo={
              'Well Tread is a web app that lets users look for and track hiking, mountain biking, and running trails across the US.'
            }
            projectSite={'https://www.welltread.co/'}
            githubRepo={'https://github.com/well-tread/well-tread'}
          />
        </div>
      </div>
    </div>
  );
}
