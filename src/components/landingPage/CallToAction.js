import React from 'react';

import '../../css/callToAction.css';

import headshot from '../../assets/me.png';

import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='ctaWrapper'>
      <div className='ctaContent'>
        <div className='ctaLeftBox'>
          <h1> Hola, I'm Ana Rosa. </h1>
          <p className='ctaText'>
            I am a UX Designer, Technologist, and&nbsp;
            <br />
            outdoors lover. Trying to create a user-friendly
            <br />
            environment.
            <br />
            <br />
            I care deeply about people and I love
            <br />
            analyzing human behaviour.
            <br />
            <br />
            Helping solve problems in a simple way
            <br />
            is kind of my thing.
          </p>
          <div className='ctaButtonBox'>
            {/* <Link to='/projects'>Check out my work!</Link> */}
            <div
              onClick={() => {
                var element = document.getElementById('SelectedWork');
                var rect = element.getBoundingClientRect();

                window.scrollTo({
                  top: rect.top - 103,
                  behavior: 'smooth'
                });
              }}
            >
              Check out my work!
            </div>
          </div>
        </div>
        <div className='ctaRightBox'>
          <img alt='' src={headshot} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
