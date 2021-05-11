import React, { useState, useEffect } from "react"
import './TagList.css'
import { Link } from 'react-router-dom'

const TagList = (props) => {

	return (
		<div>
			<div className="tag-list">
				{(props.tags).map((key, index) => (
					<Link to={`/minty-hours/tags/${key}`} className='tag'>{key} </Link>
				))}
			</div>
		</div>
	)
}

export default TagList