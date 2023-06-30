import react, { useState } from "react";
import { Link } from "react-scroll";

import upselLinkedin from "../../../assets/upsel-linkedin.png";
import upselFb from "../../../assets/upsel-fb.png";
import upselInsta from "../../../assets/upsel-insta.png";
import upselTwitter from "../../../assets/upsel-twitter.png";
import upselLine from "../../../assets/upsel-line.png";
import logo from "../../../assets/logo.svg";
import "./footer.css";

export const Footer = () => {
  const [subscribeValue, setSubscribeValue] = useState("");

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();

    // POST LOGIC
    const response = await fetch("/sub", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: subscribeValue }),
    });
    setSubscribeValue("");
  };

  const handleSubscribeChange = (e) => {
    setSubscribeValue(e.target.value);
  };

  return (
    <>
      <section className="footer-sec">
        <div className="footer-top-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <p className="left-txt">
              Upsel is a digital agency, specialising in creative solutions that
              are tailored to your business - helping you gain higher revenues,
              quicker.
            </p>
            <div className="foot-icons">
              <Link to="https://linkedin.com/in/weareupsel">
                <img src={upselLinkedin} alt="linkedin logo" />
              </Link>
              <Link to="https://instagram.com/weareupsel">
                <img src={upselInsta} alt="instagram logo" />
              </Link>
              <Link to=" https://facebook.com/weareupsel">
                <img src={upselFb} alt="facebook logo" />
              </Link>
              <Link to="https://twitter.com/weareupsel">
                <img src={upselTwitter} alt="twitter logo" />
              </Link>
            </div>
          </div>
          <div className="footer-right">
            <div className="newslet-cont">
              <span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  className="footer-newslet"
                  value={subscribeValue}
                  onChange={handleSubscribeChange}
                />
              </span>
              <button onClick={handleSubscribeSubmit}>
                Subscribe To NewsLetter
              </button>
            </div>
            <div className="foot-link-cont">
              <div className="links-left">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link
                      to="aboutus"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contactus"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="links-right">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <Link
                      to="tel:+234-000-0000-788"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      +234-000-0000-788
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="tel:+234-000-0000-788"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      +234-000-0000-788
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:upsel@gmail.com"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="foot-links"
                    >
                      upsel@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tc-p">
          <span className="c-right">© 2023 -Upsel</span>
          <div>
            <img src={upselLine} alt="" />
            <span>Terms</span>
          </div>
          <div>
            <img src={upselLine} alt="" />
            <span>Privacy</span>
          </div>
        </div>
      </section>
    </>
  );
};
