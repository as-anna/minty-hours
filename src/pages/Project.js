import React from 'react'
import { ProjectData } from './ProjectData'
import TagList from '../components/TagList/TagList'
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'; 

function Project({ match, location }) {
	const {
		params: { projId }
	} = match;

	const project = ProjectData.find( ({ name }) => name === projId)

	return (
		<div className='project'>
			<div className='content proj-container'>
				<h1 id='proj-title' className='proj-title'>{`${projId} - ${project.subname}`}</h1>
				
				<div className='proj-images' style={{ width: (window.innerWidth > 800) ? 'calc(88vw - 250px)' : '85vw' , position: 'relative'}}>
					<Carousel
						plugins={[
							'centered',
							'infinite',
							'arrows',
							{
							resolve: slidesToShowPlugin,
							options: {
							numberOfSlides: Math.min(window.innerWidth/800, 1),
							},
							},
							{
							resolve: slidesToScrollPlugin,
							options: {
							numberOfSlides: 1,
							},
							},
						]}   
					>

						{(project.images).map((image, index) => {
							return (
								<img src={`https://github.com/as-anna/minty-hours/blob/main/src/proj-images/${projId}/${image}.jpg?raw=true`} alt={image} height='300px' key={index}/>
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
