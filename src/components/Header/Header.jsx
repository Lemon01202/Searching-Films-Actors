import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<header className='header'>
			<img className='headerLogo' src='https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/logo.png?raw=true' />
			<div className='nav'>
				<div className='navItem'>
					<Link to='/characters' className='navItemLink characterNav'>Characters</Link>
				</div>
				<div className='navItem'>
					<Link to='/episodes' className='navItemLink episodesNav'>Episodes</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
