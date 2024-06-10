import React from 'react';

const SkillsSection = () => {
  return (
    <section className="skills">
      <h1>SKILLS AND TOOLS</h1>
      <div className="icons">
        <div className="html">
          <p>HTML</p><i className="fa-brands fa-html5 fa-2xl"></i>
        </div>
        <div className="css">
          <p>CSS</p><i className="fa-brands fa-css3-alt fa-2xl"></i>
        </div>
        <div className="js">
          <p>JAVASCRIPT</p><i className="fa-brands fa-js fa-2xl"></i>
        </div>
        <div className="wp">
          <p>WORDPRESS</p><i className="fa-brands fa-wordpress fa-2xl"></i>
        </div>
        <div className="gh">
          <p>GITHUB</p><i className="fa-brands fa-github fa-2xl"></i>
        </div>
        <div className="figma">
          <p>FIGMA</p><i className="fa-brands fa-figma fa-2xl"></i>
        </div>
      </div>
      <p>
        Airtable | Local | Procreate | Adobe Photoshop | Adobe Lightroom | Adobe Premiere Pro | Adobe Portfolio | Meta Business Suite
      </p>
    </section>
  );
};

export default SkillsSection;
