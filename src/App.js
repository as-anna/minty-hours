import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <>
	<Router>
		<NavBar />
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/test' component={Test} />
		</Switch>
	</Router>
    </>
  );
}

export default App;
