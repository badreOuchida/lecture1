import React  from 'react'
import './Cards.css'

import { Link } from 'react-router-dom';



export const Card = ({
	featured,
	img,
	title,
	description,
	location,
	bedroom,
	status,
	size,
	price,
}) => {
	return (
		<div className='card'>
			<img src={img} alt=''></img>
			{featured}
			<div className="card-content">
				
				<h3>{title} <p className='status'>{status}</p></h3>
				
				
				<p>{description}</p>
				<div className='desc2'>
					<p> <i className='fas fa-map-marker-alt' /> {location}</p>
					<p><i className='fas fa-door-closed' />{bedroom}</p>
					<p><i className='fas fa-vector-square' />{size}</p>
				</div>

				<p className='price'>{price}</p>
				
			</div>
			
		</div>
		)
}

export const Card2 = ({date,title,desc,autor,img,link}) =>{
	return(
		<div className='card2'>
			<img src={img} alt=''></img>
			<div className="card-content">
				
				
				<h2>{title}</h2>
				
				<div className='desc2'>
					<p>{desc}</p>
					<span className='span'>

						<Link className="link" to={link}><span className="read-more">Read more</span></Link>

						<span className="autor">{autor}</span>
					
					</span>
				</div>

				
				
			</div>
			
		</div>
		)
}


export const CardBlog = (props) =>{ 

	return (
			<>
				<div className="blog_box mb-5">
					<div className="blog_img">
						<img src="../../blog_bg.jpg" alt="" />
					</div>

						<h4 className="blog_title">{props.title}</h4>
                        <p className="blog_date">{props.date}</p>
                        <p className="blog_text">
                            {props.desc}
                        </p>
                        <Link to={props.link} className="link"><span className="read_more">Read more...</span></Link>
				</div>

			</>
		)
}


export const AgencyCard = () => {

	return (
		<div className='divagency'>
			<div className='rowagency'>
				Properite Owner
			</div>

			<div className="agencycardimage">
				<img src="../../avatar3.jpg" alt="" />
				<div className="agencyname">Agent Nathan James</div>
			</div>

			<div className="description">
				We offer beautiful, well located and self managed vacation homes owned 
				by our company. We take care of guests like family and guest's comfort and 
				experience is our top priority. Our team is available 24/7 to help you during 
				your stay to make it pleasant, comfortable and stress free
			</div>

			<div className="socialmedia">
				<i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p "></i>
                <i className="fab fa-twitter "></i>
                <i className="fab fa-linkedin-in "></i>
			</div>

			<div className="contact">

				 <p className="agenc_contact"><span>Office: </span>1-222-333-4444</p>
	             <p className="agenc_contact"><span>Mobile: </span>1-234-456-7893</p>
	             <p className="agenc_contact"><span>WhatsApp: </span>1-234-456-7894</p>
	             <p className="agenc_contact"><span>Email: </span>nathan@gmail.com</p>
				
			</div>

		</div>
		)
}