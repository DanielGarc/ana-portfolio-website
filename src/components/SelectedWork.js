import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import fitness from '../assets/fitnessApp.png';
import airbnb from '../assets/airbnb.png';
import '../css/selectedWork.css';
import CaseStudyLink from './CaseStudyLink';

const SelectedWork = () => {
  return (
    <div className='selWork'>
      <div className='selContent'>
        <div className='selWorkTextTop'>SELECTED WORK</div>
        <div className='selWorkText'>Take a Look</div>
        <CaseStudyLink
          alignLeft
          cslImg={fitness}
          header='Anywhere Fitness'
          color='#6C44DE'
          url='https://invis.io/CJUZC0ZUVEX#/380572085_Case_Studies'
          body={
            <div>
              Fitness instructors have a lot to work on, not just classes but,
              working with people, with their goals, not only changing their
              body but their minds.
              <br />
              <br />
              Trainers are looking for something that it can be with them all
              the time, always up to date with what’s going on with their
              clients, and removing that layer of awkwardness to go and ask for
              the payments.
              <br />
              <br />
            </div>
          }
        />
        <div style={{ marginTop: '137px' }}></div>
        <CaseStudyLink
          cslImg={airbnb}
          url='https://invis.io/EAV3Y2IJ48K#/392903255_price_My_Airbnb_Case_Studies'
          header='Price my Airbnb'
          color='#00A699'
          body='AirBnB host don’t know how much should they list their unit to remain competitive while maximizing their profits, this platform allows to evaluate their the price of their properties, find ways to increase the value of their properties and know when/how to adjust price to events/seasons/holidays'
        />
        <div className='selWorkSeparator'></div>
      </div>
    </div>
  );
};

export default SelectedWork;
