import React from 'react'
import '../pages/home.css'

export const Heading = (props) =>{
	const img = props.image
	return (
		<>
			<div className={`bg-image ${props.height1} ${props.height2} `} style={{ backgroundImage:`url(${img})`}}>
			
			</div>

			<div className={`bg-filter ${props.height1} ${props.height2} `} data-height1={props.height}>
				
			</div>

			{props.content}
		</>
	)
}
