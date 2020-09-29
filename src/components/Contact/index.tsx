import React, { FunctionComponent } from 'react'
import './Contact.scss'

const Contact: FunctionComponent = () => (
	<div className='contactContainer' id='contact'>
		<h2>Contact Me</h2>
		<div className='contactContent'>
			<div className='contactTiles'>
				<a href='mailto:lgc9312@gmail.com'>
					<div className='email tile'>
						<i className='fas fa-envelope' />
						<p>lgc9312@gmail.com</p>
					</div>
				</a>
				<a
					href='https://www.linkedin.com/in/leegcollins/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='linkedIn tile'>
						<i className='fab fa-linkedin' />
						<p>Connect on LinkedIn</p>
					</div>
				</a>
				<a
					href='https://github.com/Gray754'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='github tile'>
						<i className='fab fa-github' />
						<p>Check out my Github</p>
					</div>
				</a>
			</div>
		</div>
	</div>
)

export default Contact
