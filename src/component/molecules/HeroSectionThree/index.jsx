import React from "react";
import "./landing-hero.css";
import eventParty from "../../../assets/eventParty.png";
import pie from "../../../assets/pie.png";
import whitePic from "../../../assets/whitePic.png";
import twoBulb from "../../../assets/two-bulb.png";

export const HeroSectionThree = () => {
  return (
    <div className="landing1-container">
      <div className="landing1-landing1">
        <div className="landing1-top">
          <div className="landing1-top-left">
            <span className="t-l-text">Health and Event</span>
            <p className="t-l-paragraph">
              Elevate Your Online Presence with Tech Solutions for{" "}
              <span className="healthcare">Healthcare</span> and{" "}
              <span className="event">Event</span> Planning
            </p>
            <p className="t-l-pg">
              We are a tech agency specializing in creating online presence for
              healthcare and event planning businesses. In today's digital age,
              having a strong online presence is crucial to the success of any
              business, and we are here to help you achieve just that.
            </p>
            <button className="t-l-button">Contact Us Now</button>
          </div>
          <div className="landing-top-right">
            <img src={eventParty} alt="eventParty" className="event-party" />
          </div>
        </div>
        <div className="landing1-bottom">
          <div className="pie1">
            <img src={pie} alt="pie" className="pie-1" />
          </div>
          <div className="event-pic">
            <img src={whitePic} alt="white-picture" className="white-pic" />
          </div>
          <div className="event-text">
            <p className="t-l-et">
              We are a tech agency specializing in creating online presence for
              healthcare and event planning businesses. In today's digital age,
              having a strong online presence is crucial to the success of any
              business, and we are here to help you achieve just that.
            </p>
          </div>
          <div className="two-bulb">
            <img src={twoBulb} alt="two-bulb" className="two-bulb" />
          </div>
        </div>
      </div>
    </div>
  );
};
