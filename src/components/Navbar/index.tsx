import React, { FunctionComponent, useState } from 'react'
import MobileNav from './mobile-nav'
import Selfie from '../../images/selfie.png'

import './navbar.scss'

const Navbar: FunctionComponent = () => {
	const [isToggled, setIsToggled] = useState(false)

	const toggleNav = () => {
		setIsToggled(!isToggled)
	}

	return (
		<div>
			<div className='mobileNavBar'>
				<span>
					<i className='fas fa-bars' onClick={() => toggleNav()} />
				</span>
			</div>
			<div className='navbarContainer'>
				<div className='navbarContent'>
					<img src={Selfie} alt='avatar' />
					<div>
						<a href='#home'>
							<p>
								<i className='fas fa-home' />
								<span className='linkTitle'>Home</span>
							</p>
						</a>
						<a href='#about'>
							<p>
								<i className='fas fa-user' />
								<span className='linkTitle'>About</span>
							</p>
						</a>
						<a href='#portfolio'>
							<p>
								<i className='fas fa-image' />
								<span className='linkTitle'>Portfolio</span>
							</p>
						</a>
						<a href='#skills'>
							<p>
								<i className='fas fa-code' />
								<span className='linkTitle'>Skills</span>
							</p>
						</a>
						<a href='#contact'>
							<p>
								<i className='fas fa-envelope' />
								<span className='linkTitle'>Contact</span>
							</p>
						</a>
					</div>
					<div className='social'>
						<a
							href='https://github.com/Gray754'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>
								<i className='fab fa-github' />
							</p>
						</a>
						<a
							href='https://www.linkedin.com/in/leegcollins/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>
								<i className='fab fa-linkedin' />
							</p>
						</a>
					</div>
				</div>
			</div>
			{isToggled && <MobileNav onClick={toggleNav} image={Selfie} />}
		</div>
	)
}

export default Navbar
