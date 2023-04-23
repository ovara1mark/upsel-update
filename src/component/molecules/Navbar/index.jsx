import React from "react";
import "./navbanner.css";

export const Navbar = (props) => {
  return (
    <>
      <div className="navbanner">
        <div className="navbanner-left">
          <div className="navbanner-logo"></div>
        </div>
        <div className="navbanner-right">
          <button className="navbanner-button">
            <span className="navbanner-text">About Us</span>
          </button>
          <button className="navbanner-button">
            <span className="navbanner-text">Portfolio</span>
          </button>
          <button className="navbanner-button">
            <span className="navbanner-text">Services</span>
          </button>
          <button className="navbanner-button">
            <span className="navbanner-text">Blog</span>
          </button>
          <button className="navbanner-button">
            <span className="navbanner-text">FAQ</span>
          </button>
          <button className="navbanner-button2">
            <span className="navbanner-text2">Contact Us</span>
          </button>
        </div>
      </div>
    </>
  );
};
