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

export default class FitnessStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticking: false,
      sticky: false,
      topOffset: parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--navbar-height'
        )
      )
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let pos = window.scrollY;

    // if (!this.state.ticking) {
    //wait for the animation frame to avoid overflowing with operations
    // window.requestAnimationFrame(
    // function() {
    // console.log(pos);
    let element = document.getElementById('sticky-block');
    // console.log(element.offsetTop + element.offsetHeight);
    this.setState({ ticking: false });

    if (pos + this.state.topOffset + 40 > element.offsetTop) {
      element.firstElementChild.classList.add('sticky');
      element.firstChild.style.width = element.offsetWidth + 'px';
      this.setState({ sticky: true });
    } else {
      element.firstElementChild.classList.remove('sticky');

      this.setState({ sticky: false });
    }

    if (element.offsetTop + element.offsetHeight - pos < 800) {
      const fixedTopOffset =
        800 - (element.offsetTop + element.offsetHeight - pos);
      const style = getComputedStyle(element.firstChild);

      // console.log(
      element.firstChild.style.top =
        parseInt(style.top) - fixedTopOffset + 'px';
      // );
      console.log(fixedTopOffset);
    } else {
      element.firstChild.style.top = 'calc(var(--navbar-height) + 40px)';
    }

    // console.log(pos - (element.offsetTop + element.offsetHeight));
    // }.bind(this)
    // );

    this.setState({ ticking: true });
    // }
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 'var(--navbar-height)' }}></div>
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
          <img
            style={{ width: '100%', height: '100%' }}
            alt=''
            src={FitStudy}
          />
        </Section>
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
          <div style={{ display: 'block', margin: '25px 0' }} />

          <div className='project-overview'>
            <h2>Project Background</h2>
          </div>
          <div style={{ display: 'block', margin: '25px 0' }} />
        </Section>
        <ProjectOverview />
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
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
          <div style={{ display: 'block', margin: '22px 0' }} />
        </Section>
        <Section wrapperColor='#4568DC' sectionColor='#4568DC'>
          <div style={{ display: 'block', margin: '20px 0' }} />
          <div className='trainers'>
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
          <div style={{ display: 'block', margin: '20px 0' }} />

          <div className='trainers'>
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
          <div style={{ display: 'block', margin: '20px 0' }} />
        </Section>
        <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
          <div style={{ display: 'block', margin: '25px 0' }} />

          <div className='workshop-p1'>
            <div style={{ display: 'block', textAlign: 'center' }}>
              <img src={whiteBoard} alt='' />
              <figcaption style={{ marginTop: '-25px', color: '#fff' }}>
                Reviewing the persona & her needs
              </figcaption>
            </div>

            <div className='workshop-p1-textbox'>
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
          <div style={{ display: 'block', margin: '25px 0' }} />
        </Section>
        <Section wrapperColor='#F0F9FF' sectionColor='#F0F9FF'>
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
            <div style={{ display: 'block', margin: '40px 0' }} />

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
            <div style={{ display: 'block', margin: '42px 0' }} />

            <p>
              While creating all these ideas my colleagues kept asking questions
              that I didn’t think of or didn’t question the “why” of some of the
              problems. <b>We went back to Discovery and Define</b> to review
              them again, we compare them with the workshop ideas and modified
              the user flow.
            </p>
            <div style={{ display: 'block', margin: '26px 0' }} />

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

          <div style={{ display: 'block', margin: '27px 0' }} />

          <div className='user-flow-img-container'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={User_flow}
              alt='user flow'
            />
          </div>
          <figcaption>User flow</figcaption>
          <div style={{ display: 'block', margin: '27px 0' }} />
        </Section>
        <Section sectionColor='#fff' wrapperColor='#fff'>
          <div style={{ display: 'block', margin: '27px 0' }} />

          <div style={{ maxWidth: '100%', height: 'auto' }}>
            <img src={Wireframe} alt='wireframe' />
            <figcaption>
              Quick wireframes of our ideas and putting them into a flow
            </figcaption>
          </div>
          <div style={{ display: 'block', margin: '27px 0' }} />

          <div style={{ maxWidth: '100%', height: 'auto' }}>
            <img src={LowFiDesign} alt='Low fidelity design' />
            <figcaption>Low fidelity designs</figcaption>
          </div>

          <div style={{ display: 'block', margin: '70px 0' }} />
        </Section>
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
          <div style={{ display: 'block', margin: '46px 0' }} />
          <div className='stakeholder'>
            <div className='stakeholder-left'>
              <div style={{ display: 'block', margin: '23px 0' }} />

              <h2>The Rightful stakeholder</h2>
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
            <div className='stakeholder-divider' />

            <div className='stakeholder-right'>
              <img src={ScreenProfile} alt='Profile screen' />
            </div>
          </div>
        </Section>
        <Section sectionColor='#F0F9FF' wrapperColor='#F0F9FF'>
          <div style={{ display: 'block', margin: '38px 0' }} />
          <div className='row'>
            <div className='col-1'>
              <img className='image-left' src={sign_up} alt='sign up' />
              <img src={all_classes} alt='all classes' />
              <img src={add_class} alt='Add classes' />
            </div>
            <div id='sticky-block' className='col-2'>
              <div className='sticky-features-text'>
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

          <div style={{ display: 'block', margin: '23px 0' }} />
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
