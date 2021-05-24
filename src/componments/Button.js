import React from 'react'
import './Section2.css'

export const Button = ({className,children}) =>
{
	return (
		<>
			<button className={className}>{children}</button>
		</>
		)
}