import React from 'react'
import TagList from '../components/TagList/TagList'

function Home() {
	return (
		<div className='home'>
			  <div className='intro-container'>
					<div className='intro-desc'>
					  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio venenatis augue pharetra blandit vel vel nisi. Suspendisse lacinia lectus ac turpis condimentum, id consequat enim porttitor. Etiam vulputate molestie porttitor. Vestibulum rutrum blandit libero. Donec auctor ipsum in nisi mattis fermentum. Nunc nisl magna, tristique id pharetra sed, posuere a nisl. Quisque justo enim, venenatis eu odio non, tincidunt euismod arcu.<br/> <br/>

						Proin porttitor nisi vitae semper sodales. Curabitur at sem nunc. Vivamus nec lacus est. Sed lobortis ullamcorper ligula ut volutpat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur imperdiet, metus et tincidunt finibus, tortor urna commodo tellus, sed blandit est dui sit amet urna. Quisque viverra viverra dui. Suspendisse lacinia eleifend metus ut sagittis. Integer gravida feugiat massa ut ultricies. Suspendisse vitae facilisis orci. Phasellus pharetra mi neque, quis lobortis mi elementum nec. Aliquam quam massa, posuere eget vestibulum eget, sollicitudin eu elit.</p>
					</div>

					<div className='intro-img'>
					  <img src={"https://minters.carrd.co/assets/images/gallery01/0d6a8947.jpg?v=2a01b3d9"} alt={"Me but not me"} />
					</div>

					<div className='intro-skills'>
						<TagList />
					</div>
			  </div>
    	</div>
	)
}

export default Home
