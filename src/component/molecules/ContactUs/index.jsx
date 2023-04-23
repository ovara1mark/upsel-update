import react from "react";
// import "./contact";
import "./contactus.css";

export const ContactUs = (props) => {
  return (
    <>
      <div className="contactus-container">
        <div className="contactus-contactus">
          <div className="contactus-content">
            <span className="contactus-text">
              <span>Get In Touch With Us</span>
            </span>
            <div className="contactus-section">
              <div className="contactus-group29">
                <div className="contactus-left">
                  <div className="contactus-frame533">
                    <div className="contactus-group30">
                      <span className="contactus-text02">
                        <span>You’re interested in...</span>
                      </span>
                    </div>
                  </div>
                  <form className="contact-form">
                    <div className="contactus-form">
                      <div className="contactus-tabs">
                        <div className="contactus-tags">
                          <div className="contactus-tagpurple">
                            <span className="contactus-text04">
                              <span>
                                Product Design
                                <span />
                              </span>
                            </span>
                          </div>
                          <div className="contactus-tagpurple1">
                            <span className="contactus-text06">
                              <span>Web Developpment</span>
                            </span>
                          </div>
                          <div className="contactus-tagpurple2">
                            <span className="contactus-text08">
                              <span>Marketing</span>
                            </span>
                          </div>
                          <div className="contactus-tagpurple3">
                            <span className="contactus-text10">
                              <span>Branding</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="contactus-frame531">
                        <div className="contactus-contactform">
                          <div className="contactus-inputs">
                            <div className="contactus-input">
                              <div className="contactus-wrapper">
                                <span className="contactus-text12">
                                  <input
                                    type="text"
                                    className="full-name"
                                    name="fullname"
                                    placeholder="Your name"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="contactus-input1">
                              <div className="contactus-wrapper1">
                                <span className="contactus-text14">
                                  <input
                                    type="email"
                                    className="email"
                                    name="email"
                                    placeholder="Your email"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="contactus-phone">
                              <div className="contactus-framedropdowntriggerlegacy">
                                <div className="contactus-icon">
                                  <div className="contactus-iconwrapper">
                                    <div className="contactus-flag">
                                      {/* <div className="contactus-group8">
                                      <img
                                        src="/playground_assets/vectori1365-3rj.svg"
                                        alt="VectorI1365"
                                        className="contactus-vector"
                                      />
                                      <img
                                        src="/playground_assets/vectori1365-sf9p.svg"
                                        alt="VectorI1365"
                                        className="contactus-vector1"
                                      />
                                      <img
                                        src="/playground_assets/vectori1365-9v5.svg"
                                        alt="VectorI1365"
                                        className="contactus-vector2"
                                      />
                                    </div> */}
                                    </div>
                                  </div>
                                </div>
                                <span className="contactus-text16 H5regular">
                                  <input
                                    type="tel"
                                    className="tel"
                                    id="tel"
                                    value="+234"
                                  />
                                </span>
                                <div className="contactus-iconwrapper1">
                                  <img
                                    src="/playground_assets/unioni1365-na6m.svg"
                                    alt="UnionI1365"
                                    className="contactus-union"
                                  />
                                </div>
                              </div>
                              <div className="contactus-input2">
                                <div className="contactus-wrapper2">
                                  <span className="contactus-text18">
                                    <input
                                      type="tel"
                                      placeholder="Your Phone number"
                                      className="contact-phone"
                                      name="tel"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="contactus-textarea">
                              <span className="contactus-text20">
                                <span>
                                  <textarea
                                    name="textarea"
                                    placeholder="Tell us about your project..."
                                    className="tell-us"
                                  ></textarea>
                                  <br></br>
                                  <span></span>
                                </span>
                              </span>
                            </div>
                            <div className="contactus-input3">
                              <div className="contactus-wrapper3">
                                <span className="contactus-text25">
                                  <input
                                    type="text"
                                    className="budget"
                                    name="budget"
                                    placeholder="Project budget: (USD)"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <button className="contactus-button">
                            <div className="contactus-iconwrapper2">
                              <img
                                src="/playground_assets/unioni1365-b6hk.svg"
                                alt="UnionI1365"
                                className="contactus-union1"
                              />
                            </div>
                            <span className="contactus-text27">
                              <span>Send request</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="contactus-quotes">
                <img
                  src="/playground_assets/ellipse5i1365-3r5f-400h.png"
                  alt="Ellipse5I1365"
                  className="contactus-ellipse5"
                />
                <span className="contactus-text29">
                  <span>
                    <span>
                      We offer a wide range
                      <span />
                    </span>
                    <br></br>
                    <span>
                      of services at an affordable price point,
                      <span />
                    </span>
                    <br></br>
                    <span>
                      so businesses can focus on what they do best
                      <span />
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
                <img
                  src="/playground_assets/ellipse1i1365-0jy-200h.png"
                  alt="Ellipse1I1365"
                  className="contactus-ellipse1"
                />
                <img
                  src="/playground_assets/ellipse6i1365-ku5b-200h.png"
                  alt="Ellipse6I1365"
                  className="contactus-ellipse6"
                />
                <img
                  src="/playground_assets/ellipse2i1365-bi6e-200h.png"
                  alt="Ellipse2I1365"
                  className="contactus-ellipse2"
                />
                <img
                  src="/playground_assets/ellipse3i1365-0cw-200h.png"
                  alt="Ellipse3I1365"
                  className="contactus-ellipse3"
                />
                <img
                  src="/playground_assets/ellipse4i1365-wjdr-200h.png"
                  alt="Ellipse4I1365"
                  className="contactus-ellipse4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-container-2">
        <div className="contactform-contactform">
          <div className="contactform-content">
            <span className="contactform-text">
              <span className="contactform-text01">
                <span>Get In Touch With Us</span>
                <br></br>
                <span></span>
              </span>
              <span>You’re interested in...</span>
            </span>
            <form>
              <div className="contactform-frame528">
                <div className="contactform-frame532">
                  <div className="contactform-tags">
                    <div className="contactform-tagpurple">
                      <span className="contactform-text06">
                        <span>
                          Product Design
                          <span />
                        </span>
                      </span>
                    </div>
                    <div className="contactform-tagpurple1">
                      <span className="contactform-text08">
                        <span>Web Developpment</span>
                      </span>
                    </div>
                    <div className="contactform-tagpurple2">
                      <span className="contactform-text10">
                        <span>Marketing</span>
                      </span>
                    </div>
                    <div className="contactform-tagpurple3">
                      <span className="contactform-text12">
                        <span>Branding</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contactform-contactform1"></div>
              </div>
            </form>

            <button className="contactform-button">
              <div className="contactform-iconwrapper2">
                <img
                  alt="UnionI1438"
                  src="/playground_assets/unioni1365-b6hk.svg"
                  className="contactform-union1"
                />
              </div>
              <span className="contactform-text29">
                <span>Send request</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
