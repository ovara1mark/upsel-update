import react from "react";

import "./story.css";

export const Story = () => {
  return (
    <>
      <div className="story-section">
        <div className="story-section-1">
          <div className="story-content">
            <span className="story-text">Achieve success with ease</span>
            <p className="story-text-1">
              Our approach is fast, easy, and affordable — so that you can
              quickly attain success without breaking the bank. We make sure you
              get the most bang for your buck!
            </p>
          </div>
        </div>
        <div className="story-section-2">
          <div className="story-content">
            <span className="story-text">
              Expert advice for the best results
            </span>
            <p className="story-text-1">
              Our experts are passionate about helping businesses succeed
              through our customised solutions. We have the knowledge and
              experience to provide you with the best advice for achieving
              success.
            </p>
          </div>
        </div>
        <div className="story-section-3">
          <div className="story-content">
            <span className="story-text">
              Increase your revenue quickly and efficiently
            </span>
            <p className="story-text-1">
              Our services are designed to help you increase your revenue faster
              than ever before. We have the right strategies, tools and
              techniques that are sure to bring positive results in no time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
