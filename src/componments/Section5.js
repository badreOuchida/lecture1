import React from 'react'
import './Section3.css'


const Div2 = (props) =>{
	return (
		<>
			<div className='c'>
				<div className='para'>
				Fringilla fusce et neque, egestas amet ultricies lectus viverra nunc. Enim amet sed porta tempus vel imperdiet. Fermentum.
					<div className='triangle-down'></div>
				</div>
				<div className='names'>
					<img className='avatar'src={props.image} alt=''></img>
					<div>
						<h5>{props.name}</h5>
						<i>host</i>
					</div>
				</div>
			</div>
			
		</>
		)
}


function Section5() {
	return (
		<>
			<section className='section5' style={{ backgroundImage: `url(testimenial.jpg)`}}>
				<Div2 image='avatar.jpg' name='jackson maks'/>

				<Div2 image='avatar2.jpg' name='Terje Meresankh'/>

				<Div2 image='avatar3.jpg' name='Rahela Suzan'/>
			</section>

		</>
	)
}

export default Section5