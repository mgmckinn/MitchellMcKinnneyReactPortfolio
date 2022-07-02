/** @format */

import React from "react";
import RunBuddy from "../images/./avatars/runbuddy.jpg";
import MysteryStation from "../images/./avatars/butlerstation.png";
import workoutBuddy from "../images/./avatars/workoutbuddy.png";
import pwGen from "../images/./avatars/pwGen.png";
import expandingKids from "../images/./avatars/kids.png";
import tinyNote from "../images/./avatars/tinyNote.png";
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
          className='portfolio-image-popupbox'
          src={RunBuddy}
          alt='HTMLCSS Project'
        />
        <p>
          This is the first project I ever worked on for my Coding Bootcamp at
          Butler University.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open("https://mgmckinn.github.io/run-buddy-1/")
          }>
          https://mgmckinn.github.io/run-buddy-1/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRunBuddy = {
    titleBar: {
      enable: true,
      text: "Run Buddy",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxtinyNote = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={tinyNote}
          alt='HTMLCSS Project'
        />
        <p>
          Group project with HTML, CSS, and JavaScript. The application allows
          users to journal their thoughts, and mood.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className='hyper-link'
          onClick={() => window.open("https://gsd79.github.io/tiny-note/")}>
          https://gsd79.github.io/tiny-note/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigtinyNote= {
    titleBar: {
      enable: true,
      text: "tinyNote",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Expanding Kids
  const openPopupboxexpandingKids = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={expandingKids}
          alt='HTMLCSS Project'
        />
        <p>
          This is the first project I ever worked on for my Coding Bootcamp at
          Butler University.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open("https://mgmckinn.github.io/Expanding-Kids/")
          }>
          https://mgmckinn.github.io/Expanding-Kids/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigexpandingKids = {
    titleBar: {
      enable: true,
      text: "Expanding Kids",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Mystery at Butler Station
  const openPopupboxMysteryStation = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={MysteryStation}
          alt='Second Group'
        />
        <p>A fullstack application made with canvas. Trivia Game.</p>
        <b>Demo:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              "https://mystery-of-butler-station.herokuapp.com/",
              "_blank"
            )
          }>
          https://mystery-of-butler-station.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              "https://github.com/gsd79/Mystery-of-Butler-Station",
              "_blank"
            )
          }>
          https://github.com/gsd79/Mystery-of-Butler-Station
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMysteryStation = {
    titleBar: {
      enable: true,
      text: "Mystery of Butler Station",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // Workout Buddy
  const openPopupboxworkoutBuddy = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={workoutBuddy}
          alt='Portfolio Project...'
        />
        <p>Group Project for Butler Bootcamp-full stack MERN application</p>
        <b>Demo:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open("https://github.com/gsd79/Workout-Buddy", "_blank")
          }>
          https://github.com/gsd79/Workout-Buddy
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className='hyper-link' onClick={() => window.open("", "_blank")}></a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigworkoutbuddy = {
    titleBar: {
      enable: true,
      text: "MERN Application",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Password Generator
  const openPopupboxpwGen = () => {
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={pwGen} alt='' />
        Password Generator with javaScript
        <p>
          This is a password generator that I made with JavaScript. It takes the number of characters and the type of characters you want to use and generates a password.
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              "https://mgmckinn.github.io/mgm-password-genie-html.css.js/",
              "_blank"
            )
          }>
          https://mgmckinn.github.io/mgm-password-genie-html.css.js/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigpwGen = {
    titleBar: {
      enable: true,
      text: "JavaScript Password Generator",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };



  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box' onClick={openPopupboxRunBuddy}>
            <img
              className='portfolio-image'
              src={RunBuddy}
              alt='First project in Butler Bootcamp using HTML and CSS'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div
            className='portfolio-image-box'
            onClick={openPopupboxMysteryStation}>
            <img
              className='portfolio-image'
              src={MysteryStation}
              alt='Mystery of Butler Station'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div
            className='portfolio-image-box'
            onClick={openPopupboxworkoutBuddy}>
            <img
              className='portfolio-image'
              src={workoutBuddy}
              alt='MERN Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div
            className='portfolio-image-box'
            onClick={openPopupboxexpandingKids}>
            <img
              className='portfolio-image'
              src={expandingKids}
              alt='Javascript and CSS animation'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxpwGen}>
            <img
              className='portfolio-image'
              src={pwGen}
              alt=' Random Password Generator using Javascript'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          
          <div className='portfolio-image-box' onClick={openPopupboxtinyNote}>
            <img
              className='portfolio-image'
              src={tinyNote}
              alt='Digital Journal to track your thoughts and mood. '
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigRunBuddy} />
      <PopupboxContainer {...popupboxConfigMysteryStation} />
      <PopupboxContainer {...popupboxConfigworkoutbuddy} />
      <PopupboxContainer {...popupboxConfigexpandingKids} />
      <PopupboxContainer {...popupboxConfigpwGen} />
      <PopupboxContainer {...popupboxConfigtinyNote} />
    </div>
  );
};

export default Portfolio;
