import React from 'react'
import TagList from '../components/TagList/TagList'
import { TagData } from '../components/TagList/TagData'

function Home() {
	return (
		<div className='home'>
			  	<div className='intro-container content'>
					<div className='intro-desc'>
						<h2>Hi there !</h2><br/>
					  	<p className='inner'> I'm Anna Asprer, a graduate from the University of California, Irvine. I majored in Computer Science and graduated as a Magna Cum Laude.<br/><br/>I have great interest in many fields of Computer Science including testing and security. And this site is to try out web development! I'm passionate about the ease of use of websites and wish to learn how to make clean and usable products! Currently I'm self-learning frontend development but I have some knowledge of backend technologies such as MySQL as well.<br/><br/>I built this site to apply new things I pick up about web development here and there as well as some previous projects I've worked on. I add some personal comments and notes along with each project's description as well.<br/><br/>Take a look around! The tags are clickable too!</p>
					</div>

					<div className='intro-img'>
					  <img id='avatar' alt={"Me but not me"} />
					</div>

					<div className='intro-skills'>
						<TagList tags={TagData.map(function(item) {return item.displayName})}/>
					</div>
			  	</div>
    	</div>
	)
}

export default Home
