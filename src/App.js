import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import References from './pages/References'
import Project from './pages/Project';
import Tags from './pages/Tags'

function App() {
  return (
    <>
	<Router>
		<table className='main'>
			<thead>
			<tr>
				<td><NavBar /></td>
			</tr>
			</thead>

			<tbody>
				<tr><td>
				<Switch>
					<Route path='/minty-hours/' exact component={Home} />
					<Route path='/minty-hours/references' component={References} />
					<Route path='/minty-hours/project/:projId' component={Project} />
					<Route path='/minty-hours/tags/:tagName' component={Tags} />
				</Switch>
				</td></tr>
			</tbody>
		</table>
	</Router>
    </>
  );
}

export default App;
