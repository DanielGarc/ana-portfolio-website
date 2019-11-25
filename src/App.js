import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import CallToAction from './components/CallToAction';
import SelectedWork from './components/SelectedWork';
import FitnessStudy from './components/caseStudies/FitnessStudy';
import AboutCTA from './components/aboutPage/AboutCTA';
import Projects from './components/projectsPage/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={CallToAction} />
      <Route exact path='/' component={SelectedWork} />
      <Route exact path='/' component={ContactForm} />
      <Route exact path='/about' component={AboutCTA} />
      <Route exact path='/fitstudy' component={FitnessStudy} />
      <Route exact path='/projects' component={Projects} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
