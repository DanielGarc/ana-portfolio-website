import React from 'react';

import CaseStudyLink from '../shared/CaseStudyLink';
import fitness from '../../assets/fitnessApp.png';
import airbnb from '../../assets/airbnb.png';
import SE from '../../assets/Solve-E.png';
import QTTB from '../../assets/QTTB.png';

import '../../css/projects.css';

const Projects = () => {
  return (
    <div className='projWrapper'>
      <div className='projContent'>
        <div className='projWorkTextTop'>SELECTED WORK</div>
        <div className='projWorkText'>Take a Look</div>
        <CaseStudyLink
          cslImg={airbnb}
          header='Price my Airbnb'
          color='#00A699'
          url='https://invis.io/EAV3Y2IJ48K#/392903255_price_My_Airbnb_Case_Studies'
          body='AirBnB host don’t know how much should they list their unit to remain competitive while maximizing their profits, this platform allows to evaluate their the price of their properties, find ways to increase the value of their properties and know when/how to adjust price to events/seasons/holidays'
        />
        <div style={{ marginTop: '137px' }}></div>
        <CaseStudyLink
          alignLeft
          url='https://invis.io/CJUZC0ZUVEX#/380572085_Case_Studies'
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
          cslImg={QTTB}
          header='Quest to the best'
          color='#097C8B'
          url='https://invis.io/PEUZD6X4SRG#/394907260_QTTB_Case_Study'
          body='Quest for the Best is a social challenge platform that encourages members of a community to seek out
        the best available experiences in their area.
        The underlying objective is to get community members to go outside and seek new experiences through “Quests”. '
        />
        <div style={{ marginTop: '137px' }}></div>
        <CaseStudyLink
          alignLeft
          url='https://invis.io/C7UZD6ADXBQ#/394422568_Solve_Employment_Case_Study'
          cslImg={SE}
          header='Solve Employment'
          color='#1678C5'
          body={
            <div>
              Platform that links Solve Education students (marginalized youth)
              up with internship/microtasks/job opportunities.
              <br />
              <br />
              Platform that links Solve Education students (marginalized youth)
              up with internship/microtasks/job opportunities. Businesses can
              search for freelancing, outsourcing, and talent-for-hire services
              to help them get more done. This platform had a serios sign up
              problem.
              <br />
              <br />
            </div>
          }
        />
        <div style={{ marginBottom: '67px' }}></div>
      </div>
    </div>
  );
};

export default Projects;
