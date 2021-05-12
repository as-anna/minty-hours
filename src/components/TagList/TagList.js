import React, { useState, useEffect } from "react"
import './TagList.css'
import { Link } from 'react-router-dom'
import { TagData } from './TagData'

const TagList = (props) => {
	return (
		<div>
			<div className="tag-list">
				{(props.tags).map((key, index) => (
					<Link to={`/minty-hours/tags/${TagData.find((tag) => tag.displayName === key).name}`} className='tag'>{key} </Link>
				))}
			</div>
		</div>
	)
}

export default TagList