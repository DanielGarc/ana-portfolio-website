import React from 'react';
import ProjectOverview from './shared/ProjectOveriew';
import '../../css/fitStudy.css';

import FitStudy from '../../assets/banner.png';
import avatarTop from '../../assets/top_avatar.png';
import avatarBottom from '../../assets/bottom_avatar.png';

const FitnessStudy = () => {
  return (
    <div>
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
      <div></div>
      <div className='user-section-wrapper'>
        <div className='userSection'>
          <div className='trainers'>
            <img alt='' className='avatarStyle' src={avatarTop} />
            <div className='trainerBox'>
              <h2> Trainers </h2>
              <p>
                “It’s hard to keep up with all the trainees progress.”
                <br />
                “If someone hasn’t pay I don’t like to remind them personally.”
                <br />
                “I have more than one certification and people don’t know them.”
                <br />
              </p>
            </div>
          </div>

          <div className='trainers'>
            <img alt='' className='avatarStyle' src={avatarBottom} />

            <div className='trainerBox'>
              <h2> Trainees </h2>
              <p>
                “The apps that they have used are not engaging.”
                <br />
                “It’s hard for me to finished the programs I start.”
                <br />
                “I don’t want to pay for something that I don’t know if it’s
                going to work.”
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessStudy;
