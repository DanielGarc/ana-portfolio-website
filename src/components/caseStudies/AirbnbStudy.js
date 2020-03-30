import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../shared/Section';
import ProjectOverview from './shared/ProjectOveriew';
import ImagePopup from '../../components/shared/ImagePopup';

import BannerImage from '../../assets/banner_airbnb.png';
import DesignProcess from '../../assets/design_cycle_airbnb.png';
import DavidComment from '../../assets/airbnb-david.svg';
import GalenComment from '../../assets/airbnb-galen.svg';
import MeganComment from '../../assets/airbnb-megan.svg';
import BriannaComment from '../../assets/airbnb-brianna.svg';
import ScottComment from '../../assets/airbnb-scott.svg';
import RateChange from '../../assets/airbnb-rate-change.png';
import ToolUsed from '../../assets/airbnb-tool-used.png';
import Braingstorming1 from '../../assets/airbnb-brainstorming1.png';
import Braingstorming2 from '../../assets/airbnb-brainstorming2.png';
import Braingstorming3 from '../../assets/airbnb-brainstorming3.png';
import Braingstorming4 from '../../assets/airbnb-brainstorming4.png';
import LowFi1 from '../../assets/airbnb-low-fi-first.png';
import LowFi2 from '../../assets/airbnb-low-fi-second.png';
import HiFi from '../../assets/airbnb-finalproduct.png';
import UI1 from '../../assets/airbnb-ui1.png';
import UI2 from '../../assets/airbnb-ui2.png';
import Hifi1 from '../../assets/airbnb-hifi1.png';
import Hifi2 from '../../assets/airbnb-hifi2.png';
import Hifi3 from '../../assets/airbnb-hifi3.png';
import Hifi4 from '../../assets/airbnb-hifi4.png';
import Hifi5 from '../../assets/airbnb-hifi5.png';
import arrow from '../../assets/arrow-right.png';

import '../../css/airbnbStudy.css';

