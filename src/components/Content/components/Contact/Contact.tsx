import React from 'react';
import './Contact.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="Contact-container">
      <div id="contact" className="content-placeholder" />
      <section className="Contact">Contact</section>
    </section>
  );
};

export default Skills;
