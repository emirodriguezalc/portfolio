import React from 'react';
import './About.scss';

interface Props {
  title?: string;
}

export const About: React.FC<Props> = () => {
  return (
    <section className="About">
      <div id="about" className="content-placeholder" />
      <h1 className="about-title">Name Anothername</h1>
      <h2 className="about-subtitle">FULL STACK WEB DEVELOPER</h2>
      <section className="about-info">
        <p className="about-text">
          <p className="about-text-title">
            <b>Text about me.</b>
          </p>
          <br />
          I am a dreamer.
          <br />
          I love developing.
          <br />
          I enjoy creating quality products.
          <br />
          I am a deep thinker.
          <br />
          I contemplate. I think scalability. Hire me.
          <br />
        </p>
        <p className="about-stack">
          <p className="about-stack-title">
            <b>Stack</b>
          </p>
          <br />
          <img
            className="about-stack-image"
            src="/assets/html-css-js-icon.png"
            alt=""
          />
          <div className="about-stack-image__container">
            <img
              className="about-stack-image"
              src="/assets/node-icon.png"
              alt=""
            />
            <img
              className="about-stack-image"
              src="/assets/react-icon.png"
              alt=""
            />
          </div>
          <div className="about-stack-image__container">
            <img
              className="about-stack-image"
              src="/assets/express-icon.png"
              alt=""
            />
            <img
              className="about-stack-image"
              src="/assets/rest-api-icon.png"
              alt=""
            />
          </div>
          <div className="about-stack-image__container">
            <img
              className="about-stack-image"
              src="/assets/regex-icon.png"
              alt=""
            />
            <img
              className="about-stack-image"
              src="/assets/webpack-icon.png"
              alt=""
            />
          </div>
          <div className="about-stack-image__container">
            <img
              className="about-stack-image"
              src="/assets/mongodb-icon.png"
              alt=""
            />
            <img
              className="about-stack-image"
              src="/assets/postgresql-icon.png"
              alt=""
            />
          </div>
        </p>
      </section>
    </section>
  );
};

export default About;
