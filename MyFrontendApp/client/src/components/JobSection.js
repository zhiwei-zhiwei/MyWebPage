import React from 'react';

const JobSection = () => {
  return (
    <div id="Work" className="job-section">
      <div className="wrapper projects-grid">
        <div className="normal-wrapper">
          <div className="normal-wrapper _48px-right_p _80px-bottom_m">
            <div className="overline_16px">Jobs</div>
            <h2 className="heading_55px">Works that I’ve done </h2>
          </div>
          <a href="#" className="project-wrapper _24px-bottom_m w-inline-block">
            <div className="project-description">
              <h3 className="heading_24px">Epic System</h3>
              <p className="paragraph_18px light-grey">Back-End Developer - Capstone Course (Madison, WI)<br />Sep 2022 - Dec 2022</p>
              <div className="arrow-div-epic">
                <img src="images/Arrow.svg" alt="Project Arrow Link" />
              </div>
            </div>
            <div className="w-layout-blockcontainer container-epic w-container">
              <div style={{ display: 'none', opacity: 0 }} className="div-block-11-epic">
                <div className="text-block-2">
                  <br />●  Utilized Epic's FHIR API to extract critical patient data, streamlining diagnostic and treatment processes for physicians
                  <br /><br />●  Enhanced data retrieval speed by 60% through Python-based regular expressions to parse census website information
                  <br /><br />●  Secured patient-related SDOH data in an Azure SQL database, ensuring robust data protection and access efficiency
                  <br />‍<br />●  Developed web-based data visualizations to present patient Social Determinants Of Health (SDOH) factors, aiding doctors in medical assessment and diagnosis
                </div>
              </div>
            </div>
          </a>
          {/* Add more job experiences as needed */}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
