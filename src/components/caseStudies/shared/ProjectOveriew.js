import React, { useEffect } from 'react';

import Team from '../../../assets/team.svg';
import Time from '../../../assets/time.svg';
import Tools from '../../../assets/tools.svg';

import '../../../css/projectoverview.css';
import Section from '../../shared/Section';

const ProjectOverview = ({
  pbTeam,
  pbTime,
  pbTools,
  oText,
  oChallenge,
  oSolution,
  designProcessImage,
  oBgColor
}) => {
  useEffect(() => {
    let wrapper = document.getElementById('wrapper');

    wrapper.style.background = `linear-gradient(to top, #fff 97px, ${oBgColor} 0%)`;
    return () => {};
  }, [oBgColor]);

  return (
    <div>
      <div id='wrapper' className='po-wrapper'>
        <div className='po-container'>
          <div className='section-spacer' />
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
          <div className='section-spacer' />
          <div className='po-overview-text'>
            <div className='po-overview-text-header'>Overview</div>
            <div className='po-overview-text-block'>{oText}</div>
          </div>
          <div className='section-spacer' />

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

      <Section wrapperColor='#fff' sectionColor='#fff'>
        <div className='section-spacer' />
        <h1>Design Process</h1>
        <div className='section-spacer' />

        <div className='design-process'>
          <img
            style={{ height: '100%', width: '100%' }}
            alt=''
            src={designProcessImage}
          />
        </div>
        <div className='section-spacer' />
      </Section>
    </div>
  );
};

export default ProjectOverview;
