import React from 'react';

import fitness from '../assets/fitnessApp.png';
import '../css/selectedWork.css';

const SelectedWork = () => {
    return (
        <div className="selWork">
            <div className="selContent">
                <div className="topSection">
                    <h2> Selected Work</h2>
                    <p> Take A Look </p>
                </div>
                <div className="selProjectOne">
                    <img src={fitness} />

                    <div className="fitnessBox">
                        <p style={{fontSize: '36px'}}> Anywhere Fitness</p>
                        <p> 
                        Fitness instructors have a lot to work on, not just classes but, 
                        working with people, with their goals, not only changing their body 
                        but their minds.
                        <br />
                        Trainers are looking for something that it can be with them all the time, 
                        always up to date with what’s going on with their clients, and removing that 
                        layer of awkwardness to go and ask for the payments.

                        </p>
                        <a> Read Case Study -> </a>
                    </div>
                </div>

                <div className="selProjectTwo">

                </div>
            </div>
        </div>
    )
}

export default SelectedWork;
