import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper footer-grid">
        <div className="normal-wrapper flex-vertical_left_space-betwen">
          <div className="normal-wrapper">
            <a href="index.html" aria-current="page" className="footer-logo w-inline-block w--current">
              <img src="images/Robin-Logo.svg" height="40" alt="" />
            </a>
            <div className="normal-wrapper">
              <a href="#" className="social-link-block w-inline-block">
                <img src="images/Twitter.svg" alt="" className="social-icons" />
              </a>
              <a href="#" className="social-link-block w-inline-block">
                <img src="images/Dribbble.svg" alt="" className="social-icons" />
              </a>
              <a href="#" className="social-link-block w-inline-block">
                <img src="images/LinkedIn.svg" alt="" className="social-icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="normal-wrapper flex-horizontal_left_top">
          <a href="#" className="footer-link-block w-inline-block">
            <div className="footer-link">Home</div>
            <div className="footer-link">About</div>
            <div className="footer-link">Work</div>
            <div className="footer-link">Process</div>
          </a>
          <a href="#" className="footer-link-block w-inline-block">
            <div className="footer-link">Store</div>
            <div className="footer-link">Blog</div>
            <div className="footer-link">Reading List</div>
          </a>
        </div>
        <div className="footer-copyright">
          <div className="paragraph_16px light-grey">No Copyright 2020 • Robin Williams. Webflow cloneable</div>
          <a href="https://chethankvs.design" target="_blank" className="paragraph_16px cyan">Created by Chethan KVS</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
