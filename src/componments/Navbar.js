import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
	const [click, setClick] = useState(false)
	const handleClick = () =>{
		setClick(!click) ;
	}

	const handleClick2 = () =>{
		setClick(false)
	}
	return (
		<>
			<nav className='nav'>
				<div className='nav-logo'>
					<Link to='/' className='nav-links'>
						<img src='logo.png' alt=''></img>
					</Link>
				</div>
				
				<div className='menu-icon' onClick={handleClick}>
	            	<i className={click ?'fas fa-times':'fas fa-bars'} />
	          	</div>

	          	<ul className={click ?'nav-items-show':'nav-items'}>

	          		<li className='nav-item firstchid'>
	          			<Link to='/' className='nav-links' onClick={handleClick2}>Home</Link>
	          			
	          		</li>
	          		

	          		<li className='nav-item'>
	          			<Link to='/properties/page/1' className='nav-links' onClick={handleClick2}>Proproties</Link>
	          			
	          		</li>

	          		<li className='nav-item'>
	          			<Link to='/blogs/page/1' className='nav-links' onClick={handleClick2}>Blog</Link>
	          		</li>

	          		<li className='nav-item'>
	          			<Link to='/services' className='nav-links' onClick={handleClick2}>Services</Link>
	          		</li>

	          		<li className='nav-item'>
	          			<Link to='/contact' className='nav-links' onClick={handleClick2}>Contact</Link>
	          		</li>

	          		
	          	</ul>

	          	<div className='phone'>
	          		<i className="fas fa-phone-alt"></i>
	          		<span>+212-414-87-787</span>
	          	</div>	
			</nav>
		</>
	)
}

export default Navbar