import React, { useState, useEffect } from "react"
import './TagList.css'
import { TagData } from './TagData'
import { Link } from 'react-router-dom'

const TagList = (props) => {

	console.log(TagData);

	return (
		<div>
			<div className="tag-list">
				{Object.keys(TagData).map((key, index) => (
					<Link to={`/tags/${key}`}>{key} </Link>
				))}
			</div>
		</div>
	)
}

export default TagList