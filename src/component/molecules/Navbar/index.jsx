import React from "react";
import "./navbanner.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { FAQSection } from "../FAQSection";
import { ContactUs } from "../ContactUs";
export const Navbar = () => {
  return (
    <>
      <div className="navbanner">
        <div className="navbanner-left">
          <div className="navbanner-logo"></div>
        </div>
        <div className="navbanner-right">
          <button className="navbanner-button">
            <Link className="navbanner-text">About Us</Link>
          </button>
          <button className="navbanner-button">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
            >
              Portfolio
            </Link>
          </button>
          <button className="navbanner-button">
            <Link
              to="Service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
            >
              Services
            </Link>
          </button>
          <button className="navbanner-button">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
            >
              Blog
            </Link>
          </button>
          <button className="navbanner-button">
            <Link
              to="FAQSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
            >
              FAQ
            </Link>
          </button>
          <button className="navbanner-button2">
            <Link
              to="ContactUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text2"
            >
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
