import React , {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {Heading} from '../componments/Heading'
import Container from '../componments/Container'

import Probody from '../componments/probody'
import {getPropertiesSearch} from '../stores/properties/actions/actions'

function PropertiesSearch({match}) {
	const {world} = match.params
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPropertiesSearch(world))
	}, [dispatch,world])
	return (
		<>
			<main className="main">
				<Heading 
					image='../../hero_section1.jpg' 
					height1='properties_height' 
					content=<Container 
						height='container_properties'
						content1={<div className="nr-heading h">All properties</div>}
					/> 
				/>


				<Probody id={1}/>


			</main>	
		</>
	)
}

export default PropertiesSearch