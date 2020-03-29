import React from 'react';

import fitness from '../../assets/fitnessApp.png';
import airbnb from '../../assets/airbnb.png';
import '../../css/selectedWork.css';
import CaseStudyLink from '../shared/CaseStudyLink';

import { Link } from 'react-router-dom';

const SelectedWork = () => {
  return (
    <div className='selWork'>
      <div className='selContent'>
        <div className='selWorkTextTop' id='SelectedWork'>
          SELECTED WORK
        </div>
        <div className='selWorkText'>Take a Look</div>
        <CaseStudyLink
          alignLeft
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
        <div className='selWorkCaseStudyLinkSeparator'></div>
        <CaseStudyLink
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
              Airbnb hosts don’t know how much should they list their unit to
              remain competitive while maximizing their profits.
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
        <div className='selWorkSeparator'></div>
      </div>
    </div>
  );
};

export default SelectedWork;
