import React from 'react';

import '../../css/aboutPage.css';

import AboutImage from '../../assets/Image.png';
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
              <img alt='Profile pic' src={AboutImage} />
            </div>

            <div className='picSubtitle'>
              "Caring deeply to create better experiences"
            </div>

            <div className='experience'>
              <div className='experienceLine'>
                <div className='experienceTitle'>OCCUPATION</div>
                <div className='experienceText'>UX designer</div>
              </div>
              <div className='experienceLine'>
                <div className='experienceTitle'>EDUCATION</div>
                <div className='experienceText'>Bachelor in IT</div>
              </div>
              <div className='experienceLine'>
                <div className='experienceTitle'>LOCATION</div>
                <div className='experienceText'>Willmar, MN</div>
              </div>
            </div>

            <div className='characteristics'>
              <div className='aboutPillRow'>
                <AboutPill height={41} width={104}>
                  CARING
                </AboutPill>
                <AboutPill height={41} width={119}>
                  FRIENDLY
                </AboutPill>
                <AboutPill height={41} width={119}>
                  CREATIVE
                </AboutPill>
              </div>
              <div className='aboutPillRow'>
                <AboutPill height={41} width={148}>
                  PASSIONATE
                </AboutPill>
                <AboutPill height={41} width={140}>
                  OPTIMISTIC
                </AboutPill>
              </div>
              <div className='aboutPillRow'>
                <AboutPill height={41} width={164}>
                  HARD WORKER
                </AboutPill>
              </div>
            </div>
          </div>

          <div className='aboutText'>
            <div className='aboutHeader'>ABOUT</div>
            <div className='paragraphText'>
              I've always been worried about people and finding ways to be
              useful, but that's how I am, I never thought that one day I would
              work with something that would involve people.
              <br />
              <br />
              After moving to the United States, I was working as a systems
              technician, that's where I began to notice that I was more
              interested in the user experience and that I was worried about how
              they would react to certain changes in the system and
              applications.
              <br />
              <br />
              Later, a couple of friends asked me to design the workflow and
              experience of their new application idea, in doing so I found
              myself really immersed in those sketches and screens, sometimes
              spending all day on them without realizing it. I remember thinking
              at that time "This is how people should feel about their work;
              excited about what they are doing, enjoying and having passion to
              offer an unforgettable experience."
              <br />
              <br />
              At this time I was quite new in design and after researching what
              careers involved working on prototypes, experiences, user behavior
              and design, I found HCI and with that the UX professional career.
              I bought books, watched videos and did courses on HCI and UX
              design and found it; my passion.
            </div>

            <div className='goalSection'>
              <div className='aboutHeader'>GOALS</div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Deliver good experience</div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>
                  Help people reach their maximum potential
                </div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Always have a welcoming presence</div>
              </div>
            </div>
            <div className='goalSection'>
              <div className='aboutHeader'>FRUSTATIONS</div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>
                  Not being able to communicate correctly with people
                </div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Human behavior</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='otherSection'>
        <div className='otherWrapper'>
          <div className='otherSectionHeader'>
            Who am I besides a UX designer?
          </div>

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
      </div>
    </div>
  );
};

const AboutPill = ({ children = 'Default', height = 40, width = 120 }) => {
  return (
    <div className='aboutPillContainer' style={{ height, width }}>
      <p>{children}</p>
    </div>
  );
};

export default AboutCTA;
