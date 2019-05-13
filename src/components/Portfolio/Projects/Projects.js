import React from 'react';
import './Projects.scss';

export default function Projects(props) {
  return (
    <div className='projectContainer'>
      <img src={props.projectImg} alt='' />
      <div className='projectContent'>
        <h3>{props.projectName}</h3>
        <p>{props.projectInfo}</p>
      </div>
      <div className='projectBtns'>
        <a href={props.projectSite} target='_blank'>
          <button>Live Site</button>
        </a>
        <a href={props.githubRepo} target='_blank'>
          <button>Github</button>
        </a>
      </div>
    </div>
  );
}
