import React from 'react';

const EducationSection = () => {
  return (
    <div id="Exp" className="education-section">
      <div className="wrapper">
        <div className="flex-vertical_left_top">
          <div className="overline_16px">Education</div>
          <h2 className="heading_55px">Education EXPERIENCE</h2>
        </div>
        <div className="w-layout-grid experience-grid">
          <div className="experience-block">
            <div className="number">01</div>
            <h3 className="heading-edu">Hefei No.8 Middle School</h3>
          </div>
          <div className="experience-block">
            <div className="number">02</div>
            <h3 className="heading-edu">University of Wisconsin - Madison</h3>
            <p className="paragraph-program">BS Computer Science                    <em>May 2023</em></p>
          </div>
          <div className="experience-block">
            <div className="number">03</div>
            <h3 className="heading-edu">The University of Chicago</h3>
            <p className="paragraph-program">Master Program of CS                   <em>Dec 2024</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
