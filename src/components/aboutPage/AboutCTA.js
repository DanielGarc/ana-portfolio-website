import React from 'react';

import '../../css/aboutPage.css';

import AboutImage from '../../assets/aboutImage.png';
import Hiker from '../../assets/hiker.png';
import Instructor from '../../assets/instructor.png';
import Dog from '../../assets/dog.png';
import Runner from '../../assets/runner.png';

const AboutCTA = () => {
  return (
    <div className='aboutWrapper'>
      <div className='aboutContent'>
        <div className='aboutName'>Ana Rosa Lerma</div>
        <div className='aboutSection'>
          <div className='aboutGraphics'>
            <div className='aboutPic'>
              <img alt='' src={AboutImage} />
            </div>

            <p style={{ fontSize: '24px', fontWeight: '500', color: '#003' }}>
              {' '}
              <i>
                {' '}
                "Caring Deeply To Create <br /> Better Experiences"{' '}
              </i>{' '}
            </p>

            <div className='experience' style={{ fontSize: '24px' }}>
              <p>
                {' '}
                <b>Occupation : </b> Ux Designer
              </p>
              <p>
                <b>Education : </b> Bachelor In IT
              </p>
              <p>
                <b>Location : </b> Wilmer, MN
              </p>
            </div>

            <div className='skills'>
              <div className='skillRow'>
                <p className='skillBox'>Caring</p>
                <p className='skillBox'>Friendly</p>
                <p className='skillBox'>Creative</p>
              </div>
              <div className='skillRow'>
                <p className='skillBox'>Passionate</p>
                <p className='skillBox'>Optimistic</p>
              </div>
              <div className='skillRow'>
                <p className='skillBox'>Hard Working</p>
              </div>
            </div>
          </div>

          <div className='aboutText'>
            <h2 style={{ textAlign: 'left', marginLeft: '6%' }}>
              {' '}
              <b> About Me</b>
            </h2>
            <div className='paragraphText'>
              <p className='paragraph'>
                I've always been worried about people and finding ways to be
                useful, but that's how I am, I never thought that one day I
                would work with something that would involve people.
              </p>
              <p className='paragraph'>
                After moving to the United States, I was working as a systems
                technician, that's where I began to notice that I was more
                interested in the user experience and that I was worried about
                how they would react to certain changes in the system and
                applications.
              </p>
              <p className='paragraph'>
                Later, a couple of friends asked me to design the workflow and
                experience of their new application idea, in doing so I found
                myself really immersed in those sketches and screens, sometimes
                spending all day on them without realizing it. I remember
                thinking at that time "This is how people should feel about
                their work; excited about what they are doing, enjoying and
                having passion to offer an unforgettable experience."
              </p>
              <p className='paragraph'>
                At this time I was quite new in design and after researching
                what careers involved working on prototypes, experiences, user
                behavior and design, I found HCI and with that the UX
                professional career. I bought books, watched videos and did
                courses on HCI and UX design and found it; my passion.
              </p>
            </div>

            <div className='goalSection'>
              <h2 style={{ textAlign: 'left', marginLeft: '6%' }}> Goals </h2>
              <div className='goals'>
                <ul>
                  <li> Deliver A Good Experience </li>
                  <li> Help People Reach Their Maximum Potential</li>
                  <li> Always Have A Welcoming Experience</li>
                </ul>
              </div>
              <h2 style={{ textAlign: 'left', marginLeft: '6%' }}>
                {' '}
                Frustrations{' '}
              </h2>
              <div className='goals'>
                <ul>
                  <li> Not Being Able To Communicate Correctly With People</li>
                  <li> Human Behaviour </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='otherSection'>
          <div className='otherWrapper'>
            <h2>Who Am I Other Than A UX Designer?</h2>

            <div className='hobbies'>
              <div className='myHobby'>
                <img alt='' src={Hiker} />
                <p> Hiker </p>
              </div>

              <div className='myHobby'>
                <img alt='' src={Instructor} />
                <p> Fitness Instructor </p>
              </div>

              <div className='myHobby'>
                <img alt='' src={Dog} />
                <p> Ghost's Mom </p>
              </div>

              <div className='myHobby'>
                <img alt='' src={Runner} />
                <p> Runner </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='aboutContact'>
          <h2> Contact :</h2>
          <p> anarosa.lermas@gmail.com</p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutCTA;
