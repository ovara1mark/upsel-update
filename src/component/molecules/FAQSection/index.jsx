import react, { useState } from "react";
import { Input } from "../../atoms/Input";
import searchIcon from "../../../assets/vectorsearch.png";
import rightArrIcon from "../../../assets/unioni1365-h6l.svg";
import "./faq-section.css";

export const FAQSection = (props) => {
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
      <div className="fa-section-container">
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
              {/* <div className="fa-section-input">
                <div className="fa-section-text02">
                  <span className="fa-section-text03">
                    <span>How can we help you?</span>
                  </span>
                </div>
              </div> */}
              <button className="fa-section-button">
                <div className="fa-section-iconwrapper">
                  <img
                    src={searchIcon}
                    // src="/playground_assets/unioni1365-kjlg.svg"
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
              {/* <div className="fa-section-collapseitem">
                <div className="fa-section-frame527">
                  <div className="fa-section-header">
                    <div className="fa-section-frame526">
                      <div className="fa-section-texttext">
                        <span className="fa-section-text05 LabelSmall-14px">
                          <span>This is panel header 1</span>
                        </span>
                      </div>
                    </div>
                    <div className="fa-section-downframe">
                      <img
                        // src="/playground_assets/downi1365-8dx.svg"
                        src={rightArrIcon}
                        alt="DownI1365"
                        className="fa-section-down"
                      />
                    </div>
                  </div>
                  <div className="fa-section-content1">
                    <div className="fa-section-text07">
                      <span className="fa-section-text08">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fa-section-collapseitem1">
                <div className="fa-section-frame530">
                  <div className="fa-section-texttext1">
                    <span className="fa-section-text10 LabelSmall-14px">
                      <span>This is panel header 1</span>
                    </span>
                  </div>
                  <div className="fa-section-frame529">
                    <img
                      // src="/playground_assets/righti1365-deml.svg"
                      src={rightArrIcon}
                      alt="RightI1365"
                      className="fa-section-right"
                    />
                  </div>
                </div>
              </div>
              <div className="fa-section-collapseitem2">
                <div className="fa-section-frame5301">
                  <div className="fa-section-texttext2">
                    <span className="fa-section-text12 LabelSmall-14px">
                      <span>This is panel header 1</span>
                    </span>
                  </div>
                  <div className="fa-section-frame5291">
                    <img
                      // src="/playground_assets/righti1365-y68b.svg"
                      src={rightArrIcon}
                      alt="RightI1365"
                      className="fa-section-right1"
                    />
                  </div>
                </div>
              </div>
              <div className="fa-section-collapseitem3">
                <div className="fa-section-frame5302">
                  <div className="fa-section-texttext3">
                    <span className="fa-section-text14 LabelSmall-14px">
                      <span>This is panel header 1</span>
                    </span>
                  </div>
                  <div className="fa-section-frame5292">
                    <img
                      // src="/playground_assets/righti1365-suj.svg"
                      src={rightArrIcon}
                      alt="RightI1365"
                      className="fa-section-right2"
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="fa-section-collapseitem">
                <div className="fa-section-frame527">
                  <div className="fa-section-header">
                    <div className="fa-section-frame526">
                      <div className="fa-section-texttext">
                        <span className="fa-section-text05 LabelSmall-14px">
                          <span>This is panel header 1</span>
                        </span>
                      </div>
                    </div>
                    <div className="fa-section-downframe">
                      <img
                        // src="/playground_assets/downi1365-8dx.svg"
                        src={rightArrIcon}
                        alt="DownI1365"
                        className="fa-section-down"
                      />
                    </div>
                  </div>
                  <div className="fa-section-content1">
                    <div className="fa-section-text07">
                      <span className="fa-section-text08">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="faq-container-2">
        <div className="f-qmobile-f-qmobile">
          <div className="f-qmobile-content">
            <div className="f-qmobile-frame528">
              <span className="f-qmobile-text">
                <span>Frequently Asked Questions (FAQs)</span>
              </span>
              <div className="f-qmobile-searchbox">
                <div className="f-qmobile-wrapper">
                  <div className="f-qmobile-text02">
                    <span className="f-qmobile-text03 LabelSmall-14px">
                      <span>How can we help you?</span>
                    </span>
                  </div>
                </div>
                <button className="f-qmobile-button">
                  <div className="f-qmobile-iconwrapper">
                    <img
                      src="/playground_assets/unioni1438-we.svg"
                      alt="UnionI1438"
                      className="f-qmobile-union"
                    />
                  </div>
                </button>
              </div>
              <div className="f-qmobile-faqcollapse">
                <div className="f-qmobile-collapseitem">
                  <div className="f-qmobile-frame527">
                    <div className="f-qmobile-header">
                      <div className="f-qmobile-frame526">
                        <div className="f-qmobile-texttext">
                          <span className="f-qmobile-text05 LabelSmall-14px">
                            <span>This is panel header 1</span>
                          </span>
                        </div>
                      </div>
                      <div className="f-qmobile-downframe">
                        <img
                          src="/playground_assets/downi1438-h0po.svg"
                          alt="DownI1438"
                          className="f-qmobile-down"
                        />
                      </div>
                    </div>
                    <div className="f-qmobile-content1">
                      <div className="f-qmobile-text07">
                        <span className="f-qmobile-text08">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-qmobile-collapseitem1">
                  <div className="f-qmobile-frame530">
                    <div className="f-qmobile-texttext1">
                      <span className="f-qmobile-text10 LabelSmall-14px">
                        <span>This is panel header 1</span>
                      </span>
                    </div>
                    <div className="f-qmobile-frame529">
                      <img
                        src="/playground_assets/righti1438-4fna.svg"
                        alt="RightI1438"
                        className="f-qmobile-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="f-qmobile-collapseitem2">
                  <div className="f-qmobile-frame5301">
                    <div className="f-qmobile-texttext2">
                      <span className="f-qmobile-text12 LabelSmall-14px">
                        <span>This is panel header 1</span>
                      </span>
                    </div>
                    <div className="f-qmobile-frame5291">
                      <img
                        src="/playground_assets/righti1438-tzat.svg"
                        alt="RightI1438"
                        className="f-qmobile-right1"
                      />
                    </div>
                  </div>
                </div>
                <div className="f-qmobile-collapseitem3">
                  <div className="f-qmobile-frame5302">
                    <div className="f-qmobile-texttext3">
                      <span className="f-qmobile-text14 LabelSmall-14px">
                        <span>This is panel header 1</span>
                      </span>
                    </div>
                    <div className="f-qmobile-frame5292">
                      <img
                        src="/playground_assets/righti1438-b5ns.svg"
                        alt="RightI1438"
                        className="f-qmobile-right2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
