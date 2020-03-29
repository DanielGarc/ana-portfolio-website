import React, { Component } from 'react';
import ProjectOverview from './shared/ProjectOveriew';
import Section from '../shared/Section';
import ImagePopup from '../shared/ImagePopup';

import '../../css/fitStudy.css';

import FitStudy from '../../assets/banner.png';
import avatarTop from '../../assets/top_avatar.svg';
import avatarBottom from '../../assets/bottom_avatar.svg';
import whiteBoard from '../../assets/whiteboard.png';
import dotVoting from '../../assets/dot_voting.png';
import dotVotinghdpi from '../../assets/dot_voting_hdpi.png';
import Wireframe from '../../assets/wireframe_fitstudy.png';
import LowFiDesign from '../../assets/lowfidelity_fitsudy.png';
import ScreenProfile from '../../assets/screen_profile.png';
import User_flow from '../../assets/User_flow.png';
import all_classes from '../../assets/all_classes.png';
import sign_up from '../../assets/sign_up.png';
import add_class from '../../assets/add_class.png';

import designProcess from '../../assets/design_process_fitstudy.png';

const maxpos = 7300;

// const GetScrollPos = () => {
//   useEffect(() => {
//     effect;
//     return () => {
//       cleanup;
//     };
//   }, [input]);
// };

export default class FitnessStudy extends Component {
  prevPos = 0;
  offset = 0;
  timeout = 0;

  constructor(props) {
    super(props);
    this.state = {
      topOffset: parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--navbar-height'
        )
      )
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleLoaded = this.handleLoaded.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleLoaded() {
    this.handleScroll();
    requestAnimationFrame(this.handleLoaded);
  }

