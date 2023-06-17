import react, { useState } from "react";

import main from "../../../assets/ellipse 5main.png";
import brown from "../../../assets/ellipse 4brown.png";
import green from "../../../assets/ellipse 6green.png";
import lilac from "../../../assets/ellipse 1lilac.png";
import lightblue from "../../../assets/ellipse 3lightblue.png";
import purple from "../../../assets/ellipse 2purple.png";
import sendIcon from "../../../assets/icon-wrapper.png";

import "./contactus.css";

export const ContactUs = () => {
  const initialData = {
    name: "",
    email: "",
    tel: "",
    phone: "",
    message: "",
    budget: "",
    checkboxes: [],
  };

  const [formValues, setFormValues] = useState(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formResponse = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (formResponse.ok) {
        console.log("Form submitted successfully!");
        setFormValues(initialData);
      } else {
        console.log("Error submitting form.");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const checkboxes = formValues.checkboxes.slice();

      if (checked) {
        checkboxes.push(value);
      } else {
        const index = checkboxes.indexOf(value);
        if (index !== -1) {
          checkboxes.splice(index, 1);
        }
      }

      setFormValues((prev) => ({
        ...prev,
        checkboxes: checkboxes,
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <>
      <section className="contact-sec">
        <div className="contact-lefthalf">
          <h2>Get In Touch With Us</h2>
          <h5>You’re interested in...</h5>
          <div className="form-cont">
            <form onSubmit={handleSubmit}>
              <div className="checkbox-cont">
                {/* To scroll on mobile */}
                <div className="checkbox-scrollablecont">
                  <div className="checkboxes">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      name="checkboxes"
                      id="product-design"
                    />
                    <label htmlFor="product-design" className="checkbox-label1">
                      Product Design
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      name="checkboxes"
                      id="web-dev"
                    />
                    <label htmlFor="web-dev" className="checkbox-label2">
                      Web Development
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      name="checkboxes"
                      id="marketing"
                    />
                    <label htmlFor="marketing" className="checkbox-label3">
                      Marketing
                    </label>
                  </div>
                  <div className="checkboxes">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      name="checkboxes"
                      id="branding"
                    />
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
                  id=""
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  id=""
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                <div className="telno">
                  <input
                    type="tel"
                    value={formValues.tel}
                    onChange={handleChange}
                    name="tel"
                    className="tel-api"
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Your Phone number"
                    name="phone"
                    id=""
                    required
                    className="phone-no"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formValues.message}
                  onChange={handleChange}
                  id=""
                  required
                  cols="30"
                  rows="10"
                ></textarea>
                <input
                  type="number"
                  placeholder="Project budget: (USD)"
                  name="budget"
                  id=""
                  value={formValues.budget}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="contact-btn">
                <img src={sendIcon} alt="" />
                Send request
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
