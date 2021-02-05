import React from 'react';
import './Skills.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  /*   const imageSrc = [
    '/assets/html-css-js-icon.png',
    '/assets/node-icon.png',
    '/assets/react-icon.png',
    '/assets/express-icon.png',
    '/assets/rest-api-icon.png',
    '/assets/regex-icon.png',
    '/assets/webpack-icon.png',
    '/assets/mongodb-icon.png',
    '/assets/postgresql-icon.png',
  ]; */
  return (
    <section className="Skills" id="skills">
      {/*       <div id="skills" className="content-placeholder" />
      Skills
      <br />
      <div className="about-info__stack">
        {imageSrc.map((item) => (
          <img className="about-info__stack-image" src={item} alt="" />
        ))}
      </div> */}
      <h2>My Skill Set</h2>
      <table>
        <tr>
          <td valign="top" width="33%">
            <h3>Frontend</h3>
            <img
              src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
              alt="React"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
              alt="Bootstrap"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
              alt="HTML5"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              alt="JavaScript"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
              alt="TypeScript"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/jquery.png"
              alt="jQuery"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
              alt="Sass"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
              alt="CSS3"
              height="50"
            />
          </td>
          <td valign="top" width="33%">
            <h3>Backend </h3>
            <img
              src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              alt="JavaScript"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
              alt="MongoDB"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
              alt="Node.js"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
              alt="Express.js"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
              alt="MySQL"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/graphql.png"
              alt="GraphQL"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
              height="50"
            />
          </td>
          <td valign="top" width="33%">
            <h3>Also</h3>
            <img
              src="https://profilinator.rishav.dev/skills-assets/chai.png"
              alt="Chai"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
              alt="Git"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/firebase.png"
              alt="Firebase"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/mocha.png"
              alt="Mocha"
              height="50"
            />
            <img
              src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
              alt="Figma"
              height="50"
            />
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Skills;
