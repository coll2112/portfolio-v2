import React from 'react';
import CssIcon from './Icons/CssIcon';
import ExpressIcon from './Icons/ExpressIcon';
import GithubIcon from './Icons/GithubIcon';
import HtmlIcon from './Icons/HtmlIcon';
import JavascriptIcon from './Icons/JavascriptIcon';
import MySqlIcon from './Icons/MySqlIcon';
import NodeIcon from './Icons/NodeIcon';
import PhotoshopIcon from './Icons/PhotoshopIcon';
import PostgresIcon from './Icons/PostgresIcon';
import ReactIcon from './Icons/ReactIcon';
import SassIcon from './Icons/SassIcon';
import VisualStudioIcon from './Icons/VisualStudioIcon';

import './Skills.scss';

export default function Skills() {
  return (
    <div className='skillsContainer' id='skills'>
      <h2>Skills</h2>
      <div className='skillsContent'>
        <ReactIcon />
        <JavascriptIcon />
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <NodeIcon />
        <ExpressIcon />
        <PostgresIcon />
        <MySqlIcon />
        <PhotoshopIcon />
        <GithubIcon />
        <VisualStudioIcon />
      </div>
    </div>
  );
}
