import React from 'react'
import { Link } from 'react-router-dom';
import { TagData } from '../components/TagList/TagData'

function Project({ match, location }) {
	const {
		params: { tagName }
	} = match;
	console.log(tagName);
	const tag = TagData.find((tag) => tag.name === tagName);
	console.log(tag)

	return (
		<div className='ptags'>
			<div className='ptag-container content'>
				<div>
					<h2>{tag.displayName} Projects</h2><br/>
				</div>
				<p className='ptags-proj'>
					{(tag.projs).map((proj) => (
                        <li>
                            <Link to={`/minty-hours/project/${proj}`}>{proj}</Link>
                        </li>
                    ))}
				</p>
			</div>
    	</div>
	)
}

export default Project
