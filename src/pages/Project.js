import React from 'react'
import { ProjectData } from './ProjectData'
import TagList from '../components/TagList/TagList'
var Carousel = require('react-responsive-carousel').Carousel;

function Project({ match, location }) {
	const {
		params: { projId }
	} = match;

	const project = ProjectData.find( ({ name }) => name === projId)

	return (
		<div className='project'>
			<div className='content proj-container'>
				<h1 id='proj-title' className='proj-title'>{`${projId} - ${project.subname}`}</h1>
				
				<div className='proj-images'>
					<Carousel showThumbs={false} centerMode={false}>
						{(project.images).map((image, index) => {
							return (
								<div key={toString(index) + "div"}>
									<img src={`https://github.com/as-anna/minty-hours/blob/main/src/proj-images/${projId}/${image}.jpg?raw=true`} alt={image} key={index} style={{objectFit: 'contain', width: '100%', height: '300px'}}/>
								</div>
							)
						})}
					</Carousel>
				</div>

				<div className='proj-desc inner'>{project.desc}<br/><br/>
					{(project.notes).map((note, index) => {
						return (
							<div key={index}>{note}<br/><br/></div>
						)
					})}
				</div>
				<div className='proj-tags'>
					<div><a className='link' href={project.link}>Link</a></div>
					<TagList tags={project.tags}/>
				</div>
			</div>
    	</div>
	)
}

export default Project
