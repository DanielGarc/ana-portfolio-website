import React from 'react';
import ProjectOverview from './shared/ProjectOveriew';
import '../../css/fitStudy.css';

import FitStudy from '../../assets/banner.png';

const FitnessStudy = () => {
  return (
    <React.Fragment>
      <div className='fitStudyWrapper'>
        <div className='fitStudyContent'>
          <div>
            <img alt='' src={FitStudy} />
          </div>
        </div>
      </div>
      <div className='fitStudyOverviewSectionContentWrapper'>
        <div className='fitStudyOverviewSectionContent'>
          <div className='fitStudyOverviewSectionCaption'>
            Project Background
          </div>
        </div>
      </div>
      <ProjectOverview />
    </React.Fragment>
  );
};

export default FitnessStudy;
