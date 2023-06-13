import react, { useState } from "react";
import pen from "../../../assets/pen.png";
import laptop from "../../../assets/laptop.png";
import market from "../../../assets/market.png";
import arrow from "../../../assets/arrow.svg";
import plus from "../../../assets/plus.svg";
import phone from "../../../assets/phone.png";
import left from "../../../assets/unioni1365-916.svg";
import "./services.css";

export const Service = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (indexed) => {
    if (clicked === indexed) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(indexed);
  };

  const [hide, setHide] = useState(false);
  const handleClick = (indexed) => {
    if (hide === indexed) {
      return setHide(null);
    }
    return setHide(indexed);
  };

  const [hided, setHided] = useState(false);
  const handleClicked = (indexed) => {
    if (hided === indexed) {
      return setHided(null);
    }
    return setHided(indexed);
  };

  const [hider, setHider] = useState(false);
  const handleClicker = (indexed) => {
    if (hider === indexed) {
      return setHider(null);
    }
    return setHider(indexed);
  };
  const details = [
    {
      id: 1,
      image: phone,
      logo: pen,
      title: "Product Design",
      content:
        "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the problems are solved and Business needs are met.Happy Users ,Growing Business.",
      title2: "User Research",
      content2:
        "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
      title3: "UI Design",
      content3:
        "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
      title4: "Useability Testing",
      content4:
        "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
    },
    {
      id: 2,
      image: phone,
      logo: laptop,
      title: "Software Development",
      content:
        "We provide software solutions for your business needs and help you stand out, providing you with the best advice for achieving success.",
      title2: "Backend Development",
      content2:
        "We create and maintain the server-side logic, systems, and databases that power web applications. We also expertise in programming, database management, API development, security, testing, and deployment",
      title3: "Frontend Development",
      content3:
        "We are focused on creating  user-friendly platforms that are visual appealing and allows people to easily access information.",
      title4: "Network Engineering",
      content4:
        "We help you host your Applications using the best technologies.In addition, we incorporate features that will enhance the user experience and increase your visibility, such as social media integration and search engine optimisation (SEO) techniques.",
    },
    {
      id: 3,
      image: phone,
      logo: market,
      title: "Marketing",
      content:
        "In addition to digital marketing, we also offer analytics and reporting services that provide our clients with insights into the performance of their campaigns.We track and measure key performance indicators such as website traffic, click-through rates, and conversion rates to ensure that our client's campaigns are delivering results.",
      title2: "Search Engine Optimization",
      content2:
        "We ensure optimizing of Web pages and content to increase visibility in search engines and drive more organic traffic to a website.We use the latest digital marketing tools and strategies to create campaigns that target our clients' ideal customers, engage with them, and guide them towards the desired action.",
      title3: "Email Marketing",
      content3:
        "We make use of newsletters, promotional emails, and other targeted messages to reach potential clients and promote products and services.",
      title4: "Content Marketing",
      content4:
        "We are best at creating an effective strategy to reach target customers, understanding customer needs and preferences, and developing a plan to effectively promote products or service.",
    },
    // {
    //   id:4,
    //   image: phone,
    //   logo: pen,
    //   title: "Product Design",
    //   content:
    //     "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the problems are solved and Business needs are met.Happy Users ,Growing Business.",
    //   title2: "User Research",
    //   content2:
    //     "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
    //   title3: "UI Design",
    //   content3:
    //     "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
    //   title4: "Useability Testing",
    //   content4:
    //     "We are constantly improving the experience of users by gathering information inorder to see things through the lens of their eyes, propose solutions and test them to ensure the",
    // },
  ];
  return (
    <>
      <div className="service-container" id="Service">
        <div className="service-head">
          <span>What We Do</span>
        </div>
        <div className="service-body">
          {details.map((val, indexed) => {
            return (
              <>
                <div className="services">
                  <div className="service-holder">
                    <div className="service-hold-left">
                      <div
                        className="service-top"
                        onClick={() => toggle(indexed)}
                      >
                        <div className="services-left">
                          <img
                            src={val.logo}
                            alt="logo"
                            className="serivce-logo"
                          />
                        </div>
                        <div className="services-right">
                          <span>{val.title}</span>
                        </div>
                      </div>
                      <div
                        className={
                          clicked === indexed
                            ? "service-bottom"
                            : "service-hide"
                        }
                      >
                        <div className="service-bottom-img">
                          <img
                            src={arrow}
                            alt="arrow"
                            className="service-arrow"
                          />
                        </div>
                        <p className="service-content">
                          We are constantly improving the experience of users by
                          gathering information inorder to see things through
                          the lens of their eyes, propose solutions and test
                          them to ensure the problems are solved and Business
                          needs are met.Happy Users ,Growing Business
                        </p>
                        <div className="service-subcontain">
                          <div className="subcontain">
                            <div
                              className="subcontain-top"
                              onClick={() => {
                                handleClick(indexed);
                              }}
                            >
                              <span>{val.title2}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div
                              className={
                                hide === indexed
                                  ? "subcontain-bottom"
                                  : "subcontain-hide"
                              }
                            >
                              <p>{val.content2}</p>
                            </div>
                          </div>
                          <div className="subcontain">
                            <div
                              className="subcontain-top"
                              onClick={() => {
                                handleClicked(indexed);
                              }}
                            >
                              <span>{val.title3}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div
                              className={
                                hided === indexed
                                  ? "subcontain-bottom"
                                  : "subcontain-hide"
                              }
                            >
                              <p>{val.content3}</p>
                            </div>
                          </div>
                          <div className="subcontain">
                            <div
                              className="subcontain-top"
                              onClick={() => {
                                handleClicker(indexed);
                              }}
                            >
                              <span>{val.title4}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div
                              className={
                                hider === indexed
                                  ? "subcontain-bottom"
                                  : "subcontain-hide"
                              }
                            >
                              <p>{val.content4}</p>
                            </div>
                          </div>
                        </div>
                        <button className="about-button service-button">
                          <div className="about-iconwrapper">
                            <img
                              src={left}
                              alt="UnionI1365"
                              className="about-union"
                            />
                          </div>
                          <span className="button-text service-add">
                            Grow Your Business Now
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      className={
                        clicked === indexed
                          ? "service-hold-right"
                          : "service-hide"
                      }
                    >
                      <img
                        src={val.image}
                        alt="image"
                        className="image-right"
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
