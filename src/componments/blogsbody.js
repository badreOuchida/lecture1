import React from 'react'

import './properties.css'
import {useSelector} from 'react-redux'

import {Card , CardBlog} from './Cards'

import { Link } from 'react-router-dom';

import {Featured , SpanTag} from './probody'




function Blogsbody(props) {
	const description='Enchanting three bedroom, three bath home with spacious one bedroom…'

	const blogs = useSelector(state => state.blogs)
	var next,previous
	if ((blogs.blogs === null) && (blogs.loading === true)) {

		return (<SpanTag />)


	} else if( (blogs.blogs !== null) ){



		const id = parseInt(props.id) 
		
		var next_num = id+1 /* rectifier le calcul */

		if (blogs.next !== null){
			console.log('next blogs')
			next =    (<Link to={`/blogs/page/${next_num}`} className="paglink">	
								<div>
									{'>>'}
								</div>
							</Link>)
		}

		const pre_num = id-1

		if (blogs.previous !== null){

			console.log('previous blogs')
			previous =    (<Link to={`/blogs/page/${pre_num}`} className="paglink">	
								<div>
									{'<<'}
								</div>
							</Link>)
		}



		const listItem = blogs.blogs.map(blog => {
			return(
					<Link to={`/blog/${blog.id}`} className="paglink" key={blog.id}> 
						<CardBlog 
							date="May 8, 2021, 3:38 p.m."
							title={blog.title}
							desc = {blog.mini_des}
							link = {`/blog/${blog.id}`}
						/> 

					</Link>
					
				)
		}) 



		return (
			<div className='bodypro'>

					<div className='row'>
						<div className='col-8'>
							
							{listItem}
			
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
		)
	}else{
		return(
			<h1>Please refresh the page</h1>
			)
	}
}

export default Blogsbody