import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Heading} from '../componments/Heading'
import {SpanTag ,Featured } from '../componments/probody'
import {Card} from '../componments/Cards'

import {Link} from 'react-router-dom'

import {Comment} from './SingleProperties'
import '../componments/SingleBlog.css'
import Container from '../componments/Container'

import {getBlog} from '../stores/blog/actions/actions'




export const BlogDiv = (props) =>{
	const blog = useSelector(state => state.blog)
	return (
		<div className="blog-div">
			<div className="blog-div-img">
				<div className="title-date">
					<div className="title">
						{blog.blog.title}
					</div>
					<div className="date">
						<i>
							November 17, 2020 at 2:16 pm
						</i>
						
					</div>
				</div>
				<img src="../blog_bg.jpg" alt=""/>	
			</div>


			<div className="blog-content">
				<div className="heading">
					{blog.blog.title}
				</div>
				<div className="content">
					{blog.blog.description}
				</div>
			</div>


		</div>
		)
} 

export const SingleBlogdiv = (props) =>{
	const description='Enchanting three bedroom, three bath home with spacious one bedroom…'
	const blog = useSelector(state => state.blog)
	return(
		<main>

			<div className='bodypro'>

					<div className='row'>
						<div className='col-8'>
							<BlogDiv id={props.id} />

							<Comment comments={blog.blog.comment} id={props.id}/>
							
						</div>
						<div className='col-4'>

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
			
		</main>

		)
}



function SingleBlog({match,props}) {
	const {id} = match.params

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlog(id))
	}, [dispatch,id])
	const blog = useSelector(state => state.blog)
	if ((blog.loading === true) && (blog.blog === null)) {

		return (
				<SpanTag />
			)
	} else if (blog.blog !== null){

		return (
		<>
			<Heading 
					image='../../hero_section1.jpg' 
					height1='properties_height' 
					height='container_properties'
					content=<Container 
						content1={<div className="nr-heading">
							{blog.blog.title}
						</div>}
						
					/>
				/>

			<SingleBlogdiv id={id}/>


		</>

	)

	} else {
		return(
			<h1>Please refresh the page</h1>
			)
	}

}

export default SingleBlog