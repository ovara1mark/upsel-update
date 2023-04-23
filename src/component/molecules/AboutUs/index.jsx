import react from "react";
import arrow from "../../../assets/unioni1365-h6l.svg";
import david from "../../../assets/david-von-diemar-0BZcsD8UVmM-unsplash.jpg";
import jonathan from "../../../assets/jonathan-borba-hl6uG9cHW5A-unsplash.jpg";
import tengku from "../../../assets/tengku-nadia-fz8_SONkBB8-unsplash.jpg";
import logo from "../../../assets/logo.svg";
import "./about.css";

export const AboutUs = (props) => {
  return (
    <>
      <div className="about-container">
        <div className="upsel-section">
          <div className="upsel-section-left">
            <span className="about-text-1">UPSEL</span>
            <div className="about-content">
              <p className="about-text-2">
                To strengthen your brand and increase website traffic, our team
                of professionals will collaborate with you to create a unique
                approach. We comprehend the particular difficulties that
                healthcare and event planning companies confront, and we have
                the experience and knowledge to develop solutions that will make
                you stand out in a congested online industry.
              </p>
              <button className="about-button">
                <div className="about-iconwrapper">
                  <img src={arrow} alt="UnionI1365" className="about-union" />
                </div>
                <span className="button-text">Grow Your Business Now</span>
              </button>
            </div>
          </div>
          <div className="upsel-section-right">
            <div className="about-frame">
              <div className="about-frame-1">
                <img
                  src={david}
                  alt="Ellipse171365"
                  className="about-ellipse1"
                />
              </div>
              <div className="about-frame-2">
                <img
                  src={jonathan}
                  alt="Ellipse161365"
                  className="about-ellipse2"
                />
              </div>
              <div className="about-frame-3">
                <img
                  src={tengku}
                  alt="Ellipse181365"
                  className="about-ellipse3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="development-section">
          <div className="develop-section">
            <p className="develop-content-head">
              Developing solutions that effectively change things
            </p>
            <p className="develop-content">
              We provide a variety of services, such as Branding, Website design
              and development, Search engine optimization (SEO), Social media
              management and Marketing. Our mission is to support you in
              achieving your business goals and expanding your customer base.
            </p>
            <button className="about-button-2">
              <span className="button-text-2">Contact Us Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="content-logo">
          <img src={logo} alt="logo" className="content-lg" />
        </div>
        <div className="content-content">
          <p className="content-1">
            Our team is a unique blend of developers, designers, copywriters,
            strategists, and creatives. Using the latest web technologies we
            help companies and brands succeed online.
          </p>
          <p className="content-2">
            Our passion is helping people and companies succeed online. From
            business to marketing and technology, we know our stuff because
            we've been there from the beginning. We're honest, hard-working,
            responsive, convenient, and helpful.
          </p>
          <p className="content-3">
            Our experience with startups and corporations across the globe
            provides us with a ­­­­solid foundation for success
          </p>
        </div>
      </div>
      <div className="core-section">
        <div className="core-content">
          <p className="core-paragraph">
            At our core, we are dedicated to providing extraordinary results and
            exceptional customer service. We believe we can develop solutions
            that effectively changes things if we collaborate closely with our
            clients and comprehend their particular demands.
          </p>
        </div>
        <div className="core-content-2">
          <p className="core-paragraph">
            Thank you for considering our agency for your online presence needs.
            We look forward to working with you and helping you take your
            business to the next level.
          </p>

          <button className="about-button">
            <div className="about-iconwrapper">
              <img src={arrow} alt="UnionI1365" className="about-union" />
            </div>
            <span className="button-text">Grow Your Business Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
