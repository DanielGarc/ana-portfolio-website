import React from 'react';

import Team from '../../../assets/team.svg';
import Time from '../../../assets/time.svg';
import Tools from '../../../assets/tools.svg';
import ArrowRight from '../../../assets/arrow forward.svg';
import Arrow from '../../../assets/arrow up.svg';

import '../../../css/projectoverview.css';

const ProjectOverview = () => {
  return (
    <div>
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
              working with people, with their goals, not only changing their
              body but their minds.
              <br />
              <br />
              This is hard to do when you have to write everything on paper or
              don’t have enough time to work with them personally, or remind
              them all about their classes or their goals.
              <br />
              <br />
              Trainers are looking for something that it can be with them all
              the time, always up to date with what’s going on with their
              clients, and removing that layer of awkwardness to go and ask for
              the payments.
            </div>
          </div>
          <div className='po-overview-card-container'>
            <div className='po-overview-card-left-content'>
              <div className='po-overview-card-content-header'>Challenge</div>
              <div className='po-overview-card-content-text'>
                How can we build an engaging app that lets trainers and trainees
                manage their workouts and payments.
              </div>
            </div>
            <div className='po-overview-card-right-content'>
              <div className='po-overview-card-content-header'>Solution</div>
              <div className='po-overview-card-content-text'>
                An app that will be up to date with what’s going on with their
                clients and send reminders to trainees about payments.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='po-dp-wrapper'>
        <div className='po-dp-container'>
          <div style={{ display: 'block', margin: '19px 0' }} />
          <div className='po-dp-caption'>Design Process</div>
          <div className='po-dp-arrow-top'>
            <img alt='' src={Arrow} />
          </div>
          <div className='po-dp-diagram-container'>
            <div className='po-dp-diagram-item-container'>
              <div
                className='po-dp-diagram-header'
                style={{ color: '#A23222' }}
              >
                DISCOVERY
              </div>
              <div className='po-dp-diagram-text'>
                Research user
                <br />
                problems and
                <br />
                goals
              </div>
            </div>
            <div className='po-dp-diagram-item-container arrow'>
              <img alt='' src={ArrowRight} />
            </div>
            <div className='po-dp-diagram-item-container'>
              <div
                className='po-dp-diagram-header'
                style={{ color: '#A16026' }}
              >
                DEFINE
              </div>
              <div className='po-dp-diagram-text'>
                Narrow and
                <br />
                measure the
                <br />
                problems
              </div>
            </div>
            <div className='po-dp-diagram-item-container arrow'>
              <img alt='' src={ArrowRight} />
            </div>
            <div className='po-dp-diagram-item-container'>
              <div
                className='po-dp-diagram-header'
                style={{ color: '#064268' }}
              >
                IDEATE
              </div>
              <div className='po-dp-diagram-text'>
                Brainstorming
                <br />
                solutions
              </div>
            </div>
            <div className='po-dp-diagram-item-container arrow'>
              <img alt='' src={ArrowRight} />
            </div>
            <div className='po-dp-diagram-item-container'>
              <div
                className='po-dp-diagram-header'
                style={{ color: '#0A723D' }}
              >
                PROTOTYPE
              </div>
              <div className='po-dp-diagram-text'>Test</div>
            </div>
          </div>
          <div className='po-dp-arrow-bot'>
            <img alt='' src={Arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
