import react, { useState } from "react";
import { Input } from "../../atoms/Input";
import searchIcon from "../../../assets/vectorsearch.png";
import rightArrIcon from "../../../assets/unioni1365-h6l.svg";
import "./faq-section.css";

export const FAQSection = () => {
  const frequently = [
    {
      title: "What web development services do you offer?",
      contentOne:
        "We offer a range of web development services, including website design and development, e-commerce development, custom web application development, CMS development, and website maintenance and support.",
      contentTwo: "",
    },
    {
      title: " How long does it take to develop a website? ",
      contentOne:
        "The time it takes to develop a website varies depending on the complexity of the project. We typically provide our clients with a timeline during the planning phase, which outlines the milestones and expected delivery dates.",
      contentTwo: "",
    },
    {
      title: "Can you help with digital marketing?",
      contentOne:
        "Yes, we offer digital marketing services, including SEO, social media marketing, PPC advertising, email marketing, and content marketing. Our digital marketing services are designed to help our clients increase their online visibility and generate leads.",
      contentTwo: "",
    },
    {
      title: " Do you offer branding and graphic design services?",
      contentOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      contentTwo: "",
    },
    {
      title: "Do you offer branding and graphic design services? ",
      contentOne:
        "Yes, we offer branding and graphic design services, including logo design, brand identity development, visual identity design, packaging design, and marketing collateral design. Our branding and design services are designed to help our clients create a unique and memorable brand identity.",
      contentTwo: "",
    },
    {
      title:
        "How do you ensure that my website is optimized for search engines? ",
      contentOne:
        "We design and develop our websites with search engine optimization (SEO) in mind. This means that we follow best practices for on-page optimization, including using relevant keywords after carrying out keyword research, creating high-quality content with content pillars, and optimizing website speed and performance. We also provide ongoing SEO services to help our clients improve their search engine rankings and drive more traffic to their website",
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
                  <div className="fq-qna" key={index}>
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
