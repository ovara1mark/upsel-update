import react, { useState } from "react";

import upselLinkedin from "../../../assets/upsel-linkedin.png";
import upselFb from "../../../assets/upsel-fb.png";
import upselInsta from "../../../assets/upsel-insta.png";
import upselTwitter from "../../../assets/upsel-twitter.png";
import upselLine from "../../../assets/upsel-line.png";
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
      <div className="footer-container">
        <div className="footer-footer">
          <div className="footer-content">
            <div className="footer-navlinks">
              <div className="footer-colum01">
                <div className="footer-logo">
                  <div className="footer-logo1"></div>
                </div>
                <div className="footer-texttext">
                  <span className="footer-text">
                    <p className="footer-text2">
                      Upsel is a digital agency, specialising in creative
                      solutions that are tailored to your business - helping you
                      gain higher revenues, quicker.
                    </p>
                  </span>
                </div>
                <div className="footer-colum011">
                  <div className="footer-links">
                    <img
                      src={upselLinkedin}
                      alt="linkedin Icon"
                      className="footer-fabrandslinkedinin"
                    />
                    <img
                      src={upselInsta}
                      alt="fontistoinstagram1365"
                      className="footer-fontistoinstagram"
                    />
                    <img
                      src={upselFb}
                      alt="Checkboxsavebrandicofacebook1365"
                      className="footer-checkboxsavebrandicofacebook"
                    />
                    <img
                      src={upselTwitter}
                      alt="brandicotwitterbird1365"
                      className="footer-brandicotwitterbird"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-column2">
                <div className="footer-input">
                  <form className="news-letter">
                    <div className="footer-wrapper">
                      <div className="footer-wrapper1">
                        <span className="footer-text02">
                          <input
                            type="email"
                            name="email"
                            placeholder="example @email.com"
                            className="footer-input2"
                            value={subscribeValue}
                            onChange={handleSubscribeChange}
                          />
                        </span>
                      </div>
                      <button
                        onClick={handleSubscribeSubmit}
                        className="footer-button"
                      >
                        <span className="footer-text04">
                          <span>Subscribe To NewsLetter</span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="footer-frame1">
                  <div className="footer-right">
                    <span className="footer-text06">
                      <span>Company</span>
                    </span>
                    <div className="footer-links1">
                      <span className="footer-text08">
                        <span>About</span>
                      </span>
                      <span className="footer-text10">
                        <span>Blog</span>
                      </span>
                      <span className="footer-text12">
                        <span>Contact us</span>
                      </span>
                      <span className="footer-text14">
                        <span>Careers</span>
                      </span>
                    </div>
                  </div>
                  <div className="footer-left">
                    <span className="footer-text16">
                      <span>Contact Us</span>
                    </span>
                    <div className="footer-links2">
                      <span className="footer-text18">
                        <span>+234-000-0000-788</span>
                      </span>
                      <span className="footer-text20">
                        <span> +234-000-0000-788</span>
                      </span>
                      <span className="footer-text22">
                        <span>upsel@gmail.com</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-footnote">
              <div className="footer-footnote1">
                <span className="footer-text24">
                  <span>© 2023 -Upsel</span>
                </span>
                <img src={upselLine} alt="Line11365" className="footer-line1" />
                <span className="footer-text26">
                  <span>
                    Terms
                    <span />
                  </span>
                </span>
                <img src={upselLine} alt="Line21365" className="footer-line2" />
                <span className="footer-text28">
                  <span>Privacy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container-2">
        <div className="footer-footer">
          <div className="footer-content">
            <div className="footer-navlinks">
              <div className="footer-colum01">
                <div className="footer-logo">
                  <div className="footer-logo1"></div>
                </div>
                <div className="footer-texttext">
                  <span className="footer-text">
                    <span>
                      Upsel is a digital agency, specialising in creative
                      solutions that are tailored to your business - helping you
                      gain higher revenues, quicker.
                    </span>
                  </span>
                </div>
                <div className="footer-colum011">
                  <div className="footer-links">
                    <img
                      src={upselLinkedin}
                      alt="fabrandslinkedinin1438"
                      className="footer-fabrandslinkedinin"
                    />
                    <img
                      src={upselInsta}
                      alt="fontistoinstagram1438"
                      className="footer-fontistoinstagram"
                    />
                    <img
                      src={upselFb}
                      alt="Checkboxsavebrandicofacebook1438"
                      className="footer-checkboxsavebrandicofacebook"
                    />
                    <img
                      src={upselTwitter}
                      alt="brandicotwitterbird1438"
                      className="footer-brandicotwitterbird"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-column2">
                <div className="footer-input">
                  <div className="footer-wrapper">
                    <div className="footer-wrapper1">
                      <input
                        type="text"
                        placeholder="example @email.com"
                        className="footer-input2"
                        value={subscribeValue}
                        onChange={handleSubscribeChange}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubscribeSubmit}
                    className="footer-button"
                  >
                    <span className="footer-text04">
                      <span>Subscribe To NewsLetter</span>
                    </span>
                  </button>
                </div>
                <div className="footer-frame1">
                  <div className="footer-right">
                    <span className="footer-text06">
                      <span>Company</span>
                    </span>
                    <div className="footer-links1">
                      <span className="footer-text08">
                        <span>About</span>
                      </span>
                      <span className="footer-text10">
                        <span>Blog</span>
                      </span>
                      <span className="footer-text12">
                        <span>Contact us</span>
                      </span>
                      <span className="footer-text14">
                        <span>Careers</span>
                      </span>
                    </div>
                  </div>
                  <div className="footer-left">
                    <span className="footer-text16">
                      <span>Contact Us</span>
                    </span>
                    <div className="footer-links2">
                      <span className="footer-text18">
                        <span>+234-000-0000-788</span>
                      </span>
                      <span className="footer-text20">
                        <span> +234-000-0000-788</span>
                      </span>
                      <span className="footer-text22">
                        <span>upsel@gmail.com</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-footnote">
              <div className="footer-footnote1">
                <span className="footer-text24">
                  <span>© 2023 -Upsel</span>
                </span>
                <img src={upselLine} alt="Line11438" className="footer-line1" />
                <span className="footer-text26">
                  <span>
                    Terms
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <img src={upselLine} alt="Line21438" className="footer-line2" />
                <span className="footer-text28">
                  <span>Privacy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
