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

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/java.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Java</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/python.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Python</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-c-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">C</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-c-480_1.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">C++</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-javascript-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">JavaScript</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-typescript-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">TypeScript</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* --------------------------------    2      ------------------------------- */}
        <div className="skills-wrapper _48px-right_p">
          <img src="images/Visual-Design.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Web Development</h3>
          <div className="skill-set">

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-html-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">HTML</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-css-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">CSS</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-react-native-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">React</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/net.svg" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">.NET</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-nodejs-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Node.js</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-flask-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Flask</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/rest-api-icon.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">RESTful API</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/ajax.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">AJAX</p>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------------    3   ---------------------------- */}
        <div className="databases skills-wrapper _48px-right_p">
          <img src="images/Motion-Design.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Databases</h3>
          <div className="skill-set">

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/pngwing.com.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">SQL</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/pngwing.com.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">NoSQL</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-mysql-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">MySQL</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-mongodb-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">MongoDB</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-sqlite-500.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">SQLite</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/icons8-redis-480.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Redis</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/elastic.svg" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Elastic</p>
              </div>
            </div>

          </div>
        </div>

        {/* ------------------------------------    4   --------------------------- */}
        <div className="game-design skills-wrapper _48px-right_p">
          <img src="images/Photography.svg" alt="" className="skill-icon" />
          <h3 className="heading-skills">Game Design &amp; Design</h3>
          <div className="skill-set">

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/download.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Rhinoceros 3D</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/maya.jpg" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Maya</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/ps.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Photoshop</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/pr.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Premiere</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/p5js.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">p5.js</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/p5paly.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">p5play</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/puzzle.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">PuzzleScript</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/bitsy.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Bitsy</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/gbstudio.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">GB Studio</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/twine.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">Twine</p>
              </div>
            </div>

            <div className="ind-skill">
              <div className="div-block-9">
                <img src="images/rpg.png" loading="lazy" alt="" />
              </div>
              <div className="skill-name">
                <p className="p-skill-name">RPG Maker MV</p>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------------------- */}

        <div className='rest-skills skills-wrapper _48px-right_p'>
            <h3 className="heading-skills">Other</h3>
            <div className='skill-set-other'>
                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Linux</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Git</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>OOP</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>OOA</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Apache ActiveMQ</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>EIP</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Design Pattern</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Agile</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Kanban</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Postman</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Docker</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Figma</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>Webflow</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>HCI</p>
                    </div>
                </div>

                <div className='ind-skill-other'>
                    <div className='skill-name-other'>
                        <p className='p-skill-name-other'>etc.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
