import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';

import './assets/css/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className='App'> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error} />
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
