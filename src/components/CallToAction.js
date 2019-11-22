import React from "react";

import "../css/callToAction.css";

import headshot from "../assets/me.png";

const CallToAction = () => {
  return (
    <div className="ctaWrapper">
      <div className="ctaContent">
        <div className="ctaLeftBox">
          <h1> Hola, I'm Ana Rosa. </h1>
          <p className="ctaText">
            I am a UX Designer, Technologist, and outdoors lover trying to
            create a user-friendly environment.
            <br />
            <br />
            I care deeply about people, and I love analyzing human behaviour.
            <br />
            <br />
            Helping solve problems in a simple way is kind of my thing.
          </p>

          <a className="ctaButton">
            Check out my work!
          </a>
        </div>

        <div className="ctaRightBox">
          <img src={headshot} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
