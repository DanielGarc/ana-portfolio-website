import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './css/App.css';

import NavBar from './components/shared/NavBar';
import CallToAction from './components/landingPage/CallToAction';
import SelectedWork from './components/landingPage/SelectedWork';
import AboutCTA from './components/aboutPage/AboutCTA';
import ContactForm from './components/shared/ContactForm';
import Footer from './components/shared/Footer';
import FitnessStudy from './components/caseStudies/FitnessStudy';
import AirbnbStudy from './components/caseStudies/AirbnbStudy.js';
import SolveEmploymentStudy from './components/caseStudies/SolveEmploymentStudy';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/fitstudy' component={FitnessStudyPage} />
        <Route exact path='/airbnb' component={AirbnbStudyPage} />
        <Route exact path='/solve' component={SolveEmploymentStudyPage} />

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
    <>
      <NavBar {...props} />
      <AboutCTA />
      <Footer />
    </>
  );
}

function FitnessStudyPage(props) {
  return (
    <div>
      <NavBar {...props} />
      <FitnessStudy />
      <Footer />
    </div>
  );
}

function AirbnbStudyPage(props) {
  return (
    <>
      <NavBar {...props} />
      <AirbnbStudy />
      <Footer />
    </>
  );
}

function SolveEmploymentStudyPage(props) {
  return (
    <>
      <NavBar {...props} />
      <SolveEmploymentStudy />
      <Footer />
    </>
  );
}

export default App;
