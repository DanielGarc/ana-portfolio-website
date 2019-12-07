import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/shared/NavBar';
import CallToAction from './components/landingPage/CallToAction';
import SelectedWork from './components/landingPage/SelectedWork';
import FitnessStudy from './components/caseStudies/FitnessStudy';
import AboutCTA from './components/aboutPage/AboutCTA';
import Projects from './components/projectsPage/Projects';
import ContactForm from './components/shared/ContactForm';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={CallToAction} />
      <Route exact path='/' component={SelectedWork} />
      <Route exact path='/about' component={AboutCTA} />
      <Route exact path='/fitstudy' component={FitnessStudy} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path={['/', '/projects']} component={ContactForm} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
