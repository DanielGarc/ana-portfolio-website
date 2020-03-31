import React from 'react';

import fitness from '../../assets/fitnessApp.png';
import airbnb from '../../assets/airbnb.png';
import SolveEmployment from '../../assets/se-solveemployment.png';
import '../../css/selectedWork.css';
import CaseStudyLink from '../shared/CaseStudyLink';

import { Link } from 'react-router-dom';

const SelectedWork = () => {
  return (
    <div className='selWork'>
      <div className='selContent'>
      <div className='section-spacer' />
      
      <div className='section-spacer'id='SelectedWork' />
        
        <CaseStudyLink
          alignLeft 
          cslImg={airbnb}
          url={
            <Link to={{ pathname: '/airbnb' }}>
              <div className='cslTextLink'>READ CASE STUDY</div>
            </Link>
          }
          header='Price my Airbnb'
          color='#00A699'
          body={
            <div>
              Airbnb hosts don’t know how much they should list their unit to remain competitive while maximizing their profits.
              <br />
              <br />
              This platform allows them to evaluate the price of their
              properties, find ways to increase the value of their properties
              and know when and how much should they adjust their prices based
              on events, seasons, holidays, and/or location.
              <br />
              <br />
              <br />
            </div>
          }
        />
        <div className='selWorkCaseStudyLinkSeparator'></div>

        <CaseStudyLink
          cslImg={fitness}
          header='Anywhere Fitness'
          color='#6C44DE'
          url={
            <Link to={{ pathname: '/fitstudy' }}>
              <div className='cslTextLink'>READ CASE STUDY</div>
            </Link>
          }
          body={
            <div>
              Fitness instructors have a lot to work on. Not just leading classes but working with people and their personalized goals. Fitness instructors don’t just change their clients’ bodies, they change their minds. 
              <br />
              <br />
              Trainers are looking for something that can be with them all the time, 
              always up to date with what’s going on with their clients, 
              and removing that layer of awkwardness to go and ask for the payments.
              <br />
              <br />
            </div>
          }
        />
        <div className='selWorkCaseStudyLinkSeparator'></div>

        <CaseStudyLink
          alignLeft
          cslImg={SolveEmployment}
          url={
            <Link to={{ pathname: '/solve' }}>
              <div className='cslTextLink'>READ CASE STUDY</div>
            </Link>
          }
          header='Solve Employment'
          color='#1678C5'
          body={
            <div>
              Solve Employment is a CRM platform that helps people in Southeast Asia find internships, 
              microtasks, and job opportunities.
              <br />
              <br />
              The platform enables talents to upload the documents for those opportunities online as 
              well as receive payment for their services.

              <br />
              <br />
              <br />
            </div>
          }
        />
        <div className='selWorkSeparator'></div>
      </div>
    </div>
  );
};

export default SelectedWork;
