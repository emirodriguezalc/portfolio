import React from 'react';
import './Projects.scss';

interface Props {
  title?: string;
}

export const Projects: React.FC<Props> = () => {
  return (
    <section className="Projects-container">
      <div className="content-placeholder" id="projects" />
      <section className="Projects">Projects</section>
    </section>
  );
};

export default Projects;
