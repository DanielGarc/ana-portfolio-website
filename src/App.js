import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './css/App.css';

import NavBar from './components/shared/NavBar';
import CallToAction from './components/landingPage/CallToAction';
import SelectedWork from './components/landingPage/SelectedWork';
import AboutCTA from './components/aboutPage/AboutCTA';
import ContactForm from './components/shared/ContactForm';
import Footer from './components/shared/Footer';
import Projects from './components/projectsPage/Projects';
import FitnessStudy from './components/caseStudies/FitnessStudy';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={AboutPage} />
        {/* <Route exact path='/fitstudy' component={FitnessStudyPage} /> */}
        {/* <Route exact path='/projects' component={Projects} /> */}
        <Route component={LandingPage} />
      </Switch>
    </div>
  );
}

function LandingPage(props) {
  return (
    <div>
      <NavBar {...props} />
      <CallToAction />
      <SelectedWork />
      <ContactForm />
      <Footer />
    </div>
  );
}

function AboutPage(props) {
  return (
    <div>
      <NavBar {...props} />
      <AboutCTA />
      <Footer />
    </div>
  );
}

function FitnessStudyPage(props) {
  return (
    <div>
      <NavBar {...props} />
      <FitnessStudy />
    </div>
  );
}

export default App;
