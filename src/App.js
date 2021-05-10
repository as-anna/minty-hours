import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import References from './pages/References'
import Test from './pages/Test';
import Project from './pages/Project';
import Tags from './pages/Tags'

function App() {
  return (
    <>
	<Router>
		<NavBar />
		<Switch>
			<Route path='/minty-hours/' exact component={Home} />
			<Route path='/minty-hours/references' component={References} />
			<Route path='/minty-hours/test' component={Test} />
			<Route path='/minty-hours/project/:projId' component={Project} />
			<Route path='/minty-hours/tags/:tagName' component={Tags} />
		</Switch>
	</Router>
    </>
  );
}

export default App;
