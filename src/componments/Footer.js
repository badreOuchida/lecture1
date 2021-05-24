import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css'
function Footer() {
	return (
		<>
			<footer className="footer">

				<div className="social">

					<i className="fab fa-facebook fa-2x"></i>
		            <i className="fab fa-instagram fa-2x"></i>
		            <i className="fab fa-whatsapp fa-2x"></i>
		            <i className="fab fa-twitter fa-2x"></i>
		            <i className="fab fa-pinterest-p fa-2x"></i>
					
				</div>

				<div className="logo">
					<Link to='/' className='footer-links'>
						<img src='logo.png' alt=''></img>
					</Link>
					<div>Here you will find you home dream</div>
				</div>

				<div className="footer-divs">

					<div className="col-md">

						<div className="content">

							<Link to='/' className='footer-links'>
								<div>Home</div>
							</Link>
							<Link to='/properties/page/1' className='footer-links'>
								<div>Properties</div>
							</Link>
							<Link to='/blogs/page/1' className='footer-links'>
								<div>Blogs</div>
							</Link>
							
						</div>

						<div className="content">

							<Link to='/' className='footer-links'>
								<div>Our Services</div>
							</Link>
							<Link to='/properties/page/1' className='footer-links'>
								<div>For rent</div>
							</Link>
							<Link to='/blogs/page/1' className='footer-links'>
								<div>For sell</div>
							</Link>
							
						</div>
						
					</div>

					
					<div className="col-md">
						
						<div className="content">

							<Link to='/' className='footer-links'>
								<div>Latest properties</div>
							</Link>
							<Link to='/properties/page/1' className='footer-links'>
								<div>Privacy</div>
							</Link>
							
						</div>

						<div className="content1">

							<div>
								<div className="E-mail">
									E-mail :
								</div>
								<div className='di'>
									somthing
									@gmail.com
								</div>
								<div className='nodi'>
									somthing@gmail.com
								</div>
							</div>


							<div>
								<div className="Adress">
									Adress :
								</div>
								<div>
									3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
								</div>
							</div>
							
						</div>
					</div>
					
					
				</div>
				

				<div className="copyright">
					copyright2020 All right reserved
				</div>
			</footer>



		</>

	)
}

export default Footer