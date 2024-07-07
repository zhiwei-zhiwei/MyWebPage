import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="wrapper grid-3_col">
        <div className="normal-wrapper _48px-right_p">
          <h2 className="heading_55px _24px-bottom">Skillset</h2>
          <p className="paragraph_18px light-grey">There are 4 major kinds of skills I have, which include Software Engineering and Game Design. Whatever your needs are, I can pretty much take on any challenge.</p>
        </div>

        {/* ------------------------------      1       -------------------------------- */}
        <div className="skills-wrapper _48px-right_p">
          <img src="images/Product-Design.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Programming Language</h3>
          <div className="skill-set">
            {/* Add individual skills here */}
            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/java.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Java</p>
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
        
        {/* --------------------------------    2      ------------------------------- */}
        <div className="skills-wrapper _48px-right_p">
          <img src="images/Visual-Design.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Web Development</h3>
          <div className="skill-set">
            {/* Add individual skills here */}
            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-html-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">HTML</p>
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* -----------------------------------    3   ---------------------------- */}
        <div className="skills-wrapper _48px-right_p">
          <img src="images/Motion-Design.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Databases</h3>
          <div className="skill-set">
            {/* Add individual skills here */}
            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/pngwing.com.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">SQL</p>
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* ------------------------------------    4   --------------------------- */}
        <div className="skills-wrapper _48px-right_p">
          <img src="images/Photography.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Game Design &amp; Design</h3>
          <div className="skill-set">
            {/* Add individual skills here */}
            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/download.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Rhinoceros 3D</p>
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* --------------------------------------------------------------- */}
      </div>
    </section>
  );
};

export default SkillsSection;
