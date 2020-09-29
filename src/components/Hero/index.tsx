import React, { FunctionComponent } from 'react'
import './Hero.scss'

const Hero: FunctionComponent = () => (
	<div className='heroContainer current' id='home'>
		<div className='heroContent'>
			<h3>Lee Collins</h3>
			<p>
				Full stack web developer with experience in JavaScript, React, Typescript,
				Node, HTML5, CSS3, SQL, and more.
			</p>
			<a href='#about'>
				<button className='learnBtn'>
					Learn More
					<i className='fas fa-angle-right' />
				</button>
			</a>
		</div>
	</div>
)

export default Hero
