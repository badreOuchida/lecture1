import React , {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {getBlogs} from '../stores/blogs/actions/actions'

import {Heading} from '../componments/Heading'
import Container from '../componments/Container'
import Blogsbody from '../componments/blogsbody'

import store from '../index'

function Blogs({match}) {
	const {id} = match.params
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs(id))
	}, [dispatch,id])

	return (
		<>
			<main>

				<Heading 
					image='../../hero_section1.jpg' 
					height1='properties_height' 
					content=<Container 
						height='container_properties'
						content1={<div className="nr-heading h">All properties</div>}
					/> 
				/>

				

				<Blogsbody id={id} />

			</main>	
		</>
	)
}

export default Blogs