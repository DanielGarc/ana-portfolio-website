import React from 'react';

import fitness from '../assets/fitnessApp.png';
import airbnb from '../assets/airbnb.png';
import '../css/selectedWork.css';

const SelectedWork = () => {
    return (
        <div className="selWork">
            <div className="selContent">
                <div className="topSection">
                    <h2> Selected Work</h2>
                    <p style={{marginBottom: '50px'}}> Take A Look </p>
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
                    <img src={airbnb} />

                    <div className="airBox">
                            <p style={{fontSize: '36px'}}> Price My Airbnb </p>
                            <p> 
                            AirBnB host don’t know how much should they list their unit to remain 
                            competitive while maximizing their profits, this platform allows to evaluate 
                            their the price of their properties, find ways to increase the value of 
                            their properties
                            and know when/how to adjust price to events/seasons/holidays

                            </p>
                            <a> Read Case Study -> </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SelectedWork;
