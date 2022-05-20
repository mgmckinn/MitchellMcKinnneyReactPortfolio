import React from "react";
import headshot from "../images/avatars/headshot.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img src={headshot} alt="headshot" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I have always had a passion for technology but for some reason I
            never breached the subject purely out of fear to get into something
            new. Growing up my parents always had new computers, and software.
            In the 90s that was a bigger deal than it is now. I went to school
            for business management and did not give it a second thought. Now 10
            years into my career I find I 'm having the best time at work with I
            'm troubleshooting tech issues for my co-workers or executives
            throughout the company. This prompted me to look into computer
            science which sent me down a path of webdevelopment. Now that the initial fear is gone and I am building
            confidence each keystroke, I have found something that will challenge me probably for the rest of my life. I truly believe I can do the best by myself and my family by
            excelling in this industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
