import React from 'react';
import ProjectOverview from './shared/ProjectOveriew';
import Section from '../shared/Section';
import '../../css/fitStudy.css';

import FitStudy from '../../assets/banner.png';
import avatarTop from '../../assets/top_avatar.svg';
import avatarBottom from '../../assets/bottom_avatar.svg';
import whiteBoard from '../../assets/whiteboard.png';
import dotVoting from '../../assets/dot_voting.png';

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
      <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
        <div className='data-section-header'>First, data.</div>
        <div className='data-section-sub-header'>
          Don’t assume you know the answer.
        </div>
        <div className='data-section-paragraph'>
          <p>
            When I accepted this project <b>I thought I knew</b> what the
            application would look like at the end, or what the product was and
            its needs because I’m a fitness instructor, <b>I was wrong.</b>
          </p>
        </div>
        <div style={{ display: 'block', margin: '2px 0' }} />
        <div className='data-section-paragraph'>
          <p>
            How did I gather information? Great question! I did the following
          </p>
        </div>
        {/* <div style={{ display: 'block', margin: '2px 0' }} /> */}
        <div className='data-section-paragraph'>
          <ul>
            <li>
              I analyze what types of question and what audience I’ll be
              interviewing.
            </li>
            <li>
              Interview with coaches, fitness instructor and people who exercise
              regularly and not regularly.
            </li>
            <li>Shadow a couple of colleagues</li>
          </ul>
        </div>
        <div style={{ display: 'block', margin: '22px 0' }} />
      </Section>
      <Section wrapperColor='#142B44' sectionColor='#142B44'>
        <div style={{ display: 'block', margin: '20px 0' }} />
        <div className='trainers'>
          <img alt='' className='avatarStyle' src={avatarTop} />
          <div className='trainerBox'>
            <h2> Trainers </h2>
            <div style={{ display: 'block', margin: '11px 0' }} />
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
        <div style={{ display: 'block', margin: '20px 0' }} />

        <div className='trainers'>
          <img alt='' className='avatarStyle' src={avatarBottom} />

          <div className='trainerBox'>
            <h2> Trainees </h2>
            <div style={{ display: 'block', margin: '11px 0' }} />

            <p>
              “The apps that they have used are not engaging.”
              <br />
              “It’s hard for me to finished the programs I start.”
              <br />
              “I don’t want to pay for something that I don’t know if it’s going
              to work.”
              <br />
            </p>
          </div>
        </div>
        <div style={{ display: 'block', margin: '20px 0' }} />
      </Section>
      <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
        <div style={{ display: 'block', margin: '25px 0' }} />

        <div className='workshop-p1'>
          <img src={whiteBoard} alt='' />
          <div className='workshop-p1-textbox'>
            <h2>We’re ready to target!</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />

            <h3>From a huge amount of data to target ideas.</h3>
            <div style={{ display: 'block', margin: '12px 0' }} />

            <p>
              After analyzing the data gathered from surveys, interviews,
              shadowings, I started building the personas and creating the user
              journey map.
              <br />
              <br />
              By doing the previous I got a more define idea of the main
              targets, it also helped me to always keep in mind the user’s needs
              and goals. Whenever I got stuck in the user flow I always went
              back and re-read it.
              <br />
              <br />
              In the creation of the user flow the main differences between
              trainer and trainees was their authority.
              <br />
            </p>
          </div>
        </div>
        <div style={{ display: 'block', margin: '25px 0' }} />
      </Section>
      <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
        <div className='workshop-p2'>
          <h2>Workshop</h2>
          <div style={{ display: 'block', margin: '1px 0' }} />

          <h3>Who doesn’t love good ideas?</h3>
          <div style={{ display: 'block', margin: '12px 0' }} />

          <p>
            One of the things I like to do the most is generating ideas with a
            team, for this workshop, I asked a couple of colleagues to help me
            with some exercises because I wanted to know how they would tackle
            the problems in their own way. I explained the purpose of this app,
            the challenge and lay down the problems found in our target
            audience. I wrote down the problems on top of the board so everyone
            could have a vision of the problems and started generating ideas,
            after a couple of minutes we stop and did dot voting.
          </p>
        </div>
        <div style={{ display: 'block', margin: '9px 0' }} />

        <div className='workshop-p2-split'>
          <div className='workshop-p2-split-left'>
            <p>
              While creating all these ideas my colleagues kept asking questions
              that I didn’t think of or didn’t question the “why” of some of the
              problems. <b>We went back to Discovery and Define</b> to review
              them again, we compare them with the workshop ideas and modified
              the user flow.
            </p>
            <div style={{ display: 'block', margin: '26px 0' }} />

            <ol className='workshop-p2-list'>
              <li className='workshop-p2-list-item'>“Does that make sense?“</li>
              <li className='workshop-p2-list-item'>
                “Let me check on the data from the interviews”
              </li>
              <li className='workshop-p2-list-item'>
                “Ok, one interviewer mentioned that but the other four don’t,
                that’s not a pattern let’s dig on the market and do a quick
                analysis in which companies have features like that and check
                the reviews”
              </li>
              <li className='workshop-p2-list-item'>
                “Okay, based on that market analysis, I’m adding that feature”
                (rewarding the trainees)
              </li>
            </ol>
          </div>
          <div className='workshop-p2-split-right'>
            <img alt='' src={dotVoting} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FitnessStudy;
