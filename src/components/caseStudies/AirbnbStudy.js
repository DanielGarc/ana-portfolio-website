import React from 'react';
import Section from '../shared/Section';
import ProjectOverview from './shared/ProjectOveriew';

import BannerImage from '../../assets/banner_airbnb.png';
import DesignProcess from '../../assets/design_cycle_airbnb.png';

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
    </>
  );
};

export default AirbnbStudy;
