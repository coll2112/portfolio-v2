import React from 'react'
import './Main.scss'

const Main = () => (
	<div className='mainContainer current' id='home'>
		<div className='mainContent'>
			<h3>Lee Collins</h3>
			<p>
				Full stack web developer with experience in JavaScript, React, Typescript,
				Node, HTML5, CSS3, SQL, and more.
			</p>
			<a href='#about'>
				<button className='learnBtn'>
					Learn More
					<i class='fas fa-angle-right' />
				</button>
			</a>
		</div>
	</div>
)

export default Main
