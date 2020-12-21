import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
// Components
import Navbar from './components/Navbar';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/contact' component={Contact} />
				<Route component={Error} />
			</Switch>
		</Router>
	);
};

export default App;
