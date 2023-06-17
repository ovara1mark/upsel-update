import React from "react";
import molecular from "../../../assets/molecular.svg";
import project from "../../../assets/project.svg";
import trophy2 from "../../../assets/trophy-2.svg";
import arrow from "../../../assets/unioni1365-h6l.svg";
import arrow2 from "../../../assets/arrow2.svg";
import arrow3 from "../../../assets/arrow3.svg";
import arrow4 from "../../../assets/arrow4.svg";
import arrow5 from "../../../assets/arrow5.svg";
import arrow6 from "../../../assets/arrow6.svg";
import image from "../../../assets/image.png";
import "./process.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export const Process = () => {
  const processDetail = [
    {
      id: 1,
      icon: project,
      title: "No project is too big or too small",
      paragraph:
        "We're a full service digital agency. We design, develop and market websites and apps for our clients by using the latest technology. We strategise with you on the best solution to bring you success",
    },
    {
      id: 2,
      icon: molecular,
      title: "Vast Experience",
      paragraph:
        "Our experts are passionate about helping businesses succeed through our customised solutions. We have the knowledge and experience to provide you with the best advice for achieving success",
    },
    {
      id: 3,
      icon: trophy2,
      title: "Our goal is to help you achieve success",
      paragraph:
        "we take great pride in being a reliable partner for all our clients' digital needs. With our passion for excellence and commitment to customer satisfaction, we guarantee success every step of the way",
    },
  ];
  return (
    <>
      <div className="ourprocess-container" id="process">
        <div className="ourprocess-ourprocess">
          <div className="ourprocess-top">
            <div className="ourprocess-top-heading">
              Our process is designed to boost your visibility and help you
              reach your customers
            </div>
            <div className="ourprocess-top-bottom">
              <div className="top-1">
                <div className="top-h-1">
                  <img src={arrow4} alt="arrow" className="arrow4" />
                  <div className="top-1-a">
                    <span>Research</span>
                  </div>
                </div>
                <div className="top-h-2">
                  <div className="top-1-b">
                    <span>Plan</span>
                  </div>
                </div>
                <div className="top-h-3">
                  <img src={arrow2} alt="arrow" className="arrow2" />
                  <div className="top-1-c">
                    <span>Brainstorm</span>
                  </div>
                </div>
              </div>
              <div className="top-2">
                <div className="top-2-a">
                  <p className="top-pg">
                    Our goal is to help you achieve success online. We do this
                    by providing you with excellent technology and
                    knowledgeable, friendly customer service.
                  </p>
                  <Link
                    to="ContactUs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button className="about-button">
                      <div className="about-iconwrapper">
                        <img
                          src={arrow}
                          alt="UnionI1365"
                          className="about-union"
                        />
                      </div>
                      <span className="button-text">
                        Grow Your Business Now
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="top-2-c">
                  <img src={arrow3} alt="arrow" className="arrow3" />
                </div>
              </div>
              <div className="top-3">
                <div className="top-g-1">
                  <div className="top-3-a">
                    <span>Iterate</span>
                  </div>
                  <img src={arrow5} alt="arrow" className="arrow5" />
                </div>
                <div className="top-g-2">
                  <div className="top-3-b">
                    <span>Test</span>
                  </div>
                </div>
                <div className="top-g-3">
                  <div className="top-3-c">
                    <span>Build</span>
                  </div>
                  <img src={arrow6} alt="arrow" className="arrow6" />
                </div>
              </div>
            </div>
            <div className="ourprocess-top-bottom-2">
              <img src={image} alt="image" className="images" />
            </div>
          </div>
          <div className="ourprocess-heading">
            <span className="ourprocess-text">
              <span>Why Choose Us?</span>
            </span>
          </div>
          <div className="ourprocess-upsel">
            <div className="ourprocess-frame-contain">
              {processDetail.map((elem) => {
                return (
                  <>
                    <div className="ourprocess-frame">
                      <div className="frame-content-second">
                        <div className="ourprocess-frame-image">
                          <img
                            src={elem.icon}
                            alt="image"
                            className="ourprocess-project"
                          />
                        </div>
                        <span className="ourprocess-title title-second">
                          {elem.title}
                        </span>
                      </div>

                      <div className="ourprocess-frame-content">
                        <span className="ourprocess-title title-first">
                          {elem.title}
                        </span>
                        <p className="ourprocess-paragraph">{elem.paragraph}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
