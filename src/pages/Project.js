import React from 'react'
import { ProjectData } from './ProjectData'
import TagList from '../components/TagList/TagList'

function Project({ match, location }) {
	const {
		params: { projId }
	} = match;

	const project = ProjectData.find( ({ name }) => name === projId)

	return (
		<div className='project'>
			<div className='content proj-container'>
				<h1 className='proj-title'>{`${projId} - ${project.subname}`}</h1>
				<div className='proj-desc inner'>{project.desc}<br/><br/>
					{(project.notes).map((note, index) => {
						return (
							<div key={index}>{note}<br/><br/></div>
						)
					})}
				</div>
				<div className='proj-tags'><TagList tags={project.tags}/></div>
			</div>
    	</div>
	)
}

export default Project
