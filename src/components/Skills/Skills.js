import React from 'react'
import BootstrapIcon from './Icons/BootstrapIcon'
import CssIcon from './Icons/CssIcon'
import DevopsIcon from './Icons/DevopsIcon'
import ExpressIcon from './Icons/ExpressIcon'
import GatsbyIcon from './Icons/GatsbyIcon'
import GithubIcon from './Icons/GithubIcon'
import GraphQlIcon from './Icons/GraphQlIcon'
import HtmlIcon from './Icons/HtmlIcon'
import JavascriptIcon from './Icons/JavascriptIcon'
import JestIcon from './Icons/JestIcon'
import MySqlIcon from './Icons/MySqlIcon'
import NodeIcon from './Icons/NodeIcon'
import PhotoshopIcon from './Icons/PhotoshopIcon'
import PostgresIcon from './Icons/PostgresIcon'
import ReactIcon from './Icons/ReactIcon'
import SassIcon from './Icons/SassIcon'
import TypescriptIcon from './Icons/TypescriptIcon'
import VisualStudioIcon from './Icons/VisualStudioIcon'

import './Skills.scss'

const Skills = () => {
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
				<GatsbyIcon />
				<GraphQlIcon />
				<DevopsIcon />
				<BootstrapIcon />
				<TypescriptIcon />
				<JestIcon />
			</div>
		</div>
	)
}

export default Skills
