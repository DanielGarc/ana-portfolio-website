import React from 'react';

import './App.css';

import NavBar from './components/NavBar.js';
import CallToAction from './components/CallToAction.js';
import SelectedWork from './components/SelectedWork.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CallToAction />
      <SelectedWork />
      <p> Test </p>
    </div>
  );
}

export default App;
