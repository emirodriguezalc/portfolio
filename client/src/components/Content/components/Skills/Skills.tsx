import React from 'react';
import './Skills.scss';

interface Props {
  title?: string;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="Skills">
      <div id="skills" className="content-placeholder" />
      Skills
    </section>
  );
};

export default Skills;
