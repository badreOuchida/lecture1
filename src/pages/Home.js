
import './home.css'



import {Heading} from '../componments/Heading'
import Section1 from '../componments/Section1'
import Section2 from '../componments/Section2'
import Section3 from '../componments/Section3'
import Section4 from '../componments/Section4'
import Section5 from '../componments/Section5'
import Container from '../componments/Container'
import {useDispatch} from 'react-redux'
import {getBlogs} from '../stores/blogs/actions/actions'
function Home() {

	const dispatch = useDispatch()
	dispatch(getBlogs(1))
	return (
		<>
				<Heading image='home_bg.jpg' height1='home_height' 
					content=<Container 
						content={<h1>The Most Relaxing Vacation <span>Places</span></h1>}
						content1={<div className="nr-heading">
							A vacation is having nothing to do and all day to do it in.
						</div>}
						
					/>
				/>
				<Section1 />

				<Section2 />

				<Section3 />

				<Section4 />

				<Section5 />	
		</>
	)
}

export default Home