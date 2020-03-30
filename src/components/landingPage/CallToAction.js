import React from 'react';

import '../../css/callToAction.css';

import headshot from '../../assets/me.png';

const CallToAction = () => {
  return (
    <div className='ctaWrapper'>
      <div className='ctaContent'>
        <div className='ctaLeftBox'>
          <h1> Hola, I'm Ana Rosa! </h1>
          <p className='ctaText'>
            UX Designer, Technologist, and&nbsp; outdoors lover.
            <br />
            Trying to create a user-friendly environment.
            <br />
            <br />I care deeply about <b>helping the community</b> and I
            <br />
            love analyzing human behaviour.
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
