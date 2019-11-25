import React from 'react';

import CaseStudyLink from '../CaseStudyLink.js';
import fitness from '../../assets/fitnessApp.png';
import airbnb from '../../assets/airbnb.png';

import '../../css/projects.css';

const Projects = () => {
  return (
    <div className='projWrapper'>
      <div className='projContent'>
        <div className='projWorkTextTop'>SELECTED WORK</div>
        <div className='projWorkText'>Take a Look</div>
        <CaseStudyLink
          alignLeft
          url='https://invis.io/X4UZC6UCH6K#/394898585_Hatching'
          cslImg={fitness}
          header='Anywhere Fitness'
          color='#6C44DE'
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
          header='Price my Airbnb'
          color='#00A699'
          body='AirBnB host don’t know how much should they list their unit to remain competitive while maximizing their profits, this platform allows to evaluate their the price of their properties, find ways to increase the value of their properties and know when/how to adjust price to events/seasons/holidays'
        />
        <div style={{ marginBottom: '67px' }}></div>
      </div>
    </div>
  );
};

export default Projects;
