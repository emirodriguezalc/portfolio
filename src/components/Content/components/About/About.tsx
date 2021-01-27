import React from 'react';
import './About.scss';

interface Props {
  title?: string;
}

export const About: React.FC<Props> = () => {
  return (
    <section className="About" id="about">
      <h2>Full stack web developer</h2>
    </section>
  );
};

export default About;
