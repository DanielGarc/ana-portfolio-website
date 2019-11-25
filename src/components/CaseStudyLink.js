import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/caseStudyLink.css';

const CaseStudyLink = ({
  cslImg,
  alignLeft = false,
  color,
  body,
  header,
  url
}) => {
  return (
    <div
      className={`cslWrapper ${
        alignLeft ? 'cslWrapperLeft' : 'cslWrapperRight'
      }`}
    >
      <img alt='Case Study' src={cslImg} />
      <div
        style={{ backgroundColor: color }}
        className={`cslTextWrapper ${
          alignLeft ? 'cslTextWrapperLeft' : 'cslTextWrapperRight'
        }`}
      >
        <p className='cslTextHeader'>{header}</p>
        <div className='cslTextBody'>{body}</div>
        {/* <NavLink className='cslTextLink' to='/fitstudy'> */}
        <a
          alt='Case Study'
          href={url}
          rel='noopener noreferrer'
          target='_blank'
        >
          <div className='cslTextLink'>
            READ CASE STUDY
            {/* <span className='cslTextArrow'>
            <img alt='Right Arrow' src={arrowRight}></img>
          </span> */}
          </div>
        </a>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default CaseStudyLink;
