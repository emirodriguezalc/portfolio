import React from 'react';
import './About.scss';

interface Props {
  title?: string;
}

export const About: React.FC<Props> = () => {
  return (
    <section className="About-container">
      <div className="content-placeholder" id="about" />
      <section className="About">
        <h2>Full stack web developer</h2>
      </section>
    </section>
  );
};

export default About;
