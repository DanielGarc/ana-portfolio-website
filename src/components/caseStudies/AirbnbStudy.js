import React from 'react';
import Section from '../shared/Section';
import ProjectOverview from './shared/ProjectOveriew';

import BannerImage from '../../assets/banner_airbnb.png';
import DesignProcess from '../../assets/design_cycle_airbnb.png';
import DavidComment from '../../assets/airbnb-david.svg';
import GalenComment from '../../assets/airbnb-galen.svg';
import MeganComment from '../../assets/airbnb-megan.svg';
import BriannaComment from '../../assets/airbnb-brianna.svg';
import ScottComment from '../../assets/airbnb-scott.svg';
import RateChange from '../../assets/airbnb-rate-change.png';
import ToolUsed from '../../assets/airbnb-tool-used.png';

import '../../css/airbnbStudy.css';

const AirbnbStudy = () => {
  return (
    <>
      <div style={{ marginTop: 'var(--navbar-height)' }}></div>
      <Section sectionColor='#FFE5E5' wrapperColor='#FFE5E5'>
        <img
          style={{ width: '100%', height: '100%' }}
          alt=''
          src={BannerImage}
        />
      </Section>
      <ProjectOverview
        pbTeam={
          <>
            2 UX designer, 3 Data scientists
            <br /> & 4 Software developers
          </>
        }
        pbTime={<>8 Weeks</>}
        pbTools={
          <>
            Figma, Usabilityhub, <br />
            InVision, Paper and pencil
          </>
        }
        oText={
          <>
            We discovered a need for a tool that will help Airbnb hosts figure
            out how they should be pricing their house.
            <br />
            <br />
            Airbnb hosts don’t know how much should they list their unit to
            remain competitive while maximizing their profits, this platform
            allows to evaluate the price of their properties, find ways to
            increase the value of their properties and know when/how to adjust
            the price to events/seasons/holidays.
          </>
        }
        oChallenge={
          <>
            As an Airbnb host, how much should I list my unit for to remain
            competitive while maximizing my profits?
          </>
        }
        oSolution={
          <>
            Evaluate the price of their properties, find ways to increase their
            value based on algorithms.
          </>
        }
        designProcessImage={DesignProcess}
        oBgColor={'#fffafa'}
      />
      <Section sectionColor='#FFE5E5' wrapperColor='#FFE5E5'>
        <div className='section-spacer' />
        <div className='col-container'>
          <div className='col user-disc-text'>
            <h2>Discovering the user</h2>
            <h3>“How difficult can it be to give the optimal price?”</h3>
            <p>
              We got the project and in our first meeting, we were like, this
              project is going to be easy, the answer is in the problem, the
              users just need to have the optimal price, and we all believe it
              until we created a survey and submitted to the target audience.
              <br />
              <br />
              <strong>OH BOY… </strong>The results came back and we had to
              consider more aspects that we didn’t think of them on the begging,
              we didn’t just need to give the optimal price, the users wanted
              something manageable, something that will tell them when are the
              high seasons, What is the range of prices they could price their
              Airbnb.{' '}
            </p>
          </div>
          <div className='col'>
            <img src={DavidComment} alt='David Comment' />
            <div className='section-half-space' />
            <img src={GalenComment} alt='Galen Comment' />
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fff' wrapperColor='#fff'>
        <div className='section-spacer' />
        <h2>How often did you change your rates?</h2>
        <div style={{ margin: 'auto' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={RateChange}
            alt='How often did you change your rates?'
          />
        </div>
        <div className='section-half-space' />
        <h2>Which tool have you used to determine your price?</h2>
        <div style={{ margin: 'auto' }}>
          <img
            // style={{ margin: 'auto', width: '100%', height: '100%' }}
            src={ToolUsed}
            alt='How often did you change your rates?'
          />
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#FFE5E5' wrapperColor='#FFE5E5'>
        <div className='section-spacer' />

        <div className='col-container'>
          <div className='col unexp-data-img'>
            <img src={MeganComment} alt='Megan Comment' />
            <img src={BriannaComment} alt='Brianna Comment' />
            <img src={ScottComment} alt='Scott Comment' />
          </div>
          <div className='col unexp-data-text'>
            <h2>Unexpected data</h2>
            <h3>
              The hosts want to know what their guests want... does it sound
              familiar?
            </h3>
            <p>
              Yes! An unexpected path was detected, the hosts wanted to know
              what the guests value the most, that they will be willing to pay
              more.
              <br />
              <br />
              We created another survey, now it was sent to all the people who
              had used Airbnb before, the results were quite simple, depending
              on the reason of visit will vary from what they will be willing to
              pay more, on average, they all wanted a clean apartment with all
              the amenities.
            </p>
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
    </>
  );
};

export default AirbnbStudy;
