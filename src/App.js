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
			<Route path='/' exact component={Home} />
			<Route path='/references' component={References} />
			<Route path='/test' component={Test} />
			<Route path='/project/:projId' component={Project} />
			<Route path='/tags/:tagName' component={Tags} />
		</Switch>
	</Router>
    </>
  );
}

export default App;
