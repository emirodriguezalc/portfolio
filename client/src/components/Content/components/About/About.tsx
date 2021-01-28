import React from 'react';
import './About.scss';

interface Props {
  title?: string;
}

export const About: React.FC<Props> = () => {
  const imageSrc = [
    '/assets/html-css-js-icon.png',
    '/assets/node-icon.png',
    '/assets/react-icon.png',
    '/assets/express-icon.png',
    '/assets/rest-api-icon.png',
    '/assets/regex-icon.png',
    '/assets/webpack-icon.png',
    '/assets/mongodb-icon.png',
    '/assets/postgresql-icon.png',
  ];

  return (
    <section className="About">
      <div id="about" className="content-placeholder" />
      <h1 className="about-title">Name Anothername</h1>
      <h2 className="about-subtitle">FULL STACK WEB DEVELOPER</h2>
      <section className="about-info">
        <section className="about-info__container">
          <h3>Text about me</h3>
          <p>
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
        </section>
        <section className="about-info__container">
          <h3>Stack</h3>
          <br />
          <div className="about-info__stack">
            {imageSrc.map((item) => (
              <img className="about-info__stack-image" src={item} alt="" />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
