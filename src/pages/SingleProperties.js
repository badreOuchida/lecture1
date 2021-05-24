import React,{ useEffect , useState , useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Card , AgencyCard} from '../componments/Cards'
import {getPropertie} from '../stores/propertie/actions/actions'
import {getComment} from '../stores/comment/actions/actions'

import {Link} from 'react-router-dom'
import {Heading} from '../componments/Heading'
import Container from '../componments/Container'

import {SpanTag ,Featured } from '../componments/probody'

import '../pages/home.css'




const Caroussel = () => {	

		const imagesArray = [
			'https://www.google.com/search?q=bedrooms+pic&rlz=1C1CHZN_frMA926MA926&sxsrf=ALeKk00busiRcZbpzAVTW7TlOI3B7XXsRg:1620689973696&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjR7bDRpMDwAhUU8uAKHZYiCAsQ_AUoAXoECAEQAw&biw=1366&bih=625#imgrc=6q_tmHoCdj0KCM',
			'https://static.dezeen.com/uploads/2020/11/guadalajara-house-alejandro-sticotti-nicolas-tovo-mexico-cristobal-palma_dezeen_2364_col_16-hero-852x479.jpg',
			'https://www.urdesignmag.com/wordpress/wp-content/uploads/2018/01/ways-to-make-your-bedroom-more-peaceful-1-1200x520.jpg',
			'https://lg-sks-content.s3.us-west-1.amazonaws.com/2018-01/Country%20Kitchen_2880_1280_1.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk2WYnSUvI6WgLRBDmY4OqyJSuVwI4yViEF7qiAjt1e-PzU0T0Xeic93MFye68wEQX5Y&usqp=CAU',
			'data:image/jpeg;base64,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',
			'https://cdn.shopify.com/s/files/1/0197/8564/6144/files/bathroom-water-floor-rubber-ducky.jpg?v=1586290633',
			'https://www.urdesignmag.com/wordpress/wp-content/uploads/2018/01/ways-to-make-your-bedroom-more-peaceful-1-1200x520.jpg'


		]

		const images = useSelector(state=>state.item.propertie.list_images)
		const n = images.length 

		const [state, setState] = useState(762)

		const listImages = images.map((id)=>{
			return(
					<img src={imagesArray[id]} alt=""/>
				)
		})
		const [isRight, setIsright] = useState(false)
		const [trans, setTrans] = useState(0)
		const [isLeft, setIsleft] = useState(true)


		const showButton = () => {

	    if (window.innerWidth > 808) {
	    	console.log('yes')
		      setState(762);
		    } else if( 558 < window.innerWidth < 808 ){
		      console.log('yes2')
		      setState(500);
		    }else if (420 < window.innerWidth < 558) {
		    	console.log('yes222')
		      	setState(400);
		    }else{
		    	console.log('yes2222')
		      	setState(300);
		    }
		  };

		  useEffect(() => {
		    showButton();
		  }, []);

		window.addEventListener('resize', showButton);




		const rightClick = () => {
			var trans1 = trans-state
			setTrans(trans1)
			
			document.querySelector('.tran').style.transform = `translateX(${trans1}px)`
			if(trans === -state*(n-2)){
				setIsright(true)
			}else{
				setIsright(false)
			}
			setIsleft(false)

		}


		const leftClick = () => {
			var trans1 = trans+762
			setTrans(trans1)
			document.querySelector('.tran').style.transform = `translateX(${trans1}px)`
			if(trans === -762){
				setIsleft(true)
			}else{
				setIsleft(false)
			}
			setIsright(false)
		}

		return (
			<div className="caroussel">


				<div className="car">
					<button className={isLeft?'hide left': 'left'} onClick={leftClick}> {'<'} </button>

					<div className='tran'>
						{listImages}
					</div>

					<button className={isRight?'hide right': 'right'} onClick={rightClick}> {'>'} </button>
				</div>

			</div>
			)
}





const Content = () => {
	const propertie = useSelector(state=>state.item.propertie)
	return (
		<div className='content-desc'>
			<div className='top'>

				<div className='header'>{propertie.title}</div>
				<div className='price'>{`${propertie.price}$`}</div>

			</div>

			<div className='info'>

				<div className='header'>info</div>
				<div className='feature-container'>
					<div className="feature" id="first">{propertie.beds_rooms}</div>
					<div className="feature">{propertie.bath_rooms}</div>
					<div className="feature">1 Parking</div>
					<div className="feature">Built in 2020</div>
					<div className="feature">{propertie.air}</div>
				</div>

			</div>


			<div className='description-container'>

				<div className='header'>description</div>
				<div className='de-container'>
					{propertie.full_description}
				</div>

			</div>
			
		</div>


		
		)
}


