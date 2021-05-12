import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
	{
		title: 'About Me',
		path: '/',
		icon: <AiIcons.AiOutlineUser />,
		cName: 'nav-text',
	},
	{
		title: 'References',
		path: '/references',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
]