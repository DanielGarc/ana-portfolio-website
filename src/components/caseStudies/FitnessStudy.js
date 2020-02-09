import React from 'react';

import '../../css/fitStudy.css';

import FitStudy from '../../assets/fitStudy.png';

const FitnessStudy = () => {
  return (
    <div className='fitStudyWrapper'>
      <div className='fitStudyContent'>
        <div>
          <img alt='' src={FitStudy} />
        </div>
      </div>
      <div className='fitStudyOverviewSectionContent'>
        <div className='fitStudyOverviewSection'>
          <div className='fitStudyOverviewLeftContent'>
            <h3>OVERVIEW</h3>
            <p>
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
              <br />
            </p>
            <br />
          </div>
          <div className='fitStudyOverviewSeparator'></div>
          <div className='fitStudyOverviewRightContent'>
            <h3>MY ROLE</h3>
            <p>UX Designer</p>
            <h3>DURATION</h3>
            <p>5 Weeks</p>
            <h3>TOOLS</h3>
            <p>Sketch</p>
            <p>Whimsical</p>
            <p>InVision</p>
            <p>Paper and pencil</p>
          </div>
        </div>
      </div>
      <div className='fitStudyCSCardSectionContent'>
        <div className='fitStudyCSCardSection'>
          <div className='fitStudyCSCardSectionCard'>
            <div className='fitStudyCSCardLeft'>
              <div className='fitStudyCSCardTitle'>Challenge</div>
              <div className='fitStudyCSCardText'>
                How can we build an engaging app that lets trainers and trainees
                manage their workouts and payments.
              </div>
            </div>
            <div className='fitStudyCSCardRight'>
              <div className='fitStudyCSCardTitle'>Solution</div>
              <div className='fitStudyCSCardText'>
                An app that will be up to date with what’s going on with their
                clients and send reminders to trainees about payments.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fs-dc-content'>
        <div className='fs-dc-section'>
          <div className='fs-dc-section-title'>
            My design cycle was supposed to be a linear work of these phases
          </div>
        </div>
      </div>

      {/* <div className='sectionOne'>
          <div className='sectionOneContent'>
            <div className='overview'>
              <h3> Overview </h3>
              <p>
                Fitness instructors have a lot to work on, not just classes but,
                working with people, with their goals, not only changing their
                body but their minds.
              </p>
              <p>
                Fitness instructors have a lot to work on, not just classes but,
                working with people, with their goals, not only changing their
                body but their minds. This is hard to do when you have to write
                everything on paper or don’t have enough time to work with them
                personally, or remind them all about their classes or their
                goals.
              </p>
              <p>
                Trainers are looking for something that it can be with them all
                the time, always up to date with what’s going on with their
                clients, and removing that layer of awkwardness to go and ask
                for the payments.
              </p>
            </div>

            <div className='roles'>
              <h3> My Role </h3>
              <p> UX Designer </p>

              <h3> Duration </h3>
              <p> Five Weeks </p>

              <h3> Tools </h3>
              <p> Sketch </p>
              <p> Whimsical </p>
              <p> InVision </p>
              <p> Paper And Pencil </p>
            </div>
          </div>
        </div>

        <div className='whiteBoxWrapper'>
          <div className='whiteBox'>
            <p>
              Challenge
              <br />
              How can we build an engaging app that lets trainers and trainees
              manage their workouts and payments.
            </p>

            <p>
              Solution
              <br />
              An app that will be up to date with what’s going on with their
              clients and send reminders to trainees about payments.
            </p>
          </div>
        </div>

        <div className='designCycle'>
          <img alt='' src={DesignCycle} />
          <img
            alt=''
            style={{ marginTop: '100px', width: '50%' }}
            src={RealCycle}
          />
        </div>

        <div className='firstData'>
          <h2> First, Data </h2>
          <h4>
            {' '}
            <i> Don't assume you know the answer </i>{' '}
          </h4>

          <p style={{ width: '80%' }}>
            When I accepted this project <b>I thought I knew </b> what the
            application would look like at the end, or what the product was and
            its needs because I’m a fitness instructor, <b> I was wrong </b>.
            How did I gather information? Great question! I did the following
          </p>

          <ul>
            <li>
              I analize what types of question and what audience I’ll be
              interviewing.
            </li>
            <li>
              Interview with coaches, fitness instructor and people who exercise
              regularly and not regularly.
            </li>
            <li>Shadow a couple of colleagues</li>
          </ul>
        </div>

        <div className='userSection'>
          <div className='trainers'>
            <img alt='' className='avatarStyle' src={avatarTop} />
            <div className='trainerBox'>
              <h2> Trainers </h2>
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

          <div className='trainers'>
            <img alt='' className='avatarStyle' src={avatarBottom} />

            <div className='trainerBox'>
              <h2> Trainees </h2>
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
        </div>

        <div className='targetSection'>
          <img alt='' src={Target} />

          <div className='targetReady'>
            <h2> We're Ready To Target!</h2>
            <h3>
              {' '}
              <i> From a huge amount of data to target ideas. </i>{' '}
            </h3>

            <p>
              After analyzing the data gathered from surveys, interviews,
              shadowings, I started building the personas and creating the user
              journey map.
            </p>
            <p>
              By doing the previous I got a more define idea of the main
              targets, it also helped me to always keep in mind the user’s needs
              and goals. Whenever I got stuck in the user flow I always went
              back and re-read it.
            </p>
            <p>
              In the creationf of the user flow the main differences between
              trainer and trainees was their authority.
            </p>
          </div>
        </div>

        <div className='workshop'>
          <img alt='' src={workshop} />
          <h2> Workshop</h2>
          <h3>
            {' '}
            <i> Who doesn’t love good ideas? </i>{' '}
          </h3>

          <p>
            One of the things I like to do the most is generating ideas with a
            team, for this workshop, I asked a couple of colleagues to help me
            with some exercises because I wanted to know how they would tackle
            the problems in their own way. I explained the purpose of this app,
            the challenge and lay down the problems found in our target
            audience. I wrote down the problems on top of the board so everyone
            could have a vision of the problems and started generating ideas,
            after a couple of minutes we stop and did dot voting.
          </p>
          <p>
            While creating all these ideas my colleagues kept asking questions
            that I didn’t think of or didn’t question the “why” of some of the
            problems. <b>We went back to Discovery and Define </b> to review
            them again, we compare them with the workshop ideas and modified the
            user flow.
          </p>
          <p>
            <i>
              <b>1. “Does that make sense?“ </b>
            </i>
          </p>
          <p>
            <i>
              <b>2. “Let me check on the data from the interviews”</b>
            </i>
          </p>
          <p>
            <i>
              <b>
                3. “Ok, one interviewer mentioned that but the other four don’t,
                that’s not a pattern let’s dig on the market and do a quick
                analysis in which companies have features like that and check
                the reviews”
              </b>
            </i>
          </p>
          <p>
            <i>
              <b>
                4. “Okay, based on that market analysis, I’m adding that
                feature” (rewarding the trainees)
              </b>
            </i>
          </p>
        </div>
        <div>
          <img alt='' src={Sketching} />
          <img alt='' src={FitHighFi} />
        </div> */}
    </div>
  );
};

export default FitnessStudy;
