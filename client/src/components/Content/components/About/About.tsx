import React from 'react';
import './About.scss';

interface Props {
  title?: string;
}

export const About: React.FC<Props> = () => {
  return (
    <section className="About">
      <h3 className="about-title">Front end focused, full stack experience</h3>
      <p className="about-paragraph">
        I am a full stack developer based in europe, looking for new challenges. Informatics
        engeneering student, and former architecture student.
      </p>
      <p className="about-paragraph">
        I have serious passion for creating intuitive, dynamic user experiences. I know that my
        work can make a difference.
      </p>
      <p className="about-paragraph">(forever) Learning how to write cleaner and more reusable code.</p>
    </section>
  );
};

export default About;
