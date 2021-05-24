import React from 'react'

import {useSelector} from 'react-redux'
import './properties.css'
import { Link } from 'react-router-dom';
import {getProperties} from '../stores/properties/actions/actions'

import {Card} from './Cards'

export const SpanTag = () => {
	return(
			<div className="divloader">
				<div className="loader"></div>
			</div>
			)
}

export const Featured = () => {
	return(
		<div className='featured'>Featured</div>
		)
}

function Probody(props) {
	const description='Enchanting three bedroom, three bath home with spacious one bedroom…'
	const properties = useSelector(state=>state.prop)
	var next,previous

	if ( (properties.loading === true) && (properties.properties === null) ) {
		return (
				<SpanTag />
			)


	} else if (properties.properties !== null ) {
		const id = parseInt(props.id) 
		
		var next_num = id+1 /* rectifier le calcul */

		if (properties.next !== null){
			next =    (<Link to={`/properties/page/${next_num}`} className="paglink">	
								<div>
									{'>>'}
								</div>
							</Link>)
		}

		const pre_num = id-1

		if (properties.previous !== null){
			previous =    (<Link to={`/properties/page/${pre_num}`} className="paglink">	
								<div>
									{'<<'}
								</div>
							</Link>)
		}


		const listItem = properties.properties.map(propertie => {
			return(
					<Link to={`/propertie/${propertie.id}`} className="decoration" key={propertie.id}>
						<Card 
						className = 'mt-5'
						img={propertie.principale_image} 
						description={propertie.mini_des}
						title={propertie.title}
						location={propertie.location}
						bedroom="3 Bedros, 3 Bathrooms, 2Guests"
						size={propertie.air}
						price={propertie.price}
						status={`for ${propertie.status}`}
						/>
					</Link>
				)
		}) 


		return (
			<>
				<div className='bodypro'>

					<div className='row'>
						<div className='col-8'>
							<div className="propertieslist">

								{listItem}
								
							</div>
							
							<div className='pagination'>

								{previous}
								<Link to={`/blogs/page/${id}`} className="paglink">	
									<div className="hi">
										{id}
									</div>
								</Link>
								{next}

							</div>

						</div>
						<div className='col-4'>
							<h2>Advanced Search</h2>
							<form>

								<select className="form-control p1">
		                            <option>Default order</option>
		                        </select>
		                        <select className="form-control p1">
		                            <option>Default order</option>
		                        </select>
		                        <select className="form-control p1">
		                            <option>Default order</option>
		                        </select>
		                        <select className="form-control p1">
		                            <option>Default order</option>
		                        </select>

							</form>

							<div className='suggestion'>

								<h2>Featured properties</h2>
								<div className="hello1">

									<Card 
									featured=<Featured />
									img='../../prop1.jpg' 
									description={description}
									title='Home in Merrick Way'
									location='chicago'
									bedroom="3 Bedros, 3 Bathrooms, 2Guests"
									size='4300 Sq Ft'
									price='500 000$'
									status='for sell'
									/>
									
									<Card 
										featured=<Featured />
										img='../../prop1.jpg' 
										description={description}
										title='Home in Merrick Way'
										location='chicago'
										bedroom="3 Bedros, 3 Bathrooms, 2Guests"
										size='4300 Sq Ft'
										price='500 000$'
										status='for sell'
									/>
									
								</div>
								
							</div>
						</div>
					</div>

					<div>
						
					</div>
					
				</div>
			</>
	)

	}else{
		return (
			<h1>Please Refresh the page</h1>
			)
	}
	
}

export default Probody