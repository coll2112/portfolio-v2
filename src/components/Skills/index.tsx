import React, { FunctionComponent } from 'react'

import {
	BootstrapIcon,
	CssIcon,
	DevopsIcon,
	ExpressIcon,
	GatsbyIcon,
	GithubIcon,
	GraphQlIcon,
	HtmlIcon,
	JavascriptIcon,
	JestIcon,
	MySqlIcon,
	NodeIcon,
	PhotoshopIcon,
	PostgresIcon,
	ReactIcon,
	SassIcon,
	TypescriptIcon,
	VisualStudioIcon,
} from '../../icons'

import './Skills.scss'

const Skills: FunctionComponent = () => (
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

export default Skills
