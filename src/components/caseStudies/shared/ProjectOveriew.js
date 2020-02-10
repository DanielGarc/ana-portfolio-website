import React from 'react';

import Team from '../../../assets/team.svg';
import Time from '../../../assets/time.svg';
import Tools from '../../../assets/tools.svg';

import '../../../css/projectoverview.css';

const ProjectOverview = () => {
  return (
    <div className='po-wrapper'>
      <div className='po-container'>
        <div className='po-item-container'>
          <div className='po-item'>
            <img alt='' src={Team} />
            <p>
              1 UX designer &
              <br />5 Software developers
            </p>
          </div>
          <div className='po-item'>
            <img alt='' src={Time} />
            <p>5 Weeks</p>
          </div>
          <div className='po-item'>
            <img alt='' src={Tools} />
            <p>
              Sketch, Whimsical,
              <br />
              InVision, Paper and pencil
            </p>
          </div>
        </div>
        <div className='po-overview-text'>
          <div className='po-overview-text-header'>Overview</div>
          <div className='po-overview-text-block'>
            Fitness instructors have a lot to work on, not just classes but,
            working with people, with their goals, not only changing their body
            but their minds.
            <br />
            <br />
            This is hard to do when you have to write everything on paper or
            don’t have enough time to work with them personally, or remind them
            all about their classes or their goals.
            <br />
            <br />
            Trainers are looking for something that it can be with them all the
            time, always up to date with what’s going on with their clients, and
            removing that layer of awkwardness to go and ask for the payments.
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
