import React from 'react'
import {Heading} from '../componments/Heading'
import {Header} from '../componments/Section1'
import Container from '../componments/Container'
import '../componments/Contact.css'



const ContactDiv = () =>{
	return(
		<div className="contact-div">
			<Header header='Contact' words="let’s stay connect and get in touche." />
			<div className="contact-div-2">

				<div className="col-8-c">
					<form>
						<div className="name-email">
							<div className="input-name">
								<label>
									Name : 
								</label>
								<input type="text" name="name" />
							</div>
							<div className="input-email">
								<label>
									E-mail :
								</label>
								<input type="email" name="email"/>
							</div>
						</div>

						<div className="name-email">
							<div className="input-name">
								<label>
									Phone : 
								</label>
								<input type="number" name="phone" />
							</div>
							<div className="input-email">
								<label>
									website :
								</label>
								<input type="text" name="site"/>
							</div>
						</div>
						<div className="comment">

							<label>Message :</label>
							<textarea type="text" name="comment" className="textarea"/>
						</div>

						<input type="submit" value="Send message" />
					</form>

				</div>

				<div className="col-4-c">
					<div className="contact">
						<div className="name">Fix :</div>
						<div className="value">+124-45-45-21-321</div>
					</div>
					<div className="contact">
						<div className="name">Mobile :</div>
						<div className="value">+124-45-45-21-321</div>
					</div>
					<div className="contact">
						<div className="name">E-mail :</div>
						<div className="value">Example@gmail.com</div>
					</div>
					<div className="contact">
						<div className="name">Adress :</div>
						<div className="value">3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</div>
					</div>
				</div>
				
			</div>
			
		</div>
		)
}


function Contact() {
	return (
		<main>
			<Heading 
					image='../../hero_section1.jpg' 
					height1='properties_height' 
					height='container_properties'
					content=<Container 
						
					/>
				/>
			<div className="container-contact">
				<ContactDiv />
			</div>
			
		</main>
	)
}

export default Contact