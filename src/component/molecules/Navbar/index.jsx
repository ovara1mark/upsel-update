import React, { useState } from "react";
import "./navbanner.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { FAQSection } from "../FAQSection";
import { ContactUs } from "../ContactUs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/logo.svg";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);
  return (
    <>
      <div className="navbanner">
        <div className="navbanner-left">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            <div className="navbanner-logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
          </Link>
        </div>
        <div className="navbanner-right">
          <button className="navbanner-button">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
            >
              About Us
            </Link>
          </button>
          <button className="navbanner-button">
            <Link
              activeClass="active"
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
              activeClass="active"
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
              activeClass="active"
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
              activeClass="active"
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
              activeClass="active2"
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
        <div className="navbanner-right-2">
          <HiOutlineMenuAlt3
            onClick={() => setMenu(!menu)}
            className="hi-menu"
          />
        </div>
      </div>
      <div className={menu ? "show" : "hide"}>
        <div className={menu ? "drop-menu-child" : "drop-menu--"}>
          <div className="navbanner-left-3">
            <AiOutlineClose onClick={closeMenu} className="hi-menu" />
          </div>
          <div className="navbanner-right-3">
            <div className="navbanner-left drop-btn">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                <div className="navbanner-logo">
                <img src={logo} alt="logo" className="logo" />
                </div>
              </Link>
            </div>
            <button className="navbanner-button drop-btn">
              <Link
                activeClass="active"
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </button>
            <button className="navbanner-button drop-btn">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </button>
            <button className="navbanner-button drop-btn">
              <Link
                activeClass="active"
                to="Service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                Services
              </Link>
            </button>
            <button className="navbanner-button drop-btn">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </button>
            <button className="navbanner-button drop-btn">
              <Link
                activeClass="active"
                to="FAQSection"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </button>
            <button className="navbanner-button2">
              <Link
                activeClass="active2"
                to="ContactUs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
