import React from 'react';
import LinkedInIcon from '../../assets/linkedin-icon.svg';
import EmailIcon from '../../assets/email-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import DribbbleIcon from '../../assets/dribbble-icon.svg';

import '../../css/footer.css';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='contentWrapper'>
        <a
          href='https://www.linkedin.com/in/ana-rosa-lerma/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='Linkedin icon' src={LinkedInIcon} />
        </a>
        <a
          href='https://twitter.com/anarosaUX'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='Twitter Icon' src={TwitterIcon} />
        </a>
        <a href='mailto:anarosa.lermas@gmail.com'>
          <img alt='Email Icon' src={EmailIcon} hre />
        </a>
        <a
          href='https://dribbble.com/anarosa04'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='Dribble Icon' src={DribbbleIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
