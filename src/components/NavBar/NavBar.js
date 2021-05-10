import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { ProjectData } from '../../pages/ProjectData'
import './NavBar.css'

/**
 * NavBar inspired by Brian Design's tutorial
 * https://www.youtube.com/watch?v=CXa0f4-dWi4
 */

function NavBar() {
	const [sidebar, setSideBar] = useState(false)

	const showSideBar = () => setSideBar(!sidebar)

	return (
		<>
		<div className="navbar">
			<Link to="#" className="menu-bars">
				<FaIcons.FaBars onClick={showSideBar}/>
			</Link>
		</div>

		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
			<ul className='nav-menu-items' onClick={showSideBar}>
				<li className='navbar-toggle'>
					<Link to="#" className='menu-bars'>
						<AiIcons.AiOutlineClose />
					</Link>
				</li>

				{SidebarData.map((item, index) => {
					return (
						<li key={index} className={item.cName}>
							<Link to={`/minty-hours${item.path}`}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</li>
					)
				})}

				{ProjectData.map((project, index) => (
					<h5 key={index} className={project.cName}>
						<Link to={`/minty-hours/project/${project.name}`}>{project.name}'s Page</Link>
					</h5>
				))}
			</ul>
		</nav>
		</>
	)
}

export default NavBar
