import React from 'react';
import './Skills.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="Skills" id="skills">
      Skills
    </section>
  );
};

export default Skills;
