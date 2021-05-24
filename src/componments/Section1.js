import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Section1.css'
import {SpanTag} from '../componments/probody'
import { Link } from 'react-router-dom';


import {getProperties} from '../stores/properties/actions/actions'
import {Card} from './Cards'


export const Header = (props) =>{
	return (
		<>

			<div className='header'><div></div>{props.header}</div>	
			<div className='words'>{props.words}</div>

		</>
		)
}

function Section1() {
	const description='Enchanting three bedroom, three bath home with spacious one bedroom…'
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProperties(1))
	}, [dispatch])

	const properties = useSelector(state => state.prop)
	if((properties.loading === true)){

		return (
				<SpanTag />
			)
	}else if(properties.properties !== null){

		const items = properties.properties.slice(0,3);
		const listItems = items.map((propertie) => {
			return(
					<Link to={`/propertie/${propertie.id}`} className="decoration" key={propertie.id}>
						<Card 
						img={propertie.principale_image} 
						description={propertie.mini_des}
						title={propertie.title}
						location={propertie.location}
						bedroom="3 Bedros, 3 Bathrooms, 2Guests"
						size={propertie.air}
						price={`${propertie.price} $`}
						status={`for ${propertie.status}`}
						/>
					</Link>
				)
		})


		return (
		<>
			<section className='section1'>
				
				<Header 
					header='Latest Rentals'
					words='Check out some of our recent properties.'
				/>	
				<div className='properties'>
					{listItems}
				</div>
				
			</section>
		</>
	)

	}else{
		return (
				<h1>Please refresh the page</h1>
			)
		
	}
	
}

export default Section1