import React from 'react'
import './Section2.css'
import {Button} from './Button'

import {Link} from 'react-router-dom'

function Section2() {
	return (
		<>
			<section className='section2'>
				<div className='bg-image2' style={{ backgroundImage: `url(q_bg.jpg)`}}></div>
				<div className='bg-filter2'></div>

				<div className='section2content'>

					<h1>Find Great Places to Stay</h1>
					<h1>at Your Favorite Destinations</h1>
					<Link className='btn' to='/properties/page/1'>Browser properties</Link>
				</div>
			</section>

		</>
	)
}

export default Section2