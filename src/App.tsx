import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

import './app.scss'

const App = () => (
	<div className='container'>
		<Navbar />
		<div className='main'>
			<Main />
			<About />
			<Portfolio />
			<Skills />
			<Contact />
		</div>
	</div>
)

export default App
