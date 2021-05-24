import React , {useEffect} from 'react'
import './Section3.css'
import {useDispatch , useSelector} from 'react-redux'
import {getBlogs} from '../stores/blogs/actions/actions'
import {Link} from 'react-router-dom'
import {Card2} from './Cards'
import {Header} from './Section1'

import {SpanTag} from './probody'


function Section3() {
	const dispatch = useDispatch()
	useEffect(() => {
		return () => {
			getBlogs(1)
		};
	}, [dispatch])
	const description='Porttitor elementum enim elit turpis mattis tempus auctor. Tellus ultricies sit in pharetra...'
	const blogs = useSelector(state => state.blogs)

	if(blogs.loading === true){
		return (
				<SpanTag />
			)
	}else if(blogs.blogs !== null){
		const blogsItem = blogs.blogs.slice(0,3)
		const items = blogsItem.map(blog => {
			return (
				<Card2 
					img={blog.image}
					title={blog.title}
					desc={blog.mini_des}
					autor = "by joe roman"
					link={`blog/${blog.id}`}
					/>
				)
		})
		return (
		<>
			<div className="section3">
				<Header header='Recent Blogs' words='Check out some of our recent blogs.'/>
				

				<div className="cards">
					{items}

				</div>

				<Link className='btn mt' to='/blogs/page/1'>Browser all blogs</Link>
			</div>
		</>
		)
	}else{
		return(
			<h1>Please refresh</h1>
			)
	}
}

export default Section3