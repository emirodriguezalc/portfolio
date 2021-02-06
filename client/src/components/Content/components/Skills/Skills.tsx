import React from 'react';
import './Skills.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="Skills" id="skills">
      <h2 className="skills-title">My Skill Set</h2>
      <div className="skills-table">
        <div className="skill-container">
          <h3 className="skills-subtitle">Frontend</h3>
          <div className="skills-box">
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
              alt="React"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
              alt="Bootstrap"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
              alt="HTML5"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              alt="JavaScript"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
              alt="TypeScript"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/jquery.png"
              alt="jQuery"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
              alt="Sass"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
              alt="CSS3"
            />
          </div>
        </div>
        <div className="skill-container">
          <h3 className="skills-subtitle">Backend </h3>
          <div className="skills-box">
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              alt="JavaScript"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
              alt="MongoDB"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
              alt="Node.js"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
              alt="Express.js"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
              alt="MySQL"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/graphql.png"
              alt="GraphQL"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
            />
          </div>
        </div>
        <div className="skill-container">
          <h3 className="skills-subtitle">Also</h3>
          <div className="skills-box">
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/chai.png"
              alt="Chai"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
              alt="Git"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/firebase.png"
              alt="Firebase"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/mocha.png"
              alt="Mocha"
            />
            <img
              className="skills-icon"
              src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
              alt="Figma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
