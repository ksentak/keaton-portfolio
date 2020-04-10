import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './assets/css/main.css';
import './assets/css/color.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
