import React from 'react';
import './Projects.scss';
import ProjectBox from './components/projectBox/ProjectBox';

interface Props {
  title?: string;
}

export const Projects: React.FC<Props> = () => {
  return (
    <section className="Projects">
      <div id="projects" className="content-placeholder" />
      <h1>Projects</h1>
      <section>
        <ProjectBox />
      </section>
    </section>
  );
};

export default Projects;
