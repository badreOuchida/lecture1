import React , {useState} from 'react'

import '../pages/home.css'

import { useHistory } from "react-router-dom";


export const Form1 = () => {

	const [location, setLocation] = useState('')
	const [type, setType] = useState('')
	const [price, setPrice] = useState('')
	const [air, setAir] = useState('')
	const [status, setStatus] = useState('')


	var history = useHistory();

	const handleChange = (event) => {
		if(event.target.placeholder === 'Location'){
			setLocation(event.target.value)
		}else if(event.target.placeholder === 'Air'){
			setAir(event.target.value)
		}else if(event.target.placeholder === 'Propertie type'){
			setType(event.target.value)
		}else if(event.target.placeholder === 'Status'){
			setStatus(event.target.value)
		}else if(event.target.placeholder === 'Price'){
			setPrice(event.target.value)
		}
		history.push(`/properties/search/${event.target.value}`)
	}
	const handleClick = (event) =>{
		let wolrd =`location=${location}&status=${status}&air=${air}&price=${price}&prop_type=${type}&`
		console.log(wolrd)
		history.push(`/properties/filter/${wolrd}`)
		event.preventDefault();
	}

	return (
		<div className='filter'>

					<div className='search-icone'>
						<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="Iconly/Light/Search">
							<g id="Search">
							<circle id="Ellipse_739" cx="17.1596" cy="17.1596" r="13.1083" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path id="Line_181" d="M26.2767 26.9575L31.4159 32.0833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
						</svg>
					</div>
					<form onSubmit={handleClick} >

						<div className='form'>
							<label>Location</label>
		                    <input type="text" className="form-control" placeholder="Location" onChange={handleChange} value={location} />
						</div>

						<div className='form'>
							<label>Propertie type</label>
		                    <input type="text" className="form-control" placeholder="Propertie type" onChange={handleChange} value={type}/>
						</div>
						<div className='form'>
							<label>Air</label>
		                    <input type="text" className="form-control" placeholder="Air" onChange={handleChange} value={air} />
						</div>
						<div className='form'>
							<label>Statux</label>
		                    <input type="text" className="form-control" placeholder="Status" onChange={handleChange} value={status} />
						</div>
						<div className='form'>
							<label>Price</label>
		                    <input type="text" className="form-control" placeholder="Price" onChange={handleChange} value={price}/>
						</div>
						<div className='form sub'>
							<input type="submit" name="name" value='Search' />
						</div>

						
					</form>
					
				</div>
		)
}

function Container(props) {
	return (
		<>
			<div className={`container ${props.height}`} >
				<div className="bg-heading">
					{props.content}
				</div>
				{props.content1}

				<Form1 />	
				
			</div>

		</>
	)
}

export default Container