import React from 'react';

import Team from '../../../assets/team.svg';
import Time from '../../../assets/time.svg';
import Tools from '../../../assets/tools.svg';
import ArrowRight from '../../../assets/arrow forward.svg';
import Arrow from '../../../assets/arrow up.svg';
import design_process from '../../../assets/design_process.png';

import '../../../css/projectoverview.css';
import Section from '../../shared/Section';

const ProjectOverview = ({
  pbTeam,
  pbTime,
  pbTools,
  oText,
  oChallenge,
  oSolution
}) => {
  return (
    <div>
      <div className='po-wrapper'>
        <div className='po-container'>
          <div className='po-item-container'>
            <div className='po-item'>
              <img alt='' src={Team} />
              <p>{pbTeam}</p>
            </div>
            <div className='po-item'>
              <img alt='' src={Time} />
              <p>{pbTime}</p>
            </div>
            <div className='po-item'>
              <img alt='' src={Tools} />
              <p>{pbTools}</p>
            </div>
          </div>
          <div className='po-overview-text'>
            <div className='po-overview-text-header'>Overview</div>
            <div className='po-overview-text-block'>{oText}</div>
          </div>
          <div className='po-overview-card-container'>
            <div className='po-overview-card-left-content'>
              <div className='po-overview-card-content-header'>Challenge</div>
              <div className='po-overview-card-content-text'>{oChallenge}</div>
            </div>
            <div className='po-overview-card-right-content'>
              <div className='po-overview-card-content-header'>Solution</div>
              <div className='po-overview-card-content-text'>{oSolution}</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'block', margin: '50px 0' }} />

      <Section wrapperColor='#fff' sectionColor='#fff'>
        <div className='design-process'>
          <img
            style={{ height: '100%', width: '100%' }}
            alt=''
            src={design_process}
          />
        </div>
      </Section>
      <div style={{ display: 'block', margin: '90px 0' }} />
    </div>
  );
};

export default ProjectOverview;
