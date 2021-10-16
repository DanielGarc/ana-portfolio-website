import React from "react";

import "../../css/aboutPage.css";

import AboutImage from "../../assets/Image.png";
import Hiker from "../../assets/hiker.png";
import Instructor from "../../assets/instructor.png";
import Dog from "../../assets/dog.png";
import Runner from "../../assets/runner.png";

const AboutCTA = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutContent">
        <div className="topWrapper">

        <div className="aboutName">Ana Rosa Lerma</div>
        <div className="aboutSection">
          <div className="aboutGraphics">
            <div className="aboutPic">
              <img alt="Profile pic" src={AboutImage} />
            </div>
{/* 
            <div className="picSubtitle">
              "Caring deeply to create better experiences"
            </div>
 */}
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
            <div className="cliftonStrenghts">Clifton Strenghts®</div>
            <div className="characteristics">
              <div className="aboutPillRow">
                <AboutPill height={41} width={80}>
                  Woo
                </AboutPill>
                <AboutPill height={41} width={119}>
                  Positivity
                </AboutPill>
                <AboutPill height={41} width={150}>
                  Connectedness
                </AboutPill>
              </div>
              <div className="aboutPillRow">
                <AboutPill height={41} width={148}>
                  Includer
                </AboutPill>
                <AboutPill height={41} width={140}>
                  Developer
                </AboutPill>
              </div>
            </div>
          </div>

          <div className="aboutText">
            <div className="aboutHeader">About</div>
            <div className="paragraphText">
              Welcome to a peak to Ana Rosa's 'about' let's start by saying that
              one of the reasons why she works in the helping industry
              (user/product designer) is because she believes we can always do
              better if we care enough to do it.
              <br />
              <br />
              Her work history starts as web designer for a couple years then
              trying a more IT position and having an Ah-ha moment and decided
              to focus on the interaction between human-computer design.
              <br />
              <br />
              Currently working on USAA focusing on native and .com projects.
            </div>
            <div className="goalSectionF">
              <div className="aboutHeader">Goals</div>
              <div className="goals">
                <div className="goalCircleBullet" />
                <div className="goalText">Deliver good experience.</div>
              </div>
              <div className="goals">
                <div className="goalCircleBullet" />
                <div className="goalText">
                  Help people reach their maximum potential.
                </div>
              </div>
              <div className="goals">
                <div className="goalCircleBullet" />
                <div className="goalText">
                  Always have a welcoming presence.
                </div>
              </div>
            </div>

            {/* <div className="section-spacer" />
            <div className="section-spacer" />
 */}
            <div className="goalSection">
              <div className="aboutHeader">Frustations</div>
              <div className="goals">
                <div className="goalCircleBullet" />
                <div className="goalText">
                  Not being able to communicate needs correctly.
                </div>
              </div>
              <div className="goals">
                <div className="goalCircleBullet" />
                <div className="goalText">Human behavior.</div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>

      <div className="otherSection">
        <div className="otherWrapper">
          <div className="otherSectionHeader">
            <div className="section-spacer" />
            Who am I besides a UX designer?
            <div className="section-spacer" />
          </div>

          <div className="hobbies">
            <div className="myHobby">
              <img alt="" src={Hiker} />
              <p> Hiker </p>
            </div>

            <div className="myHobby">
              <img alt="" src={Instructor} />
              <p> Fitness Instructor </p>
            </div>

            <div className="myHobby">
              <img alt="" src={Dog} />
              <p> Ghost's Mom </p>
            </div>

            <div className="myHobby">
              <img alt="" src={Runner} />
              <p> Runner </p>
              <div className="section-spacer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPill = ({ children = "Default", height = 40, width = 120 }) => {
  return (
    <div className="aboutPillContainer" style={{ height, width }}>
      <p>{children}</p>
    </div>
  );
};

export default AboutCTA;
