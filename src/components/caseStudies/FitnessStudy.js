import React from 'react';

import '../../css/fitStudy.css';

import FitStudy from '../../assets/fitStudy.png';
import DesignCycle from '../../assets/designCycle.png';
import RealCycle from '../../assets/realCycle.png';

const FitnessStudy = () => {
    return (
        <div className="fitStudyWrapper">
            <div className="fitCTA">
                <img src={FitStudy} style={{width: "100%"}} />
            </div>

            <div className="sectionOne">
                <div className="overview">
                    <h3> Overview </h3>
                    <p>
                    Fitness instructors have a lot to work on, not just classes but, 
                    working with people, with their goals, not only changing their body 
                    but their minds.
                    </p>
                    <p>
                        Fitness instructors have a lot to work on, not just classes but, 
                        working with people, with their goals, not only changing their 
                        body but their minds. This is hard to do when you have to write 
                        everything on paper or don’t have enough time to work with them 
                        personally, or remind them all about their classes or their goals.
                    </p>
                    <p>
                        Trainers are looking for something that it can be with them 
                        all the time, always up to date with what’s going on with their
                        clients, and removing that layer of awkwardness to go and ask
                        for the payments.
                    </p>

                    
                </div>

                <div className="roles">
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

            <div className="whiteBoxWrapper">
                <div className="whiteBox">
                    <p>
                        Challenge
                        <br />
                        How can we build an engaging app that lets trainers and trainees
                        manage their workouts and payments.
                    </p>

                    <p>
                        Solution
                        <br />
                        An app that will be up to date with what’s 
                        going on with their clients and send reminders to trainees about payments.

                    </p>
                </div>
            </div>

            <div className="designCycle">
                <img src={DesignCycle} />
                <img style={{marginTop: "100px", width: "50%"}} src={RealCycle} />
            </div>

            <div className="firstData">

            </div>
            
        </div>
    )
}

export default FitnessStudy;
