import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../shared/Section';
import ProjectOverview from './shared/ProjectOveriew';

import BannerImage from '../../assets/se-banner.png';
import DesignProcess from '../../assets/se-design-process.png';
import Stakeholder from '../../assets/se-stakeholder.png';
import CompAnalisys from '../../assets/se-companalisys.png';
import BusinessOwner from '../../assets/se-businessowner.svg';
import Talent from '../../assets/se-talent.svg';
import NewScreen from '../../assets/se-newscreen.png';
import OldLanding from '../../assets/se-oldlandingpage.png';
import UserFlow from '../../assets/se-userflow.png';
import LandingPage from '../../assets/se-landingpage.png';
import LandingPageRedesign from '../../assets/se-landingpageredesign.png';
import BusinessOwner1 from '../../assets/se-businessowner1.svg';
import ProgressHistory from '../../assets/se-progresshistory.png';
import ProgressAfter from '../../assets/se-progressafter.png';
import Talent1 from '../../assets/se-talent1.svg';
import PaymentsBefore from '../../assets/se-paymentsbefore.png';
import PaymentsAfter from '../../assets/se-paymentsafter.png';
import arrow from '../../assets/arrow-right.png';

import '../../css/solveEmplyment.css';

const SolveEmploymentStudy = () => {
  return (
    <>
      <div style={{ marginTop: 'var(--navbar-height)' }}></div>
      <Section sectionColor='#039CB9' wrapperColor='#039CB9'>
        <img
          src={BannerImage}
          alt='Solve Employment Banner'
          style={{ width: '100%', height: '100%' }}
        />
      </Section>
      <ProjectOverview
        pbTeam={<>6 UX designers</>}
        pbTime={<>2 Weeks</>}
        pbTools={
          <>
            Figma, zoom,
            <br />
            User Testing
          </>
        }
        oText={
          <>
            Solve Employment is a CRM platform that helps people in Southeast
            Asia find internships, microtasks, job opportunities. The platform
            enables talents to upload the documents for those opportunities
            online as well as receive payment for their services.
            <br />
            <br />
            Collaborated with a team of 6 designers to conduct a usability test
            and improve the user’s experience of Solve Employment. We work with
            stakeholder interviews, competitive research, rapid ideation,
            low-fidelity wireframes, high-fidelity design, user testing and
            multiple design interactions in two weeks to figure out what the
            problems were and try to solve them.
          </>
        }
        oChallenge={
          <>
            Collaborate with 6 designers to improve the user’s experience, this
            platform had a serious signup problem.
          </>
        }
        oSolution={
          <>
            Incorporate steps on the landing page for the onboarding, and give a
            quick, simple way to sign up as hirer or talent.
          </>
        }
        designProcessImage={DesignProcess}
        oBgColor={'#FFF'}
      />
      <Section wrapperColor='#fff' sectionColor='#fff'>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Stakeholders interview</h2>
          <h3>Getting to know the product, brand, and purpose.</h3>
          <p>
            The project started with a kickoff meeting with the head of the user
            experience, software development, and the CEO, to learn more about
            their business, their goals, and purpose for the product, the main
            issue they presented was users not completing their signup process
            and understanding the job’s payment and process.
          </p>
          <div className='section-spacer flex' />
          <div>
            <img
              src={Stakeholder}
              alt='Stake holder'
              style={{ width: '100%', height: '100%' }}
            />
            <figcaption>
              We interacted with stakeholder and the team through zoom
            </figcaption>
          </div>
          <div className='section-spacer flex' />
          <h2>Avoiding chaos</h2>
          <h3>6 designers working on a new project for the first time.</h3>
          <p>
            We decided to use our first day to learn a bit about each other, how
            do we work, give roles and divide to conquer this redesign. We voted
            on the facilitator, created a Trello board with the process and
            things to get done, a drive folder for resources and the Figma
            environment. We divided into 2 main groups one for the hirer and the
            other for talent and began with a heuristic analysis of the web
            application to have a base line to compare with other competitors.
          </p>
          <div className='section-spacer flex' />
          <div>
            <img
              src={CompAnalisys}
              alt='Competitive Analisys'
              style={{ width: '100%', height: '100%' }}
            />
            <figcaption>Competitive analisys</figcaption>
          </div>
          <div className='section-spacer flex' />
          <h2>Create a test plan</h2>
          <h3>
            If the stakeholders already knew the problems we needed to dig
            deeper.
          </h3>
          <p>
            We wrote down all the issues presented and started analyzing the web
            application and started working on the proto-personas based on the
            focus the stakeholders wanted and started analyzing the website to
            prep for interviews. We started with 3 scheduled interviews to
            confirmed the problems with questions lik you observe below.
          </p>
        </div>
        <div className='section-spacer flex' />
      </Section>
      <Section sectionColor='#1677D1' wrapperColor='#1677D1'>
        <div className='section-half-space' />
        <h1 style={{ color: '#fff' }}>Questions asked to the primary users </h1>
        <div className='section-half-space' />
        <div className='col-container flex-start white no-margin left width-1'>
          <div className='col'>
            <img src={BusinessOwner} alt='Business avatar' />
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <h2>Business owner</h2>
            <div style={{ marginBottom: '10px' }}></div>

            <h3>
              Where can you create an account and start contacting people?
            </h3>
            <p>“I’m not sure if I’m in the right page”</p>
            <div style={{ marginBottom: '8px' }}></div>
            <h3>
              Where can you see the progress of the project you assigned to a
              talent?
            </h3>
            <p>
              “It’s a little overwhelming with all the options so I’ll search on
              the profile to see if I have any active projects”
            </p>
          </div>
        </div>
        <div className='section-half-space' />
        <div className='col-container flex-start white no-margin left width-1'>
          <div className='col'>
            <img src={Talent} alt='Talent avatar' />
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <h2>Talent</h2>
            <div style={{ marginBottom: '10px' }}></div>
            <h3>Where can you signup and apply for a job?</h3>
            <p>
              "I tried to sign up but it took me to a spam page to download a
              game"
            </p>
            <div style={{ marginBottom: '8px' }}></div>

            <h3>Can you go to your payment?</h3>
            <p>“It’s a little confusing on the wording”</p>
          </div>
        </div>
        <div className='section-spacer'></div>
      </Section>
      <Section sectionColor='#fff' wrapperColor='#fff'>
        <div className='section-spacer' />
        <div className='left width-1 sx-margin'>
          <h2>Hands-on the sketches</h2>
          <h3>Main problems discovered, how are we going to approach it?</h3>
          <p>
            With the results of the interviews on our hands, we started to work
            on a user journey map, did a competitive analysis of the business
            shown below and the low fidelity designs with possible solutions for
            the users based on the user interviews and key founds on the
            competitive analysis. We created a couple of iterations on the main
            ones and prepare for testing again.
          </p>
        </div>
        <div className='section-spacer' />
        <div className='width-3 sx-margin'>
          <img
            src={NewScreen}
            alt='New screen mockup'
            style={{ width: '100%', height: '100%', position: 'relative' }}
          />
          <figcaption style={{ marginTop: '-50px' }}>
            New screen created to diffirenciate who are you
          </figcaption>
          <div className='section-spacer' />
          <img
            src={OldLanding}
            alt='New screen mockup'
            style={{ width: '100%', height: '100%', marginTop: '-3px' }}
          />
          <figcaption style={{ marginTop: '0px' }}>
            Landing page before redesign
          </figcaption>
        </div>
        <div className='section-spacer flex' />
        <div className='width-1 left sx-margin'>
          <h2>Key founds</h2>
          <h3>Problems in the flow</h3>
          <p>
            There was a serious problem with the way they explained how to log
            in as a talent, stakeholders explained to us that’s how students
            could verify they knew English. Once they got to a certain level in
            the game, that meant they could communicate in English and find a
            matching job, our challenge change to finding a way to explain
            better the connection with the game and that the verification
            through it.
          </p>
        </div>
        <div className='section-spacer' />
        <div className='width-3 sx-margin'>
          <img
            src={UserFlow}
            alt='User flow'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#1677D1' wrapperColor='#1677D1'>
        <div className='section-spacer' />
        <div className='width-1 left white sx-margin'>
          <h2>Landing page before redesign</h2>
          <div className='section-half-space' />
          <img
            style={{ width: '100%', height: '100%' }}
            src={LandingPage}
            alt='Landing page before redesign'
          />
          <div className='section-spacer' />
          <h2>Landing page after redesign</h2>
          <div className='section-half-space' />
          <img
            style={{ width: '100%', height: '100%' }}
            src={LandingPageRedesign}
            alt='Landing page after redesign'
          />
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fff' wrapperColor='#fff'>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>User interviews don’t lie </h2>
          <h3>Test, Iterate and deliver</h3>
          <p>
            Once we had a working prototype we started with user interviews, we
            received feedback on the sidebar, modified and tested it again until
            the interviewers weren’t confused with the flow and the screens
            showed.
            <br />
            <strong style={{ marginTop: '4px' }}>
              Here are some highlighted teststestimonies from our users after
              the redesing:
            </strong>
          </p>
        </div>
        <div className='section-half-space flex-start'></div>
        <div className='col-container flex-start no-margin left width-1'>
          <div className='col'>
            <img src={BusinessOwner1} alt='Talent avatar' />
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <h2>Business owner</h2>
            <div style={{ marginBottom: '10px' }}></div>
            <h3>
              “It’s more clear now that I can see, my active jobs and I can open
              it and see where the project is, when was updated and what is left
              to do on it”
            </h3>
          </div>
        </div>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Progress of status before redesign </h2>
          <div className='section-half-space'></div>
          <img
            src={ProgressHistory}
            alt='Progress History'
            style={{ width: '100%', height: '100%' }}
          />

          <div className='section-spacer' />
          <div className='section-spacer' />
          <h2>Progress of status after redesign</h2>
          <div className='section-half-space'></div>

          <img
            src={ProgressAfter}
            alt='Progress History'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='section-spacer' />
        <div className='col-container flex-start no-margin left width-1'>
          <div className='col'>
            <img src={Talent1} alt='Talent avatar' />
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <h2>Talent</h2>
            <div style={{ marginBottom: '10px' }}></div>
            <h3>
              “I love the new payments look! I can see my balance, the total
              gains and also my payment history, I could also see it on the
              other design but this way is more clearer”
            </h3>
          </div>
        </div>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Payments before redesign</h2>
          <div className='section-half-space'></div>
          <img
            src={PaymentsBefore}
            alt='Payments page before'
            style={{ width: '100%', height: '100%' }}
          />
          <div className='section-spacer' />
          <div className='section-spacer' />
          <h2>Payments after redesign</h2>
          <div className='section-half-space'></div>

          <img
            src={PaymentsAfter}
            alt='Payments page after'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Conclusion</h2>
          <h3>Stakeholder has the data</h3>
          <p>
            We presented our discoveries and our proposal on how to solve the
            problems we encounter in our user research in time, the stakeholder
            liked our idea and found insightful the data we shared. They
            approved the design and told us they were going to move forward with
            our design and start developing it.
          </p>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section wrapperColor='#243342' sectionColor='#243342'>
        <div className='section-spacer' />
        <div
          className='col-container project-selector sx-margin'
          style={{ width: '100%' }}
        >
          <div>
            <Link to={{ pathname: '/airbnb' }}>
              <img
                style={{ transform: 'rotate(180deg)', marginRight: '8px' }}
                src={arrow}
                alt='Previous Case Study'
              />
              Price my Airbnb
            </Link>
          </div>
          <div
            className='project-selector-b'
            style={{ color: '#CCEBFF', textTransform: 'uppercase' }}
          >
            Browse other projects
          </div>
          <div>
            <Link to={{ pathname: '/fitstudy' }}>
              Anywhere Fitness
              <img
                style={{ marginLeft: '8px' }}
                src={arrow}
                alt='Previous Case Study'
              />
            </Link>
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
    </>
  );
};

export default SolveEmploymentStudy;
