import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm a Full Stack Web Developer with a background in management, employee development, and customer service. Earned certificate in Full-Stack Web Development through Georgia Tech , and earned a MBA from Saint Leo University in 2020. While completing my certificate program, I excelled in MERN, SQL & NoSQL, and Javascript projects.  ",
    highlights: {
      bullets: [
        "Full-Stack Web Development",
        "SQL via MySQL" ,
        "NoSQL via MongoDB",
        "OOP",
        "Building REST API's",
        "MERN Stack Apps",
      ],
      heading: "Here Are A Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                > Hire Me </button>
                <a href="Full-Stack Resume 2021 (1).pdf" download="Alexander J Davis.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}