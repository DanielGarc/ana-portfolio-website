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
          I am a UX designer who loves the outdoors.
            <br />
           I care deeply about <b>helping the community</b> and 
            <br />
            love <b>analyzing human behavior</b>.
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
