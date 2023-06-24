import react, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { InlineError, Toast } from "../../atoms";
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhone,
} from "../../handlers/Validation";
import { SendEmail, IpAddress } from "./API";

import main from "../../../assets/Ellipse5main.png";
import brown from "../../../assets/Ellipse4brown.png";
import green from "../../../assets/Ellipse6green.png";
import lilac from "../../../assets/Ellipse1lilac.png";
import lightblue from "../../../assets/Ellipse3lightblue.png";
import purple from "../../../assets/Ellipse2purple.png";
import sendIcon from "../../../assets/icon-wrapper.png";

import "./contactus.css";

export const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [budget, setBudget] = useState("");
  const [country, setCountry] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  useEffect(() => {
    // *********** VALIDATION **********
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });

    // ***********
    if (send) {
      toast.success(send.msg);
      setFullName("");
      setEmail("");
      setMessage("");
      setBudget("");
      setSend();
      setPhone("");
    }
  }, [fullName, email, phone, message, send, budget]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (!fullNameError & !emailError & !phoneError & !messageError) {
      SendEmail({
        fullName,
        email,
        phone,
        message,
        budget,
        setSend,
      }).then(() => {
        setButtonLoading(false);
      });
    }
  };

  return (
    <>
      {/* <Toast /> */}
      <section className="contact-sec" id="ContactUs">
        <div className="contact-lefthalf">
          <h2>Get In Touch With Us</h2>
          <h5>You’re interested in...</h5>
          <div className="form-cont">
            <form onSubmit={submitHandler}>
              <div className="checkbox-cont">
                {/* To scroll on mobile */}
                <div className="checkbox-scrollablecont">
                  <div className="checkboxes">
                    <input
                      type="checkbox"
                      name="checkboxes"
                      id="product-design"
                    />
                    <label htmlFor="product-design" className="checkbox-label1">
                      Product Design
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input type="checkbox" name="checkboxes" id="web-dev" />
                    <label htmlFor="web-dev" className="checkbox-label2">
                      Web Development
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input type="checkbox" name="checkboxes" id="marketing" />
                    <label htmlFor="marketing" className="checkbox-label3">
                      Marketing
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input type="checkbox" name="checkboxes" id="branding" />
                    <label htmlFor="branding" className="checkbox-label4">
                      Branding
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-detail-cont">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                {fullNameError && <InlineError error={fullNameError} />}
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <InlineError error={emailError} />}
                <div className="telno">
                  <input
                    type="tel"
                    placeholder="country code"
                    required
                    className="phone-no"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone number"
                    required
                    className="phone-no"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {phoneError && <InlineError error={phoneError} />}
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  cols="30"
                  rows="10"
                ></textarea>
                <input
                  type="number"
                  placeholder="Project budget: (USD)"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={buttonLoading && true}
                className="contact-btn"
              >
                <img src={sendIcon} alt="" />

                {buttonLoading ? "Loading.." : "Send request"}
              </button>
            </form>
          </div>
        </div>
        <div className="contact-righthalf">
          <h2 className="tab-cont-h2">Get In Touch With Us</h2>
          <div className="righthalf-contain">
            <div className="righthalf-anime">
              <div className="righthalf-text">
                <p>
                  We offer a wide range of services at an affordable price
                  point, <br />
                  so businesses can focus on what they do best
                </p>
              </div>
              <img src={brown} className="anime-brown" alt="" />
              <img src={green} className="anime-green" alt="" />
              <img src={lilac} className="anime-lilac" alt="" />
              <img src={lightblue} className="anime-lightblue" alt="" />
              <img src={purple} className="anime-purple" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
