import React, { useState } from 'react'

export const ProjectData = [
	{
		name: 'Transfusion',
		subname: "2D platformer made on Unity",
		desc: "Transfusion is a 2D platformer game in which the player controls a child that wields a huge syringe as their weapon. The child is constantly losing HP as a consequence of rituals performed upon them in the past that went bad, and the only way to regenerate health is to extract blood from demons with the syringe and inject it into their body.",
		notes: ["A group project for a game design class! My first time using Unity and C#. I was in charge of writing the story, game mechanics, design documentation, initial character design, choosing plus implementing art/sound assets, and coding the sound and scene managers in-game. We only finished one level for the class but I hope to expand on this concept more one day."],
		tags: ['Unity', 'C#'],
		cName: 'nav-text'
	},
	{
		name: 'Enstars Team Builder',
		subname: "Optimized team builder for a mobile game",
		desc: `A team builder for the mobile game "Ensemble Stars!! Music". Users add which characters and cards they have into a deck, pick a stage/song, and the program builds an optimized team.`,
		notes: ["First time making my own website. I picked a game I play often because I know the data and score calculation formulas well. It's hosted on GitHub Pages so everything is static. Data is trivial enough so I simply used JSONs to store everything. The data for multiple card copies is lacking so users sometimes have to look up their own stats but once I gather more data I hope to improve the site.", "I update this bimonthly according to the game's new content schedule."],
		tags: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
		cName: 'nav-text'
	},
	{
		name: 'Wumpus World AI',
		subname: "Avoid the wumpus! Get the gold!",
		desc: "A maze-solving esque AI. Wumpus World's objective is to traverse a cave in the dark, looking for gold but avoiding the terrifying wumpus! This AI aims to get as many points as possible from a simulated 20,000 unique maps.",
		notes: ["I didn't think probability was almost equally as important as a bactracking algorithm. My teammate and I have a build implementing backtracking without too much thought on probability and another with great probability calculation and mediocre backtracking. It's hilarious but the latter got a higher score.", "Anyways, my teammate and I got to the minimum score for the AI fairly quickly and spent a lot of time tinkering and optimizing later. Figuring out the logic was my part and then my teammate wrote the code as I backseat gamer'd them. I mean. Pair programming. I finished up the project by doing the debugging. Overall a fun experience! Good teammates make a difference."],
		tags: ['C++', 'Artificial Intelligence'],
		cName: 'nav-text'
	},
	{
		name: 'Mini Web Search Engine',
		subname: "Search engine built from scratch",
		desc: "A search engine capable of indexing tens of thousands of webpages with a response time under 300ms. It's scope is the UCI domain.",
		notes: ["Harsh constraints! It was pretty difficult getting it down so much. I used a method that prioritized speed over space because the data pulled didn't end up being too large thanks to good indexing but it'll be a problem if phrase-based indexing should be needed. Phrase-based indexing is superior though so if I were to optimize this more I'd re-do the indexing completely.", "It's a shame but I can't link a running version of this project. It only runs on UCI's own servers because our professor may or may not have crashed the site before by letting her students run so many crawlers at once leading UCI to implement a restriction (lol)."],
		tags: ["Python", "Search Engine Optimization"],
		cName: 'nav-text'
	},
	{
		name: 'ML Rain Prediction',
		subname: "Class competition to predict chance of rain",
		desc: "Kaggle-hosted competition where data is provided. From the data, predictions must be made by applying classifiers and ensembles.",
		notes: ["My team placed in the top 10%! What lead to a large part of our success was identifying the perfect library to use for this early on, scikit-learn. It's much less focused on manipulation compared to other libraries but its modelling is fantastic. Simple to implement and thus we were able to focus on trying different ensembles to best predict the data."],
		tags: ["Python", "Jupyter", "Machine Learning"],
		cName: 'nav-text'
	},
	{
		name: 'Minty Hours',
		subname: "Website for myself :)",
		desc: "You're here! A place to further comment and reflect on the various projects I've started. It's mint themed because I enjoy both the flavor and color. It's often my handle in games and online!",
		notes: ["Wanted to apply my newfound ReactJS knowledge so I made this. Planning to keep improving it over time but right now I'm proudest of the tag system. And dynamic paging is incredibly powerful."],
		tags: ["HTML", "CSS", "JavaScript", "ReactJS"],
		cName: 'nav-text'
	},
	{
		name: 'Oogura-kun',
		subname: "Character themed Discord bot",
		desc: `Discord bot themed after a character from the series "Wonder Cat Kyuu-chan", Oogura. Has a variety of smaller functions including basic server management and time conversion but his main purpose is to take data from other sites and tag my friends and I in my server when there is a new update (episode/chapter) of any series we follow.`,
		notes: ["Currently inactive. The site's API that I've been using is being revamped completely so I'll have to update this once they finish. Once I can use the API again I want to try running him on a Pi."],
		tags: ["JavaScript", "Bots", "API"],
		cName: 'nav-text'
	},
]