import React from 'react';
import './Projects.scss';

interface Props {
  title?: string;
}

export const Projects: React.FC<Props> = () => {
  return (
    <section className="Projects">
      <div id="projects" className="content-placeholder" />
      Projects
    </section>
  );
};

export default Projects;
