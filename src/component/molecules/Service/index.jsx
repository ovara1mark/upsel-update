import react from "react";
import pen from "../../../assets/pen.png";
import arrow from "../../../assets/arrow.svg";
import plus from "../../../assets/plus.svg";
import phone from "../../../assets/phone.png";
import left from "../../../assets/unioni1365-916.svg";
import "./services.css";

export const Service = (props) => {
  const details = [
    {
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
  ];
  return (
    <>
      <div className="service-container">
        <div className="service-head">
          <span>What We Do</span>
        </div>
        <div className="service-body">
          {details.map((val) => {
            return (
              <>
                <div className="services">
                  <div className="service-holder">
                    <div className="service-hold-left">
                      <div className="service-top">
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
                      <div className="service-bottom">
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
                            <div className="subcontain-top">
                              <span>{val.title2}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div className="subcontain-bottom">
                              <p>{val.content2}</p>
                            </div>
                          </div>
                          <div className="subcontain">
                            <div className="subcontain-top">
                              <span>{val.title3}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div className="subcontain-bottom">
                              <p>{val.content3}</p>
                            </div>
                          </div>
                          <div className="subcontain">
                            <div className="subcontain-top">
                              <span>{val.title4}</span>
                              <div>
                                <img src={plus} alt="plus" className="plus" />
                              </div>
                            </div>
                            <div className="subcontain-bottom">
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
                    <div className="service-hold-right">
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
