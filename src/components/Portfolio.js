import React from "react";
import RunBuddy from "../images/./avatars/runbuddy.jpg";
import MysteryStation from "../images/./avatars/butlerstation.png";
import workoutBuddy from "../images/./avatars/workoutbuddy.png";
import pwGen from "../images/./avatars/pwGen.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // RunBuddy
  const openPopupboxRunBuddy = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={RunBuddy}
          alt="HTMLCSS Project"
        />
        <p>
          This is the first project I ever worked on for my Coding Bootcamp at
          Butler University.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://mgmckinn.github.io/run-buddy-1/")}
        >
          https://mgmckinn.github.io/run-buddy-1/
        </a>
      </>
    );
    PopupboxManager.open({ content })
  }

  const popupboxConfigRunBuddy = {
    titleBar: {
      enable: true,
      text: "Run Buddy"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // Mystery at Butler Station
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={MysteryStation}
          alt="Second Group"
        />
        <p>
         A fullstack application made with canvas. Trivia Game. 
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://mystery-of-butler-station.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://mystery-of-butler-station.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/gsd79/Mystery-of-Butler-Station",
              "_blank"
            )
          }
        >
          https://github.com/gsd79/Mystery-of-Butler-Station
        </a>
      </>
    );
    PopupboxManager.open({ content })
  }

  const popupboxMystery = {
    titleBar: {
      enable: true,
      text: "Mystery of Butler Station"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Workout Buddy
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={workoutBuddy} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/gsd79/Workout-Buddy", "_blank")}>https://github.com/gsd79/Workout-Buddy</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("", "_blank")}></a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxworkoutbuddy = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={pwGen} alt="" />Password Generator with  javaScript
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://mgmckinn.github.io/mgm-password-genie-html.css.js/", "_blank")}>https://mgmckinn.github.io/mgm-password-genie-html.css.js/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupbox = {
    titleBar: {
      enable: true,
      text: "Random password generator"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxRunBuddy}>
            <img className="portfolio-image" src={RunBuddy} alt="First project in Butler Bootcamp using HTML and CSS" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={MysteryStation} alt="Mystery of Butler Station" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={workoutBuddy} alt="MERN Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> 
          
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={pwGen} alt=" Random Passwork Generator using Javascript" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div> 
      </div>
      <PopupboxContainer {...popupboxConfigRunBuddy} />
      <PopupboxContainer {...popupboxMystery} /> 
      <PopupboxContainer {...popupboxworkoutbuddy} />
      <PopupboxContainer {...popupbox} />  
    </div> 
  );
}


export default Portfolio;
