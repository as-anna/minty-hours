import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { ProjectData } from '../../pages/ProjectData'
import './NavBar.css'

/**
 * NavBar inspired by Brian Design's tutorial
 * https://www.youtube.com/watch?v=CXa0f4-dWi4
 */

function NavBar() {
	const [largeWindow, setLargeWindow] = useState(window.innerWidth > 800)
	const [sidebar, setSideBar] = useState(largeWindow)

	const showSideBar = () => {
		setSideBar(!sidebar)
	}

	window.addEventListener('resize', () => {
		setLargeWindow(window.innerWidth > 800);
		setSideBar(window.innerWidth > 800)
	})

	return (
		<>
		<header className="navbar">
			<Link to="#" className="menu-bars">
				<FaIcons.FaBars onClick={showSideBar}/>
			</Link>
		</header>

		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
			<ul className='nav-menu-items' onClick={largeWindow? null : showSideBar}>
				<li className='navbar-toggle' key='mint'>
					{largeWindow ? (
						<h1 className='menu-bars mont'>mint!</h1>
					) : (
						<Link to="#" className='menu-bars'>
							<FaIcons.FaBars />
						</Link>
					)}
				</li>

				{SidebarData.map((item, index) => {
					return (
						<li key={item.title} className={item.cName}>
							<Link to={`/minty-hours${item.path}`}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</li>
					)
				})}

				<h5 className='nav-text nav-title'>Projects -</h5>

				{ProjectData.map((project, index) => (
					<li key={project.name} className={project.cName}>
						<Link to={`/minty-hours/project/${project.name}`}>{project.name}</Link>
					</li>
				))}
			</ul>
		</nav>
		</>
	)
}

export default NavBar
