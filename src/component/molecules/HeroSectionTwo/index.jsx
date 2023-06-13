import react from "react";
import "./landing.css";
import blue from "../../../assets/blue.png";
import pie from "../../../assets/pie.png";
import doctor from "../../../assets/doctor1.png";
import twoface from "../../../assets/two-face.png";

export const HeroSectionTwo = () => {
  return (
    <div className="landing-container">
      <div className="landing-landing">
        <div className="landing-container-text">
          <div className="landing-text">
            <div className="text-left">
              <span className="title-left">Health</span>
              <p className="title-text-left">
                Enhancing Healthcare <span className="t-left">Experience</span>{" "}
                with Technology
              </p>
            </div>
            <div className="text-right">
              <p className="t-right">
                Our solutions span across the healthcare industry, including
                hospitals, clinics, and health insurance companies.
              </p>
              <button className="t-right-button">Contact Us Now</button>
            </div>
          </div>
          <div className="landing-image">
            <img src={blue} alt="image" className="one-blue-face" />
          </div>
        </div>
        <div className="landing-container-image">
          <div className="image-left-landing">
            <img src={pie} alt="pie" className="pie" />
          </div>
          <div className="image-right-landing">
            <div className="doctor-container">
              <img src={doctor} alt="doctor" className="doctor" />
            </div>

            <img src={twoface} alt="twoface" className="twoface" />
          </div>
        </div>
      </div>
    </div>
  );
};
