import React from 'react';
import './Projects.scss';

export default function Projects({
  projectImg,
  projectName,
  projectInfo,
  projectSite,
  githubRepo
}) {
  let projectURL;
  if (projectSite !== undefined) {
    projectURL = (
      <a href={projectSite} target='_blank'>
        <button>Live Site</button>
      </a>
    );
  }
  return (
    <div className='projectContainer'>
      <img src={projectImg} alt='' />
      <div className='projectContent'>
        <h3>{projectName}</h3>
        <p>{projectInfo}</p>
      </div>
      <div className='projectBtns'>
        {projectURL}
        <a href={githubRepo} target='_blank'>
          <button>Github</button>
        </a>
      </div>
    </div>
  );
}