const SmallCard = (props) =>{
	const [name, setName] = useState("")
	const [state, setState] = useState("")
	fetch(`https://real-estate-app-name.herokuapp.com/api/comment/${props.id}`)
	.then(response=>response.json())
	.then(result=>{
		setName(result.name)
		setState(result.comment)
	})
	return(
		<>
			<div className="smallcard">
				<img src="../../avatar2.jpg" alt="" />
				<div className="content">
					<div className="name">{name}</div>
					<div className="date"><i>November 17, 2020 at 2:16 pm</i></div>
					<div className="comment">
						{state}
					</div>
				</div>
			</div>
		</>
		)
}


const LeaveComment = (props) =>{

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [comment, setComment] = useState("")

	const handleName = (event) => {
		setName(event.target.value)
	}

	const handleEmail = (event) => {
		setEmail(event.target.value)
	}

	const handleComment = (event) => {
		setComment(event.target.value)
	}

	const dispatch = useDispatch()


	const handleSubmit = (event) => {
		dispatch(getComment(props.id,name,email,comment))
		setName("")
		setEmail("")
		setComment("")
		event.preventDefault();
	}
	return(
		<div className="leave-comment">
			<div id='leave'>Leave comment</div>

			<form onSubmit={handleSubmit}>
				<div className="name-email">
					<div className="input-name">
						<label>Name:</label>
						<input type="text" name="name" onChange={handleName} value={name} />
					</div>
					
					<div className="input-email">
						<label>Email:</label>
						<input type="email" name="email" onChange={handleEmail} value={email} />
					</div>
					
				</div>

				<div className="comment">

					<label>Comment:</label>
					<textarea type="text" name="comment" className="textarea" onChange={handleComment} 
						value={comment}/>
				</div>

				<input type="submit" value="Add comment" />
				
			</form>

		</div>
		)
}

export const Comment = (props) => {


	const commentArray = props.comments
	const commentItems = commentArray.map(id=>{
		return (
			<SmallCard id ={id} key={id} />
			)
	})

	const isInitialMount = useRef(true);

	useEffect(() => {

	  if (isInitialMount.current) {
	     	isInitialMount.current = false;
	  } else {
	  	console.log('yes')
	  }
	});
	var add = (<br></br>)
	const comment = useSelector(state=>state.comment)
	console.log(comment)

	if(comment.loading === true ){
		add = (<SpanTag />)
	}else if((comment.loading === false) && (comment.success === true)){
		add = (
				<div className="smallcard">
					<img src="../../avatar2.jpg" alt="" />
					<div className="content">
						<div className="name">{comment.name}</div>
						<div className="date"><i>November 17, 2020 at 2:16 pm</i></div>
						<div className="comment">
							{comment.comment}
						</div>
					</div>
				</div>
			)
	}
	return(
		<div className="comment-desc">
			<div className="content">
				<div className="header">
					Comments
				</div>

				{commentItems}

				{add}

				<LeaveComment id={props.id}/>
				
			</div>
			
		</div>

		)
}


const SingleBody = (props) => {
	const description='Enchanting three bedroom, three bath home with spacious one bedroom…'

	return (

		<main>

			<div className='bodypro'>

					<div className='row'>
						<div className='col-8'>

							<Caroussel />

							<Content id={props.id} />

							<Comment id={props.id} comments={props.comment} />
						</div>
						<div className='col-4'>

							<AgencyCard />


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
			
		</main>

		
		)
}






function SingleProperties({match}) {
	const {id} = match.params

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPropertie(id))
	}, [dispatch,id])

	const propertie = useSelector(state => state.item)
	console.log(propertie)

	if ((propertie.loading === true) && (propertie.propertie === null)) {

		return (
				<SpanTag />
			)
	} else if (propertie.propertie !== null){

		return (
		<>
			<Heading 
					image='../../hero_section1.jpg' 
					height1='properties_height' 
					height='container_properties'
					height2='height2'
					content={<div className="middle">{propertie.propertie.title}</div>}
				/>


			<SingleBody id={id} comment={propertie.propertie.comment} />

		</>

	)

	} else {
		return(
			<h1>Please refresh the page</h1>
			)
	}

}

export default SingleProperties