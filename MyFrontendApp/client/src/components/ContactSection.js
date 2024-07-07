import React from 'react';

const ContactSection = () => {
  return (
    <div id="Contact" className="forms-section">
      <div className="wrapper-v2 forms-grid">
        <div className="normal-wrapper">
          <h2 className="heading_55px _24px-bottom">Let’s talk business</h2>
          <p className="paragraph_18px light-grey">Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <div className="form-block w-form">
          <form id="email-form" name="email-form" method="get">
            <label htmlFor="Persons-Name" className="paragraph_16px white">Name</label>
            <input className="text-field w-input" maxLength="256" name="Persons-Name" placeholder="" type="text" id="Persons-Name" required="" />
            <label htmlFor="email" className="paragraph_16px">Email Address</label>
            <input className="text-field w-input" maxLength="256" name="email" placeholder="" type="email" id="email" required="" />
            <label htmlFor="Message" className="paragraph_16px">Message</label>
            <textarea required="" maxLength="5000" id="field" name="field" placeholder="" className="text-field _100px w-input"></textarea>
            <input type="submit" className="form-button w-button" value="LET'S GET STARTED" />
          </form>
          <div className="success w-form-done">
            <div className="success-text">Thank you! Your submission has been received!</div>
          </div>
          <div className="error-message w-form-fail">
            <div className="text-block">Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
