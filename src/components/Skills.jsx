import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Design & Technical Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">

          {/* 👨‍🎨 Design Tools */}
          <div className="skills-category">
            <h3>Design Tools</h3>
            <div className="skills-icons">
              {[
                'figma-plain',
                'photoshop-plain',
                'canva-original',
                'illustrator-plain',
                'xd-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* 🌐 Web Platforms */}
          <div className="skills-category">
            <h3>Web Platforms</h3>
            <div className="skills-icons">
              {[
                'wordpress-plain',
                'wix-original',
                'html5-plain',
                'css3-plain',
                'bootstrap-plain',
                'javascript-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* 🧰 Tools & Workflow */}
          <div className="skills-category">
            <h3>Workflow & Tools</h3>
            <div className="skills-icons">
              {[
                'vscode-plain',
                'git-plain',
                'github-plain',
                'google-plain',
                'trello-plain'
              ].map((icon, index) => (
                <div className="skill-icon" title={icon.split('-')[0]} key={index}>
                  <i className={`devicon-${icon} colored`}></i>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;