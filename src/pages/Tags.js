import React from 'react'
import { TagData } from '../components/TagList/TagData'

function Project({ match, location }) {
	const {
		params: { tagName }
	} = match;

	return (
		<div className='content project'>
      		<h1>Projects under this tag:</h1>
			{TagData[tagName].map((key, index) => (
				<div>{key}, </div>
			))}
    	</div>
	)
}

export default Project
