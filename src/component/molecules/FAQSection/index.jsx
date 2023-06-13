import react, { useState } from "react";
import { Input } from "../../atoms/Input";
import searchIcon from "../../../assets/vectorsearch.png";
import rightArrIcon from "../../../assets/unioni1365-h6l.svg";
import "./faq-section.css";

export const FAQSection = () => {
  const frequently = [
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "This is panel header 1",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
      <div className="fa-section-container" id="FAQSection">
        <div className="fa-section-fa-section">
          <div className="fa-section-content">
            <span className="fa-section-text">
              <span>Frequently Asked Questions (FAQs)</span>
            </span>
            <div className="fa-section-searchbox">
              <Input
                placeholder="How can we help you?"
                className="fa-search-input"
              />

              <button className="fa-section-button">
                <div className="fa-section-iconwrapper">
                  <img
                    src={searchIcon}
                    alt="UnionI1365"
                    className="fa-section-union"
                  />
                </div>
              </button>
            </div>
            <div className="fa-section-faqcollapse">
              {frequently.map((elem, index) => {
                return (
                  <div className="fq-qna">
                    <div className="fq-holder" onClick={() => toggle(index)}>
                      <p className="fq-p-head">{elem.title}</p>
                      <div className="fq-btn">
                        <img
                          src={rightArrIcon}
                          className={
                            clicked === index ? "font-fq" : "font-fq-add"
                          }
                        />
                      </div>
                    </div>
                    <div
                      className={
                        clicked === index ? "fq-content" : "fq-content-hidden"
                      }
                    >
                      <p type="p" className="content-p">
                        {elem.contentOne}
                      </p>
                      <p type="p" className="content-p p-2">
                        {elem.contentTwo}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