const AirbnbStudy = () => {
  return (
    <>
      <div style={{ marginTop: 'var(--navbar-height)' }}></div>
      <Section sectionColor='#FFE5E5' wrapperColor='#FFE5E5'>
        <img
          style={{ width: '100%', height: '100%' }}
          alt=''
          src={BannerImage}
        />
      </Section>
      <ProjectOverview
        pbTeam={
          <>
            2 UX designer, 3 Data scientists
            <br /> & 4 Software developers
          </>
        }
        pbTime={<>8 Weeks</>}
        pbTools={
          <>
            Figma, Usabilityhub, <br />
            InVision, Paper and pencil
          </>
        }
        oText={
          <>
            We discovered a need for a tool that will help Airbnb hosts figure
            out how they should be pricing their house.
            <br />
            <br />
            Airbnb hosts don’t know how much should they list their unit to
            remain competitive while maximizing their profits, this platform
            allows to evaluate the price of their properties, find ways to
            increase the value of their properties and know when/how to adjust
            the price to events/seasons/holidays.
          </>
        }
        oChallenge={
          <>
            As an Airbnb host, how much should I list my unit for to remain
            competitive while maximizing my profits?
          </>
        }
        oSolution={
          <>
            Evaluate the price of their properties, find ways to increase their
            value based on algorithms.
          </>
        }
        designProcessImage={DesignProcess}
        oBgColor={'#fffafa'}
      />
      <Section sectionColor='#fffafa' wrapperColor='#fffafa' align={'center'}>
        <div className='section-spacer' />
        <div className='col-container width-2 sx-margin'>
          <div className='col user-disc-text left'>
            <h2>Discovering the user</h2>
            <h3>“How difficult can it be to give the optimal price?”</h3>
            <p>
              We got the project and in our first meeting, we were like, this
              project is going to be easy, the answer is in the problem, the
              users just need to have the optimal price, and we all believe it
              until we created a survey and submitted to the target audience.
              <br />
              <br />
              <strong>OH BOY… </strong>The results came back and we had to
              consider more aspects that we didn’t think of them on the begging,
              we didn’t just need to give the optimal price, the users wanted
              something manageable, something that will tell them when are the
              high seasons, What is the range of prices they could price their
              Airbnb.
            </p>
          </div>
          <div className='col'>
            <img src={DavidComment} alt='David Comment' />
            <div className='section-half-space' />
            <img src={GalenComment} alt='Galen Comment' />
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fff' wrapperColor='#fff'>
        <div className='section-spacer' />
        <div className='sx-margin'>
          <h2>How often did you change your rates?</h2>
        </div>
        <div style={{}}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={RateChange}
            alt='How often did you change your rates?'
          />
        </div>
        <div className='section-half-space' />
        <h2>Which tool have you used to determine your price?</h2>
        <div>
          <img
            // style={{ margin: 'auto', width: '100%', height: '100%' }}
            src={ToolUsed}
            alt='How often did you change your rates?'
            style={{ width: '100%', height: '100%', maxWidth: '80vw' }}
          />
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fffafa' wrapperColor='#fffafa' align={'center'}>
        <div className='section-spacer' />
        <div className='col-container width-2'>
          <div className='col unexp-data-img'>
            <img src={MeganComment} alt='Megan Comment' />
            <img src={BriannaComment} alt='Brianna Comment' />
            <img src={ScottComment} alt='Scott Comment' />
          </div>
          <div className='col unexp-data-text'>
            <h2>Unexpected data</h2>
            <h3>
              The hosts want to know what their guests want... does it sound
              familiar?
            </h3>
            <p>
              Yes! An unexpected path was detected, the hosts wanted to know
              what the guests value the most, that they will be willing to pay
              more.
              <br />
              <br />
              We created another survey, now it was sent to all the people who
              had used Airbnb before, the results were quite simple, depending
              on the reason of visit will vary from what they will be willing to
              pay more, on average, they all wanted a clean apartment with all
              the amenities.
            </p>
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#FF5B5E' wrapperColor='#FF5B5E' align={'center'}>
        <div className='section-spacer' />
        <div className='market width-1 left sx-margin'>
          <h2>A better idea of what we’re building</h2>
          <h3>What is the market doing?</h3>
          <p>
            After reviewing all the data and narrowing down the problems, we
            started the creation of personas and defining which of the problems
            were solved with our direct competition by doing a competitor
            analysis.
          </p>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fffafa' wrapperColor='#fffafa' align={'center'}>
        <div className='section-spacer' />
        <div className='col-container width-2'>
          <div className='col brainstorming-left left'>
            <h2>Brainstorming</h2>
            <h3>Teamwork at it’s fullest by involving everyone of the team.</h3>
            <p>
              Now the best and my favorite part, we got together (Web
              Developers, Data Scientist, and UX designers) to talk about the
              user’s problems, the feedback we got, and what was possible to
              build under the timeline we had.
            </p>
            <div className='section-spacer' />

            <img src={Braingstorming2} alt='Brainstorming' />
          </div>
          <div className='col brainstorming-img'>
            <div className='brainstorming-right left'>
              <img src={Braingstorming1} alt='Brainstorming' />
              <div className='section-spacer' />
              <p>
                Like you see below we created a board with each problem and each
                member of the group wrote a possible solution, everyone was
                encouraged to write an idea, even if they thought was dumb or
                silly.
                <br />
                <br />
                After each one wrote their ideas we all voted on the top 3
                post-it ideas on each problem, later we debated and discussed
                which of the problems were possible to build under the timeline
                we had based on the ideas written.
              </p>
            </div>
          </div>
        </div>
        <div className='section-spacer' />
        <div className='width-3 sx-margin'>
          <ImagePopup
            modalImg={Braingstorming3}
            img={Braingstorming3}
            altImg='dot voting'
            altModalImg='dot voting large super large'
          />
          <figcaption>ideas generation and dot voting</figcaption>
        </div>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Brainstorming or workshop?</h2>
          <h3>
            The plan was to sketch the ideas selected on the brainstorming
            section
          </h3>
          <p>
            We started sketching while reviewing the ideas selected to create a
            ‘perfect flow’ that felt more harmonious but everyone was so
            enthusiastic about the solutions that we created different scenarios
            in which users would take different routes. In the end, we selected
            the best suitable solutions for the timeline.
          </p>
        </div>
        <div className='section-spacer' />

        <div className='width-3 sx-margin'>
          <ImagePopup
            modalImg={Braingstorming4}
            img={Braingstorming4}
            altImg='dot voting'
            altModalImg='dot voting large super large'
          />
          <figcaption>Sketches produced in the Brainstorming</figcaption>
        </div>
        <div className='section-spacer' />

        <div className='width-1 left sx-margin'>
          <h2>A serious pivot…</h2>
          <h3>Not kidding almost at the end of our deadline</h3>
          <p>
            We followed the steps, we did everything right, we created a low
            fidelity flow and tested it with the users, they were excited and we
            received such positive feedback but… PIVOT! Our Data Scientist
            approached us and explained that they did not consider something in
            their model and that our "optimal price" was not going to be an
            option if we wanted to deliver on time.
          </p>
        </div>
        <div className='section-spacer' />
        <div className='col-container width-2'>
          <div className='col'>
            <img src={LowFi1} alt='Low Fidelity Design' />
            <figcaption>First low-fi tested with possitive feedback</figcaption>
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <img src={LowFi2} alt='Low Fidelity Design' />
            <figcaption>
              Second low-fi tested with the modifications for the pivot
            </figcaption>
          </div>
        </div>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>What happened next?</h2>
          <h3>We kept working, we worked even harder</h3>
          <p>
            Do you remember when I told you earlier that
            <strong> we created different user’s flow </strong>in the
            brainstorming? Well, I’m glad we did because we had to tweak a few
            things to change our main focus (optimal price) to calculate the
            average prices and compare your listing to similar listings.
          </p>
        </div>
        <div className='section-spacer' />
        <ImagePopup
          modalImg={HiFi}
          img={HiFi}
          altImg='dot voting'
          altModalImg='dot voting large super large'
        />
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>User Testing</h2>
          <h3>But was it good?</h3>
          <p>
            We conducted a couple of A/B testing to have a better idea of what
            UI was better for our audience. In the beginning, it was pretty
            close but then was a huge difference so we decided to go for a look
            more similar to Airbnb to have a better transition between
            platforms.
          </p>
        </div>
        <div className='section-spacer' />
      </Section>
      <div className='special-section'>
        <div className='col-container  width-2 sx-margin'>
          <div className='col left'>
            <h2>61% of users</h2>
            <h2>chose this UI</h2>
            <h3> </h3>
            <p>
              “Less pictures all at once. There was too much to look at in the
              other design. Just a bit overwhelming.”
            </p>
          </div>
          <div className='col'>
            <img src={UI1} alt='Final UI 1' />
          </div>
        </div>
      </div>
      <div style={{ height: '4vw', backgroundColor: '#fffafa' }} />
      <div className='special-section'>
        <div className='col-container  width-2 sx-margin'>
          <div className='col'>
            <img src={UI2} alt='Final UI 2' />
          </div>
          <div className='col right'>
            <h2>39% of users</h2>
            <h2>chose this UI</h2>
            <h3> </h3>
            <p>“I can see more images”</p>
          </div>
        </div>
      </div>
      <div style={{ height: '4vw', backgroundColor: '#fffafa' }} />
      <Section sectionColor='#fffafa' wrapperColor='#fffafa'>
        <div className='width-1 left sx-margin'>
          <h2>Happy ending?</h2>
          <h3>The final result of the experience</h3>
          <p>
            Overall the users were satisfied with our features and experience,
            we tested the application and even though the users weren’t as
            amazed as they were with the first feature prototype, we got
            feedback on what else they would like to see in future releases
            besides what they saw in this one, for example, they were happy with
            the comparison but they would like to see a quick view of the
            listing that is being compared to.
          </p>
        </div>
      </Section>
      <div className='section-spacer' />

      <Section wrapperColor='#FFE5E5' sectionColor='#FFE5E5'>
        <div className='section-spacer' />

        <div className='col-container width-2'>
          <div className='col'>
            <img src={Hifi1} alt='Hi Fi Landing Page' />
            <div className='section-half-space' />
            <img src={Hifi2} alt='Hi Fi Listing' />
          </div>
          <div className='col-divider'></div>
          <div className='col'>
            <div>
              <img
                style={{ maxWidth: '100%' }}
                src={Hifi3}
                alt='Hi Fi Sign in'
              />
            </div>
            <div className='section-half-space' />

            <div>
              <img
                style={{ maxWidth: '100%' }}
                src={Hifi4}
                alt='Hi Fi Sign in'
              />
            </div>
            <div className='section-half-space' />

            <div>
              <img
                style={{ maxWidth: '100%' }}
                src={Hifi5}
                alt='Hi Fi Sign in'
              />
            </div>
          </div>
        </div>
        <div className='section-spacer' />
      </Section>
      <Section sectionColor='#fffafa' wrapperColor='#fffafa'>
        <div className='section-spacer' />
        <div className='width-1 left sx-margin'>
          <h2>Take aways</h2>
          <h3 style={{ margin: '16px 0 0 0' }}>
            1. You have timeline. Respect it
          </h3>
          <h3 style={{ margin: 0 }}> 2. Testing is never what you think. </h3>
          <h3 style={{ margin: 0 }}>
            3. A good team relationship is important
          </h3>
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
            <Link to={{ pathname: '/fitstudy' }}>
              <img
                style={{ transform: 'rotate(180deg)', marginRight: '8px' }}
                src={arrow}
                alt='Previous Case Study'
              />
              Anywhere Fitness
            </Link>
          </div>
          <div
            className='project-selector-b'
            style={{ color: '#CCEBFF', textTransform: 'uppercase' }}
          >
            Browse other projects
          </div>
          <div>
            <Link to={{ pathname: '/solve' }}>
              Solve Employment
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

export default AirbnbStudy;
