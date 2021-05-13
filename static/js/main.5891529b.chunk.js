(this["webpackJsonpminty-hours"]=this["webpackJsonpminty-hours"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(13),r=a.n(i),c=(a(30),a(31),a(32),a(18)),o=a(17),l=a(8),d=a(14),m=a(1),h=[{title:"About Me",path:"/",icon:Object(m.jsx)(d.b,{}),cName:"nav-text"},{title:"References",path:"/references",icon:Object(m.jsx)(d.a,{}),cName:"nav-text"}],u=[{name:"Minty Hours",subname:"Website for myself :)",link:"https://as-anna.github.io/minty-hours/",desc:"You're already here! A place to further comment and reflect on the various projects I've started. It's mint themed because I enjoy both the flavor and color. It's often my handle in games and online!",notes:["Wanted to apply my newfound ReactJS knowledge so I made this. Planning to keep improving it over time but right now I'm proudest of the tag system. And dynamic paging is incredibly powerful."],images:["pocky"],tags:["HTML","CSS","JavaScript","ReactJS","Github Pages"],cName:"nav-text"},{name:"Transfusion",subname:"2D platformer made on Unity",link:"https://drive.google.com/file/d/1bS2-WAmUfie-EWJzYVnfGmw3AFg1CvFP/view",desc:"Transfusion is a 2D platformer game in which the player controls a child that wields a huge syringe as their weapon. The child is constantly losing HP as a consequence of rituals performed upon them in the past that went bad, and the only way to regenerate health is to extract blood from demons with the syringe and inject it into their body.",notes:["A group project for a game design class! My first time using Unity and C#. I was in charge of writing the story, game mechanics, design documentation, initial character design, choosing plus implementing art/sound assets, and coding the sound and scene managers in-game. We only finished one level for the class but I hope to expand on this concept more one day."],images:["gameplay1","gameplay2","gameplay3"],tags:["Unity","C#"],cName:"nav-text"},{name:"Mini Search Engine",subname:"Search engine built from scratch",link:"https://drive.google.com/file/d/1q2DOZanUOmA1NTpAgFOCtPGSFACEJV6L/view",desc:"A search engine capable of indexing tens of thousands of webpages with a response time under 300ms. It's scope is the UCI domain.",notes:["Harsh constraints! It was pretty difficult getting it down so much. I used a method that prioritized speed over space because the data pulled didn't end up being too large thanks to good indexing but it'll be a problem if phrase-based indexing should be needed. Phrase-based indexing is superior though so if I were to optimize this more I'd re-do the indexing completely.","It's a shame but I can't link a running version of this project. It only runs on UCI's own servers because our professor may or may not have crashed the site before by letting her students run so many crawlers at once leading UCI to implement a restriction (lol)."],images:["searches1","searches2"],tags:["Python","Search Engine Optimization"],cName:"nav-text"},{name:"Enstars Team Builder",subname:"Optimized team builder for a game",link:"https://as-anna.github.io/enstars-team-build/index.html",desc:'A team builder for a mobile game I play called "Ensemble Stars!! Music". Users add which characters and cards they have into a deck, pick a stage/song, and the program builds an optimized team.',notes:["First time making a website. I picked a game I play often because I know the data and score calculation formulas well. My friends didn't wanna learn how to team build so I tried to make their lives easier by automating it!","It's hosted on GitHub Pages so everything is static. Data is trivial enough so I simply used JSONs to store everything. The data for multiple card copies is lacking so users sometimes have to look up their own stats but once I gather more data I hope to improve the site.","I update this bimonthly according to the game's new content schedule."],images:["addcards","editcard","build","export"],tags:["HTML","CSS","JavaScript","Github Pages"],cName:"nav-text"},{name:"Wumpus World AI",subname:"Avoid the wumpus! Get the gold!",link:"https://github.com/as-anna/wumpus-world",desc:"A maze-solving esque AI. Wumpus World's objective is to traverse a cave in the dark, looking for gold but avoiding the terrifying wumpus! This AI aims to get as many points as possible from a simulated 20,000 unique maps.",notes:["I didn't think probability was almost equally as important as a bactracking algorithm. My teammate and I have a build implementing backtracking without too much thought on probability and another with great probability calculation and mediocre backtracking. It's hilarious but the latter got a higher score.","Anyways, my teammate and I got to the minimum score for the AI fairly quickly and spent a lot of time tinkering and optimizing later. Figuring out the logic was my part and then my teammate wrote the code as I backseat gamer'd them. I mean. Pair programming. I finished up the project by doing the debugging. Overall a fun experience! Good teammates make a difference."],images:["examplemap"],tags:["C++","Artificial Intelligence"],cName:"nav-text"},{name:"ML Rain Prediction",subname:"Predict rain from sample data",link:"https://drive.google.com/file/d/1nhOVDaPuU1-9s3oQyP6nV5w8t4zXYQar/view",desc:"Kaggle-hosted competition where data is provided. From the data, predictions must be made by applying classifiers and ensembles.",notes:["My team placed in the top 10%! What lead to a large part of our success was identifying the perfect library to use for this early on, scikit-learn. It's much less focused on manipulation compared to other libraries but its modelling is fantastic. Simple to implement and thus we were able to focus on trying different ensembles to best predict the data."],images:["performance"],tags:["Python","Jupyter","Machine Learning"],cName:"nav-text"},{name:"Oogura-kun",subname:"Character themed Discord bot",link:"",desc:'Discord bot themed after a character from the series "Wonder Cat Kyuu-chan", Oogura. Has a variety of smaller functions including basic server management and time conversion but his main purpose is to take data from other sites and tag my friends and I in my server when there is a new update (episode/chapter) of any series we follow.',notes:["Currently inactive. The site's API that I've been using is being revamped completely so I'll have to update this once they finish. Once I can use the API again I want to try running him on a Pi."],images:["asearch","msearch","logging","ava"],tags:["JavaScript","API"],cName:"nav-text"}];a(34);var p=function(){var e=Object(n.useState)(window.innerWidth>800),t=Object(c.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(a),r=Object(c.a)(i,2),d=r[0],p=r[1],b=function(){p(!d)};return window.addEventListener("resize",(function(){s(window.innerWidth>800),p(window.innerWidth>800)})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"navbar",children:Object(m.jsx)(l.b,{to:"#",className:"menu-bars",children:Object(m.jsx)(o.a,{onClick:b})})}),Object(m.jsx)("nav",{className:d?"nav-menu active":"nav-menu",children:Object(m.jsxs)("ul",{className:"nav-menu-items",onClick:a?null:b,children:[Object(m.jsx)("li",{className:"navbar-toggle",children:a?Object(m.jsx)("h1",{className:"menu-bars mont",children:"mint!"}):Object(m.jsx)(l.b,{to:"#",className:"menu-bars",children:Object(m.jsx)(o.a,{})})},"mint"),h.map((function(e,t){return Object(m.jsx)("li",{className:e.cName,children:Object(m.jsxs)(l.b,{to:"".concat(e.path),children:[e.icon,Object(m.jsx)("span",{children:e.title})]})},e.title)})),Object(m.jsx)("h5",{className:"nav-text nav-title",children:"Projects -"}),u.map((function(e,t){return Object(m.jsx)("li",{className:e.cName,children:Object(m.jsx)(l.b,{to:"/project/".concat(e.name),children:e.name})},e.name)}))]})})]})},b=a(3),j=(a(40),[{name:"JavaScript",displayName:"JavaScript",projs:["Enstars Team Builder","Minty Hours","Oogura-kun"]},{name:"Python",displayName:"Python",projs:["Mini Search Engine","ML Rain Prediction"]},{name:"Unity",displayName:"Unity",projs:["Transfusion"]},{name:"CSharp",displayName:"C#",projs:["Transfusion"]},{name:"HTML",displayName:"HTML",projs:["Enstars Team Builder","Minty Hours"]},{name:"CSS",displayName:"CSS",projs:["Enstars Team Builder","Minty Hours"]},{name:"GitPages",displayName:"Github Pages",projs:["Enstars Team Builder","Minty Hours"]},{name:"CPlusPlus",displayName:"C++",projs:["Wumpus World AI"]},{name:"AI",displayName:"Artificial Intelligence",projs:["Wumpus World AI"]},{name:"SEO",displayName:"Search Engine Optimization",projs:["Mini Search Engine"]},{name:"Jupyter",displayName:"Jupyter",projs:["ML Rain Prediction"]},{name:"Machine Learning",displayName:"Machine Learning",projs:["ML Rain Prediction"]},{name:"ReactJS",displayName:"ReactJS",projs:["Minty Hours"]},{name:"API",displayName:"API",projs:["Oogura-kun"]}]),g=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"tag-list",children:e.tags.map((function(e,t){return Object(m.jsxs)(l.b,{to:"/tags/".concat(j.find((function(t){return t.displayName===e})).name),className:"tag",children:[e," "]},t)}))})})};var f=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"intro-container content",children:[Object(m.jsxs)("div",{className:"intro-desc",children:[Object(m.jsx)("h2",{children:"Hi there !"}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"inner",children:[" I'm Anna Asprer, a graduate from the University of California, Irvine. I majored in Computer Science and graduated as a Magna Cum Laude.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"My main field of interest is web development. I'm passionate about the ease of use of websites and wish to learn how to make clean and usable products! Currently I'm self-learning frontend development but I have some knowledge of backend technologies such as MySQL as well.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I built this site to apply new things I pick up about web development here and there as well as some previous projects I've worked on. I add some personal comments and notes along with each project's description as well.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Take a look around! The tags are clickable too!"]})]}),Object(m.jsx)("div",{className:"intro-img",children:Object(m.jsx)("img",{id:"avatar",alt:"Me but not me"})}),Object(m.jsx)("div",{className:"intro-skills",children:Object(m.jsx)(g,{tags:j.map((function(e){return e.displayName}))})})]})})};var y=function(){return Object(m.jsx)("div",{className:"references",children:Object(m.jsxs)("div",{className:"ptag-container content",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Useful refs I used:"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("p",{className:"ptags-proj inner",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://create-react-app.dev/docs/deployment/#github-pages",children:"Deploying React Apps on GitHub Pages"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://learnwithparam.com/blog/dynamic-pages-in-react-router/",children:"Dynamic Pages with React Router"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.youtube.com/watch?v=CXa0f4-dWi4&t=493s",children:"A Great SideNav Tutorial"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/brainhubeu/react-carousel",children:"Image Carousel Component"})})]})]})})},x=a(41).Carousel;var O=function(e){var t=e.match,a=(e.location,t.params.projId),n=u.find((function(e){return e.name===a}));return Object(m.jsx)("div",{className:"project",children:Object(m.jsxs)("div",{className:"content proj-container",children:[Object(m.jsx)("h1",{id:"proj-title",className:"proj-title",children:"".concat(a," - ").concat(n.subname)}),Object(m.jsx)("div",{className:"proj-images",children:Object(m.jsx)(x,{showThumbs:!1,centerMode:!1,children:n.images.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"https://github.com/as-anna/minty-hours/blob/main/src/proj-images/".concat(a,"/").concat(e,".jpg?raw=true"),alt:e,style:{objectFit:"contain",width:"100%",height:"300px"}},t)},toString(t)+"div")}))})}),Object(m.jsxs)("div",{className:"proj-desc inner",children:[n.desc,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),n.notes.map((function(e,t){return Object(m.jsxs)("div",{children:[e,Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]},t)}))]}),Object(m.jsxs)("div",{className:"proj-tags",children:[Object(m.jsx)("div",{children:Object(m.jsx)("a",{className:"link",href:n.link,children:"Link"})}),Object(m.jsx)(g,{tags:n.tags})]})]})})};var v=function(e){var t=e.match,a=(e.location,t.params.tagName),n=j.find((function(e){return e.name===a}));return Object(m.jsx)("div",{className:"ptags",children:Object(m.jsxs)("div",{className:"ptag-container content",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:[n.displayName," Projects"]}),Object(m.jsx)("br",{})]}),Object(m.jsx)("p",{className:"ptags-proj inner",children:n.projs.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/project/".concat(e),children:e})},e)}))})]})})};var w=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{basename:"/minty-hours",children:Object(m.jsxs)("table",{className:"main",children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsx)(p,{})})})}),Object(m.jsx)("tbody",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/",exact:!0,component:f}),Object(m.jsx)(b.a,{path:"/references",component:y}),Object(m.jsx)(b.a,{path:"/project/:projId",component:O}),Object(m.jsx)(b.a,{path:"/tags/:tagName",component:v})]})})})})]})})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5891529b.chunk.js.map