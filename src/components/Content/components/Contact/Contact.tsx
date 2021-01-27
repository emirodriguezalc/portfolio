import React from 'react';
import './Contact.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="Contact" id="contact">
      Contact
    </section>
  );
};

export default Skills;