  handleScroll(event) {
    let pos = window.scrollY;

    if (this.timeout) cancelAnimationFrame(this.timeout);

    this.timeout = requestAnimationFrame(
      function() {
        let element = document.getElementById('sticky-block');
        let width = element.offsetWidth;
        let left = element.offsetLeft;

        //add or remove class to make text sticky
        if (pos + this.state.topOffset + 40 > element.offsetTop) {
          element.firstElementChild.classList.add('sticky');
          if (width !== 0) {
            element.firstChild.style.width = width + 'px';
            element.firstChild.style.left = left + 'px'; //element.offsetLeft + 'px';
          }

          //calculate how much has been scrolled since last drawn
          if (pos >= maxpos) {
            this.offset += pos - this.prevPos;
          } else {
            this.offset = 0;
          }

          element.firstChild.style.top =
            this.state.topOffset + 40 - this.offset + 'px';
        } else {
          element.firstElementChild.classList.remove('sticky');
        }

        this.prevPos = window.scrollY;
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 'var(--navbar-height)' }}></div>

        <Section sectionColor='#a7dcff' wrapperColor='#a7dcff'>
          <img
            style={{ width: '100%', height: '100%' }}
            alt=''
            src={FitStudy}
          />
        </Section>

        <ProjectOverview
          pbTeam={
            <>
              1 UX designer &
              <br />5 Software developers
            </>
          }
          pbTime={<>5 Weeks</>}
          pbTools={
            <>
              Sketch, Whimsical,
              <br />
              InVision, Paper and pencil
            </>
          }
          oText={
            <>
              Fitness instructors have a lot to work on, not just classes but,
              working with people, with their goals, not only changing their
              body but their minds.
              <br />
              <br />
              This is hard to do when you have to write everything on paper or
              don’t have enough time to work with them personally, or remind
              them all about their classes or their goals.
              <br />
              <br />
              Trainers are looking for something that it can be with them all
              the time, always up to date with what’s going on with their
              clients, and removing that layer of awkwardness to go and ask for
              the payments.
            </>
          }
          oChallenge={
            <>
              How can we build an engaging app that lets trainers and trainees
              manage their workouts and payments.
            </>
          }
          oSolution={
            <>
              An app that will be up to date with what’s going on with their
              clients and send reminders to trainees about payments.
            </>
          }
          designProcessImage={designProcess}
          oBgColor={'#f0f9ff'}
        />
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
          <div className='section-spacer' />
          <div className='data-section-header'>First, data.</div>
          <div className='data-section-sub-header'>
            Don’t assume you know the answer.
          </div>
          <div style={{ display: 'block', margin: '5px 0' }} />
          <div className='data-section-paragraph'>
            <p>
              When I accepted this project <b>I thought I knew</b> what the
              application would look like at the end, or what the product was
              and its needs because I’m a fitness instructor,{' '}
              <b>I was wrong.</b>
            </p>
          </div>
          <div style={{ display: 'block', margin: '8px 0' }} />
          <div className='data-section-paragraph'>
            <p>
              How did I gather information? Great question! I did the following
            </p>
          </div>
          {/* <div style={{ display: 'block', margin: '2px 0' }} /> */}
          <div className='data-section-paragraph'>
            <ul>
              <li>
                <p>
                  I analyze what types of question and what audience I’ll be
                  interviewing.
                </p>
              </li>
              <li>
                <p>
                  Interview with coaches, fitness instructor and people who
                  exercise regularly and not regularly.
                </p>
              </li>
              <p>
                <li>Shadow a couple of colleagues</li>
              </p>
            </ul>
          </div>
          <div className='section-spacer' />
        </Section>
        <Section wrapperColor='#4568DC' sectionColor='#4568DC'>
          <div className='section-spacer' />
          <div className='trainers trainer-icons'>
            <img alt='' className='avatarStyle' src={avatarTop} />
            <div className='trainerBox'>
              <h2> Trainers </h2>
              <div style={{ display: 'block', margin: '11px 0' }} />
              <p>
                “It’s hard to keep up with all the trainees progress.”
                <br />
                “If someone hasn’t pay I don’t like to remind them personally.”
                <br />
                “I have more than one certification and people don’t know them.”
                <br />
              </p>
            </div>
          </div>
          <div className='section-spacer' />

          <div className='trainers trainer-icons'>
            <img alt='' className='avatarStyle' src={avatarBottom} />
            <div className='trainerBox'>
              <h2> Trainees </h2>
              <div style={{ display: 'block', margin: '11px 0' }} />

              <p>
                “The apps that they have used are not engaging.”
                <br />
                “It’s hard for me to finished the programs I start.”
                <br />
                “I don’t want to pay for something that I don’t know if it’s
                going to work.”
                <br />
              </p>
            </div>
          </div>
          <div className='section-spacer' />
        </Section>
        <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
          <div className='section-spacer' />
          <div className='image-text-container'>
            <div className='image-text-left'>
              <div style={{ display: 'block', textAlign: 'center' }}>
                <img src={whiteBoard} alt='' />
                <figcaption style={{ marginTop: '-25px', color: '#fff' }}>
                  Reviewing the persona & her needs
                </figcaption>
              </div>
            </div>
            <div className='image-text-divider' />
            <div className='image-text-right'>
              <h2>We’re ready to target!</h2>
              <div style={{ display: 'block', margin: '1px 0' }} />
              <h3>From a huge amount of data to target ideas.</h3>
              <div style={{ display: 'block', margin: '12px 0' }} />
              <p>
                After analyzing the data gathered from surveys, interviews,
                shadowings, I started building the personas and creating the
                user journey map.
                <br />
                <br />
                By doing the previous I got a more define idea of the main
                targets, it also helped me to always keep in mind the user’s
                needs and goals. Whenever I got stuck in the user flow I always
                went back and re-read it.
                <br />
                <br />
                In the creation of the user flow the main differences between
                trainer and trainees was their authority.
                <br />
              </p>
            </div>
          </div>
        </Section>
        <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
          <div className='section-spacer' />
          <div className='workshop-p2'>
            <h2>Workshop</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />
            <h3>Who doesn’t love good ideas?</h3>
            <div style={{ display: 'block', margin: '12px 0' }} />
            <p>
              One of the things I like to do the most is generating ideas with a
              team, for this workshop, I asked a couple of colleagues to help me
              with some exercises because I wanted to know how they would tackle
              the problems in their own way. I explained the purpose of this
              app, the challenge and lay down the problems found in our target
              audience. I wrote down the problems on top of the board so
              everyone could have a vision of the problems and started
              generating ideas, after a couple of minutes we stop and did dot
              voting.
            </p>
            <div className='section-spacer' style={{ display: 'flex' }} />
            <div className='workshop-p2-dotimg-container'>
              <ImagePopup
                modalImg={dotVotinghdpi}
                img={dotVoting}
                imgWidth='80%'
                altImg='dot voting'
                altModalImg='dot voting large super large'
              />
              <figcaption>ideas generation and dot voting</figcaption>
            </div>
            <div className='section-spacer' style={{ display: 'flex' }} />

            <p>
              While creating all these ideas my colleagues kept asking questions
              that I didn’t think of or didn’t question the “why” of some of the
              problems. <b>We went back to Discovery and Define</b> to review
              them again, we compare them with the workshop ideas and modified
              the user flow.
            </p>
            <div className='section-spacer' />
            <ol className='workshop-p2-list'>
              <li className='workshop-p2-list-item'>“Does that make sense?“</li>
              <li className='workshop-p2-list-item'>
                “Let me check on the data from the interviews”
              </li>
              <li className='workshop-p2-list-item'>
                “Ok, one interviewer mentioned that but the other four don’t,
                that’s not a pattern let’s dig on the market and do a quick
                analysis in which companies have features like that and check
                the reviews”
              </li>
              <li className='workshop-p2-list-item'>
                “Okay, based on that market analysis, I’m adding that feature”
                (rewarding the trainees)
              </li>
            </ol>
          </div>
          <div className='section-spacer' />
          <div className='user-flow-img-container'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={User_flow}
              alt='user flow'
            />
          </div>
          <figcaption>User flow</figcaption>
          <div className='section-spacer' />
        </Section>
        <Section sectionColor='#fff' wrapperColor='#fff'>
          <div className='section-spacer' />
          <div className='user-flow-img-container'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={Wireframe}
              alt='wireframe'
            />
            <figcaption>
              Quick wireframes of our ideas and putting them into a flow
            </figcaption>
          </div>
          <div className='section-spacer' />
          <div className='user-flow-img-container'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={LowFiDesign}
              alt='Low fidelity design'
            />
            <figcaption>Low fidelity designs</figcaption>
          </div>

          <div className='section-spacer' />
        </Section>
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF' wrap>
          <div className='section-spacer' />
          <div className='image-text-container'>
            <div className='image-text-left'>
              <div className='section-spacer' />
              <h2>The Rightful Stakeholder</h2>
              <div style={{ display: 'block', margin: '1px 0' }} />
              <h3>User testing...</h3>
              <div style={{ display: 'block', margin: '6px 0' }} />
              <p>
                One funny thing is that happened during user testing is that
                users really liked the feature about rewarding them after
                completing a challenge or goal.
                <br />
                <br />
                This idea was brought on the workshop as a form of engaging more
                with users and their network, I went back to Discovery and
                Define to verify if it was worthed to add.
                <br />
                <br />
                How it works it’s that you gain a new charm with every challenge
                or goal completed and the new charm will appear at the top of
                your screen, the charms will be saved in your profile collection
                and you can change them if you would like to.
                <br />
                <br />
                And I said it’s funny because I thought I was the expert on the
                topic and that little detail might be obvious for others but not
                for me, it wasn’t obvious until real users interacted with it,
                that’s why the user interviews are really important.
                <br />
              </p>
            </div>
            <div className='image-text-divider' />

            <div className='image-text-right'>
              <img src={ScreenProfile} alt='Profile screen' />
            </div>
          </div>
        </Section>

        <Section
          sectionColor='#F0F9FF'
          wrapperColor='#F0F9FF'
          align={'flex-start'}
        >
          <div className='section-spacer' />
          <div className='image-text-container wrap-reverse'>
            <div className='image-text-left'>
              <img src={sign_up} alt='sign up' />
              <img src={all_classes} alt='all classes' />
              <img src={add_class} alt='Add classes' />
            </div>
            <div className='image-text-divider'></div>
            <div id='sticky-block' className='image-text-right'>
              <div>
                <div style={{ display: 'block', margin: '40px 0' }} />
                <h2>Feature freeze</h2>
                <div style={{ display: 'block', margin: '1px 0' }} />

                <h3>Is it ready to launch?.</h3>
                <div style={{ display: 'block', margin: '12px 0' }} />

                <p>
                  Once I got all the ideas and features set, I began iterating
                  between wireframing and the user flow. After we stop making
                  changes to the user flow I started to create the low fidelity
                  design in whimsical to not enter into details of the
                  pixel-perfect design. Having all the low fidelity designs I
                  carefully worked to transform them into High-fidelity designs
                  in Sketch.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section sectionColor='#4568DC' wrapperColor='#4568DC'>
          <div style={{ display: 'block', margin: '27px 0' }} />

          <div className='trainers'>
            <div className='trainerBox'>
              <h2> Conclusion </h2>
              <h3>Never assume you know all the perspectives</h3>
              <div style={{ display: 'block', margin: '12px 0' }} />

              <p>
                Working in this project has made me more aware of the importance
                of looking at things with new eyes, and how doing minimal things
                like; invite colleagues and stakeholders to take a look of your
                research of the things discovered and really HEAR THEM OUT, and
                verify those ideas with the market. It changes the way of seeing
                the information because when you heard a new idea is a new
                perspective, and sometimes we do not realize that it can be a
                better experience until you research and test that idea.
              </p>
            </div>
          </div>

          <div style={{ display: 'block', margin: '35px 0' }} />
        </Section>
      </div>
    );
  }
}
