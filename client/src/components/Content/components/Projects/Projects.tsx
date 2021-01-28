import React from 'react';
import './Projects.scss';
import ProjectBox from './components/projectBox/ProjectBox';

interface Props {
  title?: string;
}

export const Projects: React.FC<Props> = () => {
  const fakeData = [
    {
      mediaSrc: '/assets/projects/hamster-project-1.jpg',
      sourceCodeLink: 'https://github.com/emirodriguezalc/todo-list',
      gifs: 'this is supposed to be a video',
    },
    {
      mediaSrc: '/assets/projects/hamster-project-2.jpg',
      sourceCodeLink: 'https://github.com/emirodriguezalc/dream-car',
      gifs: 'this is supposed to be a video',
    },
    {
      mediaSrc: '/assets/projects/hamster-project-3.jpg',
      sourceCodeLink: 'https://github.com/emirodriguezalc/pokedex',
      gifs: 'this is supposed to be a video',
    },
  ];
  return (
    <section className="Projects">
      <div id="projects" className="content-placeholder" />
      <h1>Projects</h1>
      <section>
        {fakeData.map((e) => (
          <ProjectBox mediaSrc={e.mediaSrc} sourceCodeLink={e.sourceCodeLink} gifs={e.gifs} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
