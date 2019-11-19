import React from 'react';
import { Route } from 'react-router-dom';

import About from './About.js';


import './App.css';

import NavBar from './components/NavBar.js';
import CallToAction from './components/CallToAction.js';
import SelectedWork from './components/SelectedWork.js';
import FitnessStudy from './components/caseStudies/FitnessStudy.js';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={CallToAction} />
      <Route exact path="/" component={SelectedWork} />
      <Route exact path="/fitnessstudy" component={FitnessStudy} />
      
      
      
    </div>
  );
}

export default App;
