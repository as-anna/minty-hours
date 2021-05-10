import React from 'react'
import { ProjectData } from './ProjectData'

function Project({ match, location }) {
	const {
		params: { projId }
	} = match;

	const project = ProjectData.find( ({ name }) => name === projId)

	return (
		<div className='project'>
      		<h1>Project: {projId} <br/> Desc: {project.desc}</h1>
    	</div>
	)
}

export default Project
