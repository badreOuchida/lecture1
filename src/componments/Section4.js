import React from 'react'
import './Section3.css'
import {Header} from './Section1'

const Div = (props) =>{
	return (
			<>
				<div className={`div ${props.className}`}>
					<div>
						<img src='serv_icon1.png' alt=''></img>
					</div>
					<div className='content'>
						<h2>Advanced searsh</h2>	
						Tincidunt quam mauris nullam ut tortor nec et sit ornare. Egestas sit consectetur.
					</div>
				</div>
			</>
		)
}

function Section4() {
	return (
		<>
			<section className='section4'>
				<Header 
					header='Services'
					words='Check out some of our recent blogs.'
				/>

				<div className='all'>
					<Div />
					<Div className='yes'/>
					<Div />
				</div>
			</section>

		</>
	)
}

export default Section4
