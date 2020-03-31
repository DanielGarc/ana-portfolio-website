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

            {/* <div className='experience'>
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
            </div> */}

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


              <div className='goalSectionF'>
              <div className='aboutHeader'>GOALS</div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Deliver good experience.</div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>
                  Help people reach their maximum potential.
                </div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Always have a welcoming presence.</div>
              </div>
            </div>

            
            </div>
          </div>

          <div className='aboutText'>
            <div className='aboutHeader'>ABOUT</div>
            <div className='paragraphText'>
            I've always been worried about people and finding ways to be useful because that's who I am. 
            I've always dreamed about helping change the world but never thought I would actually have a chance of being a part of it.

              <br />
              <br />
              AWhen I moved to the United States, I started working for a local company as a Systems’ Technician. 
              I began to notice that I was far more interested in the user experience and that I was worried 
              about how the users I work with would react to changes in the system and applications.


              <br />
              <br />
              In the meantime, a couple of friends asked me to design the workflow and experience of their new 
              application idea. In doing so I found myself really immersed in those sketches and screens, 
              sometimes spending all day on them without realizing it. I remember thinking at that time, 
              "This is how people should feel about their work: excited about what they are doing, feeling like somehow you're doing something to change the world for better."

              <br />
              <br />
              At this time I was quite new in the design world and I started researching which careers were 
              involved in the working of prototypes, experiences, user behavior, and design. That's when I 
              found HCI and with that my path to UX. I bought books, watched videos, and did courses on HCI and UX design and finally found it: my passion.

              <br />
              <br />
              I am excited for what the future holds for me and for the next projects I will be able to work on. 
              I consider myself an extraordinarily hard-working and passionate person and I am committed to 
              continue getting experience in UX. I will do everything I can to contribute with my team to get 
              the best result of whatever we are set out to do.

            </div>
            <div className='section-spacer' />
            <div className='section-spacer' />
        


            <div className='goalSection'>
              <div className='aboutHeader'>FRUSTATIONS</div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>
                  Not being able to communicate needs correctly.
                </div>
              </div>
              <div className='goals'>
                <div className='goalCircleBullet' />
                <div className='goalText'>Human behavior.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='otherSection'>
        <div className='otherWrapper'>
          <div className='otherSectionHeader'>
        <div className='section-spacer' />
            Who am I besides a UX designer?
            <div className='section-spacer' />
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
            <div className='section-spacer' />
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
