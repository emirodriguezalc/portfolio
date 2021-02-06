import React from 'react';
import './Projects.scss';

import ProjectBox from './components/projectBox/ProjectBox';

interface Props {
  title?: string;
}

export const Projects: React.FC<Props> = () => {
  const fakeData = [
    {
      title: 'Simple todo list',
      mediaSrc: '/assets/projects/todo-th.png',
      sourceCodeLink: 'https://github.com/emirodriguezalc/todo-list',
      gifs: '/assets/projects/todo-list-demo.mp4',
    },
    {
      title: 'Find your dream car',
      mediaSrc: '/assets/projects/dream-car-th.png',
      sourceCodeLink: 'https://github.com/emirodriguezalc/dream-car',
      gifs: '/assets/projects/dream-car-demo.mp4',
    },
    {
      title: 'Gay pokedex',
      mediaSrc: '/assets/projects/pokedex-th.png',
      sourceCodeLink: 'https://github.com/emirodriguezalc/pokedex',
      gifs: '/assets/projects/gay-pokedex-demo.mp4',
    },
  ];
  return (
    <section className="Projects">
      <div id="projects" className="content-placeholder" />
      <h1 className="projects-title">Projects</h1>
      <section className="projects-list">
        {fakeData.map((e) => (
          <ProjectBox
            mediaSrc={e.mediaSrc}
            title={e.title}
            sourceCodeLink={e.sourceCodeLink}
            gifs={e.gifs}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
